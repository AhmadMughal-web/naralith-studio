import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiClock } from "react-icons/fi";

export default function Contact() {
    const [selectedService, setSelectedService] = useState("Web Development");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const whatsappNumber = "923249425513";

    const servicesList = [
        "Web Development",
        "UI/UX Design",
        "AI Chatbot",
        "Graphic Design",
        "Digital Growth"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    service: selectedService,
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to send message");
            }

            setSubmitted(true);
        } catch (err) {
            console.error("Contact form error:", err);
            setError("Something went wrong. Please try again or contact us via WhatsApp.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-20 lg:pb-28">

            <Helmet>
                <title>Naralith Studio — Contact Us | Start Your Project</title>
                <meta
                    name="description"
                    content="Get in touch with Naralith Studio for custom web development, AI integration, or design projects. We reply within one business day."
                />
                <meta
                    name="keywords"
                    content="contact web development agency, hire full stack developers, get a website quote"
                />
                <link rel="canonical" href="https://naralithstudio.com/contact" />
            </Helmet>

            {/* Background Decorative Ambient Glows */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-navy-900/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* Top Header Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
                        Let’s Connect
                    </span>
                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                        Have a Project in Mind? Let’s Talk
                    </h1>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-body text-center sm:text-center">
                        We are here to turn your ideas into high-performing digital products. Reach out via WhatsApp or fill out the form below.
                    </p>
                </div>

                {/* Top Quick-Contact Floating Cards */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {/* WhatsApp Card */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white transition-colors group-hover:bg-white group-hover:text-emerald-600">
                            <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-white transition-colors">Direct WhatsApp</h3>
                            <p className="text-xs text-body group-hover:text-white/90 transition-colors">Click to chat instantly</p>
                        </div>
                    </a>

                    {/* Email Card */}
                    <a
                        href="mailto:hello@agency.com"
                        className="group flex items-center gap-4 rounded-2xl border border-navy-700/15 bg-white/70 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-navy-900 hover:shadow-lg hover:shadow-navy-900/20"
                    >
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700/10 text-navy-700 transition-colors group-hover:bg-white/20 group-hover:text-white">
                            <FiMail className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-white transition-colors">Email Us</h3>
                            <p className="text-xs text-body group-hover:text-white/90 transition-colors">hello@agency.com</p>
                        </div>
                    </a>

                    {/* Fast Response Card */}
                    <div className="flex items-center gap-4 rounded-2xl border border-orange-500/20 bg-white/70 p-4 sm:p-5 backdrop-blur-md sm:col-span-2 lg:col-span-1">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                            <FiClock className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-navy-900">Fast Turnaround</h3>
                            <p className="text-xs text-body">Reply within 2–4 hours</p>
                        </div>
                    </div>

                </div>

                {/* Interactive Main Form Card */}
                <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/80 p-5 sm:p-8 lg:p-12 shadow-xl shadow-slate-200/50 backdrop-blur-lg">
                    {submitted ? (
                        <div className="py-8 sm:py-12 text-center">
                            <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-navy-900">Message Sent Successfully!</h3>
                            <p className="mt-2 text-xs sm:text-sm text-body">
                                Thank you for reaching out about{" "}
                                <span className="font-semibold text-orange-600">{selectedService}</span>.
                                We will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-xs sm:text-sm font-semibold text-orange-600 hover:underline"
                            >
                                Send another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">

                            {/* Service Selector Pills */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                                    1. Select a Service You Need
                                </label>
                                <div className="mt-3 flex flex-wrap gap-2.5 sm:gap-3">
                                    {servicesList.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setSelectedService(service)}
                                            className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-medium transition-all duration-200 ${selectedService === service
                                                ? "bg-navy-900 text-white shadow-md scale-105 ring-2 ring-navy-900/20"
                                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Details */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                                    2. Your Details
                                </label>
                                <div className="mt-3 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Full Name *"
                                            className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email Address *"
                                            className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                                    3. Project Details
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us briefly about your goals or requirements..."
                                    className="mt-3 w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-navy-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-xs sm:text-sm font-medium text-red-500 text-center -mt-2">
                                    {error}
                                </p>
                            )}

                            {/* Form Action Controls */}
                            <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                                <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
                                    * We value your privacy. Your information is strictly confidential.
                                </p>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all active:scale-95 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {loading ? "Sending..." : "Send Inquiry →"}
                                </button>
                            </div>

                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}