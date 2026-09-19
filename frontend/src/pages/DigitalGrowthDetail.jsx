import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiCreditCard, FiLock, FiChevronDown } from "react-icons/fi";

const WHATSAPP_NUMBER = "923249425513"; // replace with your real number
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in Digital Growth / SEO services for my website."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
    {
        title: "Technical SEO Foundation",
        desc: "Proper site structure, meta tags, sitemaps, and clean code so search engines can actually crawl and rank you.",
    },
    {
        title: "On-Page Optimization",
        desc: "Keyword-aligned headings, content structure, and internal linking that help the right pages get found.",
    },
    {
        title: "Speed & Core Web Vitals",
        desc: "Fast load times and optimized assets — site speed is now a direct ranking factor, not just a nice-to-have.",
    },
    {
        title: "Analytics & Search Console",
        desc: "Properly configured tracking, so you can see what's actually working instead of guessing.",
    },
    {
        title: "Local SEO Setup",
        desc: "Google Business Profile and structured data configured, so local searches can actually find your business.",
    },
    {
        title: "Ongoing Monitoring",
        desc: "Regular checks to catch ranking drops, broken links, or technical issues before they cost you traffic.",
    },
];

const PROCESS = [
    {
        step: "01",
        title: "SEO Audit",
        desc: "We review your current site — technical issues, content gaps, and what's already working — before changing anything.",
    },
    {
        step: "02",
        title: "Strategy & Roadmap",
        desc: "A clear, prioritized plan based on what will actually move the needle for your specific site, not generic advice.",
    },
    {
        step: "03",
        title: "Implementation",
        desc: "We make the technical and on-page changes directly — clean, documented, and built into your site the right way.",
    },
    {
        step: "04",
        title: "Monitor & Refine",
        desc: "We track rankings and traffic after launch, and adjust the approach based on real data, not one-time guesses.",
    },
];

const PRICING = [
    {
        tier: "Basic",
        price: "PKR 30,000 – 40,000",
        priceNote: "per month, minimum 3 months + PKR 20,000 setup",
        delivery: "2–3 working days to go live",
        payment: "Monthly advance billing, setup fee due with month 1",
        features: [
            "10 local keywords tracked",
            "Full Google Business Profile optimization + 4 posts/month",
            "30-point technical audit with written fix report",
            "Core Web Vitals fixes, GSC + GA4 setup",
            "15–20 local citations, NAP consistency",
            "1 page content optimization/update per month",
            "1-page monthly report — rankings, calls, directions, clicks",
        ],
        popular: false,
        comingSoon: false,
    },
    {
        tier: "Standard",
        price: "PKR 75,000 – 95,000",
        priceNote: "per month, minimum 6 months + PKR 35,000 setup",
        delivery: "4–5 working days to go live",
        payment: "Monthly advance billing, setup fee due with month 1",
        features: [
            "25–30 keywords — city-wide + branded + long-tail",
            "Automated post-visit review generation system",
            "4 SEO blog posts/month (1,200+ words) + location pages",
            "5–8 quality backlinks/month — guest posts, local PR",
            "Full schema markup + site architecture improvements",
            "Conversion tracking — calls, forms, WhatsApp clicks",
            "Detailed monthly report + 45-minute strategy call",
        ],
        popular: true,
        comingSoon: false,
    },
    {
        tier: "Premium",
        price: "PKR 150,000 – 200,000",
        priceNote: "per month, minimum 6 (12 recommended) + PKR 60,000 setup",
        delivery: "6–7 working days to go live",
        payment: "Monthly advance billing, setup fee due with month 1",
        features: [
            "60+ keywords — national + multi-city + commercial intent",
            "Multi-location Google Business Profile management",
            "8 content pieces/month — blogs, landing pages, buyer guides",
            "12–15 backlinks/month + tier-1 publication placements",
            "GEO / AI Search Optimization — visibility in AI answer engines",
            "Live dashboard with 24/7 access + bi-weekly calls",
            "Quarterly strategy reset + dedicated manager",
        ],
        popular: false,
        comingSoon: true,
    },
];

