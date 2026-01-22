"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <Reveal>
                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-100">
                        PROYECTOS
                    </h1>
                    <p className="text-slate-400 max-w-2xl">
                        Una selección de proyectos en los que he trabajado. Cada uno
                        representa diferentes desafíos técnicos y soluciones implementadas.
                    </p>
                </header>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Reveal key={project.slug} delay={0.1 * index}>
                        <Link href={`/projects/${project.slug}`} className="block group">
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="overflow-hidden bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-colors"
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image.src}
                                        alt={project.image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
