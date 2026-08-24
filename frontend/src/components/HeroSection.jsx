import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, CheckCircle2, Heart, Clock } from "lucide-react";
import useReveal from "../hooks/useReveal";

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
    { label: "Team Members", value: "10", Icon: Users },
    { label: "Projects Delivered", value: "50+", Icon: CheckCircle2 },
    { label: "Happy Clients", value: "20+", Icon: Heart },
    { label: "Years Experience", value: "4+", Icon: Clock },
];

// --- Helper Components ---
function StatCard({ stat, index }) {
    const { Icon } = stat;
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`glass-card rounded-2xl p-6 text-center sm:text-left reveal ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
        >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-navy-700 sm:mx-0">
                <Icon size={22} strokeWidth={1.8} />
            </div>
            <div className="mt-4 font-display text-3xl font-semibold text-gradient">
                <Counter target={stat.value} isVisible={isVisible} />
            </div>
            <div className="mt-1 text-sm font-medium text-muted">{stat.label}</div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    return (
        <Reveal delay={index * 90} className="glass-card rounded-2xl p-6">
            <div className="mb-5 h-44 w-full overflow-hidden rounded-xl bg-gray-100/50">
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

            {/* 1. HERO SECTION */}
            <section className="relative pt-12 lg:pt-16 mt-16">
                <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:items-end lg:gap-6 lg:px-10">

                    <div className="order-1 max-w-xl pb-10 lg:order-1 lg:col-span-7 lg:pb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                            Naralith Studio 
                        </span>

                        <h1 className="mt-7 font-display text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl">
                            We design and build web products your customers{" "}
                            <span className="text-gradient">actually rely on.</span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg">
                            Naralith Studio delivers end-to-end graphic design and high-performance web development — from initial design concepts to live production.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
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

                        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                            <span className="font-semibold text-ink">5+</span> engineers &amp; designers
                            <span aria-hidden="true">•</span>
                            <span className="font-semibold text-ink">10+</span> products delivered
                            <span aria-hidden="true">•</span>
                            <span className="font-semibold text-ink">2+ years</span> in production
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 lg:col-span-5 lg:self-end">
                        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:w-[135%] lg:-ml-[20%] lg:-mb-1">
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

            {/* 2. PROJECT PREVIEW SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                            Selected Work
                        </span>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
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

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* 3. STATS PREVIEW SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <Reveal className="mx-auto max-w-xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Why Teams Choose Us
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                        Small team, real results.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-body">
                        No account managers, no outsourced work — the people who build
                        your product are the people you talk to.
                    </p>
                </Reveal>

                <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/about"
                        className="text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                    >
                        Read More About Our Team & Mission →
                    </Link>
                </div>
            </section>

            {/* 4. CLOSING CTA SECTION */}
            <section className="relative">
                <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
                    <Reveal className="glass-card mx-auto max-w-3xl rounded-3xl px-8 py-14 text-center sm:px-14">
                        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                            Your project deserves more than a template and a deadline.
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                            Let's build something your customers can rely on — and your
                            business can actually grow with. Tell us what you're building;
                            we'll reply within one business day.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold"
                        >
                            Get in Touch
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}