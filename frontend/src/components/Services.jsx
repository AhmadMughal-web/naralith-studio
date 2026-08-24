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
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Intro Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                        Our Expertise
                    </span>
                    <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-navy-900">
                        End-to-End Digital Services Designed to Scale
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                        We partner with ambitious businesses and brands to deliver tailored engineering, strategic design, and intelligent digital solutions that drive measurable growth.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline/80 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-xl"
                        >
                            <div>
                                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                                </div>

                                <div className="mt-5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                        {service.role}
                                    </span>
                                    <h2 className="mt-1 text-xl font-bold text-navy-900">
                                        {service.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-relaxed text-body">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-hairline">

                                {/* Pehle to={`/services/${service.id}`} tha, isko ab simple dynamic path karein: */}
                                <Link
                                    to={`/${service.id}`}
                                    className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:bg-orange-500 hover:text-white"
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

                {/* 🌟 NEW BOTTOM CTA & QUICK FACTS SECTION */}
                <div className="mt-20 overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-navy-900 via-navy-700 to-slate-900 p-8 shadow-xl sm:p-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7">
                            <span className="inline-block rounded-full bg-orange-500/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-orange-400 uppercase">
                                Custom Requirements?
                            </span>
                            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                                Need a Custom Solution Suited specifically to Your Business?
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                We don't just build generic websites; we construct specialized digital infrastructures. Whether you need a combination of AI Chatbots, Full-stack web apps, or re-branding, we’ve got you covered.
                            </p>
                        </div>

                        {/* Right Action Button & Highlights */}
                        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end">
                            <div className="grid grid-cols-2 gap-4 text-left text-white/90">
                                <div className="border-l-2 border-orange-500 pl-3">
                                    <p className="text-xl font-bold text-white">99%</p>
                                    <p className="text-xs text-slate-400">Client Satisfaction</p>
                                </div>
                                <div className="border-l-2 border-orange-500 pl-3">
                                    <p className="text-xl font-bold text-white">24/7</p>
                                    <p className="text-xs text-slate-400">Dedicated Support</p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="btn-primary rounded-full bg-orange-500 hover:bg-orange-600 px-7 py-3 text-sm font-semibold shadow-md transition-transform hover:scale-105"
                            >
                                Get a Free Consultation →
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}