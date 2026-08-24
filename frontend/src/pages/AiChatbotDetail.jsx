import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923000000000"; // replace with your real number
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
        title: "Discovery Call",
        desc: "We learn your product, common customer questions, and current support workflow — no cost, no obligation.",
    },
    {
        title: "Bot Training",
        desc: "We build and train the chatbot on your real business content, not a generic template.",
    },
    {
        title: "Testing & Refinement",
        desc: "We run real conversations through it and refine the responses until it actually sounds like you.",
    },
    {
        title: "Launch & Monitor",
        desc: "We deploy it live on your website and keep improving it based on how customers actually use it.",
    },
];

export default function AiChatbotDetail() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Ambient corner glows — consistent with the rest of the site */}
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
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-white/85 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
                    <Link to="/" className="flex shrink-0 items-center" aria-label="Naralith Studio, home">
                        <img src="/imgs/logo.png" alt="Naralith Studio" className="h-8 w-auto sm:h-9" />
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-4 py-1.5">
                            <p className="whitespace-nowrap text-xs font-semibold text-ink sm:text-sm">
                                We don't just build ChatBot — we build {" "}
                                <span className="text-gradient font-bold">
                                    Business Growth Engine.
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="btn-primary shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm"
                    >
                        Get in Touch
                    </Link>
                </div>
            </header>

            <main className="relative z-10 pb-16 pt-32 lg:pt-36">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    {/* ---------- HERO ---------- */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                                AI Chatbot & Automation
                            </span>

                            <h1 className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                                Answer your customers instantly, day or night —{" "}
                                <span className="text-gradient">without growing your support team.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                                Every question that goes unanswered after hours is a missed
                                sale or a frustrated customer. We build AI chatbots trained
                                on your actual business — products, policies, and tone — so
                                customers get real answers immediately, and your team only
                                steps in when it truly matters.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>

                                <Link
                                    to="/contact"
                                    className="btn-secondary rounded-full px-7 py-3.5 text-sm font-semibold"
                                >
                                    Request a Demo
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="glass-card overflow-hidden rounded-3xl p-6">
                                <img
                                    src="/imgs/ai-chatbot.jpg"
                                    alt="AI chatbot conversation interface built by Naralith Studio"
                                    width="640"
                                    height="360"
                                    className="h-56 w-full rounded-2xl object-cover"
                                    loading="eager"
                                />
                                <div className="mt-6 text-center">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                                        Trained On Your Business
                                    </span>
                                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                                        Not a Generic Script
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-body">
                                        Every response is grounded in your real content — no
                                        made-up answers, no awkward hand-offs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- WHAT'S INCLUDED (glass-card grid) ---------- */}
                    <div className="mt-24 lg:mt-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                What's included
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                                No vague deliverables — here's exactly what you get when you
                                work with us on an AI chatbot.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {FEATURES.map((item, idx) => (
                                <div key={item.title} className="glass-card rounded-2xl p-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-sm font-semibold text-navy-700">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-body">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- HOW WE WORK (vertical connected timeline — deliberately
              different from the card grid above) ---------- */}
                    <div className="mt-24 lg:mt-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                How we work
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                                A clear process, start to finish — so you always know what's
                                happening next.
                            </p>
                        </div>

                        <div className="relative mx-auto mt-14 max-w-2xl">
                            <div
                                className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-navy-700/40 via-hairline to-orange-500/40"
                                aria-hidden="true"
                            />
                            {PROCESS.map((item, idx) => (
                                <div key={item.title} className="relative flex gap-6 pb-12 last:pb-0">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-navy-700 shadow-[0_0_0_3px_white]">
                                        <span className="text-gradient">{idx + 1}</span>
                                    </div>
                                    <div className="pt-1.5">
                                        <h3 className="font-display text-lg font-semibold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-body">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- CTA BANNER ---------- */}
                    <div className="btn-primary mt-24 overflow-hidden rounded-3xl p-8 sm:p-12 lg:mt-28">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Never Miss Another Question
                                </span>
                                <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                                    Ready to put your support on autopilot?
                                </h2>
                                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                                    Let's build a chatbot that actually knows your business —
                                    and gives your customers real answers, any time of day.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-transform hover:scale-105"
                                >
                                    <FaWhatsapp size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ---------- BOTTOM ACTION BAR (acts as this page's footer) ---------- */}
                    <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-6">
                        <Link
                            to="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Homepage
                        </Link>

                        <Link
                            to="/services"
                            className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                        >
                            Explore All Services
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </main >
        </div >
    );
}