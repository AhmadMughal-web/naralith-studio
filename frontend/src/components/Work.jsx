import React from "react";
import { Link } from "react-router-dom";

const PROJECTS = [
    {
        id: 1,
        title: "PharmaCare Health Portal",
        category: "E-Commerce / Health",
        description: "Full-stack prescription ordering system with automated inventory management and live order tracking.",
        tech: ["React", "Node.js", "Tailwind CSS"],
        liveUrl: "https://example.com"
    },
    {
        id: 2,
        title: "AI Support Hub",
        category: "SaaS / AI Integration",
        description: "Automated customer service workspace with integrated LLM response flows and live analytics dashboard.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://example.com"
    },
    {
        id: 3,
        title: "FinFlow Analytics",
        category: "Fintech Dashboard",
        description: "Real-time revenue monitoring platform featuring custom financial reports and dynamic SVG charts.",
        tech: ["Next.js", "Tailwind CSS", "Chart.js"],
        liveUrl: "https://example.com"
    },
    {
        id: 4,
        title: "LuxeStay Hospitality",
        category: "Web Application",
        description: "Boutique hotel booking engine complete with interactive room previews and instant Stripe checkout.",
        tech: ["React", "REST API", "Tailwind CSS"],
        liveUrl: "https://example.com"
    },
    {
        id: 5,
        title: "Apex Logistics",
        category: "Enterprise System",
        description: "Fleet tracking & management suite optimizing real-time route assignment for regional logistics.",
        tech: ["React", "Node.js", "Express"],
        liveUrl: "https://example.com"
    },
    {
        id: 6,
        title: "UrbanSpace Real Estate",
        category: "Property Marketplace",
        description: "High-performance property listing platform with advanced filtering and agent inquiry routing.",
        tech: ["React", "Tailwind CSS", "Firebase"],
        liveUrl: "https://example.com"
    },
    {
        id: 7,
        title: "EduPulse Learning",
        category: "EdTech Platform",
        description: "Interactive learning platform with video modules, quiz assessments, and student progress tracking.",
        tech: ["React", "Redux", "Tailwind CSS"],
        liveUrl: "https://example.com"
    },
    {
        id: 8,
        title: "Nova Creative Portfolio",
        category: "Agency Portfolio",
        description: "Ultra-fast portfolio site featuring fluid animations, page transitions, and responsive dynamic layouts.",
        tech: ["React", "Framer Motion", "Tailwind CSS"],
        liveUrl: "https://example.com"
    },
    {
        id: 9,
        title: "FitPulse Gym Platform",
        category: "Fitness & Wellness",
        description: "Client membership portal with dynamic class scheduling and personal trainer booking systems.",
        tech: ["React", "Tailwind CSS", "MongoDB"],
        liveUrl: "https://example.com"
    },
    {
        id: 10,
        title: "CloudVault Storage",
        category: "SaaS Application",
        description: "Secure cloud asset management app with encrypted file sharing and real-time user permissions.",
        tech: ["React", "Node.js", "Tailwind CSS"],
        liveUrl: "https://example.com"
    }
];

export default function Work() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Header Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
                        Selected Works
                    </p>
                    <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-navy-900">
                        Crafting Digital Solutions for Modern Brands
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                        We engineer high-performance web applications, custom SaaS platforms, and enterprise-grade full-stack digital solutions. Explore our featured client projects below:
                    </p>
                </div>

                {/* Row-wise Projects List */}
                <div className="mt-16 flex flex-col divide-y divide-hairline rounded-2xl border border-hairline bg-white/70 backdrop-blur-md shadow-sm">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col gap-6 p-6 transition-all duration-200 hover:bg-slate-50/90 md:flex-row md:items-center md:justify-between lg:px-8"
                        >
                            {/* Left Column: Details */}
                            <div className="max-w-2xl">
                                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                    {project.category}
                                </span>
                                <h2 className="mt-1 text-xl font-bold text-navy-900">
                                    {project.title}
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-body">
                                    {project.description}
                                </p>

                                {/* Tech Stack Badges (Orange Highlight on Row Hover) */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-200 group-hover:bg-orange-500/10 group-hover:text-orange-600 border border-transparent group-hover:border-orange-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Live Link Button */}
                            <div className="flex shrink-0 items-center">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform group-hover:scale-105"
                                >
                                    Live Preview
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call-to-Action Section (Compact Height) */}
                <div className="mt-12 rounded-2xl border border-hairline bg-gradient-to-r from-navy-900 via-navy-700 to-slate-900 px-6 py-6 sm:px-8 shadow-lg">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                        {/* Left: Text Info */}
                        <div className="max-w-xl">
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                                Have a Project in Mind?
                            </span>
                            <h2 className="mt-1 text-lg sm:text-xl font-bold text-white">
                                Let’s Build Something Extraordinary Together
                            </h2>
                            <p className="mt-1 text-xs sm:text-sm text-slate-300">
                                Ready for a custom web app or digital transformation? Let's bring your vision to life.
                            </p>
                        </div>

                        {/* Right: CTA Button */}
                        <div className="flex shrink-0 items-center">
                            <Link
                                to="/contact"
                                className="rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                            >
                                Start a Project →
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}