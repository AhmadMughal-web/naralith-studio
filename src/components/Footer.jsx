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

// Updated links to route directly to dedicated detail pages
const SERVICES_NAV = [
    { label: "UI/UX Design", path: "/ui-ux-design" },
    { label: "Web Development", path: "/web-development" },
    { label: "AI Chatbot", path: "/ai-chatbot" },
    { label: "Graphic Design", path: "/graphic-design" },
    { label: "Digital Growth", path: "/services" }, // Digital Growth component abhi commented hai is waja se main services page ka link diya hai
];
export default function Footer() {
    const whatsappNumber = "923001234567";

    return (
        <footer className="relative border-t border-hairline/80 bg-gradient-to-r from-navy-700/[0.04] via-white/80 to-orange-500/[0.05] overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-8">

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

                    {/* Left Container: Logo and Text side-by-side with tight gap */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 lg:col-span-7">

                        {/* Logo */}
                        <Link to="/" className="inline-block shrink-0 focus:outline-none">
                            <img
                                src="/imgs/logo2.png"
                                alt="Naralith Studio"
                                className="h-28 sm:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </Link>

                        {/* Text + Button closely attached */}
                        <div className="flex flex-col items-start justify-center max-w-sm">
                            <p className="text-xs sm:text-sm leading-relaxed text-body">
                                Have a visionary project in mind? We craft high-impact graphic designs and engineer custom web apps that elevate your brand effortlessly.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-600 transition-all duration-200 hover:bg-orange-500 hover:text-white"
                            >
                                Start a Project
                                <FontAwesomeIcon icon={faPaperPlane} className="text-[10px]" />
                            </Link>
                        </div>

                    </div>


                    {/* Section 3: Navigation Links on Right */}
                    <div className="flex flex-wrap items-start justify-between gap-8 sm:gap-12 lg:col-span-5 lg:justify-end">

                        {/* Company Column */}
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                Company
                            </h3>
                            <ul className="mt-3 space-y-2">
                                {COMPANY_NAV.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="inline-block text-sm font-medium text-body transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                Services
                            </h3>
                            <ul className="mt-3 space-y-2">
                                {SERVICES_NAV.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-body transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-hairline/80 pt-4 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
                    <p>© {new Date().getFullYear()} Naralith Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-navy-900 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-navy-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}