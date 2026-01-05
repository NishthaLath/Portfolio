/* eslint-disable react-hooks/set-state-in-effect */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projectCards } from "./projects/data";
type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type ExperienceItem = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  stack: string[];
  note?: string;
};

type ProjectItem = {
  title: string;
  subtitle: string;
  role: string;
  whatBuilt: string[];
  stack: string[];
  outcomes?: string[];
  repoLinks?: { label: string; href: string }[];
};

type ResearchItem = {
  title: string;
  venue: string;
  award: string;
  summaryBullets: string[];
  stack: string[];
  repoLinks?: { label: string; href: string }[];
};

const profile = {
  name: "Nishtha Lath",
  nameNative: "니스타",
  headline: "AI systems · LLM applications · full-stack engineering",
  subheadline:
    "I am a Computer Science undergraduate at Kyungpook National University, specializing in AI systems and Large Language Models. My work focuses on building research-driven, production-ready AI applications, including conversational AI, RAG systems, and accessible interfaces. I bridge rigorous evaluation with real-world deployment to create systems that work beyond the lab.",
  quickFacts: [
    "Kyungpook National University (KNU)",
    "TOPIK Level 5",
    "AI & web systems",
  ],
  locationLine: "Hello! I'm",
  links: {
    github: "https://github.com/NishthaLath",
    linkedin: "https://www.linkedin.com/in/nishtha-lath-335206276/",
    email: "",
    resumeEn: "https://drive.google.com/file/d/1OTfZOcni_pwuJHin3wRD9-DwDqyCFwpb/view?usp=drive_link",
    resumeKo: "https://drive.google.com/file/d/10VST30cYUv_vhqYBp_Wz-EuZXED7arHb/view?usp=drive_link",
  },
  about: [
    "I focus on building AI systems that move from research to real-world use.",
    "My work spans LLM applications, RAG pipelines, and full-stack deployment, with strong attention to reliability and accessibility.",
    "I enjoy owning systems end-to-end — from design and evaluation to production and iteration.",
  ],
  education: {
    school: "Kyungpook National University (KNU)",
    degree: "B.S. in Computer Science & Engineering (2022–2026)",
    gpa: "GPA: 3.55 / 4.3",
    recentGpa: "Recent GPA: 3.77 / 4.3",
    focus: "Focus: AI Systems, Software Engineering, Systems & Networks",
  },
  softSkills: [
    "Analytical problem solving",
    "Clear technical communication",
    "Team leadership & ownership",
    "Cross-cultural collaboration",
    "Fast learner in ambiguous environments",
  ],
  languages: [
    "English: Fluent",
    "Korean: Advanced (TOPIK 5)",
    "Hindi: Native",
  ],
};

const koProfile = {
  name: "니스타",
  nameNative: "Lath Nishtha",
  headline: "AI 시스템 · LLM 응용 · 풀스택 엔지니어링",
  subheadline:
    "경북대학교 컴퓨터공학과에 재학 중인 학생으로, AI 시스템과 대규모 언어 모델(LLM)을 중심으로 연구 및 개발을 수행하고 있습니다. 대화형 AI, RAG 시스템, 접근성 중심 인터페이스 등 연구 기반이면서 실제 환경에서 동작하는 AI 서비스를 구현해 왔습니다. 이론과 실무를 연결하여, 실험실을 넘어 현장에서 신뢰받는 시스템을 만드는 것을 목표로 합니다.",
  quickFacts: ["경북대학교 (KNU)", "TOPIK 5급", "AI · 웹 시스템"],
  locationLine: "Hello! I'm",
  links: profile.links,
  about: [
    "연구 단계에 머무르지 않고 실제 환경에서 동작하는 AI 시스템 구현에 집중하고 있습니다.",
    "LLM 응용, RAG 파이프라인, 풀스택 배포까지 전반을 다루며, 신뢰성과 접근성을 중요하게 생각합니다.",
    "설계부터 평가, 배포, 개선까지 시스템 전체를 책임지고 만드는 과정을 선호합니다.",
  ],
  education: {
    school: "경북대학교 (KNU)",
    degree: "컴퓨터공학 학사 (2022–2026)",
    gpa: "전체 평점: 3.55 / 4.3",
    recentGpa: "최근 학기 평점: 3.77 / 4.3",
    focus: "관심 분야: AI 시스템, 소프트웨어 공학, 시스템·네트워크",
  },
  softSkills: [
    "분석적 문제 해결 능력",
    "명확한 기술 커뮤니케이션",
    "리더십과 오너십",
    "다문화 협업 경험",
    "불확실한 환경에서의 빠른 학습 능력",
  ],
  languages: [
    "영어: 유창",
    "한국어: 고급 (TOPIK 5급)",
    "힌디어: 모국어",
  ],
};

