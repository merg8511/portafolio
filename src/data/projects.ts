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

// API-specific types
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type Endpoint = {
  method: HttpMethod;
  path: string;
  label?: string;
};

export type ApiPreview = {
  baseUrl?: string;
  endpoints: Endpoint[];
};

export type SampleRequest = {
  method: string;
  endpoint: string;
  headers?: string;
  body?: string;
  response?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  images?: {
    /** First image is used as preview in home page */
    desktop: ProjectImage[];
    mobile?: ProjectImage;
  };
  repo?: string;
  live?: string;

  // Display type
  displayType?: "webapp" | "api";

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

  // API-specific fields
  apiPreview?: ApiPreview;
  capabilities?: string[];
  sampleRequest?: SampleRequest;
};

export const projects: Project[] = [
  {
    slug: "booking-platform",
    title: "Refugio del Sol — Booking Platform",
    description:
      "Rental booking platform with a guided 3-step flow (dates and guests, extra services, confirmation), conversion-focused responsive UI, and admin panel for operational management.",
    stack: [".NET 10", "Blazor Server", "MudBlazor", "Entity Framework"],
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
    slug: "inventory-api",
    title: "Inventory API",
    displayType: "api",
    description:
      "Cloud-native RESTful API for logistics companies with warehouse management, inventory tracking, and supply chain integration.",
    stack: ["ASP.NET Core", "PostgreSQL", "Docker", "Redis", "RabbitMQ"],
    highlights: [
      "RESTful API with OpenAPI documentation",
      "Microservices-ready architecture",
      "Message queue integration for async operations",
      "Container orchestration with Docker",
      "Caching layer with Redis",
      "Structured error handling",
    ],
    repo: "https://github.com/usuario/inventory-api",

    // Extended fields
    status: "completed",
    role: "Backend Developer",
    projectType: "REST API Service",
    keyOutput: "OpenAPI + Docker Image",

    problem: "Logistics companies need a reliable API to manage inventory across multiple warehouses with real-time stock updates and integration with external systems.",
    solution: "Built a scalable REST API with ASP.NET Core following Clean Architecture, implementing caching, message queues, and comprehensive documentation.",
    result: "Production-ready API handling 10K+ requests/day with 99.9% uptime, integrated with 3 external systems via message queues.",

    stackDetails: [
      { category: "Runtime", technologies: ["ASP.NET Core 8", "Minimal APIs", "C# 12"] },
      { category: "Data", technologies: ["PostgreSQL", "EF Core", "Redis Cache"] },
      { category: "Messaging", technologies: ["RabbitMQ", "MassTransit"] },
      { category: "DevOps", technologies: ["Docker", "GitHub Actions", "Azure"] },
    ],

    architecture: [
      "Clean Architecture with CQRS pattern",
      "Repository + Unit of Work",
      "Mediator pattern with MediatR",
      "Outbox pattern for reliable messaging",
    ],

    capabilities: [
      "JWT Authentication",
      "Role-based Access Control",
      "Pagination & Filtering",
      "OpenAPI Documentation",
      "Request Validation",
      "Rate Limiting",
      "Health Checks",
      "Structured Logging",
    ],

    apiPreview: {
      baseUrl: "/api/v1",
      endpoints: [
        { method: "GET", path: "/items", label: "List inventory items" },
        { method: "POST", path: "/items", label: "Create item" },
        { method: "GET", path: "/items/{id}", label: "Get item by ID" },
        { method: "PUT", path: "/items/{id}", label: "Update item" },
        { method: "DELETE", path: "/items/{id}", label: "Delete item" },
        { method: "GET", path: "/warehouses", label: "List warehouses" },
        { method: "POST", path: "/transfers", label: "Create transfer" },
      ]
    },

    sampleRequest: {
      method: "POST",
      endpoint: "/api/v1/items",
      headers: "Authorization: Bearer <token>\nContent-Type: application/json",
      body: `{
        "sku": "WGT-001",
        "name": "Widget Alpha",
        "quantity": 500,
        "warehouseId": "wh-central"
}`,
      response: `{
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "sku": "WGT-001",
        "name": "Widget Alpha",
        "quantity": 500,
        "warehouseId": "wh-central",
        "createdAt": "2024-01-15T10:30:00Z"
}`
    },

    challenges: [
      { title: "Real-time stock sync", solution: "Event-driven updates via RabbitMQ with eventual consistency" },
      { title: "High-volume reads", solution: "Redis caching with cache invalidation on writes" },
      { title: "External integrations", solution: "Outbox pattern ensuring reliable message delivery" },
    ],

    lessonsLearned: [
      "Designing APIs for external consumption with versioning",
      "Implementing CQRS for read/write optimization",
      "Managing distributed transactions with Outbox pattern",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
