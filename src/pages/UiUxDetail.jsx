import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923000000000"; // replace with your real number
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello! I'm interested in UI/UX Design services for my project."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
    {
        title: "User-Centered Research",
        desc: "We start by understanding your actual users — their goals, friction points, and behavior — before a single pixel is drawn.",
    },
    {
        title: "Wireframes & User Flows",
        desc: "Every screen is mapped out logically first, so navigation feels obvious and nothing gets built on guesswork.",
    },
    {
        title: "High-Fidelity UI Design",
        desc: "Pixel-perfect visual design, typography, and layout hierarchy — built to convert visitors into customers, not just look nice.",
    },
    {
        title: "Interactive Prototypes",
        desc: "Clickable Figma prototypes so you can test and approve the full user journey before we write a single line of code.",
    },
    {
        title: "Design Systems",
        desc: "Reusable components, color tokens, and style guides — so your product stays visually consistent as it grows.",
    },
    {
        title: "Handoff & Dev Support",
        desc: "Developer-ready specs and assets, plus direct support during build so nothing gets lost in translation.",
    },
];

const PROCESS = [
    { step: "01", title: "Discovery Call", desc: "We learn about your business, users, and goals — no cost, no obligation." },
    { step: "02", title: "Wireframes", desc: "Low-fidelity structure first, so we agree on layout before visual design begins." },
    { step: "03", title: "Visual Design", desc: "Full UI design in your brand colors, ready to review in Figma." },
    { step: "04", title: "Handoff", desc: "Clean, developer-ready files — or we build it ourselves, end to end." },
];

export default function UiUxDetail() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Ambient corner glows — consistent with the rest of the site */}
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
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-white/85 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
                    <Link to="/" className="flex shrink-0 items-center" aria-label="Naralith Studio, home">
                        <img src="/imgs/logo.png" alt="Naralith Studio" className="h-8 w-auto sm:h-9" />
                    </Link>

                    <div className="hidden md:flex md:items-center md:justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-4 py-1.5">
                            <p className="whitespace-nowrap text-xs font-semibold text-ink sm:text-sm">
                                First impressions decide everything.{" "}
                                <span className="text-gradient font-bold">
                                    We make sure yours works.
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="btn-primary shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm"
                    >
                        Get in Touch
                    </Link>
                </div>
            </header>

            <main className="relative z-10 pb-16 pt-32 lg:pt-36">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    {/* ---------- HERO ---------- */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                                UI/UX & Product Design
                            </span>

                            <h1 className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                                Turn complex ideas into interfaces{" "}
                                <span className="text-gradient">people actually enjoy using.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                                A confusing product loses customers before they even get to
                                your pricing page. We combine real user research with clean,
                                deliberate visual design to build interfaces that are easy to
                                use — and easy to trust.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>

                                <Link
                                    to="/contact"
                                    className="btn-secondary rounded-full px-7 py-3.5 text-sm font-semibold"
                                >
                                    Request a Design Audit
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="glass-card overflow-hidden rounded-3xl p-6">
                                <img
                                    src="/imgs/ui-ux.jpg"
                                    alt="UI/UX design process for Naralith Studio"
                                    width="640"
                                    height="360"
                                    className="h-56 w-full rounded-2xl object-cover"
                                    loading="eager"
                                />
                                <div className="mt-6 text-center">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                                        Figma & Industry-Standard Tools
                                    </span>
                                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                                        Modern, Scalable Design
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-body">
                                        Reusable components and clean design tokens, handed off
                                        in a format any developer can build from.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- FEATURES ---------- */}
                    <div className="mt-24 lg:mt-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                What's included
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                                No vague deliverables — here's exactly what you get when you
                                work with us on UI/UX.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {FEATURES.map((item, idx) => (
                                <div key={item.title} className="glass-card rounded-2xl p-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-sm font-semibold text-navy-700">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-body">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- PROCESS ---------- */}
                    <div className="mt-24 lg:mt-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                How we work
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                                A clear process, start to finish — so you always know what's
                                happening next.
                            </p>
                        </div>

                        <div className="relative mx-auto mt-14 max-w-2xl">
                            <div
                                className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-navy-700/40 via-hairline to-orange-500/40"
                                aria-hidden="true"
                            />
                            {PROCESS.map((item) => (
                                <div key={item.step} className="relative flex gap-6 pb-12 last:pb-0">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-navy-700 shadow-[0_0_0_3px_white]">
                                        <span className="text-gradient">{item.step}</span>
                                    </div>
                                    <div className="pt-1.5">
                                        <h3 className="font-display text-lg font-semibold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-body">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------- CTA BANNER ---------- */}
                    <div className="btn-primary mt-24 overflow-hidden rounded-3xl p-8 sm:p-12 lg:mt-28">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Turn Visitors Into Customers
                                </span>
                                <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                                    Ready to redesign your product's interface?
                                </h2>
                                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                                    Let's build a clean, human-centered UI/UX that earns your
                                    users' trust — and holds up as your product grows.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-transform hover:scale-105"
                                >
                                    <FaWhatsapp size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ---------- BOTTOM ACTION BAR ---------- */}
                    <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-6">
                        <Link
                            to="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Homepage
                        </Link>

                        <Link
                            to="/services"
                            className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-wider sm:w-auto"
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