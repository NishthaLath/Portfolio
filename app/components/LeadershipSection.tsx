import React from "react";
import type { LeadershipItem, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

type LeadershipSectionProps = {
  leadership: LeadershipItem[];
  sectionContent: SectionContent;
  lang: "en" | "ko";
};

export function LeadershipSection({ leadership, sectionContent, lang }: LeadershipSectionProps) {
  return (
    <section id="leadership" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Leadership"}
          title={sectionContent.title || "Roles built on responsibility"}
          subtitle={sectionContent.subtitle}
        />

        <div className="space-y-6">
          {leadership.map((l, idx) => (
            <Card
              key={l.title}
              className={
                l.isPrimary
                  ? "border-2 border-accent/50 bg-gradient-to-br from-surface/60 to-accent/5 shadow-lg shadow-accent/10"
                  : ""
              }
            >
              {l.isPrimary && (
                <div className="mb-4 inline-block px-3 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/40 text-xs font-semibold">
                  {lang === "ko" ? "🌟 주요 역할" : "🌟 Primary Role"}
                </div>
              )}

              <div className="mb-3 inline-block px-3 py-1.5 rounded-full bg-muted/20 text-muted border border-muted/40 text-xs font-medium">
                {l.category}
              </div>

              <div
                className="text-base font-semibold tracking-tight text-foreground mb-2"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {l.title}
              </div>

              <div className="text-xs text-accent-2 font-medium mb-3">📅 {l.dates}</div>

              <div className="mt-4 text-sm leading-6 text-muted">{l.detail}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
