import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiMapPin,
    FiArrowLeft,
    FiUpload,
    FiCheckCircle,
    FiCheckSquare,
    FiPlus,
    FiX,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const ROLE_DATA = {
    "web-development": {
        title: "Web Development",
        summary: "Build fast, production-grade web applications using our modern stack for real client projects — not internal tools nobody uses.",
        stack: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Docker", "Tailwind CSS", "Vercel", "AWS"],
        responsibilities: [
            "Build and maintain full-stack web applications end-to-end, from database schema to deployed UI",
            "Write clean, maintainable, and well-tested code that other engineers can build on",
            "Collaborate directly with designers and clients — no layers of middle management slowing things down",
            "Own performance: fast load times, secure APIs, and code that scales as client traffic grows",
            "Deploy and manage production applications on cloud platforms with proper CI/CD practices",
            "Participate in code reviews and continuously raise the engineering bar on the team",
        ],
        mustHave: [
            "Bachelor's degree in Computer Science or a related technical field (or equivalent practical experience)",
            "Strong understanding of JavaScript fundamentals, data structures, and algorithms",
            "Hands-on experience building applications with React and Node.js",
            "Comfortable working with both SQL and NoSQL databases",
            "Ability to write clean, documented, production-ready code — not just code that runs",
            "Strong communication skills and comfort working directly with clients when needed",
        ],
        niceToHave: [
            "Experience with Next.js and server-side rendering",
            "Familiarity with Docker and cloud deployment platforms (AWS, Vercel, Railway)",
            "Experience with Firebase for auth, storage, or real-time database needs",
            "Understanding of CI/CD pipelines and testing frameworks",
        ],
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        summary: "Design interfaces that actually convert — wireframes, prototypes, and design systems for products used by real businesses and their customers.",
        stack: ["Figma", "Tailwind CSS", "Design Systems", "Wireframing", "Prototyping", "Adobe Suite"],
        responsibilities: [
            "Design user flows, wireframes, and high-fidelity prototypes for client web and mobile products",
            "Build and maintain consistent design systems — color tokens, typography, and reusable components",
            "Translate business goals into interfaces that are genuinely easy and pleasant to use",
            "Work closely with developers to ensure designs are implemented accurately and responsively",
            "Conduct basic usability reviews and iterate designs based on real user behavior",
        ],
        mustHave: [
            "A strong portfolio demonstrating real UI/UX design work, not just visual mockups",
            "Proficiency in Figma, including components, auto-layout, and prototyping",
            "Solid understanding of visual hierarchy, spacing systems, and accessible color contrast",
            "Ability to design for both web and mobile responsively",
            "Comfortable presenting and defending design decisions with clear reasoning",
        ],
        niceToHave: [
            "Basic knowledge of Tailwind CSS or how designs translate into utility-first code",
            "Experience designing dark mode and light mode variants of the same system",
            "Familiarity with motion/micro-interaction design",
        ],
    },
    "ai-chatbot-automation": {
        title: "AI Chatbot & Automation",
        summary: "Build and train conversational AI, integrate agentic workflows, and ship automation that genuinely replaces manual work for clients.",
        stack: ["Python", "LangChain", "LLMs (GPT / Claude / Groq)", "RAG Systems", "Vector Databases", "REST APIs", "Prompt Engineering"],
        responsibilities: [
            "Design and build AI chatbots trained on real client data — products, policies, and tone of voice",
            "Implement RAG (Retrieval-Augmented Generation) systems for accurate, grounded AI responses",
            "Build agentic AI workflows that complete real tasks, not just answer questions",
            "Integrate AI systems into client websites and messaging platforms (WhatsApp, web widgets)",
            "Continuously test and refine AI responses based on real conversation data",
        ],
        mustHave: [
            "Strong proficiency in Python",
            "Practical experience working with LLM APIs (OpenAI, Anthropic, Groq, or similar)",
            "Understanding of prompt engineering and how to constrain AI behavior reliably",
            "Familiarity with vector databases and embedding-based retrieval (RAG)",
            "Ability to design systems with clear guardrails for sensitive tasks",
        ],
        niceToHave: [
            "Experience with LangChain or similar agentic AI frameworks",
            "Understanding of fine-tuning versus prompt-based customization",
            "Experience integrating AI systems with existing backend APIs",
        ],
    },
    "graphic-design": {
        title: "Graphic Design",
        summary: "Craft brand identities, visual systems, and marketing assets that make growing businesses look like serious, credible operations.",
        stack: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Brand Identity Systems", "Typography", "Vector Design"],
        responsibilities: [
            "Design complete brand identities — logos, color systems, and typography for client businesses",
            "Create marketing assets, social media graphics, and print-ready materials",
            "Build and document brand guidelines that keep visual identity consistent across platforms",
            "Collaborate with the web team to ensure brand assets translate cleanly into digital products",
            "Take creative direction from client briefs and turn vague ideas into polished, deliverable work",
        ],
        mustHave: [
            "A strong portfolio showing real brand identity and graphic design work",
            "Proficiency in Adobe Illustrator and Photoshop",
            "Solid understanding of typography, color theory, and vector-based design",
            "Ability to design assets that scale — from a favicon to a large banner — without quality loss",
            "Attention to detail and consistency across a full brand system",
        ],
        niceToHave: [
            "Experience with Figma for collaborative design work",
            "Basic understanding of how designs get implemented on the web",
            "Motion graphics or basic video editing skills",
        ],
    },
    "digital-growth-seo": {
        title: "Digital Growth & SEO",
        summary: "Own technical SEO, conversion optimization, and growth strategy for client products — measured in real ranking and revenue movement.",
        stack: ["Technical SEO", "Google Search Console", "Core Web Vitals", "Google Analytics", "A/B Testing", "CRO"],
        responsibilities: [
            "Audit and improve technical SEO for client websites — site structure, meta data, Core Web Vitals",
            "Develop and execute data-driven growth strategies to increase organic traffic and conversions",
            "Run conversion rate optimization experiments and analyze results with real data",
            "Monitor search rankings and adjust strategy based on what's actually moving the needle",
            "Report clearly on what's working, what isn't, and why — no vanity metrics",
        ],
        mustHave: [
            "Practical experience with technical SEO — not just content/keyword strategy",
            "Understanding of Core Web Vitals and how they affect search rankings",
            "Comfortable using Google Search Console and Google Analytics",
            "Strong analytical mindset — comfortable working with data to make decisions",
            "Basic understanding of how website performance (speed, structure) impacts SEO",
        ],
        niceToHave: [
            "Experience with A/B testing tools and conversion rate optimization",
            "Basic understanding of HTML/CSS to diagnose technical SEO issues directly",
            "Experience with Next.js SEO practices (SSR, sitemaps, structured data)",
        ],
    },
};

