import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTACT",
    description:
        "Get in touch for web development projects, collaborations, or inquiries.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
