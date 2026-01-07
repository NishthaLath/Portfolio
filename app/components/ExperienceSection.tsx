import React from "react";
import type { ExperienceItem, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { Tag } from "./Tag";

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
  sectionContent: SectionContent;
};

export function ExperienceSection({ experiences, sectionContent }: ExperienceSectionProps) {
  return (
    <section id="experience" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Professional Work"}
          title={sectionContent.title || "Internships & Research"}
          subtitle={sectionContent.subtitle}
        />

        <div className="relative space-y-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-2 to-transparent hidden md:block" />

          {experiences.map((item, index) => (
            <div key={`${item.org}-${item.title}`} className="relative">
              <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-accent border-2 border-background shadow-lg shadow-accent/50 hidden md:block" />

              <Card className="md:ml-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div
                      className="text-lg font-semibold tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm text-muted">{item.org}</div>
                  </div>
                  <div className="text-sm font-medium text-accent-2">{item.dates}</div>
                </div>

                {item.note ? <div className="mt-3 text-sm text-muted">⚠ {item.note}</div> : null}

                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {item.bullets.map((b, bIndex) => {
                    const isHighlight =
                      b.includes("Deployed") ||
                      b.includes("Production") ||
                      b.includes("AWS") ||
                      b.includes("Reduced") ||
                      b.includes("Led") ||
                      b.includes("배포") ||
                      b.includes("운영") ||
                      b.includes("리드");
                    return (
                      <li key={bIndex} className={isHighlight ? "border-l-2 border-accent/50 pl-3" : ""}>
                        • {b}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
