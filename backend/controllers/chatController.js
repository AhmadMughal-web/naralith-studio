import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "../data/businessContext.js";

// Groq deprecated llama-3.3-70b-versatile and llama-3.1-8b-instant —
// openai/gpt-oss-120b and openai/gpt-oss-20b are their official replacements.
const PRIMARY_MODEL = "openai/gpt-oss-120b";
const FALLBACK_MODEL = "openai/gpt-oss-20b";

// Some Groq-hosted models emit internal chain-of-thought wrapped in
// <think>...</think> before the real answer. Strip it out as a safety net
// regardless of which model actually runs.
function stripThinkTags(text) {
    if (!text) return text;
    let cleaned = text.replace(/<think>[\s\S]*?<\/think>/gi, "");
    cleaned = cleaned.replace(/<think>[\s\S]*$/i, "");
    return cleaned.trim();
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function callGroq(model, trimmedHistory, signal, { includeReasoningEffort = true } = {}) {
    const body = {
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmedHistory],
        temperature: 0.5,
        max_tokens: 600,
        frequency_penalty: 0.6,
        presence_penalty: 0.4,
    };
    // gpt-oss models spend part of max_tokens on internal reasoning before
    // the visible answer. "low" keeps that overhead small so simple business
    // questions don't eat the whole token budget and leave nothing for the
    // actual reply. Made optional in case a model/SDK version rejects it.
    if (includeReasoningEffort) {
        body.reasoning_effort = "low";
    }
    return groq.chat.completions.create(body, { signal });
}

export async function sendMessage(req, res, next) {
    try {
        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "API Key missing in .env file",
            });
        }

        const { messages } = req.body;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                success: false,
                message: "messages array is required.",
            });
        }

        const trimmedHistory = messages
            .filter((m) => m && typeof m.content === "string" && m.content.trim())
            .slice(-20)
            .map((m) => ({
                role: m.sender === "user" || m.role === "user" ? "user" : "assistant",
                content: m.content.trim(),
            }));

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 25000);

        let chatCompletion;
        try {
            // Try the strong model first — no models.list() call, no
            // looping through every model on the key. One direct request.
            chatCompletion = await callGroq(PRIMARY_MODEL, trimmedHistory, controller.signal);
        } catch (err) {
            console.warn(`[Groq] ${PRIMARY_MODEL} failed (${err.message}), trying fallback…`);
            try {
                chatCompletion = await callGroq(FALLBACK_MODEL, trimmedHistory, controller.signal);
            } catch (err2) {
                console.warn(`[Groq] ${FALLBACK_MODEL} also failed (${err2.message}), retrying without reasoning_effort…`);
                chatCompletion = await callGroq(FALLBACK_MODEL, trimmedHistory, controller.signal, {
                    includeReasoningEffort: false,
                });
            }
        } finally {
            clearTimeout(timeout);
        }

        const reply = stripThinkTags(chatCompletion.choices?.[0]?.message?.content);

        if (!reply) {
            return res.status(502).json({
                success: false,
                message: "The assistant didn't return a usable response. Please try again.",
            });
        }

        return res.status(200).json({ success: true, reply });
    } catch (error) {
        if (error.name === "AbortError") {
            return res.status(504).json({
                success: false,
                message: "The assistant took too long to respond. Please try again.",
            });
        }
        console.error("Groq SDK Final Error:", error);
        next(error);
    }
}