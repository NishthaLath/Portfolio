import React from "react";
import type { Profile, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

type AboutSectionProps = {
  profileData: Profile;
  lang: "en" | "ko";
  sectionContent: SectionContent;
};

export function AboutSection({ profileData, lang, sectionContent }: AboutSectionProps) {
  return (
    <section id="about" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Introduction"}
          title={sectionContent.title || "Who I Am"}
          subtitle={sectionContent.subtitle}
        />

        {/* 2-column top section: Intro Text + Education */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <div className="space-y-3 text-sm leading-7 text-muted">
              {profileData.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>

          <Card>
            <div
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {lang === "ko" ? "학력" : "Education"}
            </div>
            <div className="space-y-3 text-sm">
              <div className="font-medium text-foreground">{profileData.education.school}</div>
              <div className="text-muted">{profileData.education.degree}</div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <div className="text-xs text-muted">{lang === "ko" ? "현재 학기" : "Current"}</div>
                    <div className="text-foreground font-semibold">{profileData.education.recentGpa}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">{lang === "ko" ? "누적" : "Cumulative"}</div>
                    <div className="text-accent font-semibold">{profileData.education.gpa}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 3-column bottom section */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Card>
              <div
                className="text-sm font-semibold text-foreground mb-3"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {lang === "ko" ? "언어" : "Languages"}
              </div>
              <ul className="space-y-2 text-sm">
                {profileData.languages.map((l) => (
                  <li key={l} className="flex items-start text-foreground font-medium">
                    <span className="mr-2">⭐</span>
                    {l}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div
                className="text-sm font-semibold text-foreground mb-3"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {lang === "ko" ? "현재 탐구 중" : "Currently Exploring"}
              </div>
              <ul className="space-y-2 text-sm text-muted">
                {[
                  lang === "ko" ? "고급 RAG 평가 전략" : "Advanced RAG evaluation strategies",
                  lang === "ko" ? "LangGraph 기반 에이전트 라우팅" : "LangGraph-based agent routing",
                  lang === "ko"
                    ? "LLM 파이프라인 관찰성"
                    : "System observability for LLM pipelines",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card>
            <div
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {lang === "ko" ? "소프트 스킬" : "Soft Skills"}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {profileData.softSkills.map((skill, idx) => {
                const categoryColors = [
                  "bg-accent/20 text-accent border border-accent/40",
                  "bg-accent-2/20 text-accent-2 border border-accent-2/40",
                  "bg-purple-500/20 text-purple-400 border border-purple-500/40",
                  "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
                  "bg-blue-500/20 text-blue-400 border border-blue-500/40",
                ];
                return (
                  <div
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      categoryColors[idx % categoryColors.length]
                    }`}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <div
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {lang === "ko" ? "주요 관심 분야" : "Primary Focus"}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                lang === "ko" ? "AI 시스템 & LLM 애플리케이션" : "AI Systems & LLM Applications",
                lang === "ko" ? "대화형 AI & RAG" : "Conversational AI & RAG",
                lang === "ko" ? "웹 & 백엔드 엔지니어링" : "Web & Backend Engineering",
                lang === "ko" ? "연구 중심 개발" : "Research-oriented Development",
                lang === "ko" ? "접근성 & 인간 중심 시스템" : "Accessible & Human-Centered Systems",
                lang === "ko" ? "평가 기반 AI 시스템" : "Evaluation-driven AI systems",
                lang === "ko" ? "프로덕션 준비 AI 인프라" : "Production-ready AI infrastructure",
              ].map((area) => (
                <div
                  key={area}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/40"
                >
                  • {area}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
