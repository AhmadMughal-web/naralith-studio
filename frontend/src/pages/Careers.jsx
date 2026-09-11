import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiCode,
    FiFeather,
    FiMessageCircle,
    FiPenTool,
    FiTrendingUp,
    FiArrowLeft,
    FiArrowRight,
    FiMail,
    FiUsers,
} from "react-icons/fi";

const ROLES = [
    {
        slug: "web-development",
        title: "Web Development",
        Icon: FiCode,
        desc: "React, Next.js, Node.js — building fast, production-grade web applications for real clients.",
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        Icon: FiPenTool,
        desc: "Figma-based product design, wireframing, and interface systems that guide real user behavior.",
    },
    {
        slug: "ai-chatbot-automation",
        title: "AI Chatbot & Automation",
        Icon: FiMessageCircle,
        desc: "Building and training conversational AI, integrating agentic workflows into client products.",
    },
    {
        slug: "graphic-design",
        title: "Graphic Design",
        Icon: FiFeather,
        desc: "Brand identity, visual systems, and marketing assets for growing businesses.",
    },
    {
        slug: "digital-growth-seo",
        title: "Digital Growth & SEO",
        Icon: FiTrendingUp,
        desc: "Technical SEO, conversion optimization, and data-driven growth strategy.",
    },
];

export default function Careers() {
    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>Careers — Naralith Studio | Join Our Team</title>
                <meta
                    name="description"
                    content="Naralith Studio's core team is full right now, but we're always looking to meet talented, hungry developers and designers for future opportunities."
                />
                <link rel="canonical" href="https://naralithstudio.com/careers" />
            </Helmet>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* 1. HERO */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
                        <FiUsers className="h-3.5 w-3.5 text-orange-600" />
                        Careers at Naralith Studio
                    </span>
                    <h1 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink">
                        Our team is full right now —{" "}
                        <span className="text-gradient">but we're always hunting for hungry talent.</span>
                    </h1>
                    <p className="mt-4 text-xs sm:text-base leading-relaxed text-body">
                        We're not actively hiring for a specific role today. But if you're a sharp,
                        driven professional who genuinely loves the craft — someone who'd push our
                        standard higher, not just fill a seat — we want to know you exist before we
                        need you.
                    </p>
                </div>

                {/* 2. ROLES WE HIRE FOR — ROW LAYOUT */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink text-center mb-8">
                        Areas we hire for
                    </h2>
                    <div className="flex flex-col gap-4">
                        {ROLES.map((role) => {
                            const { Icon } = role;
                            return (
                                <div
                                    key={role.title}
                                    className="glass-card flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700/10 text-navy-700">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                                                {role.title}
                                            </h3>
                                            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-body max-w-xl">
                                                {role.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/careers/apply/${role.slug}`}
                                        className="btn-primary group flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold w-full sm:w-auto"
                                    >
                                        Apply
                                        <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. ALTERNATIVE CONTACT */}
                <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
                    <p className="text-xs sm:text-sm text-body">
                        Not sure which role fits? Reach out directly at{" "}
                        <a
                            href="mailto:naralithstudio@gmail.com"
                            className="inline-flex items-center gap-1 font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                        >
                            <FiMail size={13} />
                            naralithstudio@gmail.com
                        </a>
                    </p>
                </div>

                {/* 4. BOTTOM ACTION BAR */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-5">
                    <Link
                        to="/"
                        className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                    >
                        <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <Link
                        to="/about"
                        className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                    >
                        Meet Our Team
                    </Link>
                </div>

            </div>
        </div>
    );
}