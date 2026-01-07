import React from "react";
import type { SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

type AwardsSectionProps = {
  sectionContent: SectionContent;
  lang: "en" | "ko";
};

export function AwardsSection({ sectionContent, lang }: AwardsSectionProps) {
  return (
    <section id="awards" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-16 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Recognition"}
          title={sectionContent.title || "Honors & Awards"}
          subtitle={sectionContent.subtitle}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Card premium>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {lang === "ko" ? "우수 논문상" : "Excellent Paper Award"}
                </div>
                <div className="mt-2 text-sm font-medium text-amber-500">
                  {lang === "ko"
                    ? "UCWIT 2024 (KIISE 주최) — 47팀 중 Top 4"
                    : "UCWIT 2024 (KIISE-hosted) — Top 4 / 47 teams"}
                </div>
                <div className="mt-4 text-sm leading-6 text-muted">
                  {lang === "ko"
                    ? "음성 인식 키오스크 시나리오에서 LLaMA와 규칙 기반 대화 시스템을 비교한 연구로 수상."
                    : "Awarded for research comparing LLaMA with rule-based dialogue systems in voice-recognition kiosk scenarios."}
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {lang === "ko" ? "댄스 및 토론" : "Dance & Debate"}
                </div>
                <div className="mt-2 text-sm text-muted">
                  {lang === "ko"
                    ? "다수 수상 · 이중언어 토론(한국어 · 영어)"
                    : "Multiple awards · Bilingual debating (Korean & English)"}
                </div>
                <div className="mt-4 text-sm leading-6 text-muted">
                  {lang === "ko"
                    ? "기술 프로젝트와 리더십 활동과 병행하며 대회에 참여했습니다."
                    : "Competitive participation alongside technical and leadership work."}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