export default function ApplyJob() {
    const { role } = useParams();
    const roleInfo = ROLE_DATA[role];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        country: "",
        city: "",
        linkedin: "",
        university: "",
        cgpa: "",
        experience: "",
        previousCompany: "",
        expectedSalary: "",
        heardFrom: "",
        coverLetter: "",
        message: "",
    });

    // Dynamic extra links (GitHub, Portfolio, etc.)
    const [extraLinks, setExtraLinks] = useState([]);

    const LINK_TYPES = {
        github: { label: "GitHub", prefix: "https://github.com/" },
        portfolio: { label: "Portfolio", prefix: "https://" },
        behance: { label: "Behance", prefix: "https://behance.net/" },
        dribbble: { label: "Dribbble", prefix: "https://dribbble.com/" },
    };

    const addExtraLink = (type) => {
        if (extraLinks.find((l) => l.type === type)) return;
        setExtraLinks([...extraLinks, { type, value: "" }]);
    };

    const updateExtraLink = (type, value) => {
        setExtraLinks(extraLinks.map((l) => (l.type === type ? { ...l, value } : l)));
    };

    const removeExtraLink = (type) => {
        setExtraLinks(extraLinks.filter((l) => l.type !== type));
    };

    const [resumeFile, setResumeFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!roleInfo) {
        return <Navigate to="/careers" replace />;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resumeFile) {
            alert("Please upload your resume before submitting.");
            return;
        }

        setLoading(true);

        // Still fake for now — hook this up to a real backend when you actually start hiring
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 800);
    };

    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>Apply — {roleInfo.title} — Naralith Studio</title>
                <meta
                    name="description"
                    content={`Apply for the ${roleInfo.title} track at Naralith Studio.`}
                />
            </Helmet>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">

                <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                >
                    <FiArrowLeft size={14} />
                    Back to Careers
                </Link>

                {/* ---------- COMPANY & ROLE INTRO ---------- */}
                <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
                        <FiMapPin size={13} />
                        Remote · Lahore, Pakistan
                    </span>
                    <h1 className="mt-2 font-display text-2xl sm:text-4xl font-bold leading-tight text-ink">
                        {roleInfo.title}
                    </h1>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-body">
                        Naralith Studio is a remote-first development studio building production-grade
                        web products, AI-powered tools, and brand identities for real businesses. We
                        don't outsource work and we don't pad teams with people who just fill a seat —
                        every person on our team ships work a client actually relies on.
                    </p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-body">
                        {roleInfo.summary}
                    </p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-body">
                        We're not hiring for this role right now, but we keep a running list of strong
                        candidates for when we are. If you genuinely care about your craft and want to
                        be first in line when we open this role, apply below.
                    </p>
                </div>

                {/* ---------- WHAT YOU'LL DO ---------- */}
                <div className="mt-10">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4">
                        What you'll do
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                        {roleInfo.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-body">
                                <FiCheckSquare size={15} className="mt-0.5 shrink-0 text-navy-700" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ---------- TECH STACK / TOOLS ---------- */}
                <div className="mt-10">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4">
                        Tools & technologies we use
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {roleInfo.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-navy-700/5 border border-navy-700/15 px-3.5 py-1.5 text-xs font-medium text-navy-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ---------- MUST HAVE ---------- */}
                <div className="mt-10">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4">
                        What you'll need
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                        {roleInfo.mustHave.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-body">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ---------- NICE TO HAVE ---------- */}
                <div className="mt-8">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4">
                        Nice to have
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                        {roleInfo.niceToHave.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-body">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ---------- APPLICATION FORM ---------- */}
                <div className="mt-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/80 p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 backdrop-blur-lg">
                    {submitted ? (
                        <div className="py-10 text-center">
                            <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <FiCheckCircle size={30} />
                            </div>
                            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-navy-900">Application received</h3>
                            <p className="mt-2 text-xs sm:text-sm text-body">
                                We'll review your profile and reach out if a {roleInfo.title} opportunity
                                opens up that fits.
                            </p>
                            <Link
                                to="/careers"
                                className="mt-6 inline-block text-xs sm:text-sm font-semibold text-orange-600 hover:underline"
                            >
                                Back to Careers
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">

                            {/* Personal Details */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Personal Details <span className="text-orange-600">*</span>
                                </label>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        required
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="WhatsApp Number"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="text"
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        placeholder="Country"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                </div>
                            </div>

                            {/* Professional Links */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Professional Links <span className="text-orange-600">*</span>
                                    <span className="ml-1.5 normal-case font-normal text-slate-400 tracking-normal">
                                        (LinkedIn required, others optional)
                                    </span>
                                </label>

                                {/* LinkedIn - required, with prefix */}
                                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 pl-4 pr-2 py-1 transition-all focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-500/20">
                                    <FaLinkedin className="text-[#0A66C2] shrink-0" size={16} />
                                    <span className="ml-2 shrink-0 text-xs sm:text-sm text-slate-400 select-none">
                                        linkedin.com/in/
                                    </span>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        required
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="your-username"
                                        className="w-full bg-transparent px-1 py-2 text-xs sm:text-sm text-navy-900 focus:outline-none"
                                    />
                                </div>

                                {/* Dynamically added extra links */}
                                {extraLinks.map((link) => (
                                    <div
                                        key={link.type}
                                        className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50/50 pl-4 pr-2 py-1 transition-all focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-500/20"
                                    >
                                        {link.type === "github" && <FaGithub className="text-slate-700 shrink-0" size={16} />}
                                        {link.type === "portfolio" && <FaGlobe className="text-orange-600 shrink-0" size={16} />}
                                        {(link.type === "behance" || link.type === "dribbble") && (
                                            <FaGlobe className="text-slate-500 shrink-0" size={16} />
                                        )}
                                        <span className="ml-2 shrink-0 text-xs sm:text-sm text-slate-400 select-none">
                                            {LINK_TYPES[link.type].prefix}
                                        </span>
                                        <input
                                            type="text"
                                            value={link.value}
                                            onChange={(e) => updateExtraLink(link.type, e.target.value)}
                                            placeholder={link.type === "portfolio" ? "yoursite.com" : "your-username"}
                                            className="w-full bg-transparent px-1 py-2 text-xs sm:text-sm text-navy-900 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeExtraLink(link.type)}
                                            className="shrink-0 rounded-full p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                                            aria-label={`Remove ${LINK_TYPES[link.type].label}`}
                                        >
                                            <FiX size={14} />
                                        </button>
                                    </div>
                                ))}

                                {/* Add link buttons */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {Object.entries(LINK_TYPES)
                                        .filter(([type]) => !extraLinks.find((l) => l.type === type))
                                        .map(([type, info]) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => addExtraLink(type)}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-orange-400 hover:text-orange-600 transition-colors"
                                            >
                                                <FiPlus size={13} />
                                                Add {info.label}
                                            </button>
                                        ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Education <span className="text-orange-600">*</span>
                                </label>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="university"
                                        required
                                        value={formData.university}
                                        onChange={handleChange}
                                        placeholder="University / Institution"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="text"
                                        name="cgpa"
                                        required
                                        value={formData.cgpa}
                                        onChange={handleChange}
                                        placeholder="CGPA (e.g. 3.4 / 4.0)"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                </div>
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Experience <span className="text-orange-600">*</span>
                                </label>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <select
                                        name="experience"
                                        required
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    >
                                        <option value="">Years of Experience</option>
                                        <option value="fresher">Fresh Graduate</option>
                                        <option value="0-1">0–1 years</option>
                                        <option value="1-3">1–3 years</option>
                                        <option value="3-5">3–5 years</option>
                                        <option value="5+">5+ years</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="previousCompany"
                                        value={formData.previousCompany}
                                        onChange={handleChange}
                                        placeholder="Previous Company (if any)"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleChange}
                                        placeholder="Expected Salary (PKR)"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    />
                                </div>
                            </div>


                            {/* How did you hear about us */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    How did you hear about us?
                                </label>
                                <select
                                    name="heardFrom"
                                    value={formData.heardFrom}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                >
                                    <option value="">Select an option</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="tiktok">TikTok</option>
                                    <option value="twitter">Twitter / X</option>
                                    <option value="referral">Referral from someone</option>
                                    <option value="google">Google Search</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Resume */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Resume / CV <span className="text-orange-600">*</span>
                                </label>

                                {resumeFile ? (
                                    <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-3.5">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                                                <FiCheckCircle size={18} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="truncate text-xs sm:text-sm font-medium text-navy-900">
                                                    {resumeFile.name}
                                                </p>
                                                <p className="text-[11px] text-slate-500">
                                                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setResumeFile(null)}
                                            className="shrink-0 rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-red-500 transition-colors"
                                            aria-label="Remove file"
                                        >
                                            <FiX size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="resume-upload"
                                        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 px-4 py-8 text-center transition-colors hover:border-orange-400 hover:bg-orange-50/30"
                                    >
                                        <FiUpload size={22} className="text-slate-400" />
                                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                                            Click to upload your resume (PDF)
                                        </span>
                                        <span className="text-[11px] text-slate-400">Max file size: 5MB</span>
                                    </label>
                                )}

                                <input
                                    id="resume-upload"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Cover Letter
                                </label>
                                <textarea
                                    name="coverLetter"
                                    rows={5}
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    placeholder="Tell us why you're a good fit for this role..."
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                />
                            </div>

                            {/* Anything else */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3">
                                    Anything else we should know?
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Notable projects, availability, or anything else worth mentioning..."
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                />
                            </div>

                            <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                                <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
                                    We'll only reach out if a relevant opportunity comes up.
                                </p>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all active:scale-95 hover:scale-105 disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "Submit Application"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}