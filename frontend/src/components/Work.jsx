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
        /* Top padding increased to pt-28 (112px) on mobile & pt-36 (144px) on desktop to clear Navbar */
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* Header Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Selected Works
                    </span>
                    <h1 className="mt-3 text-2xl font-bold sm:text-4xl lg:text-5xl text-navy-900">
                        Crafting Digital Solutions for Modern Brands
                    </h1>
                    <p className="mt-3 text-xs sm:text-base leading-relaxed text-body">
                        We engineer high-performance web applications, custom SaaS platforms, and enterprise-grade full-stack digital solutions.
                    </p>
                </div>

                {/* Project List */}
                <div className="mt-8 sm:mt-12 flex flex-col divide-y divide-hairline rounded-2xl border border-hairline bg-white/70 backdrop-blur-md shadow-sm overflow-hidden">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col items-center p-5 text-center transition-all duration-200 hover:bg-slate-50/90 sm:p-6 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                        >
                            {/* Left Column: Project Details */}
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600">
                                    {project.category}
                                </span>
                                <h2 className="mt-0.5 text-base sm:text-lg font-bold text-navy-900">
                                    {project.title}
                                </h2>
                                <p className="mt-1 text-xs text-body max-w-3xl">
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-1.5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-slate-600 transition-colors duration-200 group-hover:bg-orange-500/10 group-hover:text-orange-600 border border-transparent group-hover:border-orange-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Center-Aligned Button for Mobile / Right-Aligned for Desktop */}
                            <div className="mt-4 sm:mt-0 flex shrink-0 justify-center items-center w-full sm:w-auto">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex justify-center items-center gap-1.5 rounded-full px-6 py-2 sm:px-4 sm:py-2 text-xs font-semibold shadow-sm transition-transform group-hover:scale-105 w-full sm:w-auto max-w-[220px]"
                                >
                                    Live Preview
                                    <svg
                                        className="h-3.5 w-3.5"
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

                {/* Bottom Call-to-Action Section */}
                <div className="mt-8 sm:mt-12 rounded-2xl border border-hairline bg-gradient-to-r from-navy-900 via-navy-700 to-slate-900 p-5 sm:p-6 shadow-lg">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                        <div>
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-orange-400">
                                Have a Project in Mind?
                            </span>
                            <h2 className="mt-0.5 text-base sm:text-lg font-bold text-white">
                                Let’s Build Something Extraordinary Together
                            </h2>
                        </div>
                        <div className="flex shrink-0 items-center justify-center">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto text-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
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