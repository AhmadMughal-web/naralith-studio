import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiCreditCard, FiLock, FiChevronDown, FiKey } from "react-icons/fi";

const WHATSAPP_NUMBER = "923249425513";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in an AI Chatbot for my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
    {
        title: "Custom-Trained AI Model",
        desc: "Trained on your actual products, FAQs, and tone of voice — not a generic script that sounds like everyone else's.",
    },
    {
        title: "Website Integration",
        desc: "Embedded directly into your website as a clean, on-brand chat widget — no third-party plugins, no clunky iframes.",
    },
    {
        title: "Seamless Human Handoff",
        desc: "When a conversation needs a real person, the bot hands it off cleanly — no dead ends, no frustrated customers.",
    },
    {
        title: "Analytics Dashboard",
        desc: "See exactly what customers ask most, where the bot struggles, and where you're losing potential leads.",
    },
    {
        title: "Continuous Learning",
        desc: "We refine responses based on real conversations from real customers, not assumptions.",
    },
    {
        title: "Secure & Compliant",
        desc: "Customer data is handled responsibly, with clear data-retention and privacy controls from day one.",
    },
];

const PROCESS = [
    {
        step: "01",
        title: "Discovery Call",
        desc: "We learn your product, common customer questions, and current support workflow — no cost, no obligation.",
    },
    {
        step: "02",
        title: "Bot Training",
        desc: "We build and train the chatbot on your real business content, not a generic template.",
    },
    {
        step: "03",
        title: "Testing & Refinement",
        desc: "We run real conversations through it and refine the responses until it actually sounds like you.",
    },
    {
        step: "04",
        title: "Launch & Monitor",
        desc: "We deploy it live on your website and keep improving it based on how customers actually use it.",
    },
];

const PRICING = [
    {
        tier: "Basic",
        price: "PKR 25,000 – 35,000",
        priceNote: "one-time, no monthly fee",
        delivery: "2–3 working days",
        payment: "50% advance → 50% on launch",
        features: [
            "Rule-based FAQ chatbot (scripted, not AI)",
            "10–15 pre-set FAQs — timings, pricing, delivery, parking",
            "Website widget only",
            "Lead capture form → instant WhatsApp notification",
            "Off-hours auto-reply",
            "English + basic pre-written Urdu replies",
            "50+ test messages before launch",
            "2 revision rounds",
        ],
        popular: false,
        comingSoon: false,
    },
    {
        tier: "Standard",
        price: "PKR 85,000 – 110,000",
        priceNote: "+ PKR 15,000/month management",
        delivery: "5–6 working days",
        payment: "50% advance → 50% on launch, retainer billed monthly in advance",
        features: [
            "Real AI chatbot trained on your own data",
            "English + Urdu + Roman Urdu — natural conversation",
            "Website + WhatsApp Business API, same brain on both",
            "Bot books directly — slot check, calendar entry, confirmation",
            "Lead qualification with structured WhatsApp summary",
            "Human handoff with full chat history + staff dashboard",
            "100+ internal test conversations before you see it",
            "30-day monitoring + unlimited tuning included",
        ],
        popular: true,
        comingSoon: false,
    },
    {
        tier: "Premium",
        price: "PKR 220,000 – 280,000",
        priceNote: "+ PKR 35,000–50,000/month",
        delivery: "12–14 working days",
        payment: "40% advance → 30% core agent live → 30% all channels live",
        features: [
            "Custom RAG-based AI agent with memory",
            "Urdu voice support — bot can answer phone calls",
            "Multi-channel: website + WhatsApp + Instagram + Messenger + phone",
            "Proactive re-engagement + abandoned booking recovery",
            "Upsell logic + sentiment detection with escalation",
            "In-chat payment collection + CRM integration",
            "500+ test conversations across all channels",
            "90-day active optimization included",
        ],
        popular: false,
        comingSoon: true,
    },
];

const FAQS = [
    {
        q: "How will an AI chatbot actually benefit my business?",
        a: "It captures leads you're currently losing outside business hours, and handles the repetitive questions (pricing, timings, delivery area) that eat up your staff's time. Most businesses see 30-50% of enquiries handled by the bot alone — meaning your team spends less time answering the same 10 questions, and no message goes unanswered while you're closed.",
    },
    {
        q: "What makes a chatbot from Naralith worth investing in?",
        a: "We train the bot entirely on your real business content — your menu, prices, policies, and tone — not a generic script. Before it ever reaches a customer, we run 100+ real test conversations to make sure it actually sounds like you and handles edge cases gracefully. And it doesn't stop at launch — 30 days of active monitoring and tuning are included, so the bot keeps improving based on how customers actually use it.",
    },
    {
        q: "Will you need my email password or API keys to set this up?",
        a: "No — we never ask for your passwords. For WhatsApp Business API and any LLM/API keys the bot needs, you can either keep everything under your own account (recommended — you invite us as a team member, and can revoke our access anytime) or let us manage it under our account with transparent pass-through billing, no markup. Either way, nothing is hidden from you.",
    },
    {
        q: "How long does WhatsApp Business API approval take?",
        a: "That's controlled by Meta, not us — usually 2-7 days. We launch your website bot first and add WhatsApp the moment approval comes through, so it never delays your delivery date.",
    },
    {
        q: "Why is Premium marked \"Coming Soon\"?",
        a: "Premium's core feature is a Urdu voice bot that answers phone calls — genuinely difficult work: Urdu speech recognition, latency control, and telephony integration all need specialist expertise we're actively building. Standard already gives you a real AI bot trained on your data, fluent in Roman Urdu, with full booking automation — it covers what most businesses actually need today.",
    },
    {
        q: "Can I add new FAQs or update the bot later?",
        a: "Yes. On Basic you get 5 free additions after launch (PKR 500/question after that). On Standard, updates are included in your monthly retainer — just send us the change and it's live. A full menu or policy overhaul is PKR 8,000 per bulk update, also free within the retainer.",
    },
    {
        q: "What happens to my chat data — is it private?",
        a: "Chat logs live in your own dashboard. We never share customer data or use it for training elsewhere, and we'll sign an NDA on request. Payment details are never stored by the bot — they go through a secure gateway link.",
    },
];

