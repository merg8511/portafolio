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
    title: "Payroll Management System",
    description:
      "Enterprise .NET 8 MVC web system that automates payroll calculations with El Salvador legal deductions (ISSS, AFP, ISR), logs daily events, and generates PDF payslips and payroll reports.",
    stack: [".NET 8", "MVC", "Entity Framework", "MySQL"],
    highlights: [
      "Automated legal deductions (ISSS, AFP, ISR)",
      "Daily event logging (bonuses, deductions, loans, overtime)",
      "Professional PDF generation (payroll + payslips)",
      "Employee and organizational structure management",
      "Role-based access control with granular permissions",
      "Audit logging for administrative traceability",
    ],
    images: {
      desktop: [
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/hero-dashboard-PA3sjPtjVvXDBPgRU5sWxZGLyBsV4X.png", alt: "Main payroll system dashboard" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/login-A3QKU7Qma6Icx1FjjQH60oUhr8TgFq.png", alt: "Login screen" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/management-table-RrwfoJgrOPGSI7LT5vJpQPs9dIThMp.png", alt: "Employee management table" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/create-edit-xKU1jX93TMG73WTX1Dn3PrPyytaPFg.png", alt: "Create and edit form" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/detail-view-LVNxHwStKALuQGlvL2d9GQYsQxbYBv.png", alt: "Employee detail view" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/reports-analytics-KkBjVMzrVKp3VymtCy8pTA3HP0Bo4U.png", alt: "Reports and analytics" },
      ],
      mobile: { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/mobile-L6qrk7xSlAuV3eRDO3ecVsmK626L0q.png", alt: "Mobile view" }
    },
    repo: "https://github.com/merg8511/SistemaPlanilla",

    // Extended fields
    status: "completed",
    role: "Full-Stack Developer",
    projectType: "Enterprise Web App",
    keyOutput: "PDF Payroll + Payslips",

    problem: "Businesses need a reliable process to manage payroll while complying with local tax regulations, avoiding manual errors, and generating formal documentation.",
    solution: "Built a system that logs daily events (bonuses, deductions, overtime), automatically calculates legal deductions, and generates payroll and payslip PDFs.",
    result: "Full automation of payroll workflow with access control, traceability, and professional reports ready for audit and business use.",

    stackDetails: [
      { category: "Backend", technologies: [".NET 8 (ASP.NET Core MVC)", "Entity Framework Core", "MySQL 8.0"] },
      { category: "Auth", technologies: ["Microsoft Identity Core", "Custom Permissions"] },
      { category: "UI", technologies: ["Razor Views", "Bootstrap 5.3", "JavaScript"] },
      { category: "Reports", technologies: ["Rotativa (wkhtmltopdf)"] },
    ],

    architecture: [
      "Repository Pattern + Unit of Work",
      "Modular design with Areas (Admin, Payroll, Business, Identity)",
      "Dual DbContexts (data + authentication)",
      "Custom Authorization (policies and handlers)",
    ],

    challenges: [
      { title: "Income tax brackets", solution: "Calculation engine with configurable brackets from database" },
      { title: "Granular permissions", solution: "Custom PolicyProvider + AuthorizationHandler" },
      { title: "Professional PDFs", solution: "Landscape generation with Rotativa and consistent templates" },
    ],

    lessonsLearned: [
      "Managing multiple DbContexts and migrations",
      "Implementing granular permission-based security",
      "Automating accounting workflows and PDF reports",
    ],
  },
  {
    slug: "booking-platform",
    title: "Refugio del Sol — Booking Platform",
    description:
      "Rental booking platform with a guided 3-step flow (dates and guests, extra services, confirmation), conversion-focused responsive UI, and admin panel for operational management.",
    stack: [".NET 9", "Blazor Server", "MudBlazor", "Entity Framework"],
    highlights: [
      "3-step booking flow with validation and final summary",
      "Date-based availability management with booking rules",
      "Optional add-on services integrated into booking process",
      "Centralized state for consistency across screens (BookingStateService)",
      "Mobile-first responsive experience with premium UI (MudBlazor)",
      "Admin panel for content and operations management",
    ],
    images: {
      desktop: [
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/hero.png", alt: "Booking platform landing page" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/services.png", alt: "Services section" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/reviews.png", alt: "Reviews section" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/gallery.png", alt: "Photo gallery" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/booking-step1.png", alt: "Step 1: Select dates" },
        { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/booking-step3.png", alt: "Step 3: Summary & Confirm" },
      ],
      mobile: { src: "https://9jaubfal4qpj0a4o.public.blob.vercel-storage.com/booking/mobile-booking.png", alt: "Mobile view" }
    },
    repo: "https://placehold.co/1x1/png?text=ADD+REPO+URL",
    live: "https://placehold.co/1x1/png?text=ADD+LIVE+URL",

    // Extended fields
    status: "in-progress",
    role: "Full-Stack Developer",
    projectType: "Booking & Reservation Web App",
    keyOutput: "3-Step Booking Flow + Admin Panel",

    problem:
      "Businesses renting full spaces need a clear and reliable booking flow that reduces friction, validates availability, and allows adding extra services without complicating the user experience.",
    solution:
      "Designed a booking platform with a 3-step flow, centralized state for consistency, mobile-first responsive UI, and an admin foundation for managing availability, services, and reservations.",
    result:
      "Faster and clearer booking process for users, with an architecture ready to evolve into payment integration, confirmation automation, and advanced availability rules.",

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
      "Guided booking flow with Stepper (3 steps)",
      "Centralized state with BookingStateService for flow persistence",
      "Reusable components and consistent layout (AppBar + sections)",
      "Mobile-first design with clean and coherent UI (MudBlazor)",
    ],

    challenges: [
      {
        title: "State consistency between steps",
        solution:
          "Centralized state service (BookingStateService) to maintain booking data and prevent information loss during navigation",
      },
      {
        title: "Frictionless booking UX",
        solution:
          "Guided 3-step flow with per-step validation, clear final summary, and direct CTAs",
      },
      {
        title: "System scalability",
        solution:
          "Structure designed to extend with payments, automation, and admin modules without rewriting the main flow",
      },
    ],

    lessonsLearned: [
      "Designing conversion-focused guided flows (Stepper UX)",
      "Centralized state management in Blazor for multi-step processes",
      "Clear separation between public experience and operational admin",
    ],
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
