import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiCreditCard, FiLock, FiChevronDown } from "react-icons/fi";

const WHATSAPP_NUMBER = "923249425513"; // replace with your real number
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in Web Development services for my project."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
    {
        title: "Custom Full-Stack Development",
        desc: "Built from scratch with React, Node.js, and MongoDB — no bloated page builders or rented templates.",
    },
    {
        title: "Responsive on Every Device",
        desc: "Pixel-perfect layouts that work flawlessly on phones, tablets, and desktops — not just 'look okay.'",
    },
    {
        title: "Built for Speed",
        desc: "Optimized load times and clean code, because a slow website loses visitors before they even see your content.",
    },
    {
        title: "Clean, Maintainable Code",
        desc: "Well-structured, standards-compliant code that's easy to extend — not a tangled mess held together by plugins.",
    },
    {
        title: "Secure & Scalable",
        desc: "Production-grade security practices and architecture that grows with your business, not against it.",
    },
    {
        title: "Ongoing Support",
        desc: "We don't disappear after launch — bug fixes and updates are part of how we work, not an extra favor.",
    },
];

const PROCESS = [
    {
        step: "01",
        title: "Discovery & Planning",
        desc: "We map out your requirements, site structure, and goals before writing a single line of code.",
    },
    {
        step: "02",
        title: "Design & Prototype",
        desc: "Wireframes and visual design first, so you see and approve the direction before development starts.",
    },
    {
        step: "03",
        title: "Development",
        desc: "Clean, tested code built section by section, with regular updates so you're never left wondering what's happening.",
    },
    {
        step: "04",
        title: "Launch & Handover",
        desc: "We deploy, test everything live, and hand over a site you fully own — plus support if you need it.",
    },
];

const PRICING = [
    {
        tier: "Basic",
        price: "PKR 55,000 – 65,000",
        priceNote: "one-time",
        delivery: "3–4 working days",
        payment: "50% advance → 50% before launch",
        features: [
            "3–4 pages — Home, Menu/Services, Contact (+ About)",
            "Premium template, customized to your brand colors",
            "Responsive across mobile, tablet, and desktop",
            "70+ mobile PageSpeed score",
            "Contact form → your email + WhatsApp",
            "Google Maps integration + click-to-call",
            "1 month of free bug support",
            "2 revision rounds",
        ],
        popular: false,
        comingSoon: false,
    },
    {
        tier: "Standard",
        price: "PKR 130,000 – 165,000",
        priceNote: "one-time",
        delivery: "6–7 working days",
        payment: "40% advance → 40% design approval → 20% launch",
        features: [
            "8–10 pages — Home, About, Menu, Gallery, Reviews, Booking, Blog, Contact",
            "Custom design in Figma, built after your approval",
            "6 breakpoints — pixel-perfect from 375px to 1920px",
            "90+ mobile score, image optimization, lazy loading",
            "Online booking/reservation system",
            "CMS so you can update content yourself",
            "GA4 + Meta Pixel analytics integration",
            "3 months free support + CMS training video",
        ],
        popular: true,
        comingSoon: false,
    },
    {
        tier: "Premium",
        price: "PKR 300,000 – 380,000",
        priceNote: "+ PKR 35,000–50,000/month growth retainer",
        delivery: "14–15 working days",
        payment: "30% advance → 25% design approval → 25% dev complete → 20% launch",
        features: [
            "12–15+ pages — multi-outlet, membership portal, admin dashboard",
            "Fluid responsive — 320px to 2560px, every screen size",
            "Lighthouse 95+ across all four scores, WCAG AA accessible",
            "Online ordering + payment gateway integration",
            "Membership portal + loyalty program",
            "Bilingual site (English + your local language)",
            "6 months priority support with 24-hour SLA + monthly reports",
            "Unlimited revisions within each phase",
        ],
        popular: false,
        comingSoon: true,
    },
];

const FAQS = [
    {
        q: "How will a website actually benefit my business, in real numbers?",
        a: "Think of it as a channel, not a cost. If your website brings in even 10–15 new bookings or orders a month, a Basic package typically pays for itself within 3 months — and everything after that is pure upside. For a gym, a single membership acquired through the site can cover the whole package in a year.",
    },
    {
        q: "What makes building a website with Naralith worth it?",
        a: "Standard and Premium builds start with a custom Figma design made specifically for your brand — never a shared template. You get clean, production-grade code, security basics from day one, and a support period after launch where we actually fix things, not just hand over files and disappear.",
    },
    {
        q: "Will you need my hosting, domain, or account passwords?",
        a: "No — we never ask for or store your passwords. Domain and hosting can be set up under your own name (recommended, and we guide you through it on a screen-share call), or we can manage it under our account with fully transparent, no-markup billing. Either way, you always know exactly who owns what.",
    },
    {
        q: "What does it cost, and what's included at each tier?",
        a: "Basic is PKR 55,000–65,000 for a 3–4 page site on a customized template. Standard is PKR 130,000–165,000 for a fully custom 8–10 page site with booking and a CMS. Premium (currently Coming Soon) adds online ordering, payment gateway integration, and a membership portal.",
    },
    {
        q: "Can I update the website myself once it's live?",
        a: "On Basic, small text or photo changes are handled by us free during the support period. Standard and Premium include a full CMS — you can update your menu, prices, photos, and blog yourself, along with a training video and a 30-minute handover call.",
    },
    {
        q: "Why is Premium marked \"Coming Soon\"?",
        a: "Premium includes online payment processing, membership accounts, and a multi-outlet admin system — this isn't just code, it involves handling real money and user account security properly. We'd rather bring that tier live once it's built to the standard it deserves than rush it out half-ready.",
    },
    {
        q: "What if my needs grow beyond what I initially picked?",
        a: "You can upgrade later, and whatever you've already paid on Basic gets credited toward Standard if you upgrade within 6 months. That said, if you already know you'll need a booking system, starting on Standard directly is usually more cost-effective than rebuilding later.",
    },
];

