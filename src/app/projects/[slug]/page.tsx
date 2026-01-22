import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Proyecto no encontrado",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {/* Back Link */}
            <Reveal>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-8"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    VOLVER A PROYECTOS
                </Link>
            </Reveal>

            {/* Project Image */}
            <Reveal delay={0.1}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 mb-12">
                    <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </Reveal>

            {/* Header */}
            <Reveal delay={0.2}>
                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-100">
                        {project.title}
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </header>
            </Reveal>

            {/* Stack */}
            <Reveal delay={0.3}>
                <section className="mb-12">
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                        TECNOLOGÍAS
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-xl"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={0.4}>
                <section className="mb-12">
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                        CARACTERÍSTICAS DESTACADAS
                    </h2>
                    <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
                        <ul className="space-y-3">
                            {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                                    <span className="text-slate-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </Reveal>

            {/* Links */}
            {(project.repo || project.live) && (
                <Reveal delay={0.5}>
                    <section>
                        <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                            ENLACES
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-xl text-slate-300 hover:border-white/20 hover:bg-white/5 transition-all"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Repositorio
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400 hover:bg-cyan-400/15 transition-all"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                    Demo en vivo
                                </a>
                            )}
                        </div>
                    </section>
                </Reveal>
            )}
        </div>
    );
}
