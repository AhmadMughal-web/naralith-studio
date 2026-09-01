import React from "react";
import { Link } from "react-router-dom";

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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* Intro Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                        Our Expertise
                    </span>
                    <h1 className="mt-3 text-2xl font-bold sm:text-4xl lg:text-5xl text-navy-900 text-center">
                        End-to-End Digital Services Designed to Scale
                    </h1>
                    {/* Heading center rahegi, description text mobile par left se start hoga */}
                    <p className="mt-3 text-xs sm:text-base leading-relaxed text-body text-left sm:text-center">
                        We partner with ambitious businesses and brands to deliver tailored engineering, strategic design, and intelligent digital solutions that drive measurable growth.
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