export default function WebDevDetail() {
    const [expandedCard, setExpandedCard] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    const toggleExpand = (idx) => {
        setExpandedCard(expandedCard === idx ? null : idx);
    };

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-white">
            {/* Ambient corner glows */}
            <div
                className="corner-glow corner-glow-navy pointer-events-none -right-40 -top-40 z-0 h-[520px] w-[520px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />
            <div
                className="corner-glow corner-glow-orange pointer-events-none -bottom-32 -left-32 z-0 h-[480px] w-[480px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />

            {/* ---------- FIXED HEADER ---------- */}
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                    <Link to="/" className="flex shrink-0 items-center" aria-label="Naralith Studio, home">
                        <img src="/imgs/logo.png" alt="Naralith Studio" className="h-7 w-auto sm:h-9" />
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5">
                            <p className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
                                First impressions decide everything —{" "}
                                <span className="text-orange-400 font-bold">
                                    we make sure your website wins them.
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="btn-primary shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs font-semibold sm:text-sm"
                    >
                        Get in Touch
                    </Link>
                </div>
            </header>

            {/* ---------- HERO SECTION WITH BACKGROUND OVERLAY ---------- */}
            <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-12 pb-16 px-4 sm:px-6 lg:px-10">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 h-full w-full">
                    <img
                        src="/imgs/web-dev.jpg"
                        alt="Web development background process"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/35 to-slate-950/55" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center mt-6 sm:mt-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] min-[330px]:text-xs font-semibold uppercase tracking-wider text-white mb-4 sm:mb-6">
                        Full-Stack Web Development
                    </span>

                    <h1 className="font-display text-2xl min-[330px]:text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white max-w-4xl">
                        Your website should open doors —{" "}
                        <span className="text-orange-400">not turn customers away.</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 max-w-2xl text-xs min-[330px]:text-sm sm:text-lg leading-relaxed text-gray-200">
                        A slow, generic site costs you trust before a customer even sees what you offer. We build custom, production-grade websites and web apps that represent your business properly — fast, secure, and built to grow with you.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col min-[380px]:flex-row items-center justify-center gap-3.5 w-full max-w-md">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full min-[380px]:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-700"
                        >
                            <FaWhatsapp size={18} className="fill-current" />
                            Chat on WhatsApp
                        </a>

                        <Link
                            to="/contact"
                            className="w-full min-[380px]:w-auto inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-3 text-xs sm:text-sm font-semibold transition-all"
                        >
                            Request a Free Quote
                        </Link>
                    </div>

                    {/* Bottom Sub-banner Card */}
                    <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 sm:p-5 text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-orange-400">
                            React · Node.js · Python · MongoDB · PostgreSQL
                        </span>
                        <h3 className="mt-1 font-display text-sm sm:text-base font-semibold text-white">
                            Built to Last, Not Just Launch
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-gray-300 max-w-lg mx-auto">
                            Clean, maintainable code — so your site doesn't fall apart the moment it needs a new feature.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- MAIN CONTENT AREA ---------- */}
            <main className="relative z-10 pb-16 pt-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                    {/* ---------- FEATURES (Compressed Grid + Read More Toggle) ---------- */}
                    <div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                What's included
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                No vague deliverables — here's exactly what you get when you work with us on a website or web app.
                            </p>
                        </div>

                        {/* Dynamic Height Grid */}
                        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 items-start">
                            {FEATURES.map((item, idx) => {
                                const isExpanded = expandedCard === idx;

                                return (
                                    <div
                                        key={item.title}
                                        className="glass-card flex flex-col justify-between rounded-2xl p-3.5 sm:p-5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[10px] sm:text-xs font-bold text-navy-700 border border-hairline">
                                                    0{idx + 1}
                                                </span>
                                                <h3 className="font-display text-xs sm:text-base font-semibold text-ink leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p
                                                className={`mt-2 text-[11px] sm:text-xs leading-normal text-body transition-all ${isExpanded ? "" : "line-clamp-2 sm:line-clamp-none"
                                                    }`}
                                            >
                                                {item.desc}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => toggleExpand(idx)}
                                            className="mt-2.5 text-[11px] font-semibold text-navy-700 hover:text-orange-600 sm:hidden text-left focus:outline-none"
                                        >
                                            {isExpanded ? "Show less ↑" : "Read more ↓"}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---------- PRICING ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                Choose your package
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                Transparent pricing, fixed delivery days, written scope — no hidden charges.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 items-start">
                            {PRICING.map((plan) => (
                                <div
                                    key={plan.tier}
                                    className={`relative flex flex-col rounded-2xl p-5 sm:p-6 transition-all duration-300 ${plan.comingSoon
                                            ? "border border-dashed border-slate-300 bg-slate-50/60"
                                            : plan.popular
                                                ? "border-2 border-orange-500/80 bg-navy-900 shadow-xl shadow-orange-500/10 sm:-translate-y-2"
                                                : "border border-navy-900/15 bg-navy-900 shadow-lg shadow-navy-900/10"
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
                                            Most Popular
                                        </span>
                                    )}
                                    {plan.comingSoon && (
                                        <span className="absolute right-3.5 top-3.5 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm border border-slate-200">
                                            <FiLock size={10} />
                                            Coming Soon
                                        </span>
                                    )}

                                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`}>
                                        {plan.tier}
                                    </p>
                                    <p className={`mt-2 font-display text-xl sm:text-2xl font-bold ${plan.comingSoon ? "text-slate-400" : "text-white"}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`mt-1 text-[11px] ${plan.comingSoon ? "text-slate-400" : "text-white/60"}`}>
                                        {plan.priceNote}
                                    </p>

                                    <div className={`mt-4 flex flex-col gap-2 border-t pt-4 ${plan.comingSoon ? "border-slate-200" : "border-white/10"}`}>
                                        <div className="flex items-start gap-2">
                                            <FiClock size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                            <span className={`text-[11px] sm:text-xs ${plan.comingSoon ? "text-slate-400" : "text-white/80"}`}>
                                                {plan.delivery}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <FiCreditCard size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                            <span className={`text-[11px] sm:text-xs ${plan.comingSoon ? "text-slate-400" : "text-white/80"}`}>
                                                {plan.payment}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <FiCheck size={14} className={`mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-400" : "text-orange-400"}`} />
                                                <span className={`text-[11px] sm:text-xs leading-relaxed ${plan.comingSoon ? "text-slate-500" : "text-white/85"}`}>
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.comingSoon ? (
                                        <button
                                            disabled
                                            className="mt-6 w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-400 cursor-not-allowed"
                                        >
                                            Join Waitlist Soon
                                        </button>
                                    ) : (
                                        <a
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all hover:scale-105 ${plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-white text-navy-900"
                                                }`}
                                        >
                                            Get Started
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- PROCESS ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                How we work
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                A clear process, start to finish — so you always know what's happening next.
                            </p>
                        </div>

                        <div className="relative mx-auto mt-12 max-w-2xl">
                            <div
                                className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-navy-700/40 via-hairline to-orange-500/40"
                                aria-hidden="true"
                            />
                            {PROCESS.map((item) => (
                                <div key={item.step} className="relative flex gap-6 pb-10 last:pb-0">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-navy-700 shadow-[0_0_0_3px_white]">
                                        <span className="text-gradient">{item.step}</span>
                                    </div>
                                    <div className="pt-1.5">
                                        <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 max-w-md text-xs sm:text-sm leading-relaxed text-body">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- FAQ ---------- */}
                    <div className="mt-20 lg:mt-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                Frequently asked questions
                            </h2>
                            <p className="mt-2 text-xs sm:text-base leading-relaxed text-body">
                                Straight answers to what clients actually ask before starting.
                            </p>
                        </div>

                        <div className="mx-auto mt-10 max-w-3xl flex flex-col gap-3">
                            {FAQS.map((item, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div
                                        key={item.q}
                                        className="glass-card rounded-2xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left focus:outline-none"
                                        >
                                            <span className="font-display text-xs sm:text-sm font-semibold text-ink">
                                                {item.q}
                                            </span>
                                            <FiChevronDown
                                                size={16}
                                                className={`shrink-0 text-navy-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-[11px] sm:text-xs leading-relaxed text-body">
                                                {item.a}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---------- CTA BANNER (Compressed Height) ---------- */}
                    <div className="btn-primary mt-20 overflow-hidden rounded-3xl px-5 py-6 sm:px-10 sm:py-8 lg:mt-24">
                        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row text-center lg:text-left">
                            <div>
                                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Built Right, Built to Last
                                </span>
                                <h2 className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
                                    Ready to build a website that actually works for you?
                                </h2>
                                <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                                    Let's build something fast, secure, and genuinely yours — no templates, no shortcuts, no disappearing after launch.
                                </p>
                            </div>
                            <div className="flex shrink-0 gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-navy-900 shadow-sm transition-transform hover:scale-105 sm:text-sm"
                                >
                                    <FaWhatsapp size={16} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ---------- BOTTOM ACTION BAR ---------- */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-5">
                        <Link
                            to="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Homepage
                        </Link>

                        <Link
                            to="/services"
                            className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                        >
                            Explore All Services
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}