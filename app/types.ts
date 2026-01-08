export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ExperienceItem = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  stack: string[];
  note?: string;
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  role: string;
  whatBuilt: string[];
  stack: string[];
  outcomes?: string[];
  repoLinks?: { label: string; href: string }[];
};

export type ResearchItem = {
  title: string;
  venue: string;
  award: string;
  summaryBullets: string[];
  stack: string[];
  repoLinks?: { label: string; href: string }[];
};

export type SkillGroup = {
  title: string;
  proficiency: string;
  items: string[];
};

export type LeadershipItem = {
  title: string;
  category: string;
  dates: string;
  detail: string;
  isPrimary?: boolean;
};

export type Profile = {
  name: string;
  nameNative: string;
  headline: string;
  subheadline: string;
  quickFacts: string[];
  locationLine: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    resumeEn: string;
    resumeKo: string;
  };
  about: string[];
  education: {
    school: string;
    degree: string;
    gpa: string;
    recentGpa: string;
    focus: string;
  };
  softSkills: string[];
  languages: string[];
};

export type ResearchInterest = {
  area: string;
  focus: string;
};

export type SectionContent = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};
