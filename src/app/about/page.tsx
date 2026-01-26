import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
    title: "ABOUT",
    description:
        "Learn more about my experience, technical skills, and professional approach to web development.",
};

const technologies = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <Reveal>
                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-100">
                        ABOUT
                    </h1>
                </header>
            </Reveal>

            {/* Bio */}
            <Reveal delay={0.1}>
                <section className="mb-16">
                    <div className="max-w-3xl">
                        <p className="text-lg text-slate-400 leading-relaxed mb-6">
                            I&apos;m a web developer with experience building modern and scalable
                            applications. My approach combines clean code, development best
                            practices, and attention to detail in every project.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            I primarily work with the JavaScript/TypeScript ecosystem,
                            though I enjoy exploring new technologies that help solve
                            problems more efficiently.
                        </p>
                    </div>
                </section>
            </Reveal>

            {/* Tech Stack */}
            <Reveal delay={0.2}>
                <section className="mb-16">
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-8">
                        TECH STACK
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {technologies.map((tech) => (
                            <div key={tech.category} className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
                                <h3 className="font-semibold mb-4 text-cyan-400">{tech.category}</h3>
                                <ul className="space-y-2">
                                    {tech.items.map((item) => (
                                        <li key={item} className="text-slate-400 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* Approach */}
            <Reveal delay={0.3}>
                <section>
                    <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-8">
                        MY APPROACH
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-colors">
                            <h3 className="font-semibold mb-2 text-slate-100">Maintainable Code</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I prioritize writing readable and well-structured code. A successful
                                project is one that other developers can understand and extend easily.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-colors">
                            <h3 className="font-semibold mb-2 text-slate-100">Performance First</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Every technical decision considers the impact on user experience.
                                I optimize for fast load times and smooth navigation.
                            </p>
                        </div>
                    </div>
                </section>
            </Reveal>
        </div>
    );
}
