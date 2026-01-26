import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ImageCarousel from "@/components/ImageCarousel";
import PhoneFrame from "@/components/PhoneFrame";

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
            title: "Project not found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

// Status badge component
function StatusBadge({ status }: { status: string }) {
    const statusConfig = {
        completed: { label: "Completed", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
        "in-progress": { label: "In Progress", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
        maintenance: { label: "Maintenance", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    };
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.completed;
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border rounded-full ${config.color}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {config.label}
        </span>
    );
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const hasExtendedInfo = project.problem || project.solution || project.result;
    const hasArchitecture = project.architecture && project.architecture.length > 0;
    const hasChallenges = project.challenges && project.challenges.length > 0;
    const hasLessons = project.lessonsLearned && project.lessonsLearned.length > 0;

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
                    BACK TO PROJECTS
                </Link>
            </Reveal>

            {/* Hero Section */}
            <Reveal delay={0.1}>
                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-100">
                        {project.title}
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-4xl">
                        {project.description}
                    </p>
                </header>
            </Reveal>

            {/* Stats Row */}
            {(project.status || project.role || project.projectType || project.keyOutput) && (
                <Reveal delay={0.15}>
                    <div className="flex flex-wrap gap-3 mb-12">
                        {project.status && <StatusBadge status={project.status} />}
                        {project.role && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 border border-white/10 rounded-full">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {project.role}
                            </span>
                        )}
                        {project.projectType && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 border border-white/10 rounded-full">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                {project.projectType}
                            </span>
                        )}
                        {project.keyOutput && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 border border-white/10 rounded-full">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {project.keyOutput}
                            </span>
                        )}
                    </div>
                </Reveal>
            )}

            {/* Problem / Solution / Result */}
            {hasExtendedInfo && (
                <Reveal delay={0.2}>
                    <section className="mb-12">
                        <div className="grid gap-4 md:grid-cols-3">
                            {project.problem && (
                                <div className="p-5 bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-semibold tracking-wide text-red-400 uppercase">Problem</h3>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                                </div>
                            )}
                            {project.solution && (
                                <div className="p-5 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-semibold tracking-wide text-cyan-400 uppercase">Solution</h3>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                                </div>
                            )}
                            {project.result && (
                                <div className="p-5 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-semibold tracking-wide text-emerald-400 uppercase">Outcome</h3>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{project.result}</p>
                                </div>
                            )}
                        </div>
                    </section>
                </Reveal>
            )}

            {/* Project Gallery - 70/30 Layout */}
            <Reveal delay={0.25}>
                <div className="grid gap-6 mb-12 items-start lg:grid-cols-[1fr_280px]">
                    {/* Desktop Carousel */}
                    <div className="min-w-0">
                        <ImageCarousel images={project.images.desktop} />
                    </div>

                    {/* Mobile Preview */}
                    {project.images.mobile && (
                        <div className="flex justify-center lg:justify-end">
                            <PhoneFrame image={project.images.mobile} />
                        </div>
                    )}
                </div>
            </Reveal>

            {/* Featured Functionalities */}
            <Reveal delay={0.3}>
                <section className="mb-12">
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                        KEY FEATURES
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {project.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-slate-900/50 border border-white/5 rounded-xl hover:border-cyan-400/20 transition-colors"
                            >
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-300">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* Tech Stack - Grouped */}
            <Reveal delay={0.35}>
                <section className="mb-12">
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                        TECH STACK
                    </h2>
                    {project.stackDetails && project.stackDetails.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {project.stackDetails.map((category, idx) => (
                                <div key={idx} className="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
                                    <h3 className="text-xs font-semibold tracking-wide text-cyan-400 uppercase mb-3">{category.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-white/10 rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
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
                    )}
                </section>
            </Reveal>

            {/* Architecture & Enterprise Features */}
            {hasArchitecture && (
                <Reveal delay={0.4}>
                    <section className="mb-12">
                        <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                            ARCHITECTURE & PATTERNS
                        </h2>
                        <div className="p-6 bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/20 rounded-2xl">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {project.architecture!.map((pattern, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-300 text-sm">{pattern}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </Reveal>
            )}

            {/* Technical Challenges */}
            {hasChallenges && (
                <Reveal delay={0.45}>
                    <section className="mb-12">
                        <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                            TECHNICAL CHALLENGES
                        </h2>
                        <div className="space-y-3">
                            {project.challenges!.map((challenge, index) => (
                                <div key={index} className="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-amber-400">{index + 1}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-100 font-medium">{challenge.title}</span>
                                            <span className="text-slate-500 mx-2">→</span>
                                            <span className="text-slate-400">{challenge.solution}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </Reveal>
            )}

            {/* Links */}
            {(project.repo || project.live) && (
                <Reveal delay={0.5}>
                    <section className="mb-12">
                        <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                            LINKS
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl text-slate-300 hover:border-white/20 hover:bg-white/5 transition-all"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Repository
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400 hover:bg-cyan-400/15 transition-all"
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
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </section>
                </Reveal>
            )}

            {/* Lessons Learned */}
            {hasLessons && (
                <Reveal delay={0.55}>
                    <section>
                        <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-4">
                            LESSONS LEARNED
                        </h2>
                        <div className="p-5 bg-slate-900/30 border border-white/5 rounded-2xl">
                            <ul className="space-y-2">
                                {project.lessonsLearned!.map((lesson, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-4 h-4 text-slate-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span className="text-slate-400 text-sm">{lesson}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </Reveal>
            )}
        </div>
    );
}
