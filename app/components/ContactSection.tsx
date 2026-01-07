import React from "react";
import type { Profile, SectionContent } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { LinkButton } from "./LinkButton";
import { CURRENT_YEAR } from "../data/constants";

type ContactSectionProps = {
  profileData: Profile;
  sectionContent: SectionContent;
  lang: "en" | "ko";
  mounted: boolean;
};

export function ContactSection({ profileData, sectionContent, lang, mounted }: ContactSectionProps) {
  return (
    <section id="contact" className="border-t border-border/60 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-16 sm:pb-14 w-full">
        <SectionHeader
          eyebrow={sectionContent.eyebrow || "Get in Touch"}
          title={sectionContent.title || "Let's Build Together"}
          subtitle={sectionContent.subtitle}
        />

        {/* Email Contact Card */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-accent/10 to-accent-2/5 border-accent/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div
                  className="text-sm font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {lang === "ko" ? "📧 직접 연락" : "📧 Direct Contact"}
                </div>
                <div className="text-lg font-medium text-accent">{profileData.links.email}</div>
                <div className="text-xs text-muted mt-2">
                  {lang === "ko" ? "일반적으로 24시간 이내 답변" : "Typically respond within 24 hours"}
                </div>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(profileData.links.email);
                  alert(lang === "ko" ? "이메일이 복사되었습니다!" : "Email copied!");
                }}
                className="px-4 py-2 rounded-lg bg-accent text-surface font-medium text-sm hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                {lang === "ko" ? "복사" : "Copy"}
              </button>
            </div>
          </Card>
        </div>

        {/* CTAs for Different Personas */}
        <div className="mb-8">
          <h3
            className="text-base font-semibold text-foreground mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {lang === "ko" ? "관심 분야별 연락처" : "Connect by Interest"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-foreground mb-3">
                🚀 {lang === "ko" ? "채용 담당자" : "Hiring Managers"}
              </div>
              <p className="text-xs text-muted mb-4">
                {lang === "ko"
                  ? "인턴십, 신입사원 채용, 풀스택 역할에 관심 있습니다."
                  : "Open to internships, entry-level FT roles, and full-stack opportunities."}
              </p>
              <div className="flex flex-col gap-2">
                <LinkButton
                  label={lang === "ko" ? "LinkedIn에서 메시지" : "Message on LinkedIn"}
                  href={profileData.links.linkedin}
                  variant="primary"
                />
                <LinkButton
                  label={lang === "ko" ? "이메일로 연락" : "Email Me"}
                  href={`mailto:${profileData.links.email}`}
                  variant="secondary"
                />
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-foreground mb-3">
                🧑‍💻 {lang === "ko" ? "개발자·협력자" : "Developers"}
              </div>
              <p className="text-xs text-muted mb-4">
                {lang === "ko"
                  ? "AI, RAG 파이프라인, 오픈소스 프로젝트 협업에 관심 있습니다."
                  : "Open to RAG, AI, and open-source collaboration. Feel free to reach out!"}
              </p>
              <div className="flex flex-col gap-2">
                <LinkButton
                  label={lang === "ko" ? "GitHub 보기" : "View GitHub"}
                  href={profileData.links.github}
                  variant="primary"
                />
                <LinkButton
                  label={lang === "ko" ? "이메일로 논의" : "Email to Discuss"}
                  href={`mailto:${profileData.links.email}`}
                  variant="secondary"
                />
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-foreground mb-3">
                📚 {lang === "ko" ? "연구자·학술" : "Researchers"}
              </div>
              <p className="text-xs text-muted mb-4">
                {lang === "ko"
                  ? "LLM 평가, RAG 최적화 연구에 관심 있습니다."
                  : "Interested in LLM evaluation and RAG optimization research."}
              </p>
              <div className="flex flex-col gap-2">
                <LinkButton
                  label={lang === "ko" ? "연구 관심사" : "Research Interests"}
                  href="#research"
                  variant="primary"
                />
                <LinkButton
                  label={lang === "ko" ? "직접 이메일" : "Email Directly"}
                  href={`mailto:${profileData.links.email}`}
                  variant="secondary"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Resume Downloads */}
        <div className="mb-8">
          <h3
            className="text-base font-semibold text-foreground mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {lang === "ko" ? "📄 이력서 다운로드" : "📄 Download Resume"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <LinkButton
              label={lang === "ko" ? "📄 한국어 이력서" : "📄 Resume (Korean)"}
              href={profileData.links.resumeKo}
              variant="primary"
            />
            <LinkButton
              label={lang === "ko" ? "📄 영어 이력서" : "📄 Resume (English)"}
              href={profileData.links.resumeEn}
              variant="primary"
            />
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mb-12">
          <h3
            className="text-base font-semibold text-foreground mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {lang === "ko" ? "💼 빠른 정보" : "💼 Quick Facts"}
          </h3>
          <Card className="bg-muted/5 border-border/40">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-sm">
              <div>
                <div className="text-muted text-xs font-semibold mb-1">
                  {lang === "ko" ? "⏱️ 답변 시간" : "⏱️ Response Time"}
                </div>
                <div className="text-foreground font-medium">
                  {lang === "ko" ? "24시간 이내" : "Within 24 hours"}
                </div>
              </div>
              <div>
                <div className="text-muted text-xs font-semibold mb-1">
                  {lang === "ko" ? "📍 위치" : "📍 Location"}
                </div>
                <div className="text-foreground font-medium">
                  {lang === "ko" ? "대구, 한국" : "Daegu, Korea"}
                </div>
              </div>
              <div>
                <div className="text-muted text-xs font-semibold mb-1">
                  {lang === "ko" ? "🕐 시간대" : "🕐 Timezone"}
                </div>
                <div className="text-foreground font-medium">{lang === "ko" ? "UTC+9" : "UTC+9 (KST)"}</div>
              </div>
              <div>
                <div className="text-muted text-xs font-semibold mb-1">
                  {lang === "ko" ? "✅ 가능 상태" : "✅ Availability"}
                </div>
                <div className="text-foreground font-medium">{lang === "ko" ? "유연함" : "Flexible"}</div>
              </div>
            </div>
          </Card>
        </div>

        <footer className="mt-25 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <div>
            © {mounted ? new Date().getFullYear() : CURRENT_YEAR} {profileData.name}
          </div>
          <div className="text-muted-2">
            {lang === "ko" ? "Next.js와 Tailwind로 제작" : "Built with Next.js and Tailwind"}
          </div>
        </footer>
      </div>
    </section>
  );
}
