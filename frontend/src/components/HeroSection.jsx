import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, CheckCircle2, Heart, Clock } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { Helmet } from "react-helmet-async";
import { FiCompass, FiZap, FiMessageCircle, FiFeather, FiSearch } from "react-icons/fi";

// Module level memory (Website reload hone par reset hoga, navigation par reset nahi hoga)
const animatedTracker = new Set();

function Counter({ target, duration = 2000, isVisible }) {
    const isAlreadyDone = animatedTracker.has(target);
    const [count, setCount] = useState(() => {
        return isAlreadyDone ? parseInt(target, 10) : 0;
    });

    useEffect(() => {
        // Agar pehle chala hua hai ya container viewport mein nahi aya to skip karein
        if (!isVisible || animatedTracker.has(target)) return;

        // Tracker mein mark kar dein taake dobara na chale
        animatedTracker.add(target);

        const numericTarget = parseInt(target, 10);
        if (isNaN(numericTarget)) return;

        let start = 0;
        const totalSteps = duration / 16;
        const increment = numericTarget / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) {
                setCount(numericTarget);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    const suffix = target.replace(/[0-9]/g, "");

    return <span>{count}{suffix}</span>;
}

// --- Reveal Wrapper ---
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
    const { ref, isVisible } = useReveal();
    return (
        <Tag
            ref={ref}
            className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </Tag>
    );
}

// --- Data Lists ---
const projects = [
    {
        id: 1,
        title: "E-Commerce Web App",
        tag: "Web Development",
        blurb: "A fast MERN stack e-commerce store with seamless checkout.",
        image: "/imgs/project1.jpg",
        link: "/work",
    },
    {
        id: 2,
        title: "Brand Identity & UI",
        tag: "Graphic Design",
        blurb: "Complete visual identity and UI design system for a tech startup.",
        image: "/imgs/project2.jpg",
        link: "/work",
    },
    {
        id: 3,
        title: "AI Chatbot Platform",
        tag: "AI Solutions",
        blurb: "Smart AI integration for automated customer support.",
        image: "/imgs/project3.jpg",
        link: "/work",
    },
];


const STATS = [
    { label: "Team Members", value: "5+", Icon: Users },
    { label: "Projects Delivered", value: "20+", Icon: CheckCircle2 },
    { label: "Happy Clients", value: "10+", Icon: Heart },
    { label: "Years Experience", value: "4+", Icon: Clock },
];

const MARKET_ISSUES = [
    {
        problemTitle: "Confusing User Experience",
        problemTag: "Low Conversion",
        problem: "Cluttered layouts and unclear navigation make visitors leave within seconds, before they even see what you offer.",
        solutionTitle: "User-Centered UI/UX Design",
        solution: "Intuitive interfaces and clear user flows designed to guide visitors and turn them into paying customers.",
        Icon: FiCompass,
    },
    {
        problemTitle: "Outdated, Slow Platforms",
        problemTag: "High Bounce Rates",
        problem: "Slow load times and broken mobile layouts push visitors away before your website even finishes loading.",
        solutionTitle: "High-Performance Development",
        solution: "Fast, modern web apps built with React and Tailwind CSS that load instantly and work on every device.",
        Icon: FiZap,
    },
    {
        problemTitle: "Overwhelmed Support Teams",
        problemTag: "Slow Response",
        problem: "Delayed replies to client messages mean lost leads and orders cancelled before anyone even sees them.",
        solutionTitle: "AI Chatbot & Automation",
        solution: "Smart AI chatbots that respond in 2-3 seconds, around the clock, so no client message goes unanswered.",
        Icon: FiMessageCircle,
    },
    {
        problemTitle: "Weak, Inconsistent Branding",
        problemTag: "Low Trust",
        problem: "Mismatched logos and colors across platforms make your business look unreliable to new customers.",
        solutionTitle: "Brand Identity & Design",
        solution: "Consistent visual identity, assets, and design systems that build trust and elevate market presence.",
        Icon: FiFeather,
    },
    {
        problemTitle: "Invisible on Search Engines",
        problemTag: "No Organic Traffic",
        problem: "Your business is nowhere to be found on Google, while competitors rank right at the top instead.",
        solutionTitle: "SEO & Growth Marketing",
        solution: "Technical SEO and data-driven strategies that get you found and turn searches into real revenue.",
        Icon: FiSearch,
    },
];

// --- Helper Components ---
function StatCard({ stat, index }) {
    const { Icon } = stat;
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`glass-card rounded-2xl p-4 sm:p-6 text-center sm:text-left reveal ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
        >
            <div className="mx-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/70 text-navy-700 sm:mx-0">
                <Icon size={22} strokeWidth={1.8} />
            </div>
            <div className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl font-semibold text-gradient">
                <Counter target={stat.value} isVisible={isVisible} />
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-muted">{stat.label}</div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    return (
        <Reveal delay={index * 90} className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4 sm:mb-5 h-40 sm:h-44 w-full overflow-hidden rounded-xl bg-gray-100/50">
                <img
                    src={project.image || "/imgs/project-placeholder.jpg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                {project.tag}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{project.blurb}</p>

            <Link
                to={project.link}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-orange-600"
            >
                View Project Detail
                <span aria-hidden="true">→</span>
            </Link>
        </Reveal>
    );
}

// --- Main Hero Page Component ---
export default function HeroSection() {

    return (
        <div className="relative overflow-hidden">

            <Helmet>
                <title>Naralith Studio — Home</title>
                <meta
                    name="description"
                    content="Naralith Studio builds fast, secure, production-grade web & mobile apps — React, Next.js, Node.js, Python, React Native — plus graphic design & brand identity."
                />
                <meta
                    name="keywords"
                    content="custom web application development, web development agency, AI chatbot development, UI UX design agency, brand identity design"
                />
                <link rel="canonical" href="https://naralithstudio.com/" />
            </Helmet>

            {/* 1. HERO SECTION (Top Spacing Adjusted with pt-28/pt-36 to avoid overlapping header) */}
            <section className="relative pt-28 sm:pt-32 lg:pt-36">
                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-6 lg:px-10">

                    {/* Left Column Text Content */}
                    <div className="order-1 max-w-xl pb-6 sm:pb-10 lg:order-1 lg:col-span-7 lg:pb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                            Naralith Studio
                        </span>

                        <h1 className="mt-5 sm:mt-7 font-display text-3xl sm:text-5xl font-medium leading-[1.15] tracking-tight text-ink">
                            We design and build web products your customers{" "}
                            <span className="text-gradient">actually rely on.</span>
                        </h1>

                        <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-lg leading-relaxed text-body">
                            Naralith Studio delivers end-to-end graphic design and high-performance web development — from initial design concepts to live production.
                        </p>

                        <div className="mt-8 sm:mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                            <Link
                                to="/contact"
                                className="btn-primary rounded-full px-7 py-3.5 text-center text-sm font-semibold"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                to="/work"
                                className="btn-secondary rounded-full px-7 py-3.5 text-center text-sm font-semibold"
                            >
                                See Our Work
                            </Link>
                        </div>

                        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-muted">
                            <span className="font-semibold text-ink">5+</span> engineers &amp; designers
                            <span aria-hidden="true">•</span>
                            <span className="font-semibold text-ink">10+</span> products delivered
                            <span aria-hidden="true">•</span>
                            <span className="font-semibold text-ink">2+ years</span> in production
                        </div>
                    </div>

                    {/* Right Column Illustration Image */}
                    <div className="order-2 lg:order-2 lg:col-span-5 lg:self-end">
                        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none lg:w-[135%] lg:-ml-[20%] lg:-mb-1">
                            <img
                                src="/imgs/illustration.png"
                                alt="Illustration of developers building web application"
                                width="868"
                                height="612"
                                className="h-auto w-full object-contain object-bottom pointer-events-none drop-shadow-sm"
                                loading="eager"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* MARKET PROBLEMS x SOLUTIONS SECTION */}
            <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 lg:px-10 lg:py-24">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        The Reality of Building Online
                    </span>
                    <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
                        We know exactly where <span className="text-gradient">businesses get stuck.</span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-body">
                        Five problems we see constantly — and exactly how we solve each one.
                    </p>
                </Reveal>

                <div className="relative mt-10 sm:mt-16">
                    {/* Center vertical line — visible on all screens */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/10" />

                    <div className="flex flex-col gap-8 sm:gap-12">
                        {MARKET_ISSUES.map((item, index) => {                            const { Icon } = item;
                            return (
                                <Reveal
                                    key={index}
                                    delay={index * 90}
                                    className="relative grid grid-cols-2 items-start gap-3 sm:gap-8"
                                >
                                    {/* Center numbered node */}
                                    <div className="absolute left-1/2 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#fdfbf9] bg-orange-500 text-white shadow-md sm:h-8 sm:w-8 sm:border-4">
                                        <span className="text-[8px] font-bold sm:text-[10px]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Problem Side */}
                                    <div className="pr-2 pt-8 sm:pr-10 sm:pt-0">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-500/10 text-red-500 sm:h-8 sm:w-8 sm:rounded-lg">
                                                <Icon size={13} className="sm:hidden" />
                                                <Icon size={16} className="hidden sm:block" />
                                            </span>
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-red-500/80 sm:text-[11px]">
                                                The Problem
                                            </span>
                                        </div>
                                        <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink sm:mt-2.5 sm:text-xl">
                                            {item.problemTitle}
                                        </h3>
                                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                                            {item.problem}
                                        </p>
                                    </div>

                                    {/* Solution Side */}
                                    <div className="pl-2 pt-8 sm:pl-10 sm:pt-0">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-500/10 text-orange-600 sm:h-8 sm:w-8 sm:rounded-lg">
                                                <Icon size={13} className="sm:hidden" />
                                                <Icon size={16} className="hidden sm:block" />
                                            </span>
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-orange-600 sm:text-[11px]">
                                                Our Solution
                                            </span>
                                        </div>
                                        <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink sm:mt-2.5 sm:text-xl">
                                            {item.solutionTitle}
                                        </h3>
                                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                                            {item.solution}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                   
                </div>
            </section>

            {/* 3. STATS PREVIEW SECTION */}
            <section className="mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
                <Reveal className="mx-auto max-w-xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Why People Choose Us
                    </span>
                    <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
                        Small team, real results.
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-body">
                        No account managers, no outsourced work — the people who build
                        your product are the people you talk to.
                    </p>
                </Reveal>

                {/* Mobile First Grid */}
                <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                    <Link
                        to="/about"
                        className="text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                    >
                        Read More About Our Team & Mission →
                    </Link>
                </div>
            </section>

            {/* 2. PROJECT PREVIEW SECTION */}
            <section className="mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
                <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                            Selected Work
                        </span>
                        <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
                            Products we've shipped
                        </h2>
                    </div>
                    <Link
                        to="/work"
                        className="text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                    >
                        Explore All Projects →
                    </Link>
                </Reveal>

                {/* Mobile First Grid Layout */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>




        </div>
    );
}