const skills = [
  {
    title: "AI / LLMs",
    items: [
      "LLaMA, GPT models",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt design and evaluation",
      "Fine-tuning (Unsloth)",
      "Conversational AI and NLP",
      "Dataset creation and preprocessing",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "RESTful API design",
      "LangChain, FAISS",
      "Spring Boot, JPA/Hibernate",
      "Vector databases",
      "CORS, reverse proxies, port binding",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React (TypeScript)",
      "HTML, CSS, Tailwind",
      "Role-based UI patterns",
      "Component architecture",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Docker",
      "NGINX",
      "AWS EC2",
      "Git & GitHub",
      "Hugging Face Hub",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "YOLO",
      "MediaPipe",
      "DeepSORT",
      "ST-GCN",
      "FaceNet, OSNet (Torchreid)",
      "OpenCV",
    ],
  },
  {
    title: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "C++",
    ],
  },
];

const experience: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern (Team Leader)",
    org: "RikkeiSoft Corporation",
    dates: "Dec 2024 – Jan 2025",
    bullets: [
      "Designed and implemented the frontend architecture using React (TypeScript) and Tailwind CSS for an internal AI chatbot platform.",
      "Built role-based dashboards (user vs admin) supporting prompt customization, file and link management, and administrative controls.",
      "Led project planning and coordination using Trello, WBS, and Gantt-style schedules.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub"],
  },
  {
    title: "Undergraduate Lab Intern",
    org: "Intelligent Software Systems Lab",
    dates: "Oct 2025 – Dec 2025",
    note: "",
    bullets: [
      "Developed a RAG-based disaster response assistant integrating legal manuals, population datasets, and geospatial risk data.",
      "Implemented FAISS-based retrieval, LangChain pipelines, and an optimized FastAPI backend to handle heterogeneous inputs.",
      "Reduced hallucination risk through retrieval filtering and targeted prompt tuning.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "LLMs"],
  },
];

