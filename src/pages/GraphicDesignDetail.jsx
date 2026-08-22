import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923000000000"; // replace with your real number
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

export default function GraphicDesignDetail() {
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
                                Great design doesn't just look right —{" "}
                                <span className="text-gradient font-bold">
                                    it makes people remember you.
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
                                Graphic Design & Branding
                            </span>

                            <h1 className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                                A brand that looks inconsistent{" "}
                                <span className="text-gradient">looks untrustworthy.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                                Mismatched fonts, colors, and half-finished logos quietly
                                tell people you're not serious. We build clean, consistent
                                visual identities — so every touchpoint, from your logo to
                                your last Instagram post, looks like it belongs together.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                                >
                                    <FaWhatsapp size={20} />
                                    Chat on WhatsApp
                                </a>

                                <Link
                                    to="/contact"
                                    className="btn-secondary rounded-full px-7 py-3.5 text-sm font-semibold"
                                >
                                    Request a Design Sample
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="glass-card overflow-hidden rounded-3xl p-6">
                                <img
                                    src="/imgs/graphic-design.jpg"
                                    alt="Graphic design and branding work by Naralith Studio"
                                    width="640"
                                    height="360"
                                    className="h-56 w-full rounded-2xl object-cover"
                                    loading="eager"
                                />
                                <div className="mt-6 text-center">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                                        Logos · Brand Systems · Assets
                                    </span>
                                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                                        Designed to Be Remembered
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-body">
                                        Every asset is built around one consistent identity, not
                                        a new style every time you need something new.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- WHAT'S INCLUDED (glass-card grid) ---------- */}
                    <div className="mt-24 lg:mt-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                What's included
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                                No vague deliverables — here's exactly what you get when you
                                work with us on your brand.
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

                        <p className="mt-6 text-center text-xs text-muted">
                            *Within the agreed scope of the project — we'll always be
                            upfront if a request goes beyond it.
                        </p>
                    </div>

                    {/* ---------- HOW WE WORK (vertical connected timeline — deliberately
              different from the card grid above) ---------- */}
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
                                    Look As Good As You Are
                                </span>
                                <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                                    Ready for a brand identity that feels like you?
                                </h2>
                                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                                    Let's build a visual identity that's consistent,
                                    intentional, and actually looks like it belongs to you.
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

                    {/* ---------- BOTTOM ACTION BAR (acts as this page's footer) ---------- */}
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