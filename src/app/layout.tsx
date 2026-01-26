import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mario Rodríguez | Full-Stack Developer",
    template: "%s | Mario Rodríguez",
  },
  description:
    "Construyo aplicaciones web rápidas y escalables, con UI limpia y APIs robustas. Especializado en .NET y Next.js.",
  keywords: [
    "desarrollador web",
    "full-stack developer",
    ".NET",
    "Next.js",
    "Blazor",
    "React",
    "TypeScript",
    "portafolio",
  ],
  authors: [{ name: "Mario Rodríguez" }],
  creator: "Mario Rodríguez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mariorodriguez.dev",
    siteName: "Mario Rodríguez Portfolio",
    title: "Mario Rodríguez | Full-Stack Developer",
    description:
      "Construyo aplicaciones web rápidas y escalables, con UI limpia y APIs robustas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Rodríguez | Full-Stack Developer",
    description:
      "Construyo aplicaciones web rápidas y escalables, con UI limpia y APIs robustas.",
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
    <html lang="es" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-sans min-h-screen bg-[#101622] text-white antialiased flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
