import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiCreditCard, FiLock, FiChevronDown } from "react-icons/fi";

const WHATSAPP_NUMBER = "923249425513"; // replace with your real number
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in Graphic Design services for my brand."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
    {
        title: "Brand Identity Design",
        desc: "Logos, color systems, and typography built to look intentional — not thrown together in an afternoon.",
    },
    {
        title: "Marketing Assets",
        desc: "Social media graphics, banners, and ad creatives that stay consistent with your brand, every single time.",
    },
    {
        title: "Print & Digital Ready",
        desc: "Files delivered in the right formats for web, social, and print — no scrambling to resize or reformat later.",
    },
    {
        title: "Custom Illustration",
        desc: "Original vector illustrations and icons designed specifically for your brand, not generic stock art.",
    },
    {
        title: "Brand Guidelines",
        desc: "A clear style guide so anyone on your team can use your brand assets correctly, without guessing.",
    },
    {
        title: "Unlimited Revisions*",
        desc: "We refine the design with you until it actually feels right — not until you settle for 'good enough.'",
    },
];

const PROCESS = [
    {
        step: "01",
        title: "Brand Discovery",
        desc: "We learn your business, your audience, and what makes you different — before we design anything.",
    },
    {
        step: "02",
        title: "Concept & Moodboard",
        desc: "We explore visual directions and share early concepts, so we're aligned before full design work begins.",
    },
    {
        step: "03",
        title: "Design & Refinement",
        desc: "We build out the full design and refine it with your feedback, round by round, until it's right.",
    },
    {
        step: "04",
        title: "Final Delivery",
        desc: "You receive all source files and formats, ready to use across your website, social, and print.",
    },
];

const PRICING = [
    {
        tier: "Basic",
        price: "PKR 25,000",
        priceNote: "one-time project fee",
        delivery: "3–5 working days",
        payment: "50% advance deposit → 50% upon final artwork approval (prior to source file export)",
        features: [
            "3 Logo concepts presented in real-world mockups",
            "Up to 3 revision rounds on chosen concept",
            "Full vector source files (AI, SVG, EPS, PNG transparent, JPG, PDF)",
            "Color variations (Full color, monochrome, reverse & greyscale)",
            "Brand color palette (HEX/RGB/CMYK) + Typography pairing guide",
            "Print-ready business card design (300 DPI, CMYK with bleed)",
            "10 Social media post templates + 3 story templates (Editable Canva links)",
        ],
        popular: false,
        comingSoon: false,
    },
    {
        tier: "Standard",
        price: "PKR 55,000",
        priceNote: "one-time project fee",
        delivery: "5–7 working days",
        payment: "40% advance deposit → 30% on design direction approval → 30% prior to final file package handover",
        features: [
            "Full logo system (Primary, horizontal, submark, icon-only & favicon)",
            "15–20 Page Brand Identity Guidelines (Usage rules & photography direction)",
            "Business card, letterhead, email signature & print collateral",
            "Menu design (Print + Digital PDF + QR Code) or core collateral set",
            "25 Posts + 8 Stories + 3 Carousels organized by category",
            "1 Promotional Reel edit (15–30 seconds motion graphics/video)",
            "Up to 4 revision rounds + All files print-ready (CMYK with crop marks)",
        ],
        popular: true,
        comingSoon: false,
    },
    {
        tier: "Premium",
        price: "PKR 110,000",
        priceNote: "one-time brand setup + PKR 55,000/month content retainer",
        delivery: "12–14 working days (Initial Brand Setup)",
        payment: "40% advance → 40% identity system approval → 20% setup handover (Retainer billed monthly in advance)",
        features: [
            "Complete Brand Strategy (Positioning, personas, tone of voice & tagline)",
            "30–40 Page comprehensive Brand Guidelines document",
            "Custom brand asset kit (15–20 icons, custom patterns & visual elements)",
            "Production-ready packaging & dieline artwork",
            "Full collateral suite (Flyers, standees, billboard & vehicle wrap mockups)",
            "Monthly Content Engine: 20 Posts + 8 Stories + 4 Reels (Ongoing retainer)",
            "Dedicated senior designer with priority 24-hour request turnaround",
        ],
        popular: false,
        comingSoon: true,
    },
];

