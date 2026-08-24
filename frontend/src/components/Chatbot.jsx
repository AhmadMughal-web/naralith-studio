import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, User } from "lucide-react";
import RobotIcon from "../pages/RobotIcon";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "Hi there! 👋 Welcome to Naralith Studio. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                sender: "bot",
                text: "Thanks for reaching out! Our backend integration is coming soon. Feel free to explore our services or drop a message via the contact form!",
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
            {/* Smooth Up & Down Float Animation for Outer Floating Trigger */}
            <style>{`
                @keyframes floatAnimation {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-robot-float {
                    animation: floatAnimation 3s ease-in-out infinite;
                }
            `}</style>

            {/* --- 1. Chat Window --- */}
            {isOpen && (
                <div className="mb-4 flex h-[85vh] max-h-[520px] w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 sm:w-[380px]">
                    {/* Header (Still RobotIcon, animated={false}) */}
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

                    {/* Messages Area (Still RobotIcon, animated={false}) */}
                    <div className="flex-1 space-y-3.5 overflow-y-auto bg-slate-50/50 p-4">
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
                                    className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${msg.sender === "user"
                                            ? "rounded-br-none bg-[#EA580C] font-medium text-white shadow-sm"
                                            : "rounded-bl-none border border-slate-200 bg-white text-[#0F172A] shadow-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.sender === "user" && (
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-white text-xs shadow-sm">
                                        <User size={14} />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Form */}
                    <form
                        onSubmit={handleSend}
                        className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask anything..."
                            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#0F172A] focus:bg-white"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F172A] text-white transition-all hover:bg-[#EA580C] disabled:opacity-40 disabled:hover:bg-[#0F172A]"
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
                        {/* Gradient Shadow */}
                        <div className="absolute -bottom-2 -left-2 w-20 h-16 bg-radial from-[#EA580C]/35 via-[#0F172A]/25 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 group-hover:scale-125"></div>

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