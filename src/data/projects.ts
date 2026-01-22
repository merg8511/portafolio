export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Plataforma E-Commerce",
    description:
      "Sistema de comercio electrónico completo con carrito de compras, gestión de inventario y pasarela de pagos integrada. Diseñado para escalar y manejar alto tráfico.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    highlights: [
      "Arquitectura serverless con API Routes",
      "Autenticación con NextAuth.js",
      "Panel de administración para gestión de productos",
      "Integración con múltiples métodos de pago",
    ],
    repo: "https://github.com/usuario/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    slug: "task-management-app",
    title: "Gestión de Tareas",
    description:
      "Aplicación de productividad para equipos con tableros Kanban, asignación de tareas y seguimiento de progreso en tiempo real.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    highlights: [
      "Actualizaciones en tiempo real con WebSockets",
      "Sistema de notificaciones push",
      "Filtros avanzados y búsqueda",
      "Exportación de reportes en PDF",
    ],
    repo: "https://github.com/usuario/task-manager",
  },
  {
    slug: "analytics-dashboard",
    title: "Dashboard de Analíticas",
    description:
      "Panel de control interactivo para visualización de datos empresariales con gráficos dinámicos y reportes automatizados.",
    stack: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    highlights: [
      "Gráficos interactivos y personalizables",
      "Procesamiento de datos con Python",
      "Exportación a múltiples formatos",
      "Integración con APIs externas",
    ],
    live: "https://analytics-demo.vercel.app",
  },
  {
    slug: "portfolio-template",
    title: "Template de Portafolio",
    description:
      "Plantilla moderna y responsive para desarrolladores. Optimizada para SEO y con soporte para modo oscuro.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    highlights: [
      "Diseño minimalista y profesional",
      "Soporte para blog con MDX",
      "Puntuación perfecta en Lighthouse",
      "Despliegue automatizado en Vercel",
    ],
    repo: "https://github.com/usuario/portfolio-template",
    live: "https://portfolio-template.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
