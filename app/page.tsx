"use client";

import React, { useEffect, useState } from "react";
import { projectCards, koProjectCards } from "./projects/data";
import {
  profile,
  koProfile,
  skills,
  koSkills,
  experience,
  koExperience,
  research,
  koResearch,
  researchInterests,
  koResearchInterests,
  leadership,
  koLeadership,
  navLinks,
  koNavLinks,
  sectionsKo,
} from "./data/constants";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResearchSection } from "./components/ResearchSection";
import { AwardsSection } from "./components/AwardsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ContactSection } from "./components/ContactSection";
import type { SectionContent } from "./types";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">(() => {
    if (typeof window === "undefined") return "en";
    try {
      const stored = localStorage.getItem("site_lang");
      if (stored === "ko" || stored === "en") return stored;
      return navigator.language?.startsWith("ko") ? "ko" : "en";
    } catch {
      return "en";
    }
  });
  const mounted = typeof window !== "undefined";
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem("site_lang", lang);
    } catch {
      // Ignore localStorage errors
    }
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profileToRender = lang === "ko" ? koProfile : profile;
  const navToRender = lang === "ko" ? koNavLinks : navLinks;
  const experienceToRender = lang === "ko" ? koExperience : experience;
  const researchToRender = lang === "ko" ? koResearch : research;
  const leadershipToRender = lang === "ko" ? koLeadership : leadership;
  const skillsToRender = lang === "ko" ? koSkills : skills;
  const researchInterestsToRender = lang === "ko" ? koResearchInterests : researchInterests;
  const projectsToRender = lang === "ko" ? koProjectCards : projectCards;

  const tSection = (key: string, fallback: SectionContent): SectionContent => {
    if (lang === "ko" && sectionsKo[key]) return sectionsKo[key];
    return fallback;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background focus:shadow-lg"
      >
        Skip to content
      </a>

      <Header
        navLinks={navToRender}
        lang={lang}
        onLangToggle={() => setLang((s) => (s === "ko" ? "en" : "ko"))}
        scrollProgress={scrollProgress}
      />

      <main id="content">
        <HeroSection profileData={profileToRender} lang={lang} />

        <AboutSection
          profileData={profileToRender}
          lang={lang}
          sectionContent={tSection("about", {
            eyebrow: "Introduction",
            title: "Who I Am",
            subtitle:
              "Computer Science student at KNU focused on AI systems research and real-world deployment",
          })}
        />

        <SkillsSection
          skills={skillsToRender}
          sectionContent={tSection("skills", {
            eyebrow: "Technical Expertise",
            title: "Core Technical Stack",
            subtitle: "Specialized in AI, backend systems, and full-stack development",
          })}
        />

        <ExperienceSection
          experiences={experienceToRender}
          sectionContent={tSection("experience", {
            eyebrow: "Professional Work",
            title: "Internships & Research",
            subtitle: "Hands-on experience building AI systems and leading teams",
          })}
        />

        <ProjectsSection
          projects={projectsToRender}
          sectionContent={tSection("projects", {
            eyebrow: "Projects",
            title: "Team Work",
            subtitle:
              "AI and software projects designed and implemented through research and practical development",
          })}
        />

        <ResearchSection
          research={researchToRender}
          researchInterests={researchInterestsToRender}
          sectionContent={tSection("research", {
            eyebrow: "Research",
            title: "Publication & Evaluation",
            subtitle: "Research on conversational AI behavior in realistic environments",
          })}
          lang={lang}
        />

        <AwardsSection
          sectionContent={tSection("awards", {
            eyebrow: "Recognition",
            title: "Honors & Awards",
            subtitle: "Awards and recognition from research and competitions",
          })}
          lang={lang}
        />

        <LeadershipSection
          leadership={leadershipToRender}
          sectionContent={tSection("leadership", {
            eyebrow: "Leadership",
            title: "Roles built on responsibility",
            subtitle:
              "Activities reflecting coordination, community involvement, and technical growth.",
          })}
          lang={lang}
        />

        <ContactSection
          profileData={profileToRender}
          sectionContent={tSection("contact", {
            eyebrow: "Get in Touch",
            title: "Let's Build Together",
            subtitle:
              "Whether you're exploring RAG pipelines, LLM optimization, or full-stack solutions—let's connect",
          })}
          lang={lang}
          mounted={mounted}
        />
      </main>
    </div>
  );
}