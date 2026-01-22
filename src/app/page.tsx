import Link from "next/link";
import Reveal from "@/components/Reveal";

const focusAreas = [
  {
    title: "FRONTEND",
    description:
      "Interfaces modernas y responsivas con React, Next.js y TypeScript.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "BACKEND",
    description:
      "APIs robustas y escalables con Node.js, Python y bases de datos SQL/NoSQL.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "FULLSTACK",
    description:
      "Soluciones completas desde la arquitectura hasta el despliegue en producción.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            NEXT.JS • VERCEL • PORTFOLIO
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            DESARROLLO WEB
            <br />
            <span className="text-slate-500">PROFESIONAL</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            Construyo aplicaciones web modernas, escalables y con atención al
            detalle. Enfocado en entregar código limpio y experiencias de usuario
            excepcionales.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/15 hover:border-cyan-400/30 transition-all"
            >
              VER PROYECTOS
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl border border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              CONTACTAR
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Focus Areas */}
      <section>
        <Reveal>
          <h2 className="text-sm font-medium tracking-widest text-slate-500 mb-8">
            ÁREAS DE ENFOQUE
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={0.1 * index}>
              <div className="group p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-400/30 hover:bg-slate-900/80 transition-all">
                <div className="w-10 h-10 flex items-center justify-center mb-4 text-cyan-400 bg-cyan-400/10 rounded-xl">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
