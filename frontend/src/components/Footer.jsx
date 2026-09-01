import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const COMPANY_NAV = [
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/team" },
    { label: "Our Works", path: "/work" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
];

const SERVICES_NAV = [
    { label: "UI/UX Design", path: "/ui-ux-design" },
    { label: "Web Development", path: "/web-development" },
    { label: "AI Chatbot", path: "/ai-chatbot" },
    { label: "Graphic Design", path: "/graphic-design" },
    { label: "Digital Growth", path: "/services" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-hairline/80 bg-gradient-to-r from-navy-700/[0.04] via-white/80 to-orange-500/[0.05] overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10">

                {/* Main Container */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

                    {/* LEFT BLOCK: Logo & Text */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:max-w-xl shrink-0">
                        <Link to="/" className="inline-block shrink-0 focus:outline-none">
                            <img
                                src="/imgs/logo2.png"
                                alt="Naralith Studio"
                                className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
                            />
                        </Link>

                        <div className="flex flex-col justify-center text-left">
                            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-body max-w-sm">
                                Crafting high-impact graphic designs & custom web apps that elevate your brand effortlessly.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-2.5 self-start inline-flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
                            >
                                Start a Project
                                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT BLOCK: Links Grid with proper mobile inner padding */}
                    <div className="w-full lg:max-w-none mx-auto lg:mx-0 grid grid-cols-2 px-3 sm:px-0 gap-8 lg:gap-12 pt-4 lg:pt-0 border-t lg:border-t-0 border-hairline/50">
                        {/* Company Column */}
                        <div className="pl-2 sm:pl-0">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600">
                                Company
                            </h3>
                            <ul className="mt-2.5 space-y-1.5">
                                {COMPANY_NAV.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="block text-xs sm:text-sm font-medium text-body hover:text-orange-600 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div className="pl-2 sm:pl-0">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600">
                                Services
                            </h3>
                            <ul className="mt-2.5 space-y-1.5">
                                {SERVICES_NAV.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="block text-xs sm:text-sm font-medium text-body hover:text-orange-600 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="mt-8 border-t border-hairline/60 pt-4 flex flex-row items-center justify-between text-xs text-muted">
                    <p>© {new Date().getFullYear()} Naralith Studio.</p>
                    <div className="flex gap-4">
                        <Link to="/privacy" className="hover:text-navy-900 transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-navy-900 transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}