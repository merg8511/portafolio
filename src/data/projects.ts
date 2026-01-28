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
    repo: "https://github.com/merg8511/GCG.Web.Booking",
    //live: "https://placehold.co/1x1/png?text=ADD+LIVE+URL",

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
      "Multi-tenant RESTful API for inventory management with ledger-based tracking, warehouse transfers, and stock reservations following Clean Architecture.",
    stack: ["ASP.NET Core", "PostgreSQL", "Docker", "EF Core", "JWT"],
    highlights: [
      "Clean Architecture with 4 layers",
      "Multi-tenant isolation via JWT claims",
      "Ledger-based inventory tracking",
      "Transfer state machine (Draft → Received)",
      "Stock reservation system with expiration",
      "Idempotency keys for safe retries",
    ],
    repo: "https://github.com/merg8511/Inventory.Api",

    // Extended fields
    status: "completed",
    role: "Backend Developer",
    projectType: "REST API Service",
    keyOutput: "OpenAPI + Docker Image",

    problem: "Companies managing inventory across multiple warehouses need a reliable system to track stock movements, handle inter-warehouse transfers, reserve stock for orders, and maintain an immutable audit trail of all transactions.",
    solution: "Built a multi-tenant REST API with .NET 10 following Clean Architecture. Implemented ledger-based tracking for auditing, a state machine for transfers, and reservation management with automatic tenant isolation.",
    result: "Production-ready API with multi-tenant support, comprehensive transaction history, automated health checks, and Docker deployment ready for cloud environments.",

    stackDetails: [
      { category: "Runtime", technologies: [".NET 10", "Minimal APIs", "C# 13"] },
      { category: "Data", technologies: ["PostgreSQL 16", "EF Core 9", "Npgsql"] },
      { category: "Auth", technologies: ["JWT Bearer", "Policy-based Authorization", "Multi-tenant Claims"] },
      { category: "DevOps", technologies: ["Docker", "Health Checks", "OpenTelemetry", "Serilog"] },
    ],

    architecture: [
      "Clean Architecture (Domain, Application, Infrastructure, API)",
      "Service Pattern with Interface Contracts",
      "Result Pattern for Error Handling",
      "Tenant Isolation via Global Query Filters",
    ],

    capabilities: [
      "JWT Authentication",
      "Scope-based Authorization",
      "Pagination & Filtering",
      "OpenAPI/Swagger Documentation",
      "FluentValidation",
      "Rate Limiting",
      "Health Checks (Liveness/Readiness)",
      "Structured Logging with Correlation IDs",
      "Idempotency Keys",
      "OpenTelemetry Tracing",
    ],

    apiPreview: {
      baseUrl: "/v1",
      endpoints: [
        { method: "GET", path: "/items", label: "List inventory items" },
        { method: "POST", path: "/items", label: "Create item" },
        { method: "GET", path: "/items/{id}", label: "Get item by ID" },
        { method: "PUT", path: "/items/{id}", label: "Update item" },
        { method: "DELETE", path: "/items/{id}", label: "Deactivate item" },
        { method: "GET", path: "/warehouses", label: "List warehouses" },
        { method: "GET", path: "/inventory/balances", label: "Get stock balances" },
        { method: "POST", path: "/inventory/receipt", label: "Record stock receipt" },
        { method: "POST", path: "/inventory/issue", label: "Record stock issue" },
        { method: "POST", path: "/transfers", label: "Create transfer" },
        { method: "POST", path: "/transfers/{id}/commit", label: "Commit transfer" },
        { method: "POST", path: "/transfers/{id}/ship", label: "Ship transfer" },
        { method: "POST", path: "/transfers/{id}/receive", label: "Receive transfer" },
        { method: "POST", path: "/reservations", label: "Create reservation" },
        { method: "POST", path: "/reservations/{id}/confirm", label: "Confirm reservation" },
      ]
    },

    sampleRequest: {
      method: "POST",
      endpoint: "/v1/items",
      headers: "Authorization: Bearer <token>\nContent-Type: application/json",
      body: `{
  "sku": "WIDGET-001",
  "name": "Industrial Widget",
  "categoryId": "550e8400-e29b-41d4-a716-446655440000",
  "unitOfMeasureId": "660e8400-e29b-41d4-a716-446655440001",
  "costPrice": 15.50,
  "salePrice": 24.99,
  "trackingType": "None"
}`,
      response: `{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "sku": "WIDGET-001",
  "name": "Industrial Widget",
  "categoryId": "550e8400-e29b-41d4-a716-446655440000",
  "costPrice": 15.50,
  "salePrice": 24.99,
  "isActive": true,
  "createdAt": "2024-01-15T10:30:00Z"
}`
    },

    challenges: [
      { title: "Multi-tenant isolation", solution: "JWT claims + EF Core global query filters for automatic tenant filtering" },
      { title: "Transfer workflow complexity", solution: "State machine pattern with domain methods (Draft → Committed → InTransit → Received)" },
      { title: "Stock consistency", solution: "Ledger-based transactions with immutable history and optimistic concurrency (RowVersion)" },
      { title: "Idempotent operations", solution: "Idempotency-Key header with database persistence for safe retries" },
    ],

    lessonsLearned: [
      "Implementing multi-tenant architecture with EF Core global filters",
      "Designing ledger-based inventory systems for auditability",
      "Building state machines for complex workflow management",
      "Applying Clean Architecture in .NET Minimal APIs",
    ],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