const FAQS = [
    {
        q: "How will SEO actually benefit my business, in real numbers?",
        a: "For a local business, this is usually the highest-ROI marketing channel available. Once a page starts ranking, that traffic keeps arriving without an ongoing ad spend. A gym that lands even 3 new members a month from organic search often covers the entire retainer cost — and those members tend to stay far longer than the campaign that brought them in.",
    },
    {
        q: "What makes running SEO with Naralith worth it?",
        a: "Every report we send shows real numbers — rankings, calls, direction requests, and website clicks — not vague claims of 'traffic improving.' We start with a full technical audit before touching anything, so the strategy is based on what your site actually needs, not a generic checklist applied to every client.",
    },
    {
        q: "Will you need access to my Google account or website backend?",
        a: "Yes, but never your passwords. Google Search Console, Analytics, and Google Business Profile all support adding us as a manager or team member directly — you stay the owner and can remove our access anytime. For website changes, we either get limited CMS/hosting access or work with your existing developer.",
    },
    {
        q: "Why is there a minimum commitment period?",
        a: "SEO compounds over time — a single month is barely enough to complete the technical setup, let alone show ranking movement. Most clients start seeing measurable results from month 3 onward. Standard and Premium include a review checkpoint at month 4: if agreed targets are missed, you can exit with 30 days' notice.",
    },
    {
        q: "How long until I actually see results?",
        a: "SEO is not instant, and any agency claiming otherwise isn't being honest with you. Google Business Profile improvements can show within 2–4 weeks, but organic website rankings typically start moving around month 3–4, with meaningful traffic growth by month 5–6. This is standard across the industry — it takes time for search engines to trust and rank a site, and that trust compounds the longer the work continues.",
    },
    {
        q: "Why is Premium marked \"Coming Soon\"?",
        a: "Premium's tier-1 publication backlinks and GEO (AI search) optimization depend on real publisher relationships and a dedicated content team — both are things we're actively building rather than promising on day one. Standard already covers what the large majority of growing businesses need: full technical SEO, consistent content, and measurable local ranking improvement.",
    },
    {
        q: "What happens if I stop the retainer later?",
        a: "Rankings don't disappear overnight — the technical work and content already published continue working for a while. But since competitors keep publishing and building links, positions tend to drift down gradually without ongoing work. SEO is an ongoing channel, not a one-time fix.",
    },
];

export default function DigitalGrowthDetail() {
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
                                A great website nobody finds{" "}
                                <span className="text-orange-400 font-bold">
                                    isn't growing your business.
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
                        src="/imgs/digital-growth.jpg"
                        alt="Digital Growth Background"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/35 to-slate-950/55" />
                </div>

                {/* Hero Overlay Content */}
                <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center mt-6 sm:mt-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] min-[330px]:text-xs font-semibold uppercase tracking-wider text-white mb-4 sm:mb-6">
                        Digital Growth & Technical SEO
                    </span>

                    <h1 className="font-display text-2xl min-[330px]:text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white max-w-4xl">
                        Your customers are searching —{" "}
                        <span className="text-orange-400">but they can't find you.</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 max-w-2xl text-xs min-[330px]:text-sm sm:text-lg leading-relaxed text-gray-200">
                        Slow load times, broken structure, missing meta tags — most sites lose traffic to issues that never get fixed. We build the technical SEO foundation right, so Google can actually find, crawl, and rank you.
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
                            Request a Free SEO Audit
                        </Link>
                    </div>

                    {/* Bottom Feature Sub-banner Card */}
                    <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 sm:p-5 text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-orange-400">
                            Technical SEO · Analytics
                        </span>
                        <h3 className="mt-1 font-display text-sm sm:text-base font-semibold text-white">
                            Built Into Your Site, Not Bolted On
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-gray-300 max-w-lg mx-auto">
                            SEO fundamentals done properly at the code level — not a plugin patched on after the fact.
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
                                No vague deliverables — here's exactly what you get when you work with us on SEO and growth.
                            </p>
                        </div>

                        {/* Dynamic Grid */}
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
                                Transparent pricing, fixed setup days, written scope — no hidden charges.
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
                                    Stop Losing Traffic to Fixable Problems
                                </span>
                                <h2 className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
                                    Ready to make your website actually findable?
                                </h2>
                                <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                                    Let's fix the technical foundation and get your site properly set up to rank — not just look good.
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