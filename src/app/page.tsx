import Image from "next/image";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiBlazor
} from "react-icons/si";

import { projects } from "@/data/projects";
import ApiPreviewCard from "@/components/ApiPreviewCard";

// ============================================
// ICON COMPONENTS
// ============================================

function DevicesIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ScheduleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// Tech Stack Icons
function TypeScriptIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.5 9.75c.612 0 1.154.037 1.627.111v2.111c-.524-.148-1.007-.222-1.447-.222-.748 0-1.31.173-1.685.519-.375.346-.563.837-.563 1.474v3.222h-2.111V9.889h2.111v1.185c.4-.889 1.089-1.324 2.068-1.324zM5.88 9.75h2.111v7.111c0 .914.185 1.583.556 2.007.37.424.945.636 1.722.636.42 0 .827-.05 1.222-.148v1.926c-.444.148-.963.222-1.556.222-1.259 0-2.228-.352-2.907-1.056-.679-.704-1.019-1.741-1.019-3.111V9.75z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.727 18.04l-5.63-7.55v7.55h-1.63V7.27h1.5l5.5 7.37V7.27h1.63v10.77h-1.37zM12.44 11.28l.85 1.15-1.5 2.01-.85-1.15 1.5-2.01z" />
    </svg>
  );
}

function CSharpIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.943 0 3.79-.466 5.427-1.29l-5.2-9.01h-.01l3.84-6.65A11.94 11.94 0 0012 0zm-.5 6l3.6 6.25-3.6 6.25L8 12.25 11.5 6zm6.1 3.5h1.5v1h-1.5v1.5h-1v-1.5h-1.5v-1h1.5V8h1v1.5z" />
    </svg>
  );
}

function DotNetIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4s-3.761 8.4-8.4 8.4S3.6 16.639 3.6 12 7.361 3.6 12 3.6zm-1.8 11.4h3.6v-1.2h-3.6v-1.8h3.6v-1.2h-3.6V9h3.6V7.8h-4.8v7.2z" />
    </svg>
  );
}

function PostgreSQLIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9h2v2H8V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm-6 3h2v2H8v-2zm3 0h2v2h-2v-2zM5 12h2v2H5v-2zm0-3h2v2H5V9zm16 4c-.5 2.5-2 4-4.5 4H4c-1.5 0-3-1-3-3 0-1.5.5-2.5 1.5-3 0-1 .5-2 1.5-2.5 1-1 2.5-1.5 4-1.5h.5c.5-1 1.5-2 3-2s2.5 1 3 2c2 0 3.5 1 4 2.5 1 .5 1.5 1.5 1.5 3.5z" />
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function EFCoreIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4-3.582 4-8 4-8-1.79-8-4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 7v5c0 2.21 3.582 4 8 4s8-1.79 8-4V7"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M7 18h10"
      />
    </svg>
  );
}


// ============================================
// DATA
// ============================================

const specialties = [
  {
    icon: <DevicesIcon />,
    title: "Frontend",
    description: "Modern, responsive interfaces built with Next.js, Tailwind CSS, and Blazor Server. Focused on performance, accessibility, and clean user experience.",
  },
  {
    icon: <DatabaseIcon />,
    title: "Backend",
    description: "Robust APIs with .NET (ASP.NET Core / Minimal APIs) and EF Core. Designed to scale with solid architecture, security, and maintainability.",
  },
  {
    icon: <CloudIcon />,
    title: "DevOps & Cloud",
    description: "Deployment and automation with Docker, Azure, and CI/CD pipelines. Ensuring stability, continuity, and fast delivery to production.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Requirements gathering, scope definition, and project objectives." },
  { number: "02", title: "Design", description: "UI/UX prototyping and technical architecture." },
  { number: "03", title: "Development", description: "Frontend + backend implementation, testing, and quality assurance." },
  { number: "04", title: "Delivery", description: "Deployment, optimization, monitoring, and ongoing support." },
];

const techStack = [
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "C#", icon: <CSharpIcon /> },
  { name: ".NET 10", icon: <SiDotnet className="w-8 h-8" /> },
  { name: "Blazor Server", icon: <SiBlazor className="w-8 h-8" /> },
  { name: "EF Core", icon: <EFCoreIcon /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "Docker", icon: <SiDocker className="w-8 h-8" /> },
  { name: "Azure", icon: <AzureIcon /> },
  { name: "Github", icon: <SiGithub className="w-8 h-8" /> },
];


const heroTechBadges = [".NET 10", "Next.js", "Blazor Server", "Web APIs", "EF CORE", "MYSQL", "DOCKER"];

