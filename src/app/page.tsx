import Link from "next/link";

const focusAreas = [
  {
    title: "FRONTEND",
    description:
      "Interfaces modernas y responsivas con React, Next.js y TypeScript.",
  },
  {
    title: "BACKEND",
    description:
      "APIs robustas y escalables con Node.js, Python y bases de datos SQL/NoSQL.",
  },
  {
    title: "FULLSTACK",
    description:
      "Soluciones completas desde la arquitectura hasta el despliegue en producción.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          DESARROLLO WEB
          <br />
          <span className="text-foreground/60">PROFESIONAL</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mb-8 leading-relaxed">
          Construyo aplicaciones web modernas, escalables y con atención al
          detalle. Enfocado en entregar código limpio y experiencias de usuario
          excepcionales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            VER PROYECTOS
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 font-medium rounded-lg hover:bg-foreground/5 transition-colors"
          >
            CONTACTAR
          </Link>
        </div>
      </section>

      {/* Focus Areas */}
      <section>
        <h2 className="text-sm font-medium tracking-widest text-foreground/50 mb-8">
          ÁREAS DE ENFOQUE
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