export default function AiChatbotDetail() {
    const [expandedCard, setExpandedCard] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    const toggleExpand = (idx) => {
        setExpandedCard(expandedCard === idx ? null : idx);
    };

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-white">
            {/* Ambient corner glows */}
            <div
                className="corner-glow corner-glow-navy pointer-events-none -right-40 -top-40 z-0 h-[520px] w-[520px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />
            <div
                className="corner-glow corner-glow-orange pointer-events-none -bottom-32 -left-32 z-0 h-[480px] w-[480px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />

            {/* ---------- FIXED HEADER ---------- */}
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                    <Link to="/" className="flex shrink-0 items-center" aria-label="Naralith Studio, home">
                        <img src="/imgs/logo.png" alt="Naralith Studio" className="h-7 w-auto sm:h-9" />
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5">
                            <p className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
                                We don't just build ChatBot — we build{" "}
                                <span className="text-orange-400 font-bold">
                                    Business Growth Engine.
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="btn-primary shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs font-semibold sm:text-sm"
                    >
                        Get in Touch
                    </Link>
                </div>
            </header>

            {/* ---------- HERO SECTION WITH BACKGROUND OVERLAY ---------- */}
            <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-12 pb-16 px-4 sm:px-6 lg:px-10">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 h-full w-full">
                    <img
                        src="/imgs/ai-chatbot.jpg"
                        alt="AI Chatbot Background"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/70" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center mt-6 sm:mt-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] min-[330px]:text-xs font-semibold uppercase tracking-wider text-white mb-4 sm:mb-6">
                        AI Chatbot & Automation
                    </span>

                    <h1 className="font-display text-2xl min-[330px]:text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white max-w-4xl">
                        Your customers get answers instantly —{" "}
                        <span className="text-orange-400">even at 3 AM.</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 max-w-2xl text-xs min-[330px]:text-sm sm:text-lg leading-relaxed text-gray-200">
                        Every unanswered message is a lost sale. We build AI chatbots trained on your business — products, policies, tone — so customers get real answers, instantly, 24/7.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col min-[380px]:flex-row items-center justify-center gap-3.5 w-full max-w-md">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full min-[380px]:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-700"
                        >
                            <FaWhatsapp size={18} className="fill-current" />
                            Chat on WhatsApp
                        </a>

                        <Link
                            to="/contact"
                            className="w-full min-[380px]:w-auto inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-3 text-xs sm:text-sm font-semibold transition-all"
                        >
                            Request a Demo
                        </Link>
                    </div>

                    {/* Bottom Sub-banner Card */}
                    <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 sm:p-5 text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-orange-400">
                            Trained On Your Business
                        </span>
                        <h3 className="mt-1 font-display text-sm sm:text-base font-semibold text-white">
                            Not a Generic Script
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-gray-300 max-w-lg mx-auto">
                            Every response is grounded in your real content — no made-up answers, no awkward hand-offs.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- MAIN CONTENT AREA ---------- */}
            <main className="relative z-10 pb-16 pt-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                    {/* ---------- FEATURES (Compressed Grid + Read More Toggle) ---------- */}
                    <div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                What's included
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                No vague deliverables — here's exactly what you get when you work with us on an AI chatbot.
                            </p>
                        </div>

                        {/* Dynamic Height Grid */}
                        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 items-start">
                            {FEATURES.map((item, idx) => {
                                const isExpanded = expandedCard === idx;

                                return (
                                    <div
                                        key={item.title}
                                        className="glass-card flex flex-col justify-between rounded-2xl p-3.5 sm:p-5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[10px] sm:text-xs font-bold text-navy-700 border border-hairline">
                                                    0{idx + 1}
                                                </span>
                                                <h3 className="font-display text-xs sm:text-base font-semibold text-ink leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p
                                                className={`mt-2 text-[11px] sm:text-xs leading-normal text-body transition-all ${isExpanded ? "" : "line-clamp-2 sm:line-clamp-none"
                                                    }`}
                                            >
                                                {item.desc}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => toggleExpand(idx)}
                                            className="mt-2.5 text-[11px] font-semibold text-navy-700 hover:text-orange-600 sm:hidden text-left focus:outline-none"
                                        >
                                            {isExpanded ? "Show less ↑" : "Read more ↓"}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---------- PRICING ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                Choose your package
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                Transparent pricing, fixed delivery days, written scope — no hidden charges.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 items-start">
                            {PRICING.map((plan) => (
                                <div
                                    key={plan.tier}
                                    className={`relative flex flex-col rounded-2xl p-5 sm:p-6 transition-all duration-300 ${plan.comingSoon
                                        ? "border border-dashed border-slate-300 bg-slate-50/60"
                                        : plan.popular
                                            ? "border-2 border-orange-500/80 bg-navy-900 shadow-xl shadow-orange-500/10 sm:-translate-y-2"
                                            : "border border-navy-900/15 bg-navy-900 shadow-lg shadow-navy-900/10"
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
                                            Most Popular
                                        </span>
                                    )}
                                    {plan.comingSoon && (
                                        <span className="absolute right-3.5 top-3.5 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm border border-slate-200">
                                            <FiLock size={10} />
                                            Coming Soon
                                        </span>
                                    )}

                                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`}>
                                        {plan.tier}
                                    </p>
                                    <p className={`mt-2 font-display text-xl sm:text-2xl font-bold ${plan.comingSoon ? "text-slate-400" : "text-white"}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`mt-1 text-[11px] ${plan.comingSoon ? "text-slate-400" : "text-white/60"}`}>
                                        {plan.priceNote}
                                    </p>

                                    <div className={`mt-4 flex flex-col gap-2 border-t pt-4 ${plan.comingSoon ? "border-slate-200" : "border-white/10"}`}>
                                        <div className="flex items-start gap-2">
                                            <FiClock size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                            <span className={`text-[11px] sm:text-xs ${plan.comingSoon ? "text-slate-400" : "text-white/80"}`}>
                                                {plan.delivery}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <FiCreditCard size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                            <span className={`text-[11px] sm:text-xs ${plan.comingSoon ? "text-slate-400" : "text-white/80"}`}>
                                                {plan.payment}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <FiCheck size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                                <span className={`text-[11px] sm:text-xs leading-relaxed ${plan.comingSoon ? "text-slate-500" : "text-white/85"}`}>
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.comingSoon ? (
                                        <button
                                            disabled
                                            className="mt-6 w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-400 cursor-not-allowed"
                                        >
                                            Join Waitlist Soon
                                        </button>
                                    ) : (
                                        <a
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all hover:scale-105 ${plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-white text-navy-900"
                                                }`}
                                        >
                                            Get Started
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- PROCESS ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                How we work
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                A clear process, start to finish — so you always know what's happening next.
                            </p>
                        </div>

                        <div className="relative mx-auto mt-12 max-w-2xl">
                            <div
                                className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-navy-700/40 via-hairline to-orange-500/40"
                                aria-hidden="true"
                            />
                            {PROCESS.map((item) => (
                                <div key={item.step} className="relative flex gap-6 pb-10 last:pb-0">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-navy-700 shadow-[0_0_0_3px_white]">
                                        <span className="text-gradient">{item.step}</span>
                                    </div>
                                    <div className="pt-1.5">
                                        <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 max-w-md text-xs sm:text-sm leading-relaxed text-body">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* ---------- FAQ ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                Frequently asked questions
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                Straight answers to what clients actually ask before starting.
                            </p>
                        </div>

                        <div className="mx-auto mt-10 max-w-3xl flex flex-col gap-3">
                            {FAQS.map((item, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div
                                        key={item.q}
                                        className="glass-card rounded-2xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left focus:outline-none"
                                        >
                                            <span className="font-display text-xs sm:text-sm font-semibold text-ink">
                                                {item.q}
                                            </span>
                                            <FiChevronDown
                                                size={16}
                                                className={`shrink-0 text-navy-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-[11px] sm:text-xs leading-relaxed text-body">
                                                {item.a}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---------- CTA BANNER (Compressed Height) ---------- */}
                    <div className="btn-primary mt-20 overflow-hidden rounded-3xl px-5 py-6 sm:px-10 sm:py-8 lg:mt-24">
                        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row text-center lg:text-left">
                            <div>
                                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Never Miss Another Question
                                </span>
                                <h2 className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
                                    Ready to put your support on autopilot?
                                </h2>
                                <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                                    Let's build a chatbot that actually knows your business — and gives your customers real answers, any time of day.
                                </p>
                            </div>
                            <div className="flex shrink-0 gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-navy-900 shadow-sm transition-transform hover:scale-105 sm:text-sm"
                                >
                                    <FaWhatsapp size={16} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ---------- BOTTOM ACTION BAR ---------- */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-5">
                        <Link
                            to="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Homepage
                        </Link>

                        <Link
                            to="/services"
                            className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                        >
                            Explore All Services
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}