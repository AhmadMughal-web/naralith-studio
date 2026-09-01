import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Award,
    Sparkles,
    Rocket,
    Cpu,
    CheckCircle2,
    Building2,
    Globe,
    Users,
    ChevronDown,
    ChevronUp
} from "lucide-react";

// --- Tech Stack Data ---
const TECH_STACK = [
    { name: "Frontend Engineering", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
    { name: "Backend & APIs", skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"] },
    { name: "Databases & Cloud", skills: ["SQL (PostgreSQL)", "NoSQL (MongoDB)", "Firebase", "Docker"] },
    { name: "Design & AI Tools", skills: ["Figma", "UI/UX Systems", "Adobe Suite", "TensorFlow", "LangChain"] },
];

// --- Core Team Members ---
const CORE_TEAM = [
    {
        name: "Muhammad Ahmad",
        role: "Senior UI/UX Developer & Graphic Designer",
        bio: "Engineers human-centric digital experiences and responsive frontend products. Ahmad blends visual aesthetics with performance-driven design systems.",
    },
    {
        name: "Kamran",
        role: "Senior AI Engineer",
        bio: "Specializes in Machine Learning, Natural Language Processing, and Agentic AI workflows. Kamran integrates intelligent automation into modern enterprise platforms.",
    },
    {
        name: "Muhammad Laraib",
        role: "Senior Software Engineer",
        bio: "Architects high-availability backend infrastructure, database pipelines, and full-stack web applications built for extreme speed and security.",
    },
];

export default function About() {
    // State toggles for mobile "Read More / Show More" behavior
    const [showAllTech, setShowAllTech] = useState(false);
    const [showAllTeam, setShowAllTeam] = useState(false);

    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-20">

            {/* 1. HERO / OUR STORY SECTION */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
                        About Naralith Studio
                    </span>
                    <h1 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink text-center">
                        From a 3-Developer Vision to a <span className="text-gradient">Modern Remote Studio.</span>
                    </h1>
                    <p className="mt-4 text-xs sm:text-base leading-relaxed text-body text-left sm:text-center">
                        Founded in May 2024, Naralith Studio started as a focused collaboration between 3 passionate software engineers driven by a shared goal: bridging complex engineering with clean design.
                    </p>
                </div>

                {/* Company Narrative Cards */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center sm:text-left">
                        <div className="mx-auto sm:mx-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-navy-700/10 text-navy-700">
                            <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-ink text-center sm:text-left">Remote-First Culture Today</h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body text-left">
                            Today, Naralith Studio operates as a dynamic team of roughly 10 skilled professionals — operating remotely to move fast and collaborate directly with clients globally.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center sm:text-left">
                        <div className="mx-auto sm:mx-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-600/10 text-orange-600">
                            <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-ink text-center sm:text-left">Physical Office Roadmap</h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-body text-left">
                            We are actively laying the groundwork to open our official brick-and-mortar technology studio in <strong>Lahore, Pakistan</strong>.
                        </p>
                    </div>
                </div>

                {/* Core Value Pillars */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1">
                        <div className="flex items-center justify-center sm:justify-start gap-2.5 font-display font-semibold text-sm sm:text-base text-ink">
                            <Award className="text-navy-700 h-5 w-5 shrink-0" />
                            Software Craftsmanship
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body text-left">
                            Clean architecture patterns, unit test coverage, and long-term scalability.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1">
                        <div className="flex items-center justify-center sm:justify-start gap-2.5 font-display font-semibold text-sm sm:text-base text-ink">
                            <Sparkles className="text-orange-600 h-5 w-5 shrink-0" />
                            Human-Centric UI
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body text-left">
                            Smooth micro-interactions, dark/light themes, and conversion-optimized flows.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-center sm:justify-start gap-2.5 font-display font-semibold text-sm sm:text-base text-ink">
                            <Rocket className="text-navy-700 h-5 w-5 shrink-0" />
                            Agile Execution
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body text-left">
                            Direct connection with senior engineers who deliver on time without corporate overhead.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. TECH STACK SECTION */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Our Tech Stack & Capabilities
                    </span>
                    <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink text-center">
                        Technologies We Engineer With
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-body text-left sm:text-center">
                        Battle-tested frameworks and modern developer tools powering our client applications.
                    </p>
                </div>

                {/* 2-Row Layout: Grid on Tablet/Desktop, Collapsible on Mobile */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {TECH_STACK.slice(0, showAllTech ? TECH_STACK.length : 2).map((group) => (
                        <div key={group.name} className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-center sm:justify-start gap-2 font-display text-sm sm:text-base font-semibold text-ink text-center sm:text-left">
                                    <Cpu className="text-orange-600 h-4 w-4 shrink-0" />
                                    {group.name}
                                </div>
                                <div className="mt-3 flex flex-wrap justify-start gap-1.5 sm:gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60"
                                        >
                                            <CheckCircle2 className="h-3 w-3 text-navy-700 shrink-0" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Render remaining 2 items always on Tablet/Desktop view */}
                    {TECH_STACK.slice(2).map((group) => (
                        <div key={group.name} className="hidden sm:flex glass-card rounded-2xl p-5 flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-start gap-2 font-display text-sm sm:text-base font-semibold text-ink">
                                    <Cpu className="text-orange-600 h-4 w-4 shrink-0" />
                                    {group.name}
                                </div>
                                <div className="mt-3 flex flex-wrap justify-start gap-1.5 sm:gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60"
                                        >
                                            <CheckCircle2 className="h-3 w-3 text-navy-700 shrink-0" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Read More Mobile Button for Tech Stack */}
                <div className="mt-4 flex justify-center sm:hidden">
                    <button
                        onClick={() => setShowAllTech(!showAllTech)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
                    >
                        {showAllTech ? "Show Less" : "Read More Tech"}
                        {showAllTech ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                </div>
            </section>

            {/* 3. TEAM MEMBERS SECTION */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Leadership & Development Team
                    </span>
                    <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink text-center">
                        Meet Our Leadership
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-body text-left sm:text-center">
                        The core engineers steering Naralith's technical vision and project execution.
                    </p>
                </div>

                {/* 2-Row Layout Grid (2 items per row on tablets/desktop) */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {CORE_TEAM.slice(0, showAllTeam ? CORE_TEAM.length : 2).map((member) => (
                        <div
                            key={member.name}
                            className="glass-card flex flex-col items-center overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-navy-700 to-slate-800 text-lg font-bold text-white shadow-md border-2 border-orange-500/30">
                                {member.name
                                    .split(" ")
                                    .map((word) => word[0])
                                    .join(".")
                                    .toUpperCase()}
                            </div>
                            <h3 className="font-display text-base sm:text-lg font-bold text-ink text-center">{member.name}</h3>
                            <p className="mt-1 text-xs font-semibold text-orange-600 uppercase tracking-wide text-center">
                                {member.role}
                            </p>
                            <p className="mt-4 text-xs leading-relaxed text-body text-left w-full">
                                {member.bio}
                            </p>
                        </div>
                    ))}

                    {/* Additional Team Items (Desktop/Tablet Always Visible) */}
                    {CORE_TEAM.slice(2).map((member) => (
                        <div
                            key={member.name}
                            className="hidden sm:flex glass-card flex-col items-center overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-navy-700 to-slate-800 text-lg font-bold text-white shadow-md border-2 border-orange-500/30">
                                {member.name
                                    .split(" ")
                                    .map((word) => word[0])
                                    .join(".")
                                    .toUpperCase()}
                            </div>
                            <h3 className="font-display text-base sm:text-lg font-bold text-ink text-center">{member.name}</h3>
                            <p className="mt-1 text-xs font-semibold text-orange-600 uppercase tracking-wide text-center">
                                {member.role}
                            </p>
                            <p className="mt-4 text-xs leading-relaxed text-body text-left w-full">
                                {member.bio}
                            </p>
                        </div>
                    ))}

                    {/* Team Growth Card */}
                    <div className={`${showAllTeam ? 'flex' : 'hidden sm:flex'} glass-card flex-col items-center rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-dashed border-gray-300/80 bg-slate-50/50`}>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600/10 text-orange-600 font-display text-xl font-bold">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-ink text-center">7+ Dev Team</h3>
                        <p className="mt-2 text-xs leading-relaxed text-body text-left w-full">
                            Backed by associate devs, UI designers, and specialized full-stack engineers working remotely across client projects.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-navy-700/10 px-3 py-1 text-xs font-semibold text-navy-700">
                            Growing Team
                        </span>
                    </div>
                </div>

                {/* Read More Mobile Button for Development Team */}
                <div className="mt-4 flex justify-center sm:hidden">
                    <button
                        onClick={() => setShowAllTeam(!showAllTeam)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
                    >
                        {showAllTeam ? "Show Less" : "Read More Team"}
                        {showAllTeam ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                </div>
            </section>

            {/* 4. CLOSING CTA */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10">
                <div className="glass-card mx-auto max-w-4xl rounded-2xl sm:rounded-3xl px-5 py-8 sm:px-12 sm:py-12 text-center">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink text-center">
                        Let's build something remarkable together.
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-xs sm:text-base leading-relaxed text-body text-left sm:text-center">
                        Have a project in mind or need dedicated engineering expertise? Reach out today for a consultation.
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <Link
                            to="/contact"
                            className="btn-primary rounded-full px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold w-full sm:w-auto text-center"
                        >
                            Start a Conversation
                        </Link>
                        <Link
                            to="/work"
                            className="btn-secondary rounded-full px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold w-full sm:w-auto text-center"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}