// ============================================
// PAGE COMPONENT
// ============================================

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-10">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="flex flex-col gap-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="flex flex-col gap-6 lg:max-w-[600px]">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Available for projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter uppercase">
            WEB DEVELOPER <span className="text-emerald-500">.NET + NEXT.JS</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal max-w-[500px]">
            I build fast and scalable web applications with clean UI and robust APIs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-emerald-500 text-white text-base font-bold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#232f48] text-white text-base font-bold tracking-wide hover:bg-[#2d3b5a] transition-colors"
            >
              Let's Talk
            </a>
          </div>

          {/* Tech Badges */}
          <div className="flex gap-2 flex-wrap pt-4">
            {heroTechBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#1a2333] border border-[#232f48] rounded text-xs font-semibold hover:border-emerald-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1a2333] shadow-2xl">
            <Image
              src="/images/profile.png"
              alt="Professional portrait of Mario Rodriguez"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ESPECIALIDADES SECTION */}
      {/* ============================================ */}
      <section className="py-16 border-t border-[#232f48]" id="services">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="glass-card p-8 rounded-xl flex flex-col items-center text-center gap-4 group"
            >
              <span className="text-emerald-500 group-hover:scale-110 transition-transform">
                {specialty.icon}
              </span>
              <h3 className="text-xl font-bold">{specialty.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* PROJECTS SECTION */}
      {/* ============================================ */}
      <section className="py-16 border-t border-[#232f48]" id="projects">
        <div className="flex items-end justify-between mb-8 px-4">
          <div>
            <p className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2">Portafolio</p>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <a
            href="/projects"
            className="text-emerald-500 text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            View all <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {projects.map((project) => (
            <div key={project.slug} className="flex flex-col group">
              {/* Conditional: API Preview or Image */}
              {project.displayType === "api" && project.apiPreview ? (
                <a href={`/projects/${project.slug}`} className="mb-4">
                  <ApiPreviewCard
                    endpoints={project.apiPreview.endpoints}
                    baseUrl={project.apiPreview.baseUrl}
                    maxEndpoints={3}
                  />
                </a>
              ) : (
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4 shadow-lg border border-transparent group-hover:border-emerald-500/30 transition-colors">
                  {project.images?.desktop[0] && (
                    <Image
                      src={project.images.desktop[0].src}
                      alt={project.images.desktop[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={`/projects/${project.slug}`}
                      className="bg-white text-emerald-500 px-4 py-2 rounded-lg font-bold text-sm shadow-xl hover:bg-slate-50"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              )}
              <div className="px-2">
                <div className="flex items-center gap-2 mb-1">
                  {project.displayType === "api" && (
                    <span className="text-[10px] font-bold uppercase tracking-tight px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      API
                    </span>
                  )}
                  <h3 className="text-white text-lg font-bold group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[#92a4c9] text-sm font-normal mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.stack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-500 bg-emerald-500/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESO DE TRABAJO SECTION */}
      {/* ============================================ */}
      <section className="py-16 border-t border-[#232f48]">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">My Process</h2>
        <div className="relative flex flex-col md:flex-row gap-8 justify-between">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-[#232f48] -z-10"></div>

          {processSteps.map((step, index) => (
            <div key={step.number} className="flex-1 flex flex-col items-center text-center gap-4">
              <div
                className={`size-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ring-4 ring-[#101622] ${index === 0
                  ? "bg-emerald-500 text-white shadow-emerald-500/30"
                  : "bg-[#232f48] text-white border border-transparent hover:border-emerald-500/50 transition-colors"
                  }`}
              >
                {step.number}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* TECH STACK SECTION (Stylized Badges) */}
      {/* ============================================ */}
      <section className="py-16 border-t border-[#232f48]" id="stack">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-badge rounded-full flex items-center gap-3 px-5 py-3 cursor-default group"
              title={tech.name}
            >
              <span className="text-emerald-500 transition-transform group-hover:scale-110 group-hover:rotate-6">
                {tech.icon}
              </span>
              <span className="text-sm font-bold text-slate-300 group-hover:text-emerald-500 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-20" id="contact">
        <div className="bg-emerald-500 rounded-2xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20">
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">
            Let's Build Something Together
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            I'm available for new projects and collaborations. If you have an idea, let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <button className="bg-white text-emerald-500 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg min-w-[200px]">
              <MailIcon /> Send Message
            </button>
            <button className="bg-[#0a192f] text-white border-2 border-transparent px-8 py-4 rounded-lg font-bold text-lg hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-xl min-w-[200px]">
              <ScheduleIcon /> Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
