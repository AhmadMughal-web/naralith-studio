import React from "react";
import { Link } from "react-router-dom";
import {
    Award,
    Sparkles,
    Rocket,
    Cpu,
    CheckCircle2,
    Building2,
    Globe,
    Users
} from "lucide-react";


// --- Tech Stack Data ---
const TECH_STACK = [
    { name: "Frontend Engineering", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
    { name: "Backend & APIs", skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"] },
    { name: "Databases & Cloud", skills: ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Redis)", "Firebase", "Docker"] },
    { name: "Design & AI Tools", skills: ["Figma", "UI/UX Systems", "Adobe Creative Suite", "TensorFlow / PyTorch", "LangChain"] },
];

// --- Core Team Members (3 Leadership Roles) ---
const CORE_TEAM = [
    {
        name: "Muhammad Ahmad",
        role: "Senior UI/UX Developer & Graphic Designer",
        initial: "M",
        badgeColor: "bg-orange-500",
        bio: "Engineers human-centric digital experiences and responsive frontend products. Ahmad blends visual aesthetics with performance-driven design systems.",

    },
    {
        name: "Kamran",
        role: "Senior AI Engineer",
        initial: "K",
        badgeColor: "bg-navy-700",
        bio: "Specializes in Machine Learning, Natural Language Processing, and Agentic AI workflows. Kamran integrates intelligent automation into modern enterprise platforms.",

    },
    {
        name: "Muhammad Laraib",
        role: "Senior Software Engineer",
        initial: "M",
        badgeColor: "bg-orange-600",
        bio: "Architects high-availability backend infrastructure, database pipelines, and full-stack web applications built for extreme speed and security.",

    },
];

export default function About() {
    return (
        <div className="relative overflow-hidden pt-24 pb-20">

            {/* 1. HERO / OUR STORY SECTION */}
            <section className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                        About Naralith Studio
                    </span>
                    <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                        From a 3-Developer Vision to a <span className="text-gradient">Modern Remote Studio.</span>
                    </h1>
                    <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
                        Founded in May 2024, Naralith Studio started as a focused collaboration between 3 passionate software engineers driven by a shared goal: bridging complex engineering with clean design. What began as high-end freelance execution has quickly evolved into an agile software agency.
                    </p>
                </div>

                {/* Company Narrative Grid */}
                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    <div className="glass-card rounded-3xl p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700/10 text-navy-700">
                            <Globe size={24} />
                        </div>
                        <h3 className="mt-5 font-display text-xl font-bold text-ink">Remote-First Culture Today</h3>
                        <p className="mt-3 text-sm leading-relaxed text-body">
                            Today, Naralith Studio operates as a dynamic team of roughly 10 skilled professionals — encompassing senior software architects, associate full-stack engineers, UI/UX designers, and energetic junior developers. Operating remotely allows us to move fast, stay lean, and collaborate directly with clients globally without regional friction.
                        </p>
                    </div>

                    <div className="glass-card rounded-3xl p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600">
                            <Building2 size={24} />
                        </div>
                        <h3 className="mt-5 font-display text-xl font-bold text-ink">Physical Office Roadmap</h3>
                        <p className="mt-3 text-sm leading-relaxed text-body">
                            While our current setup is entirely remote, our growth trajectory is focused on establishing a physical hub. We are actively laying the groundwork to open our official brick-and-mortar technology studio in <strong>Lahore, Pakistan</strong> — creating a collaborative workspace for client workshops, team synergy, and local tech innovation.
                        </p>
                    </div>
                </div>

                {/* Core Value Pillars */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 font-display font-semibold text-ink">
                            <Award className="text-navy-700" size={20} />
                            Software Craftsmanship
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body">
                            Every codebase is structured with long-term scalability, clean architecture patterns, and comprehensive unit coverage.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 font-display font-semibold text-ink">
                            <Sparkles className="text-orange-600" size={20} />
                            Human-Centric UI
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body">
                            We design software that users love — combining smooth micro-interactions, dark/light modes, and conversion-optimized flows.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 font-display font-semibold text-ink">
                            <Rocket className="text-navy-700" size={20} />
                            Agile Execution
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-body">
                            No corporate overhead or sluggish bureaucracy. You speak directly with engineers who deliver on time and iterate fast.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. TECH STACK SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Our Tech Stack & Capabilities
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Technologies We Engineer With
                    </h2>
                    <p className="mt-3 text-base text-body">
                        Battle-tested frameworks and modern developer tools powering our client applications.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {TECH_STACK.map((group) => (
                        <div key={group.name} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                                <Cpu className="text-orange-600" size={18} />
                                {group.name}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60"
                                    >
                                        <CheckCircle2 size={12} className="text-navy-700" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. TEAM MEMBERS SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                        Leadership & Development Team
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Meet Our Leadership
                    </h2>
                    <p className="mt-3 text-base text-body">
                        The core engineers steering Naralith's technical vision, project management, and product design.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* 3 Leadership Profiles */}
                    {CORE_TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="glass-card flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all hover:shadow-lg"
                        >
                            <div>
                                {/* Dots Between Initials (e.g., "Muhammad Ahmad" -> "M.A") */}
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-navy-700 to-slate-800 text-2xl font-bold text-white shadow-md border-2 border-orange-500/30">
                                    {member.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join(".")
                                        .toUpperCase()}
                                </div>

                                <h3 className="text-center font-display text-lg font-bold text-ink">{member.name}</h3>
                                <p className="mt-1 text-center text-xs font-semibold text-orange-600 uppercase tracking-wide">
                                    {member.role}
                                </p>

                                <p className="mt-4 text-xs leading-relaxed text-body text-center">{member.bio}</p>
                            </div>


                        </div>
                    ))}

                    {/* 4th Card: Expanding Talent Pool Card */}
                    <div className="glass-card flex flex-col items-center justify-center rounded-3xl p-6 text-center border-2 border-dashed border-gray-300/80 bg-slate-50/50">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-600/10 text-orange-600 font-display text-2xl font-bold">
                            <Users size={32} />
                        </div>
                        <h3 className="font-display text-lg font-bold text-ink">7+ Associated & Junior Engineers</h3>
                        <p className="mt-2 text-xs leading-relaxed text-body">
                            Backed by senior full-stack specialists, associate devs, and junior engineers working remotely across specialized projects.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy-700/10 px-3 py-1 text-[11px] font-semibold text-navy-700">
                            Growing Team
                        </span>
                    </div>
                </div>
            </section>

            {/* 4. CLOSING CTA */}
            <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
                <div className="glass-card mx-auto max-w-4xl rounded-3xl px-8 py-14 text-center sm:px-14">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Let's build something remarkable together.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
                        Have a project in mind or need dedicated engineering expertise? Reach out today for a consultation.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="btn-primary rounded-full px-8 py-3.5 text-sm font-semibold"
                        >
                            Start a Conversation
                        </Link>
                        <Link
                            to="/work"
                            className="btn-secondary rounded-full px-8 py-3.5 text-sm font-semibold"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}