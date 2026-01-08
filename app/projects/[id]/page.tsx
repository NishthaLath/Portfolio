import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCards, projectDetails } from "../data";

// Ensure static export builds all project detail pages
export const dynamicParams = false;

export function generateStaticParams() {
  return projectCards.map((project) => ({ id: project.id }));
}

function Card({ children, className, interactive }: { children: React.ReactNode; className?: string; interactive?: boolean }) {
  const baseClasses = "rounded-2xl border border-border/80 bg-surface/60 p-6 shadow-lg shadow-black/5 backdrop-blur-sm";
  const interactiveClasses = interactive 
    ? "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/50" 
    : "";
  
  return (
    <div className={`${baseClasses} ${interactiveClasses} ${className || ""}`}>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/90 shadow-sm transition-all duration-200 hover:bg-surface-2/80 hover:border-accent/40 hover:shadow-md backdrop-blur-sm">
      {children}
    </span>
  );
}

function ExpandableSection({ title, children, defaultExpanded = true }: { title: string; children: React.ReactNode; defaultExpanded?: boolean }) {
  return (
    <details open={defaultExpanded} className="group border border-border/60 rounded-2xl overflow-hidden bg-surface/40 backdrop-blur-sm">
      <summary className="cursor-pointer w-full flex items-center justify-between p-6 text-left hover:bg-surface/60 transition-colors list-none [&::-webkit-details-marker]:hidden">
        <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-geist-mono)" }}>
          {title}
        </h2>
        <svg 
          className="w-6 h-6 text-muted transition-transform duration-300 group-open:rotate-180"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      
      <div className="px-6 pb-6 animate-fadeIn">
        {children}
      </div>
    </details>
  );
}

// Client wrapper component removed - using native HTML details/summary

function LinkButton({ label, href, variant = "primary" }: { label: string; href: string; variant?: "primary" | "secondary" }) {
  const baseClasses = "inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors";
  const variantClasses =
    variant === "secondary"
      ? "border border-border/60 bg-muted/40 text-muted hover:bg-muted/60"
      : "bg-foreground text-background hover:bg-muted";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
        {label}
        <span>→</span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
      <span>→</span>
    </Link>
  );
}

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projectDetails[id];

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="mb-8 inline-flex items-center gap-2 text-muted hover:text-accent transition-all hover:gap-3 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> 
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* Header with gradient background */}
        <div className="mb-12 relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-accent/5 via-surface/60 to-accent-2/5 p-8 sm:p-12 backdrop-blur-sm">
          <div className="relative z-10">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/40">
                {project.category || "Project"}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
              {project.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-3xl leading-relaxed">{project.shortDescription}</p>
            
            {/* Metadata Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent">📅</span>
                <div>
                  <div className="text-muted-2 text-xs">Duration</div>
                  <div className="font-medium text-foreground">{project.dates}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">🏢</span>
                <div>
                  <div className="text-muted-2 text-xs">Organization</div>
                  <div className="font-medium text-foreground">{project.organization}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">👤</span>
                <div>
                  <div className="text-muted-2 text-xs">Role</div>
                  <div className="font-medium text-foreground">{project.role}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative gradient orb */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Statement (if available) */}
            <ExpandableSection title="💡 Problem & Approach" defaultExpanded={true}>
              <ul className="space-y-3 text-sm sm:text-base text-muted leading-7">
                {project.whatBuilt.map((bullet, index) => (
                  <li key={index} className="flex gap-3 group">
                    <span className="text-accent mt-1 transition-transform group-hover:scale-125">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </ExpandableSection>

            {/* Technical Contributions */}
            <ExpandableSection title="🔧 Technical Deep Dive" defaultExpanded={true}>
              <ul className="space-y-3 text-sm sm:text-base text-muted leading-7">
                {project.technicalContributions.map((contribution, index) => (
                  <li key={index} className="flex gap-3 group">
                    <span className="text-accent-2 mt-1 transition-transform group-hover:scale-125">▸</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </ExpandableSection>

            {/* Outcome & Impact */}
            <ExpandableSection title="🎯 Results & Impact" defaultExpanded={true}>
              <ul className="space-y-3 text-sm sm:text-base text-muted leading-7">
                {project.outcome.map((item, index) => (
                  <li key={index} className="flex gap-3 p-3 rounded-lg bg-surface/40 border border-border/40 hover:border-accent/40 transition-all group">
                    <span className="text-amber-500 mt-1 transition-transform group-hover:scale-125">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ExpandableSection>
          </div>

          {/* Sidebar - Sticky on desktop */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Tech Stack Card */}
            <Card interactive>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                <span>💻</span>
                <span>Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStackFull.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Card>

            {/* Repository Card */}
            {project.repository && (
              <Card interactive>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  <span>📂</span>
                  <span>Repository</span>
                </div>
                <LinkButton label="View on GitHub →" href={project.repository} variant="primary" />
              </Card>
            )}

            {/* Navigation Card */}
            <Card interactive>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                <span>🔗</span>
                <span>Related Projects</span>
              </div>
              <div className="space-y-1">
                {projectCards.filter(card => card.id !== project.id).slice(0, 4).map((card) => (
                  <Link
                    key={card.id}
                    href={`/projects/${card.id}`}
                    className="block text-sm p-3 rounded-lg transition-all hover:bg-surface-2/80 hover:border-l-2 hover:border-accent hover:pl-4 text-muted hover:text-foreground group"
                  >
                    <div className="font-medium">{card.title}</div>
                    <div className="text-xs text-muted-2 mt-1 group-hover:text-muted">{card.shortDescription}</div>
                  </Link>
                ))}
              </div>
              
              <Link
                href="/#projects"
                className="block mt-4 pt-4 border-t border-border/60 text-sm text-center text-accent hover:text-accent-2 transition-colors font-medium"
              >
                View all projects →
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
