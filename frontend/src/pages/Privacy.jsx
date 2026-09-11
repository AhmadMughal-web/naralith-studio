import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiMail } from "react-icons/fi";

const SECTIONS = [
    {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you fill out our contact form, apply for a role, or communicate with us via email or WhatsApp. This may include your name, email address, phone number, company details, project requirements, and — for job applicants — your resume, education, and professional links.

We also automatically collect limited technical information when you visit our website, such as browser type, device information, and general usage data, to help us understand and improve how our site performs.`,
    },
    {
        title: "2. How We Use Your Information",
        content: `We use the information we collect to:

- Respond to your inquiries and provide the services you've requested
- Evaluate job applications and communicate with candidates
- Improve our website, services, and communication with clients
- Send relevant updates about your project or application, when applicable

We do not sell, rent, or trade your personal information to third parties.`,
    },
    {
        title: "3. How We Protect Your Information",
        content: `We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
    },
    {
        title: "4. Third-Party Services",
        content: `We may use trusted third-party services (such as email delivery providers, hosting providers, or analytics tools) to help us operate our website and communicate with you. These providers only receive the information necessary to perform their specific function and are not authorized to use your data for any other purpose.`,
    },
    {
        title: "5. Data Retention",
        content: `We retain personal information only for as long as necessary to fulfil the purpose it was collected for — such as completing a project, responding to an inquiry, or maintaining a record of a job application — unless a longer retention period is required by law.`,
    },
    {
        title: "6. Your Rights",
        content: `You have the right to request access to, correction of, or deletion of the personal information we hold about you. If you'd like to exercise any of these rights, please contact us using the details below and we'll respond promptly.`,
    },
    {
        title: "7. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated revision date.`,
    },
];

export default function Privacy() {
    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>Privacy Policy — Naralith Studio</title>
                <meta
                    name="description"
                    content="Read Naralith Studio's Privacy Policy to understand how we collect, use, and protect your personal information."
                />
                <link rel="canonical" href="https://naralithstudio.com/privacy" />
            </Helmet>

            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">

                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                >
                    <FiArrowLeft size={14} />
                    Back to Home
                </Link>

                <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-700/20 bg-navy-700/5 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-navy-700">
                        Legal
                    </span>
                    <h1 className="mt-3 font-display text-2xl sm:text-4xl font-bold leading-tight text-ink">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500">
                        Last updated: September 2026
                    </p>
                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-body">
                        Naralith Studio ("we", "our", or "us") respects your privacy and is committed
                        to protecting the personal information you share with us. This Privacy Policy
                        explains what information we collect, how we use it, and the choices you have
                        regarding your data when you use our website or work with us.
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-10">
                    {SECTIONS.map((section) => (
                        <div key={section.title}>
                            <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-3">
                                {section.title}
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed text-body whitespace-pre-line">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 text-center">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink">
                        Questions about this policy?
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-body">
                        Reach out and we'll be happy to clarify anything.
                    </p>
                    <a
                        href="mailto:naralithstudio@gmail.com"
                        className="mt-5 inline-flex items-center gap-2 rounded-full btn-primary px-6 py-2.5 text-xs sm:text-sm font-semibold"
                    >
                        <FiMail size={14} />
                        naralithstudio@gmail.com
                    </a>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-5">
                    <Link
                        to="/"
                        className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                    >
                        <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <Link
                        to="/terms"
                        className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                    >
                        View Terms of Service
                    </Link>
                </div>

            </div>
        </div>
    );
}