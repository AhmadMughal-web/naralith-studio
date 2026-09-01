import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, User } from "lucide-react";
import RobotIcon from "../pages/RobotIcon";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Parses **bold** markdown segments out of the bot's reply and renders them
// as bold, navy-orange gradient text — matching the site's brand accents —
// instead of showing literal asterisks or plain black bold.
function FormattedText({ text }) {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    const inner = part.slice(2, -2);
                    return (
                        <span
                            key={i}
                            className="font-bold bg-gradient-to-r from-navy-700 to-orange-500 bg-clip-text text-transparent"
                        >
                            {inner}
                        </span>
                    );
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </>
    );
}

// Splits message text into paragraphs (treats ANY run of blank lines the
// same way) and renders each with a small, fixed, designed gap — so visual
// spacing is controlled by our CSS, not by however many newlines the model
// happened to output. This is what makes spacing consistent permanently.
function MessageContent({ text }) {
    const paragraphs = text.split(/\n\s*\n+/).filter((p) => p.trim() !== "");

    return (
        <div className="space-y-1.5">
            {paragraphs.map((para, i) => (
                <p key={i}>
                    {para.split("\n").map((line, j, arr) => (
                        <React.Fragment key={j}>
                            <FormattedText text={line} />
                            {j < arr.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            ))}
        </div>
    );
}

const WELCOME_TEXT =
    "Hi there! Welcome to **Naralith Studio**. How can I help you today?";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    // Starts empty — the welcome text is shown as a placeholder/empty-state
    // (see below), not as a real chat message. It disappears the moment the
    // first real message is sent, since messages.length becomes > 0.
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen, loading]);

    // Auto-grow the textarea as the user types, up to a max height, then
    // clip further growth instead of showing a native scrollbar.
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                Math.min(textareaRef.current.scrollHeight, 100) + "px";
        }
    }, [input]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || loading) return;

        const userMsg = { id: Date.now(), sender: "user", text: trimmed };
        const nextMessages = [...messages, userMsg];
        setMessages(nextMessages);
        setInput("");
        setLoading(true);

        try {
            // API expects { role: 'user' | 'assistant', content }, our local
            // state uses { sender: 'user' | 'bot', text } — map on the way out.
            const apiMessages = nextMessages.map((m) => ({
                role: m.sender === "user" ? "user" : "assistant",
                content: m.text,
            }));

            const response = await fetch(`${API_URL}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Something went wrong.");
            }

            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, sender: "bot", text: data.reply },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: "Sorry, I couldn't respond right now. Please try again, or reach out via the contact form.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
            {/* Animations: outer float, and the typing-indicator dots */}
            <style>{`
                @keyframes floatAnimation {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-robot-float {
                    animation: floatAnimation 3s ease-in-out infinite;
                }
                @keyframes typingDot {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                    30% { transform: translateY(-4px); opacity: 1; }
                }
                .typing-dot {
                    animation: typingDot 1.2s infinite ease-in-out;
                }
            `}</style>

            {/* --- 1. Chat Window --- */}
            {isOpen && (
                <div className="mb-4 flex h-[85vh] max-h-[520px] w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 sm:w-[380px]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0F172A] px-4 py-3.5 text-white">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-sm p-1">
                                <RobotIcon className="h-full w-full" animated={false} />
                            </div>
                            <div>
                                <h3 className="flex items-center gap-1.5 font-semibold text-sm leading-tight text-white">
                                    Naralith AI <Sparkles size={14} className="text-[#EA580C]" />
                                </h3>
                                <span className="flex items-center gap-1 text-[11px] text-gray-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg p-1.5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label="Close Chat"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4">
                        {messages.length === 0 ? (
                            // Empty-state placeholder — grey, centered, brand name
                            // in gradient. Disappears the instant a real message
                            // exists, like an empty notifications screen.
                            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 p-2 opacity-60 grayscale">
                                    <RobotIcon className="h-full w-full" animated={false} />
                                </div>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    <FormattedText text={WELCOME_TEXT} />
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3.5">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        {msg.sender === "bot" && (
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 border border-orange-200 p-1 shadow-sm">
                                                <RobotIcon className="h-full w-full" animated={false} />
                                            </div>
                                        )}
                                        <div
                                            className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.sender === "user"
                                                ? "rounded-br-none bg-[#EA580C] font-medium text-white shadow-sm"
                                                : "rounded-bl-none border border-slate-200 bg-white text-[#0F172A] shadow-sm"
                                                }`}
                                        >
                                            <MessageContent text={msg.text} />
                                        </div>
                                        {msg.sender === "user" && (
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-white text-xs shadow-sm">
                                                <User size={14} />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {loading && (
                                    <div className="flex items-end justify-start gap-2">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 border border-orange-200 p-1 shadow-sm">
                                            <RobotIcon className="h-full w-full" animated={false} />
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-none border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                            <span
                                                className="typing-dot h-2 w-2 rounded-full bg-[#EA580C]"
                                                style={{ animationDelay: "0s" }}
                                            />
                                            <span
                                                className="typing-dot h-2 w-2 rounded-full bg-[#0F172A]"
                                                style={{ animationDelay: "0.2s" }}
                                            />
                                            <span
                                                className="typing-dot h-2 w-2 rounded-full bg-[#EA580C]"
                                                style={{ animationDelay: "0.4s" }}
                                            />
                                        </div>
                                    </div>
                                )}

                                <div ref={chatEndRef} />
                            </div>
                        )}
                    </div>

                    {/* Input Form */}
                    <form
                        onSubmit={handleSend}
                        className="flex items-end gap-2 border-t border-slate-100 bg-white p-3"
                    >
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask anything..."
                            disabled={loading}
                            rows={1}
                            className="max-h-[100px] flex-1 resize-none overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm leading-relaxed text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#0F172A] focus:bg-white disabled:opacity-60"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || loading}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-white transition-all hover:bg-[#EA580C] disabled:opacity-40 disabled:hover:bg-[#0F172A]"
                        >
                            <Send size={15} />
                        </button>
                    </form>
                </div>
            )}

            {/* --- 2. Floating Toggle Button --- */}
            <div className="relative group cursor-pointer flex flex-col items-end">
                {!isOpen && (
                    <div className="absolute -top-14 right-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-30">
                        <div className="relative flex items-center gap-2.5 bg-[#0F172A] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-700/60 backdrop-blur-md whitespace-nowrap">
                            <span className="flex h-2 w-2 rounded-full bg-[#EA580C] animate-ping" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium leading-none">AI Assistant</span>
                                <span className="font-medium text-white leading-tight mt-0.5">How can we help today?</span>
                            </div>
                            <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-[#0F172A] border-r border-b border-slate-700/60 transform rotate-45"></div>
                        </div>
                    </div>
                )}

                {isOpen ? (
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                        aria-label="Close Chatbot"
                    >
                        <X size={24} />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
                        aria-label="Open Chatbot"
                    >
                        {/* Floating & Fully Animated Icon (`animated={true}`) */}
                        <div className="animate-robot-float">
                            <RobotIcon className="h-24 w-24 z-10 relative" animated={true} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}