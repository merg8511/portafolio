export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Scalable Blazor & .NET solution with real-time inventory management, payment gateway integration, and admin dashboard.",
    stack: [".NET 8", "Blazor", "PostgreSQL", "Azure", "SignalR"],
    highlights: [
      "Real-time inventory synchronization",
      "Multi-tenant architecture",
      "Payment processing with Stripe",
      "Admin dashboard with analytics",
    ],
    image: {
      src: "https://placehold.co/800x450/1a2333/10b981/png?text=E-COMMERCE+PLATFORM",
      alt: "E-commerce platform dashboard preview",
    },
    repo: "https://github.com/usuario/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    slug: "saas-analytics",
    title: "SaaS Analytics",
    description:
      "Next.js interface with real-time monitoring, reporting dashboards, and data visualization for business intelligence.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Chart.js", "Prisma"],
    highlights: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "Custom report builder",
      "Export to PDF/Excel",
    ],
    image: {
      src: "https://placehold.co/800x450/1a2333/10b981/png?text=SAAS+ANALYTICS",
      alt: "SaaS analytics dashboard with charts",
    },
    live: "https://analytics-demo.vercel.app",
  },
  {
    slug: "inventory-api",
    title: "Inventory API",
    description:
      "Cloud-native robust Web API integration for logistics companies with warehouse management and supply chain tracking.",
    stack: ["ASP.NET Core", "PostgreSQL", "Docker", "Redis", "RabbitMQ"],
    highlights: [
      "RESTful API with OpenAPI docs",
      "Microservices architecture",
      "Message queue integration",
      "Container orchestration with Docker",
    ],
    image: {
      src: "https://placehold.co/800x450/1a2333/10b981/png?text=INVENTORY+API",
      alt: "Inventory system architecture diagram",
    },
    repo: "https://github.com/usuario/inventory-api",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
