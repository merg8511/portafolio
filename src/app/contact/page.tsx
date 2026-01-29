"use client";

import { useState, FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

// ============================================
// ICONS
// ============================================

function EmailIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}

// ============================================
// DATA
// ============================================

const phone = "50372330330";
const text = encodeURIComponent("Hi Mario! I saw your portfolio and I'd like to discuss a project.");
const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

const contactMethods = [
    {
        label: "Email",
        value: "maerodriguezdev@gmail.com",
        href: "mailto:maerodriguezdev@gmail.com",
        icon: <EmailIcon />,
    },
    {
        label: "WhatsApp",
        value: "+503 7233 0330",
        href: whatsappUrl,
        icon: <SiWhatsapp className="w-5 h-5" />,
    },
    {
        label: "GitHub",
        value: "github.com/maerodriguezdev",
        href: "https://github.com/maerodriguezdev",
        icon: <SiGithub className="w-5 h-5" />,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/mearodriguezdev",
        href: "https://linkedin.com/in/mearodriguezdev",
        icon: <SiLinkedin className="w-5 h-5" />,
    },
];

// ============================================
// FORM COMPONENT
// ============================================

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    const inputClasses = "w-full px-4 py-3 bg-[#1a2333] border border-[#232f48] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClasses}
                        placeholder="Your name"
                        disabled={status === "loading"}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClasses}
                        placeholder="your@email.com"
                        disabled={status === "loading"}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject <span className="text-slate-500">(optional)</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClasses}
                    placeholder="What's this about?"
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                    disabled={status === "loading"}
                />
            </div>

            {/* Error Message */}
            {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}

            {/* Success Message */}
            {status === "success" && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm flex items-center gap-2">
                    <CheckIcon />
                    Message sent successfully! I&apos;ll get back to you soon.
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-500/20"
            >
                {status === "loading" ? (
                    <>
                        <SpinnerIcon />
                        Sending...
                    </>
                ) : status === "success" ? (
                    <>
                        <CheckIcon />
                        Sent!
                    </>
                ) : (
                    <>
                        <SendIcon />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}

// ============================================
// PAGE COMPONENT
// ============================================

export default function ContactPage() {
    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-16 sm:py-24">
            <Reveal>
                <header className="mb-12 text-center">
                    <p className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2">
                        Get in Touch
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white uppercase">
                        Contact
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hello? I&apos;d love to hear from you.
                        Fill out the form below and I&apos;ll get back to you within 24-48 hours.
                    </p>
                </header>
            </Reveal>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                {/* Contact Form - Left Side */}
                <Reveal delay={0.1} className="lg:col-span-3">
                    <div className="glass-card p-8 rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="text-emerald-500"><EmailIcon /></span>
                            Send a Message
                        </h2>
                        <ContactForm />
                    </div>
                </Reveal>

                {/* Contact Info - Right Side */}
                <Reveal delay={0.2} className="lg:col-span-2">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white mb-6">Other Ways to Connect</h2>
                        {contactMethods.map((method) => (
                            <a
                                key={method.label}
                                href={method.href}
                                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                className="group flex items-center gap-4 p-5 glass-card rounded-xl hover:border-emerald-500/50 transition-all"
                            >
                                <div className="w-10 h-10 flex items-center justify-center text-emerald-500 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                                    {method.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-emerald-500 transition-colors">
                                        {method.label}
                                    </h3>
                                    <p className="text-sm text-slate-400">{method.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Availability Badge */}
                    <div className="mt-8 p-6 glass-card rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest">
                                Available for Projects
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Currently accepting new projects. Let&apos;s discuss how I can help bring your ideas to life.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
