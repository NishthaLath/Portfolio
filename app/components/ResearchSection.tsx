import React from "react";
import type { ResearchItem, ResearchInterest, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { Tag } from "./Tag";
import { LinkButton } from "./LinkButton";

type ResearchSectionProps = {
  research: ResearchItem[];
  researchInterests: ResearchInterest[];
  sectionContent: SectionContent;
  lang: "en" | "ko";
};

export function ResearchSection({
  research,
  researchInterests,
  sectionContent,
  lang,
}: ResearchSectionProps) {
  return (
    <section id="research" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Research"}
          title={sectionContent.title || "Publication & Evaluation"}
          subtitle={sectionContent.subtitle}
        />

        <div className="mb-8">
          <h3
            className="text-sm font-semibold text-amber-500/90 mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {lang === "ko" ? "🏆 출판된 연구" : "🏆 Published Research"}
          </h3>
          <div className="space-y-5">
            {research.map((r) => (
              <Card key={r.title} premium>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div
                      className="text-lg font-semibold tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {r.title}
                    </div>
                    <div className="mt-1 text-sm text-muted">{r.venue}</div>
                  </div>
                  <div className="inline-flex rounded-full border-2 border-amber-500/50 bg-gradient-to-r from-amber-500/15 to-amber-600/15 px-4 py-1.5 text-xs font-semibold text-amber-500 shadow-md shadow-amber-500/20 backdrop-blur-sm">
                    {r.award}
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                  {r.summaryBullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                {r.repoLinks && r.repoLinks.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {r.repoLinks.map((rl) => (
                      <LinkButton key={rl.href} label={rl.label} href={rl.href} variant="secondary" />
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="text-sm font-semibold text-muted mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {lang === "ko" ? "🔬 연구 관심사" : "🔬 Research Interests"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {researchInterests.map((interest) => (
              <Card key={interest.area}>
                <div
                  className="text-sm font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {interest.area}
                </div>
                <p className="text-sm text-muted leading-relaxed">{interest.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
