import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PORTFOLIO | Desarrollador Web",
    template: "%s | PORTFOLIO",
  },
  description:
    "Portafolio profesional de desarrollo web. Especializado en Next.js, TypeScript y soluciones modernas.",
  keywords: [
    "desarrollador web",
    "Next.js",
    "TypeScript",
    "React",
    "portafolio",
    "frontend",
    "fullstack",
  ],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio.vercel.app",
    siteName: "PORTFOLIO",
    title: "PORTFOLIO | Desarrollador Web",
    description:
      "Portafolio profesional de desarrollo web. Especializado en Next.js, TypeScript y soluciones modernas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTFOLIO | Desarrollador Web",
    description:
      "Portafolio profesional de desarrollo web. Especializado en Next.js, TypeScript y soluciones modernas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col`}
      >
        {/* Radial gradient background overlay */}
        <div className="pointer-events-none fixed inset-0 opacity-60 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_55%)]" />

        <Navbar />
        <main className="flex-1 pt-16 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
