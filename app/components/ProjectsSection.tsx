import React from "react";
import Link from "next/link";
import type { SectionContent } from "../types";
import { ProjectCardData } from "../projects/data";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ProjectsSectionProps = {
  projects: ProjectCardData[];
  sectionContent: SectionContent;
  lang: "en" | "ko";
};

export function ProjectsSection({ projects, sectionContent, lang }: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Projects"}
          title={sectionContent.title || "Team Work"}
          subtitle={sectionContent.subtitle}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="h-full flex flex-col">
                <div className="mb-3">
                  <span
                    className={cx(
                      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
                      project.category === "AI"
                        ? "bg-accent/15 text-accent border border-accent/30"
                        : project.category === "Backend"
                          ? "bg-accent-2/15 text-accent-2 border border-accent-2/30"
                          : project.category === "Frontend"
                            ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                            : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    )}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="mb-3 flex-1">
                  <h3
                    className="text-lg font-semibold tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.shortDescription}</p>
                </div>

                {project.outcomes && project.outcomes.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-surface-2/80 text-muted-2 border border-border/50"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-xs font-medium text-muted mb-2">Tech Stack</div>
                  <p className="text-xs text-muted">{project.techStack}</p>
                </div>

                <Link
                  href={`/projects/${project.id}${lang === "ko" ? "?lang=ko" : ""}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors mt-auto"
                >
                  {lang === "ko" ? "자세히 보기 →" : "Learn more →"}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
