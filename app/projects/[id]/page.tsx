import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCards, projectDetails } from "../data";

// Ensure static export builds all project detail pages
export const dynamicParams = false;

export function generateStaticParams() {
  return projectCards.map((project) => ({ id: project.id }));
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border/60 bg-muted/40 p-6 ${className || ""}`}>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

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
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Back Button */}
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors">
          <span>←</span> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-border/60 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-muted">
            <div>
              <span className="font-medium">Duration:</span> {project.dates}
            </div>
            <div>
              <span className="font-medium">Organization:</span> {project.organization}
            </div>
            <div>
              <span className="font-medium">Role:</span> {project.role}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* What I Built */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                What I Built
              </h2>
              <ul className="mt-4 space-y-3 text-muted leading-7">
                {project.whatBuilt.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Contributions */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                Technical Contributions
              </h2>
              <ul className="mt-4 space-y-3 text-muted leading-7">
                {project.technicalContributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcome */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                Outcome
              </h2>
              <ul className="mt-4 space-y-3 text-muted leading-7">
                {project.outcome.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tech Stack Card */}
            <Card className="!text-white">
              <div className="text-sm font-medium mb-4">Tech Stack / Skills</div>
              <div className="flex flex-wrap gap-2">
                {project.techStackFull.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Card>

            {/* Repository Card */}
            {project.repository && (
              <Card className="!text-white">
                <div className="text-sm font-medium mb-4">Repository</div>
                <LinkButton label="View on GitHub" href={project.repository} />
              </Card>
            )}

            {/* Navigation Card */}
            <Card className="!text-white">
              <div className="text-sm font-medium mb-4">Other Projects</div>
              <div className="space-y-2">
                {projectCards.map((card) => (
                  <Link
                    key={card.id}
                    href={card.id === project.id ? "#" : `/projects/${card.id}`}
                    className={`block text-sm p-2 rounded transition-colors ${
                      card.id === project.id
                        ? "bg-muted/60 font-medium"
                        : "hover:bg-muted/40"
                    }`}
                  >
                    {card.title}
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
