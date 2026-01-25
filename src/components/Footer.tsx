import Link from "next/link";

// Logo SVG component (same as Navbar)
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

// Icon components
function LinkIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    );
}

function CodeIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    );
}

function ShareIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="border-t border-[#232f48] py-12 px-4 md:px-40 bg-[#0a0f18]">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Name */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="size-6 text-emerald-500">
                        <Logo />
                    </div>
                    <span className="font-bold text-lg text-white">Mario Rodríguez</span>
                </Link>

                {/* Copyright */}
                <p className="text-slate-500 text-sm">
                    © 2024 Mario Rodríguez. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="text-slate-400 hover:text-emerald-500 transition-colors"
                        aria-label="Website"
                    >
                        <LinkIcon />
                    </a>
                    <a
                        href="#"
                        className="text-slate-400 hover:text-emerald-500 transition-colors"
                        aria-label="GitHub"
                    >
                        <CodeIcon />
                    </a>
                    <a
                        href="#"
                        className="text-slate-400 hover:text-emerald-500 transition-colors"
                        aria-label="Share"
                    >
                        <ShareIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}
