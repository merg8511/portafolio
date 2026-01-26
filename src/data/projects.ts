export type ProjectImage = {
  src: string;
  alt: string;
};

export type TechCategory = {
  category: string;
  technologies: string[];
};

export type Challenge = {
  title: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  images: {
    /** First image is used as preview in home page */
    desktop: ProjectImage[];
    mobile?: ProjectImage;
  };
  repo?: string;
  live?: string;

  // Extended fields for detailed view
  status?: "completed" | "in-progress" | "maintenance";
  role?: string;
  projectType?: string;
  keyOutput?: string;

  problem?: string;
  solution?: string;
  result?: string;

  stackDetails?: TechCategory[];
  architecture?: string[];
  challenges?: Challenge[];
  lessonsLearned?: string[];
};

export const projects: Project[] = [
  {
    slug: "payroll-platform",
    title: "Sistema de Gestión de Planillas de Pago",
    description:
      "Sistema web empresarial en .NET 8 MVC que automatiza el cálculo de planillas con deducciones legales de El Salvador (ISSS, AFP, ISR), registra eventos diarios y genera boletas y planillas en PDF.",
    stack: [".NET 8", "MVC", "Entity Framework", "MySQL"],
    highlights: [
      "Automatización de deducciones legales (ISSS, AFP, ISR)",
      "Bitácora diaria de eventos (bonos, descuentos, préstamos, horas extra)",
      "Generación de PDF profesional (planilla + boletas)",
      "Gestión de empleados y estructura organizacional",
      "Sistema de roles y permisos granulares",
      "Auditoría de acciones (trazabilidad administrativa)",
    ],
    images: {
      desktop: [
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/hero-dashboard-PA3sjPtjVvXDBPgRU5sWxZGLyBsV4X.png", alt: "Dashboard principal del sistema de planillas" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/login-A3QKU7Qma6Icx1FjjQH60oUhr8TgFq.png", alt: "Pantalla de inicio de sesión" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/management-table-RrwfoJgrOPGSI7LT5vJpQPs9dIThMp.png", alt: "Tabla de gestión de empleados" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/create-edit-xKU1jX93TMG73WTX1Dn3PrPyytaPFg.png", alt: "Formulario de creación y edición" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/detail-view-LVNxHwStKALuQGlvL2d9GQYsQxbYBv.png", alt: "Vista de detalle de empleado" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/reports-analytics-KkBjVMzrVKp3VymtCy8pTA3HP0Bo4U.png", alt: "Reportes y analíticas" },
      ],
      mobile: { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/mobile-L6qrk7xSlAuV3eRDO3ecVsmK626L0q.png", alt: "Vista móvil del sistema" }
    },
    repo: "https://github.com/merg8511/SistemaPlanilla",

    // Extended fields
    status: "completed",
    role: "Full-Stack Developer",
    projectType: "Enterprise Web App",
    keyOutput: "PDF Planillas + Boletas",

    problem: "Las empresas necesitan un proceso confiable para gestionar planillas cumpliendo regulaciones fiscales locales, evitando errores manuales y generando documentación formal.",
    solution: "Se desarrolló un sistema que registra eventos diarios (bonos, descuentos, horas extra), calcula automáticamente deducciones legales y genera planillas y boletas de pago en PDF.",
    result: "Automatización del flujo completo de planillas, con control de acceso, trazabilidad y reportes profesionales listos para auditoría y uso empresarial.",

    stackDetails: [
      { category: "Backend", technologies: [".NET 8 (ASP.NET Core MVC)", "Entity Framework Core", "MySQL 8.0"] },
      { category: "Auth", technologies: ["Microsoft Identity Core", "Custom Permissions"] },
      { category: "UI", technologies: ["Razor Views", "Bootstrap 5.3", "JavaScript"] },
      { category: "Reports", technologies: ["Rotativa (wkhtmltopdf)"] },
    ],

    architecture: [
      "Repository Pattern + Unit of Work",
      "Modularización por Areas (Admin, Payroll, Business, Identity)",
      "Two DbContexts (datos + autenticación)",
      "Custom Authorization (políticas y handlers)",
    ],

    challenges: [
      { title: "ISR por tramos", solution: "Motor de cálculo por brackets configurables desde base de datos" },
      { title: "Permisos granulares", solution: "PolicyProvider + AuthorizationHandler personalizado" },
      { title: "PDF profesional", solution: "Generación en landscape con Rotativa y templates consistentes" },
    ],

    lessonsLearned: [
      "Manejo de múltiples DbContexts y migraciones",
      "Implementación de seguridad granular por permisos",
      "Automatización de flujos contables y reportes PDF",
    ],
  },
  {
    slug: "booking-platform",
    title: "Refugio del Sol — Booking Platform",
    description:
      "Plataforma de reservas para renta de rancho completo con flujo guiado en 3 pasos (fechas y huéspedes, servicios extra y confirmación), UI responsive enfocada en conversión y panel administrativo para gestión operativa.",
    stack: [".NET 9", "Blazor Server", "MudBlazor", "Entity Framework"],
    highlights: [
      "Flujo de reserva en 3 pasos con validación y resumen final",
      "Gestión de disponibilidad por fechas y reglas de reserva",
      "Servicios adicionales opcionales integrados al proceso de booking",
      "Estado centralizado para mantener consistencia entre pantallas (BookingStateService)",
      "Experiencia responsive Mobile First con UI premium (MudBlazor)",
      "Panel administrativo para mantenimiento de contenido y operación",
    ],
    images: {
      desktop: [
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/hero.png", alt: "Dashboard principal del sistema de planillas" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/services.png", alt: "Services" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/reviews.png", alt: "Reviews" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/gallery.png", alt: "Gallery" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/booking-step1.png", alt: "Step 1: Select dates" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/booking-step3.png", alt: "Step 3: Summary & Confirm" },
      ],
      mobile: { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/mobile-booking.png", alt: "Vista móvil del sistema" }
    },
    repo: "https://placehold.co/1x1/png?text=ADD+REPO+URL",
    live: "https://placehold.co/1x1/png?text=ADD+LIVE+URL",

    // Extended fields
    status: "in-progress",
    role: "Full-Stack Developer",
    projectType: "Booking & Reservation Web App",
    keyOutput: "3-Step Booking Flow + Admin Panel",

    problem:
      "Los negocios que rentan espacios completos necesitan un flujo de reserva claro y confiable que reduzca fricción, valide disponibilidad y permita agregar servicios extra sin complicar la experiencia del usuario.",
    solution:
      "Se diseñó una plataforma de reservas con un flujo en 3 pasos, estado centralizado para mantener consistencia, UI responsive Mobile First y una base administrativa para gestionar disponibilidad, servicios y reservaciones.",
    result:
      "Proceso de reserva más rápido y entendible para el usuario, con una arquitectura lista para evolucionar a funcionalidades como pagos, automatización de confirmaciones y reglas avanzadas de disponibilidad.",

    stackDetails: [
      {
        category: "Frontend",
        technologies: ["Blazor Server", "MudBlazor", "MudBlazor.Extensions"],
      },
      {
        category: "Backend",
        technologies: [".NET 10", "Entity Framework Core", "REST APIs"],
      },
      {
        category: "State & UX",
        technologies: ["BookingStateService", "Stepper Flow", "Validation + Summary"],
      },
      {
        category: "Deployment",
        technologies: ["Docker / Azure / Hosting"],
      },
    ],

    architecture: [
      "Flujo de reserva guiado con Stepper (3 pasos)",
      "Estado centralizado con BookingStateService para persistencia del flow",
      "Componentes reutilizables y layout consistente (AppBar + secciones)",
      "Diseño Mobile First con UI limpia y coherente (MudBlazor)",
    ],

    challenges: [
      {
        title: "Consistencia del estado entre pasos",
        solution:
          "Uso de un servicio de estado centralizado (BookingStateService) para mantener datos del booking y evitar pérdida de información al navegar",
      },
      {
        title: "UX de reserva sin fricción",
        solution:
          "Flujo guiado en 3 pasos con validaciones por paso, resumen final claro y CTAs directos",
      },
      {
        title: "Escalabilidad del sistema",
        solution:
          "Estructura pensada para extender con pagos, automatización y módulos admin sin reescribir el flujo principal",
      },
    ],

    lessonsLearned: [
      "Diseño de flujos guiados enfocados en conversión (Stepper UX)",
      "Manejo de estado centralizado en Blazor para procesos multi-paso",
      "Separación clara entre experiencia pública y administración operativa",
    ],
  }
  ,
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
    images: {
      desktop: [
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/create-edit-xKU1jX93TMG73WTX1Dn3PrPyytaPFg.png", alt: "Inventory system architecture diagram" },
      ],
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
