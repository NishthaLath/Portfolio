import React from "react";
import type { SkillGroup, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SkillsSectionProps = {
  skills: SkillGroup[];
  sectionContent: SectionContent;
};

export function SkillsSection({ skills, sectionContent }: SkillsSectionProps) {
  return (
    <section id="skills" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Technical Expertise"}
          title={sectionContent.title || "Core Technical Stack"}
          subtitle={sectionContent.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.title}>
              <div className="flex items-center justify-between mb-2">
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {group.title}
                </div>
                {group.proficiency && (
                  <span
                    className={cx(
                      "text-xs font-semibold px-2 py-1 rounded-full",
                      group.proficiency === "Expert" || group.proficiency === "전문가"
                        ? "bg-accent/20 text-accent border border-accent/40"
                        : group.proficiency === "Advanced" || group.proficiency === "고급"
                          ? "bg-accent-2/20 text-accent-2 border border-accent-2/40"
                          : "bg-muted/20 text-muted border border-muted/40"
                    )}
                  >
                    {group.proficiency}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