const koExperience: ExperienceItem[] = [
  {
    title: "프론트엔드 개발 인턴 (팀 리더)",
    org: "RikkeiSoft Corporation",
    dates: "Dec 2024 – Jan 2025",
    bullets: [
      "내부 AI 챗봇 플랫폼을 위해 React(TypeScript)와 Tailwind CSS 기반의 프런트엔드 아키텍처를 설계·구현했습니다.",
      "사용자/관리자 역할 기반 대시보드를 구축하고 프롬프트 커스터마이징, 파일·링크 관리, 관리자 제어 기능을 구현했습니다.",
      "Trello, WBS, 간트 일정 관리를 활용해 프로젝트 기획과 조정을 리드했습니다.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub"],
  },
  {
    title: "학부 연구실 인턴",
    org: "Intelligent Software Systems Lab",
    dates: "Oct 2025 – Dec 2025",
    note: "",
    bullets: [
      "법령 매뉴얼, 인구 데이터셋, 지리공간 위험 데이터를 통합한 RAG 기반 재난 대응 어시스턴트를 개발했습니다.",
      "FAISS 기반 검색, LangChain 파이프라인, 이기종 입력을 처리하는 최적화된 FastAPI 백엔드를 구현했습니다.",
      "검색 필터링과 정밀한 프롬프트 튜닝을 통해 환각(hallucination) 발생 위험을 낮췄습니다.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "LLMs"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "SheBots",
    subtitle: "AI-enabled RAG chatbot for a department website",
    role: "Lead backend & AI developer",
    whatBuilt: [
      "Designed a hybrid RAG architecture using LangChain and FAISS.",
      "Integrated GPT-4.1 with retrieval and served responses through a FastAPI backend.",
      "Deployed the system on AWS EC2 using Docker and NGINX.",
      "Addressed deployment constraints including disk expansion, reverse proxy configuration, CORS, and port binding.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "AWS EC2", "Docker", "NGINX"],
    outcomes: [
      "Production chatbot providing departmental information.",
      "Stable and maintainable AI service under real-world deployment conditions.",
    ],
    repoLinks: [
      { label: "Frontend", href: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend" },
      { label: "Organization", href: "https://github.com/InfoFlow-ChatBot-RikkeiSoft-Corp" },
    ],
  },
  {
    title: "Accessible Public Transportation Kiosk (Visoned)",
    subtitle: "Voice-driven kiosk prototype for accessible routing",
    role: "Backend lead & AI integration engineer",
    whatBuilt: [
      "Developed a voice-driven kiosk backend using Node.js.",
      "Integrated Google Cloud APIs for Speech-to-Text, Text-to-Speech, and Maps.",
      "Implemented route optimization logic and backend–frontend integration.",
    ],
    stack: ["Node.js", "React", "Google Cloud STT/TTS/Maps"],
    outcomes: [
      "Functional prototype featuring accessibility-first interaction design.",
    ],
    repoLinks: [
      { label: "Backend", href: "https://github.com/NishthaLath/VISIONED-KNU-Kiosk-Backend" },
    ],
  },
  {
    title: "AI-Driven Voice Recognition Cafe Kiosk",
    subtitle: "LLM tuning for robust voice-based ordering",
    role: "Frontend + AI lead",
    whatBuilt: [
      "Designed prompts to handle complex and ambiguous multi-item orders.",
      "Fine-tuned LLaMA models using Unsloth and deployed them to Hugging Face Hub.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "LLaMA", "Unsloth"],
  },
  {
    title: "AI-Based Multi-CCTV Person Detection & Behavior Analysis",
    subtitle: "Multi-person tracking, action recognition, and re-identification",
    role: "Core AI pipeline developer",
    whatBuilt: [
      "Implemented multi-person tracking using YOLO and DeepSORT.",
      "Applied action recognition with ST-GCN.",
      "Added cross-camera re-identification using FaceNet and OSNet (Torchreid).",
      "Evaluated system performance on real-world datasets.",
    ],
    stack: ["Python", "OpenCV", "YOLO", "DeepSORT", "ST-GCN", "Torchreid"],
    repoLinks: [
      { label: "Organization", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis" },
      { label: "HumanRecognition", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis/HumanRecognition" },
    ],
  },
];

const koProjects: ProjectItem[] = [
  {
    title: "SheBots",
    subtitle: "학과 웹사이트용 AI 기반 RAG 챗봇",
    role: "백엔드 및 AI 리드 개발자",
    whatBuilt: [
      "LangChain과 FAISS를 활용한 하이브리드 RAG 아키텍처를 설계했습니다.",
      "GPT-4.1을 검색 파이프라인과 결합하여 FastAPI 백엔드로 서비스했습니다.",
      "AWS EC2 환경에 Docker와 NGINX를 사용해 배포했습니다.",
      "디스크 확장, 리버스 프록시 설정, CORS, 포트 바인딩 등 배포 제약을 해결했습니다.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "AWS EC2", "Docker", "NGINX"],
    outcomes: [
      "학과 정보 제공을 위한 실서비스 챗봇을 운영했습니다.",
      "실제 배포 환경에서도 안정적으로 유지 가능한 AI 서비스를 구축했습니다.",
    ],
    repoLinks: [
      { label: "프론트엔드", href: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend" },
      { label: "조직용", href: "https://github.com/InfoFlow-ChatBot-RikkeiSoft-Corp" },
    ],
  },
  {
    title: "Accessible Public Transportation Kiosk (Visoned)",
    subtitle: "접근성 중심 음성 기반 경로 안내 키오스크 프로토타입",
    role: "백엔드 리드 및 AI 통합 엔지니어",
    whatBuilt: [
      "Node.js 기반의 음성 인터페이스 키오스크 백엔드를 구축했습니다.",
      "Google Cloud(STT, TTS, Maps) 서비스를 통합했습니다.",
      "경로 최적화 로직과 프런트엔드 연동을 구현했습니다.",
    ],
    stack: ["Node.js", "React", "Google Cloud STT/TTS/Maps"],
    outcomes: ["접근성 우선 상호작용을 갖춘 기능적 프로토타입을 구현했습니다."],
    repoLinks: [
      { label: "백엔드", href: "https://github.com/NishthaLath/VISIONED-KNU-Kiosk-Backend" },
    ],
  },
  {
    title: "AI-Driven Voice Recognition Cafe Kiosk",
    subtitle: "강건한 음성 주문 처리를 위한 LLM 튜닝",
    role: "프론트엔드 + AI 리드",
    whatBuilt: [
      "복잡하고 모호한 다품목 주문을 처리할 수 있도록 프롬프트를 설계했습니다.",
      "LLaMA 모델을 Unsloth로 파인튜닝한 후 Hugging Face Hub에 배포했습니다.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "LLaMA", "Unsloth"],
  },
  {
    title: "AI-Based Multi-CCTV Person Detection & Behavior Analysis",
    subtitle: "다중 객체 추적, 행동 인식, 재식별",
    role: "핵심 AI 파이프라인 개발자",
    whatBuilt: [
      "YOLO와 DeepSORT를 활용해 다중 인물 추적을 구현했습니다.",
      "ST-GCN 기반 행동 인식 모델을 적용했습니다.",
      "FaceNet과 OSNet(Torchreid)을 활용해 교차 카메라 재식별을 추가했습니다.",
      "실제 데이터셋을 사용해 성능을 검증했습니다.",
    ],
    stack: ["Python", "OpenCV", "YOLO", "DeepSORT", "ST-GCN", "Torchreid"],
    repoLinks: [
      { label: "조직용", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis" },
      { label: "HumanRecognition", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis/HumanRecognition" },
    ],
  },
];

const research: ResearchItem[] = [
  {
    title: "Evaluating the LLaMA Model for Enhanced Conversational AI in Voice Recognition Kiosks",
    venue: "UCWIT 2024 (KIISE-hosted)",
    award: "Excellent Paper Award (Top 4/47 teams)",
    summaryBullets: [
      "Compared rule-based conversational systems (RASA) with LLaMA in realistic kiosk-style dialogue scenarios.",
      "Designed controlled test conversations and a task-based evaluation methodology.",
      "Observed stronger handling of ambiguity and multi-intent inputs with LLaMA.",
    ],
    stack: ["LLaMA", "RASA", "Python", "NLP evaResearchluation"],
    repoLinks: [
      { label: " Github Paper Repo →", href: "https://github.com/NishthaLath/UCWIT-2024-ResearchPaper" },
    ],
  },
];

const koResearch: ResearchItem[] = [
  {
    title: "음성 인식 키오스크 환경에서 대화형 AI 성능 향상을 위한 LLaMA 모델 평가",
    venue: "UCWIT 2024 (KIISE 주최)",
    award: "우수 논문상 (47팀 중 Top 4)",
    summaryBullets: [
      "현실적인 키오스크 대화 시나리오에서 규칙 기반 대화 시스템(RASA)과 LLaMA를 비교 평가했습니다.",
      "제어된 테스트 대화와 과제 기반 평가 방법론을 설계했습니다.",
      "LLaMA가 모호한 입력과 다중 의도 처리에서 더 우수한 성능을 보임을 확인했습니다.",
    ],
    stack: ["LLaMA", "RASA", "Python", "NLP 평가"],
    repoLinks: [
      { label: "논문 레포지토리", href: "https://github.com/NishthaLath/UCWIT-2024-ResearchPaper" },
    ],
  },
];

const leadership = [
  {
    title: "International Student Representative (CS Department)",
    detail: "Student support and coordination between students and the department.",
  },
  {
    title: "ISO Member",
    detail: "Event organization and support for international students.",
  },
  {
    title: "KERT Cybersecurity Club Member",
    detail: "Participation in CTFs and foundational work in web security and cryptography.",
  },
  {
    title: "Dance & Debate Competitions",
    detail: "Multiple awards; bilingual debating in Korean and English.",
  },
];

const koLeadership = [
  {
    title: "국제 학생 대표 (컴퓨터공학과)",
    detail: "국제 학생 지원 및 학과와의 소통을 담당했습니다.",
  },
  {
    title: "ISO 회원",
    detail: "행사 기획 및 국제 학생 지원 활동에 참여했습니다.",
  },
  {
    title: "KERT 사이버보안 동아리 회원",
    detail: "CTF 참여와 웹 보안, 암호학 기초 학습을 진행했습니다.",
  },
  {
    title: "댄스 및 토론 대회",
    detail: "다수 수상 경력 보유 · 한국어·영어 이중 언어 토론.",
  },
];

const koSkills = [
  {
    title: "AI / LLM",
    items: [
      "LLaMA, GPT 모델",
      "RAG (검색 증강 생성)",
      "프롬프트 설계 및 평가",
      "파인튜닝 (Unsloth)",
      "대화형 AI 및 NLP",
      "데이터셋 생성 및 전처리",
    ],
  },
  {
    title: "백엔드 & API",
    items: [
      "FastAPI",
      "RESTful API 설계",
      "LangChain, FAISS",
      "Spring Boot, JPA/Hibernate",
      "벡터 데이터베이스",
      "CORS, 리버스 프록시, 포트 바인딩",
    ],
  },
  {
    title: "프론트엔드",
    items: [
      "React (TypeScript)",
      "HTML, CSS, Tailwind",
      "역할 기반 UI 패턴",
      "컴포넌트 아키텍처",
    ],
  },
  {
    title: "인프라",
    items: [
      "Docker",
      "NGINX",
      "AWS EC2",
      "Git & GitHub",
      "Hugging Face Hub",
    ],
  },
  {
    title: "컴퓨터 비전",
    items: [
      "YOLO",
      "MediaPipe",
      "DeepSORT",
      "ST-GCN",
      "FaceNet, OSNet (Torchreid)",
      "OpenCV",
    ],
  },
  {
    title: "프로그래밍 언어",
    items: ["Python", "Java", "JavaScript", "C", "C++"],
  },
];

const navLinks: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Awards", href: "#awards" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const koNavLinks: LinkItem[] = [
  { label: "소개", href: "#about" },
  { label: "기술", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#projects" },
  { label: "연구", href: "#research" },
  { label: "수상", href: "#awards" },
  { label: "리더십", href: "#leadership" },
  { label: "연락", href: "#contact" },
];

const sectionsKo: Record<string, { eyebrow?: string; title?: string; subtitle?: string }> = {
  about: {
    eyebrow: "소개",
    title: "현장에서 통하는 엔지니어링",
    subtitle: "배경, 집중 분야, 학문적 기반을 간결하게 정리했습니다.",
  },
  skills: {
    eyebrow: "기술",
    title: "AI·백엔드·웹 UI 핵심 스택",
    subtitle: "핵심에 집중할 수 있도록 정리했습니다.",
  },
  experience: {
    eyebrow: "경력",
    title: "책임이 명확한 인턴십과 연구실 경험",
    subtitle: "무엇을 배포했고 무엇을 담당했는지를 중심으로 정리했습니다.",
  },
  projects: {
    eyebrow: "프로젝트",
    title: "사례 연구 중심의 빌드",
    subtitle: "문제 정의, 구현 내용, 성과를 간결하게 제시합니다.",
  },
  research: {
    eyebrow: "연구",
    title: "출판 및 평가 중심 연구",
    subtitle: "현실적인 키오스크 환경에서의 대화형 AI 행동을 분석한 연구입니다.",
  },
  awards: {
    eyebrow: "수상",
    title: "수상 내역",
    subtitle: "연구 및 대회를 통해 받은 주요 수상 내역입니다.",
  },
  leadership: {
    eyebrow: "리더십",
    title: "책임을 기반으로 한 역할",
    subtitle: "조직 활동, 커뮤니티 기여, 기술 성장을 위한 경험입니다.",
  },
  contact: {
    eyebrow: "연락",
    title: "연결합시다",
    subtitle: "인턴십, 연구, AI 시스템 및 풀스택 엔지니어링 관련 문의를 환영합니다.",
  },
};

const CURRENT_YEAR = 2026;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/90 shadow-sm transition-all duration-200 hover:bg-surface-2/80 hover:border-accent/40 hover:shadow-md backdrop-blur-sm">
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-sm font-medium tracking-wide text-muted">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cx("rounded-2xl border border-border/80 bg-surface/60 p-6 shadow-lg shadow-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-border backdrop-blur-sm", className)}>
      {children}
    </div>
  );
}

function LinkButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 ease-out transform";

  const primaryStyles = [
    "bg-gradient-to-r from-accent to-accent-2 text-white",
    "shadow-lg shadow-accent/25",
    "hover:shadow-xl hover:shadow-accent/40 hover:scale-105 hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-100"
  ].join(" ");

  const secondaryStyles = [
    "border-2 border-border bg-surface/60 text-foreground shadow-md backdrop-blur-sm",
    "hover:bg-surface-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-100"
  ].join(" ");

  const variants = {
    primary: primaryStyles,
    secondary: secondaryStyles,
  } as const;

  return (
    <a
      className={cx(base, variants[variant])}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export default function Home() {
  // Stable default for SSR; hydrate preference after mount.
  const [lang, setLang] = useState<"en" | "ko">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("site_lang");
      if (stored === "ko" || stored === "en") {
        setLang(stored);
        return;
      }
      if (navigator.language?.startsWith("ko")) {
        setLang("ko");
      }
    } catch (e) { }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("site_lang", lang);
    } catch (e) { }
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
  }, [lang, mounted]);

  const githubEnabled = Boolean(profile.links.github);
  const linkedinEnabled = Boolean(profile.links.linkedin);
  const emailEnabled = Boolean(profile.links.email);

  const profileToRender = lang === "ko" ? koProfile : profile;
  const navToRender = lang === "ko" ? koNavLinks : navLinks;
  const experienceToRender = lang === "ko" ? koExperience : experience;
  const projectsToRender = lang === "ko" ? koProjects : projects;
  const researchToRender = lang === "ko" ? koResearch : research;
  const leadershipToRender = lang === "ko" ? koLeadership : leadership;
  const skillsToRender = lang === "ko" ? koSkills : skills;

  const tSection = (key: string, fallback: { eyebrow?: string; title?: string; subtitle?: string }) => {
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

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
            {navToRender.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {githubEnabled ? (
              <a
                href={profile.links.github}
                className="text-sm font-medium text-muted transition-all hover:text-foreground hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {linkedinEnabled ? (
              <a
                href={profile.links.linkedin}
                className="text-sm font-medium text-muted transition-all hover:text-foreground hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            ) : null}
            <button
              aria-label={lang === "ko" ? "영어로 전환" : "한국어로 전환"}
              onClick={() => setLang((s) => (s === "ko" ? "en" : "ko"))}
              className="ml-2 rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-sm font-medium text-muted hover:text-foreground cursor-pointer"
            >
              {lang === "ko" ? "English" : "한국어"}
            </button>
          </div>
        </div>
      </header>

      <main id="content">
        <section id="top" className="relative overflow-hidden min-h-screen flex flex-col">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-30 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.22),transparent_60%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <p className="text-lg font-semibold text-foreground">
                  {profileToRender.locationLine}
                </p>

                <h1
                  className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {profileToRender.name}{" "}
                  <span className="text-muted">({profileToRender.nameNative})</span>
                </h1>

                <p className="mt-5 text-lg leading-8 text-muted">
                  {profileToRender.subheadline}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <LinkButton
                    label={lang === "ko" ? "내 이력서" : "My Resume"}
                    href={lang === "ko" ? profile.links.resumeKo : profile.links.resumeEn}
                    variant="secondary"
                  />
                  <LinkButton
                    label={lang === "ko" ? "연락하기" : "Contact"}
                    href="#contact"
                    variant="secondary"
                  />
                </div>

              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 blur-2xl opacity-60" />
                  <div className="relative rounded-2xl border border-border/80 overflow-hidden shadow-2xl shadow-accent/20 backdrop-blur-sm">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src="/Profile_image.png"
                        alt="Profile image of Nishtha Lath"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
              {lang === "ko" ? "소개" : "About"}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "소개" : "Intro"}
                </div>
                <div className="space-y-3 text-sm leading-6 text-muted">
                  {(profileToRender.about || profile.about).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "학력" : "Education"}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-foreground">
                    {profileToRender.education?.school || profile.education.school}
                  </div>
                  <div className="text-muted">
                    {profileToRender.education?.degree || profile.education.degree}
                  </div>
                  <div className="mt-3 space-y-1 text-muted">
                    <div>{profileToRender.education?.gpa || profile.education.gpa}</div>
                    <div>{profileToRender.education?.recentGpa || profile.education.recentGpa}</div>
                  </div>
                  <div className="mt-3 text-muted">
                    {profileToRender.education?.focus || profile.education.focus}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "소프트 스킬" : "Soft Skills"}
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {(profileToRender.softSkills || profile.softSkills).map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "언어" : "Languages"}
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {(profileToRender.languages || profile.languages).map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "기술" : "Skills"}
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-7 text-muted">
                {lang === "ko" ? "AI·백엔드·웹 UI 핵심 스택" : "A focused stack across AI, backend, and web UI"}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillsToRender.map((group) => (
                <Card key={group.title}>
                  <div
                    className="text-base font-semibold tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {group.title}
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

        <section id="experience" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "경력" : "Experience"}
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-7 text-muted">
                {lang === "ko" ? "인턴십 및 연구 경험" : "Professional & Research Experience"}
              </p>
            </div>

            <div className="space-y-5">
              {experienceToRender.map((item) => (
                <Card key={`${item.org}-${item.title}`}>
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
                    <div className="text-sm font-medium text-muted">
                      {item.dates}
                    </div>
                  </div>

                  {item.note ? (
                    <div className="mt-3 text-sm text-muted">⚠ {item.note}</div>
                  ) : null}

                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {item.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "프로젝트" : "Projects"}
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-7 text-muted">
                {lang === "ko" ? "연구와 실무를 통해 설계·구현한 AI 및 소프트웨어 프로젝트" : "AI and software projects designed and implemented through research and practical development"}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projectCards.map((project) => (
                <Card key={project.id}>
                  <div className="h-full flex flex-col">
                    {/* Card Title */}
                    <div className="mb-3 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{project.shortDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-xs font-medium text-muted mb-2">Tech Stack</div>
                      <p className="text-xs text-muted">{project.techStack}</p>
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted transition-colors mt-auto"
                    >
                      Learn more →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-4 w-full">
            <SectionHeader
              eyebrow={
                tSection("research", { eyebrow: "Research" }).eyebrow || "Research"
              }
              title={
                tSection("research", {
                  title: "Publication and evaluation work",
                }).title || "Publication and evaluation work"
              }
              subtitle={
                tSection("research", {
                  subtitle:
                    "Research on conversational AI behavior in realistic kiosk environments.",
                }).subtitle
              }
            />

            <div className="space-y-5">
              {researchToRender.map((r) => (
                <Card key={r.title}>
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
                    <div className="inline-flex rounded-full border-2 border-accent/50 bg-gradient-to-r from-accent/10 to-accent-2/10 px-4 py-1.5 text-xs font-semibold text-foreground shadow-md shadow-accent/20 backdrop-blur-sm">
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
                        <LinkButton
                          key={rl.href}
                          label={rl.label}
                          href={rl.href}
                          variant="secondary"
                        />
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="awards" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-16 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("awards", { eyebrow: "Awards" }).eyebrow || "Awards"}
              title={
                tSection("awards", { title: "Recognitions" }).title || "Recognitions"
              }
              subtitle={
                tSection("awards", {
                  subtitle: "Awards and recognition from research and competitions.",
                }).subtitle
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {lang === "ko" ? "우수 논문상" : "Excellent Paper Award"}
                </div>
                <div className="mt-2 text-sm text-muted">
                  {lang === "ko"
                    ? "UCWIT 2024 (KIISE 주최) — 47팀 중 Top 4"
                    : "UCWIT 2024 (KIISE-hosted) — Top 4 / 47 teams"}
                </div>
                <div className="mt-4 text-sm leading-6 text-muted">
                  {lang === "ko"
                    ? "음성 인식 키오스크 시나리오에서 LLaMA와 규칙 기반 대화 시스템을 비교한 연구로 수상."
                    : "Awarded for research comparing LLaMA with rule-based dialogue systems in voice-recognition kiosk scenarios."}
                </div>
              </Card>

              <Card>
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
              </Card>
            </div>
          </div>
        </section>

        <section id="leadership" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={
                tSection("leadership", { eyebrow: "Leadership" }).eyebrow ||
                "Leadership"
              }
              title={
                tSection("leadership", {
                  title: "Roles built on responsibility",
                }).title || "Roles built on responsibility"
              }
              subtitle={
                tSection("leadership", {
                  subtitle:
                    "Activities reflecting coordination, community involvement, and technical growth.",
                }).subtitle
              }
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipToRender.map((l) => (
                <Card key={l.title}>
                  <div
                    className="text-base font-semibold tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {l.title}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-muted">
                    {l.detail}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-16 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={
                tSection("contact", { eyebrow: "Contact" }).eyebrow || "Contact"
              }
              title={
                tSection("contact", { title: "Let’s connect" }).title ||
                "Let’s connect"
              }
              subtitle={
                tSection("contact", {
                  subtitle:
                    "For internships, research, or engineering roles across AI systems, RAG, and full-stack development.",
                }).subtitle
              }
            />

            <Card>
              <div className="flex flex-wrap gap-4">
                {githubEnabled ? (
                  <LinkButton
                    label="GitHub"
                    href={profile.links.github}
                    variant="primary"
                  />
                ) : null}

                {linkedinEnabled ? (
                  <LinkButton
                    label="LinkedIn"
                    href={profile.links.linkedin}
                    variant="secondary"
                  />
                ) : null}
              </div>
            </Card>

            <footer className="mt-25 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted sm:flex-row sm:items-center">
              <div>
                © {mounted ? new Date().getFullYear() : CURRENT_YEAR}{" "}
                {profileToRender.name}
              </div>
              <div className="text-muted-2">
                {lang === "ko"
                  ? "Next.js와 Tailwind로 제작"
                  : "Built with Next.js and Tailwind"}
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}