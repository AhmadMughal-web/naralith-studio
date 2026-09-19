import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SERVICES = [
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        role: "User Experience & Interface",
        description: "Creating intuitive, user-centered digital interfaces, wireframes, and prototypes that maximize engagement and seamless conversions.",
        image: "/imgs/ui-ux.jpg"
    },
    {
        id: "web-development",
        title: "Web Development",
        role: "Full-Stack Web Engineering",
        description: "Building fast, high-performance web applications and responsive sites using modern frameworks like React, Node.js, and Tailwind CSS.",
        image: "/imgs/web-dev.jpg"
    },
    {
        id: "ai-chatbot",
        title: "AI Chatbot",
        role: "AI & Automation Solutions",
        description: "Integrating smart conversational AI models and custom automated support agent workflows to scale customer operations 24/7.",
        image: "/imgs/ai-chatbot.jpg"
    },
    {
        id: "graphic-design",
        title: "Graphic Design",
        role: "Visual Identity & Branding",
        description: "Crafting impactful brand identities, marketing assets, vector illustrations, and visual systems that elevate market presence.",
        image: "/imgs/graphic-design.jpg"
    },
    {
        id: "digital-growth",
        title: "Digital Growth",
        role: "SEO & Growth Marketing",
        description: "Data-driven marketing strategies, conversion rate optimization (CRO), and technical SEO to scale your digital reach and revenue.",
        image: "/imgs/digital-growth.jpg"
    }
];

export default function Services() {
    return (
        /* Top padding updated to pt-28 sm:pt-36 to clear sticky Navbar */
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">

            <Helmet>
                <title> Naralith Studio — Our Services | Web, AI, UI/UX & Graphic Design</title>
                <meta
                    name="description"
                    content="Explore Naralith Studio's services — custom web development, UI/UX design, AI chatbot integration, graphic design & branding, and SEO growth marketing."
                />
                <meta
                    name="keywords"
                    content="web development services, UI UX design services, AI chatbot integration, graphic design services, SEO growth marketing"
                />
                <link rel="canonical" href="https://naralithstudio.com/services" />
            </Helmet>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* Intro Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600 border border-orange-500/20">
                        Our Expertise
                    </span>
                    <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-navy-900 text-center leading-tight">
                        End-to-End Digital Services Designed to Scale
                    </h1>
                    <p className="mt-4 text-xs sm:text-base leading-relaxed text-body text-left sm:text-center max-w-2xl mx-auto">
                        We partner with ambitious businesses and brands to deliver tailored engineering, strategic design, and intelligent digital solutions that drive measurable growth.
                    </p>
                </div>

                {/* Tier Structure Cards */}
                <div className="mt-10 sm:mt-14 mx-auto max-w-5xl px-2">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6 items-stretch">

                        {/* Basic */}
                        <div className="group relative flex flex-col justify-between rounded-2xl border border-navy-900/15 bg-navy-900 p-6 sm:p-7 text-center shadow-lg shadow-navy-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange-400/40">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                                    Tier 01
                                </p>
                                <p className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-wide text-white">
                                    Basic
                                </p>
                                <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            </div>
                            <p className="mt-6 text-xs sm:text-sm font-medium text-white/70 tracking-wide">
                                Get started fast
                            </p>
                        </div>

                        {/* Standard - Featured */}
                        <div className="group relative flex flex-col justify-between rounded-2xl border-2 border-orange-500/80 bg-navy-900 p-6 sm:p-7 text-center shadow-xl shadow-orange-500/10 sm:-translate-y-2 sm:scale-105 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-500/20">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
                                Popular Choice
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                                    Tier 02
                                </p>
                                <p className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-wide text-white">
                                    Standard
                                </p>
                                <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                            </div>
                            <p className="mt-6 text-xs sm:text-sm font-semibold text-orange-200 tracking-wide">
                                Full-scope delivery
                            </p>
                        </div>

                        {/* Premium — Coming Soon */}
                        <div className="relative flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 sm:p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-slate-400">
                            <span className="absolute left-3.5 top-3.5 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm border border-slate-200">
                                Coming Soon
                            </span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    Tier 03
                                </p>
                                <p className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-wide text-slate-400">
                                    Premium
                                </p>
                                <div className="mx-auto mt-4 h-px w-10 bg-slate-200" />
                            </div>
                            <p className="mt-6 text-xs sm:text-sm font-medium text-slate-400 tracking-wide">
                                Launching soon
                            </p>
                        </div>

                    </div>

                    <p className="mt-8 sm:mt-10 text-xs sm:text-sm leading-relaxed text-body text-center max-w-2xl mx-auto">
                        Every service is structured across three tiers — engineered to match businesses at
                        different stages of growth. Full scope, deliverables, and timelines for each package
                        are outlined on the individual service page — tap <strong className="text-navy-900 font-semibold">More Details</strong> below to explore.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline/80 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-xl"
                        >
                            <div>
                                <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                                </div>

                                <div className="mt-4 sm:mt-5 text-left">
                                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600">
                                        {service.role}
                                    </span>
                                    <h2 className="mt-1 text-lg sm:text-xl font-bold text-navy-900">
                                        {service.title}
                                    </h2>
                                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body text-left">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 pt-3 border-t border-hairline">
                                <Link
                                    to={`/${service.id}`}
                                    className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-navy-900 transition-colors duration-200 hover:bg-orange-500 hover:text-white"
                                >
                                    More Details
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🌟 COMPACT ROW-STYLED BOTTOM CTA SECTION */}
                <div className="mt-12 sm:mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-hairline bg-gradient-to-br from-navy-900 via-navy-700 to-slate-900 p-5 sm:p-8 lg:p-10 shadow-xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left Content */}
                        <div className="max-w-2xl text-left">
                            <span className="inline-block rounded-full bg-orange-500/20 px-3 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider text-orange-400 uppercase">
                                Custom Requirements?
                            </span>
                            <h2 className="mt-2 text-xl font-bold text-white sm:text-3xl">
                                Need a Custom Solution Suited Specifically to Your Business?
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                                We construct specialized digital infrastructures tailored for your growth—from AI agent workflows to enterprise-grade web applications.
                            </p>
                        </div>

                        {/* Right Action Row (Stats + Button in single Row on mobile) */}
                        <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 border-t border-white/10 pt-4 lg:border-t-0 lg:pt-0 shrink-0">

                            {/* Quick Stats */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="border-l-2 border-orange-500 pl-2.5 sm:pl-3 text-left">
                                    <p className="text-sm sm:text-lg font-bold text-white leading-none">99%</p>
                                    <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Satisfaction</p>
                                </div>
                                <div className="border-l-2 border-orange-500 pl-2.5 sm:pl-3 text-left">
                                    <p className="text-sm sm:text-lg font-bold text-white leading-none">24/7</p>
                                    <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Support</p>
                                </div>
                            </div>

                            {/* Consultation Button */}
                            <Link
                                to="/contact"
                                className="btn-primary shrink-0 rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                            >
                                Consultation →
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}