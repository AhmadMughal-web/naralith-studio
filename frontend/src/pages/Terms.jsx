import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiMail } from "react-icons/fi";

const SECTIONS = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using the Naralith Studio website, or engaging us for any service, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
    },
    {
        title: "2. Services Provided",
        content: `Naralith Studio provides web development, UI/UX design, AI chatbot and automation solutions, graphic design, and digital growth services. The exact scope, timeline, and deliverables for any project are defined separately in a project agreement or proposal shared directly with the client.`,
    },
    {
        title: "3. Client Responsibilities",
        content: `Clients are expected to provide accurate project requirements, timely feedback, and any content or assets needed to complete the project. Delays in providing necessary information may affect agreed project timelines.`,
    },
    {
        title: "4. Payments",
        content: `Payment terms, including deposits, milestones, and final payment, are agreed upon individually for each project before work begins. Naralith Studio reserves the right to pause work on a project if payment terms are not met as agreed.`,
    },
    {
        title: "5. Intellectual Property",
        content: `Upon full payment, clients receive ownership of the final deliverables created specifically for their project. Naralith Studio retains the right to showcase completed work in its portfolio, case studies, and marketing materials, unless otherwise agreed in writing.`,
    },
    {
        title: "6. Revisions & Project Scope",
        content: `Each project includes a reasonable number of revisions as agreed upon at the start of the engagement. Requests that fall outside the original agreed scope may be treated as additional work and billed separately.`,
    },
    {
        title: "7. Limitation of Liability",
        content: `Naralith Studio will make every reasonable effort to deliver high-quality, reliable work. However, we are not liable for indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of revenue or data, except where required by law.`,
    },
    {
        title: "8. Termination",
        content: `Either party may terminate an ongoing project engagement with written notice. In such cases, the client is responsible for payment of all work completed up to the termination date.`,
    },
    {
        title: "9. Changes to These Terms",
        content: `We may update these Terms of Service from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.`,
    },
];

export default function Terms() {
    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>Terms of Service — Naralith Studio</title>
                <meta
                    name="description"
                    content="Read Naralith Studio's Terms of Service governing the use of our website and the services we provide."
                />
                <link rel="canonical" href="https://naralithstudio.com/terms" />
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
                        Terms of Service
                    </h1>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500">
                        Last updated: September 2026
                    </p>
                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-body">
                        These Terms of Service ("Terms") govern your use of the Naralith Studio
                        website and any services provided by Naralith Studio ("we", "our", or "us").
                        Please read these Terms carefully before using our website or engaging us for
                        a project.
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
                        Questions about these terms?
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
                        to="/privacy"
                        className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                    >
                        View Privacy Policy
                    </Link>
                </div>

            </div>
        </div>
    );
}