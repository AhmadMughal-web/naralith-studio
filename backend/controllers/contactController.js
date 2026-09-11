import { resend } from "../config/resend.js";

export const sendContactMessage = async (req, res, next) => {
    try {
        const { name, email, message, service } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and message are required.",
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Naralith Studio <onboarding@resend.dev>",
            to: "naralithstudio@gmail.com",
            subject: `New Inquiry — ${service || "General"}`,
            html: `
                <h2>New Project Inquiry</h2>
                <p><strong>Service:</strong> ${service || "Not specified"}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            reply_to: email,
        });

        // YE ZAROORI HAI — Resend error ko explicitly check karo
        if (error) {
            console.error("RESEND API ERROR:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to send email.",
            });
        }

        console.log("Email sent successfully:", data);

        return res.status(200).json({
            success: true,
            message: "Message received! We will get back to you soon.",
        });
    } catch (error) {
        console.error("SERVER ERROR:", error);
        next(error);
    }
};