"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#stack", label: "Stack" },
    { href: "/contact", label: "Contact" },
];

// Logo SVG component
function Logo() {
    return (
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
                fillRule="evenodd"
            />
            <path
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#232f48] bg-[#101622]/80 backdrop-blur-md px-4 md:px-20 lg:px-40 py-3">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4 text-emerald-500 hover:text-emerald-400 transition-colors">
                    <div className="size-8">
                        <Logo />
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-tight">
                        Mario Rodríguez
                    </h2>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-300 hover:text-emerald-500 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-emerald-500 text-white text-sm font-bold tracking-wide hover:bg-emerald-600 transition-colors">
                        <span className="truncate">Download Resume (PDF)</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 -mr-2 text-slate-400 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-[#232f48] mt-3 pt-4 pb-2">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-slate-300 hover:text-emerald-500 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="mt-2 mx-4 flex items-center justify-center rounded-lg h-10 px-4 bg-emerald-500 text-white text-sm font-bold tracking-wide hover:bg-emerald-600 transition-colors">
                            Download Resume (PDF)
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
