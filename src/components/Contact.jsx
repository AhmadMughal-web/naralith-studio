import React, { useState } from "react";

export default function Contact() {
    const [selectedService, setSelectedService] = useState("Web Development");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    // Aap apna WhatsApp number yahan edit kar sakte hain (Country code ke saath, e.g., 923001234567)
    const whatsappNumber = "923001234567";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Top Header Section */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
                        Let’s Connect
                    </span>
                    <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-navy-900">
                        Have a Project in Mind? Let’s Talk
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                        We are here to turn your ideas into high-performing digital products. Reach out via WhatsApp or fill out the form below.
                    </p>
                </div>

                {/* Top Floating Quick-Contact Bar */}
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    {/* Direct WhatsApp Chat Box */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white transition-colors group-hover:bg-white group-hover:text-emerald-600">
                            {/* SVG WhatsApp Icon */}
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-navy-900 group-hover:text-white transition-colors">Direct WhatsApp</h3>
                            <p className="text-xs text-body group-hover:text-white/90 transition-colors">Click to chat instantly</p>
                        </div>
                    </a>

                    {/* Email Box */}
                    <a
                        href="mailto:hello@agency.com"
                        className="group flex items-center gap-4 rounded-2xl border border-navy-700/20 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-navy-900 hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700/10 text-navy-700 transition-colors group-hover:bg-white/20 group-hover:text-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-navy-900 group-hover:text-white transition-colors">Email Us</h3>
                            <p className="text-xs text-body group-hover:text-white/90 transition-colors">hello@agency.com</p>
                        </div>
                    </a>

                    {/* Response Box */}
                    <div className="flex items-center gap-4 rounded-2xl border border-orange-500/20 bg-white/60 p-5 backdrop-blur-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-navy-900">Fast Turnaround</h3>
                            <p className="text-xs text-body">Reply within 2–4 hours</p>
                        </div>
                    </div>

                </div>

                {/* Main Interactive Form Card */}
                <div className="mt-12 rounded-3xl border border-hairline/80 bg-white/70 p-8 shadow-xl backdrop-blur-md sm:p-12">
                    {submitted ? (
                        <div className="py-12 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-navy-900">Message Sent Successfully!</h3>
                            <p className="mt-2 text-sm text-body">
                                Thank you for reaching out. We will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-sm font-semibold text-orange-600 hover:underline"
                            >
                                Send another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                            {/* Interactive Service Selector Pills */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                                    1. Select a Service You Need
                                </label>
                                <div className="mt-3 flex flex-wrap gap-3">
                                    {servicesList.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setSelectedService(service)}
                                            className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${selectedService === service
                                                    ? "bg-navy-900 text-white shadow-md scale-105"
                                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Fields */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                                    2. Your Details
                                </label>
                                <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Full Name *"
                                            className="w-full rounded-2xl border border-hairline bg-slate-50/50 px-5 py-3.5 text-sm text-navy-900 focus:border-orange-500 focus:bg-white focus:outline-none"
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
                                            className="w-full rounded-2xl border border-hairline bg-slate-50/50 px-5 py-3.5 text-sm text-navy-900 focus:border-orange-500 focus:bg-white focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Details */}
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
                                    className="mt-3 w-full rounded-2xl border border-hairline bg-slate-50/50 px-5 py-3.5 text-sm text-navy-900 focus:border-orange-500 focus:bg-white focus:outline-none"
                                />
                            </div>

                            {/* Form Action Button */}
                            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                                <p className="text-xs text-muted">
                                    * We value your privacy. Your information is strictly confidential.
                                </p>
                                <button
                                    type="submit"
                                    className="btn-primary inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                                >
                                    Send Inquiry →
                                </button>
                            </div>

                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}