const FAQS = [
    {
        q: "How will professional branding actually benefit my business?",
        a: "A consistent, well-designed identity is often the deciding factor when two businesses offer something similar — customers subconsciously trust the one that looks more established. Better branding directly improves how seriously customers take your pricing, your ads, and your social presence, often without them realizing why.",
    },
    {
        q: "What makes getting branding done with Naralith worth it?",
        a: "Every logo is presented in real mockups — on a signboard, a cup, a phone screen — not floating on plain white, so you can actually judge how it will look in the real world. We build a complete, documented system from day one, not just a logo file, so your brand stays consistent as you grow and add new materials.",
    },
    {
        q: "Do I need to provide my own images or content for the designs?",
        a: "No — we can source suitable stock imagery or create custom illustrations as part of the package. If you have your own product photos or existing brand materials, sending them over just helps us match your world more closely from the start.",
    },
    {
        q: "How does the revision process actually work?",
        a: "A 'revision' means refining the direction we're already working on based on your feedback. If you want to explore a completely different concept after one's already been approved, that's treated as a new direction and quoted separately — we'll always tell you upfront before any extra cost applies.",
    },
    {
        q: "Why is Premium marked \"Coming Soon\"?",
        a: "Premium's monthly content engine and dedicated designer model needs a slightly larger, structured team to deliver reliably every single month without dropping quality — that's what we're actively building. Standard already gives you a complete brand system and enough collateral to launch and run confidently.",
    },
    {
        q: "Who owns the final designs once the project is done?",
        a: "You do — completely. Once final payment is made, all source files (AI, SVG, EPS) are handed over and the brand is fully yours to use, edit, or hand to any other designer in the future.",
    },
];

export default function GraphicDesignDetail() {
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
                                Great design doesn't just look right —{" "}
                                <span className="text-orange-400 font-bold">
                                    it makes people remember you.
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
                        src="/imgs/graphic-design.jpg"
                        alt="Graphic design and branding background"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/35 to-slate-950/55" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center mt-6 sm:mt-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] min-[330px]:text-xs font-semibold uppercase tracking-wider text-white mb-4 sm:mb-6">
                        Graphic Design & Branding
                    </span>

                    <h1 className="font-display text-2xl min-[330px]:text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white max-w-4xl">
                        A brand that looks inconsistent{" "}
                        <span className="text-orange-400">looks untrustworthy.</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 max-w-2xl text-xs min-[330px]:text-sm sm:text-lg leading-relaxed text-gray-200">
                        Mismatched fonts, colors, and half-finished logos quietly tell people you're not serious. We build clean, consistent visual identities — so every touchpoint, from your logo to your last Instagram post, looks like it belongs together.
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
                            Request a Design Sample
                        </Link>
                    </div>

                    {/* Bottom Sub-banner Card */}
                    <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 sm:p-5 text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-orange-400">
                            Logos · Brand Systems · Assets
                        </span>
                        <h3 className="mt-1 font-display text-sm sm:text-base font-semibold text-white">
                            Designed to Be Remembered
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-gray-300 max-w-lg mx-auto">
                            Every asset is built around one consistent identity, not a new style every time you need something new.
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
                                No vague deliverables — here's exactly what you get when you work with us on your brand.
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

                        <p className="mt-6 text-center text-xs text-muted">
                            *Within the agreed scope of the project — we'll always be upfront if a request goes beyond it.
                        </p>
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
                                    Look As Good As You Are
                                </span>
                                <h2 className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
                                    Ready for a brand identity that feels like you?
                                </h2>
                                <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                                    Let's build a visual identity that's consistent, intentional, and actually looks like it belongs to you.
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