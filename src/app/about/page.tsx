import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SOBRE MÍ",
    description:
        "Conoce más sobre mi experiencia, habilidades técnicas y enfoque profesional en el desarrollo web.",
};

const technologies = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Herramientas", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <header className="mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                    SOBRE MÍ
                </h1>
            </header>

            {/* Bio */}
            <section className="mb-16">
                <div className="max-w-3xl">
                    <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                        Soy desarrollador web con experiencia en la creación de aplicaciones
                        modernas y escalables. Mi enfoque combina código limpio, buenas
                        prácticas de desarrollo y atención al detalle en cada proyecto.
                    </p>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        Trabajo principalmente con el ecosistema JavaScript/TypeScript,
                        aunque disfruto explorando nuevas tecnologías que permitan resolver
                        problemas de manera más eficiente.
                    </p>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16">
                <h2 className="text-sm font-medium tracking-widest text-foreground/50 mb-8">
                    STACK TECNOLÓGICO
                </h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    {technologies.map((tech) => (
                        <div key={tech.category}>
                            <h3 className="font-semibold mb-4">{tech.category}</h3>
                            <ul className="space-y-2">
                                {tech.items.map((item) => (
                                    <li key={item} className="text-foreground/60">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Approach */}
            <section>
                <h2 className="text-sm font-medium tracking-widest text-foreground/50 mb-8">
                    MI ENFOQUE
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 border border-foreground/10 rounded-lg">
                        <h3 className="font-semibold mb-2">Código mantenible</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Priorizo escribir código legible y bien estructurado. Un proyecto
                            exitoso es aquel que otros desarrolladores pueden entender y
                            extender fácilmente.
                        </p>
                    </div>
                    <div className="p-6 border border-foreground/10 rounded-lg">
                        <h3 className="font-semibold mb-2">Rendimiento primero</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Cada decisión técnica considera el impacto en la experiencia del
                            usuario. Optimizo para tiempos de carga rápidos y navegación
                            fluida.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
