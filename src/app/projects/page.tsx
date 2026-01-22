import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PROYECTOS",
    description:
        "Explora mi portafolio de proyectos de desarrollo web. Aplicaciones modernas construidas con las últimas tecnologías.",
};

export default function ProjectsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <header className="mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                    PROYECTOS
                </h1>
                <p className="text-foreground/60 max-w-2xl">
                    Una selección de proyectos en los que he trabajado. Cada uno
                    representa diferentes desafíos técnicos y soluciones implementadas.
                </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block p-6 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors"
                    >
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                            {project.title}
                        </h2>
                        <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-foreground/5 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
