/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
    email: "lathnishtha775@gmail.com",
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
    "Systems thinking & architectural reasoning",
    "Ownership under uncertainty",
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
    "시스템 사고 & 아키텍처 설계",
    "불확실성 속의 오너십",
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
    proficiency: "Expert",
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
    proficiency: "Advanced",
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
    proficiency: "Advanced",
    items: [
      "React (TypeScript)",
      "HTML, CSS, Tailwind",
      "Role-based UI patterns",
      "Component architecture",
    ],
  },
  {
    title: "Infrastructure",
    proficiency: "Intermediate",
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
    proficiency: "Advanced",
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
    proficiency: "Expert",
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

const researchInterests = [
  {
    area: "RAG System Optimization",
    focus: "Reducing hallucinations through retrieval quality and prompt engineering",
  },
  {
    area: "LLM Fine-tuning & Evaluation",
    focus: "Domain-specific model adaptation and comparative performance analysis",
  },
  {
    area: "Conversational AI for Accessibility",
    focus: "Voice-driven interfaces for underserved populations and inclusive design",
  },
  {
    area: "Multi-modal AI Systems",
    focus: "Integrating text, speech, and visual data for comprehensive AI applications",
  },
];

const koResearchInterests = [
  {
    area: "RAG 시스템 최적화",
    focus: "검색 품질 및 프롬프트 엔지니어링을 통한 환각 감소",
  },
  {
    area: "LLM 파인튜닝 및 평가",
    focus: "도메인 특화 모델 적응 및 비교 성능 분석",
  },
  {
    area: "접근성을 위한 대화형 AI",
    focus: "소외 계층을 위한 음성 기반 인터페이스 및 포용적 디자인",
  },
  {
    area: "멀티모달 AI 시스템",
    focus: "텍스트, 음성, 시각 데이터 통합을 통한 종합 AI 응용",
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
    category: "Student Council",
    dates: "2024–2026",
    detail: "Coordinated student support initiatives and facilitated 10+ department-wide events for 50+ international students. Improved onboarding satisfaction through streamlined communication channels.",
    isPrimary: false,
  },
  {
    title: "ISO Member",
    category: "Community",
    dates: "2023–2025",
    detail: "Organized and executed 8+ cultural and social events for international student community. Built cross-cultural networks and mentorship programs.",
    isPrimary: false,
  },
  {
    title: "KERT Cybersecurity Club",
    category: "Technical",
    dates: "2024–Present",
    detail: "Active in CTF competitions and web security research. Contributed foundational work in cryptography implementations and security architecture documentation.",
    isPrimary: false,
  },
  {
    title: "Dance & Debate",
    category: "Competitive",
    dates: "2022–2026",
    detail: "Multiple competition awards including regional debate championships. Bilingual proficiency in Korean and English debate formats. Balanced competitive excellence with technical and leadership commitments.",
    isPrimary: false,
  },
];

const koLeadership = [
  {
    title: "국제 학생 대표 (컴퓨터공학과)",
    category: "🏛️ 학과 운영",
    dates: "2024–2026",
    detail: "50명 이상의 국제 학생을 위해 10회 이상의 학과 행사를 조직 및 운영. 소통 체계를 개선하여 국제 학생의 만족도를 향상시켰습니다.",
    isPrimary: true,
  },
  {
    title: "ISO 회원",
    category: "🎯 커뮤니티",
    dates: "2023–2025",
    detail: "국제 학생 커뮤니티를 위해 8회 이상의 문화·사교 행사 기획 및 실행. 다문화 네트워크와 멘토십 프로그램을 구축했습니다.",
    isPrimary: false,
  },
  {
    title: "KERT 사이버보안 동아리",
    category: "🛡️ 기술",
    dates: "2024–현재",
    detail: "CTF 대회 및 웹 보안 연구에 적극 참여. 암호학 구현 및 보안 아키텍처 문서화에 기여했습니다.",
    isPrimary: false,
  },
  {
    title: "댄스 및 토론",
    category: "🎭 대회",
    dates: "2022–2026",
    detail: "지역 토론 대회를 포함한 여러 대회에서 수상. 한국어·영어 이중 언어 토론 능력 보유. 기술 및 리더십 활동과 병행하며 대회 경험을 쌓았습니다.",
    isPrimary: false,
  },
];

const koSkills = [
  {
    title: "AI / LLM",
    proficiency: "전문가",
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
    proficiency: "고급",
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
    proficiency: "고급",
    items: [
      "React (TypeScript)",
      "HTML, CSS, Tailwind",
      "역할 기반 UI 패턴",
      "컴포넌트 아키텍처",
    ],
  },
  {
    title: "인프라",
    proficiency: "중급",
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
    proficiency: "고급",
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
    proficiency: "전문가",
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

function Card({ children, className, premium }: { children: React.ReactNode; className?: string; premium?: boolean }) {
  if (premium) {
    return (
      <div className={cx(
        "rounded-2xl border-2 p-6 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm",
        "bg-gradient-to-br from-amber-500/5 via-surface/60 to-accent/5",
        "border-amber-500/30 hover:border-amber-500/50",
        "shadow-amber-500/10 hover:shadow-amber-500/20",
        className
      )}>
        {children}
      </div>
    );
  }
  
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or navigating
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl shadow-sm">
        {/* Scroll progress bar */}
        <div 
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-2 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {profile.name}
          </a>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-3">
            {/* Social links - hidden on small mobile */}
            <div className="hidden sm:flex items-center gap-3">
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
            </div>
            
            {/* Language toggle */}
            <button
              aria-label={lang === "ko" ? "영어로 전환" : "한국어로 전환"}
              onClick={() => setLang((s) => (s === "ko" ? "en" : "ko"))}
              className="rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all cursor-pointer"
            >
              {lang === "ko" ? "EN" : "한국어"}
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[57px] bg-background/98 backdrop-blur-xl z-50 animate-fadeIn">
            <nav className="flex flex-col px-5 py-6 space-y-1">
              {navToRender.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-muted hover:text-foreground py-3 px-4 rounded-lg hover:bg-surface/60 transition-all"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Social links in mobile menu */}
              <div className="pt-6 mt-6 border-t border-border/60 flex gap-4">
                {githubEnabled ? (
                  <a
                    href={profile.links.github}
                    className="flex-1 text-center py-2 px-4 rounded-lg border border-border/80 bg-surface/60 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
                {linkedinEnabled ? (
                  <a
                    href={profile.links.linkedin}
                    className="flex-1 text-center py-2 px-4 rounded-lg border border-border/80 bg-surface/60 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </nav>
          </div>
        )}
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

                {/* Specialization Badges */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent/20 to-accent-2/20 text-accent border border-accent/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    🤖 AI Systems
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent-2/20 to-accent/20 text-accent-2 border border-accent-2/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    🔗 RAG Pipelines
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-400 border border-purple-500/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    💻 Full-Stack
                  </span>
                </div>

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
                      <img
                        src="/Profile_image.png"
                        alt="Profile image of Nishtha Lath"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("about", { eyebrow: "Introduction" }).eyebrow || "Introduction"}
              title={tSection("about", { title: "Who I Am" }).title || "Who I Am"}
              subtitle={tSection("about", { subtitle: "Computer Science student at KNU focused on AI systems research and real-world deployment" }).subtitle || "Computer Science student at KNU focused on AI systems research and real-world deployment"}
            />

            {/* 2-column top section: Intro Text + Education */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Intro Text (Left) */}
              <Card>
                <div className="space-y-3 text-sm leading-7 text-muted">
                  {(profileToRender.about || profile.about).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>

              {/* Education Card (Right) */}
              <Card>
                <div className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "학력" : "Education"}
                </div>
                <div className="space-y-3 text-sm">
                  <div className="font-medium text-foreground">
                    {profileToRender.education?.school || profile.education.school}
                  </div>
                  <div className="text-muted">
                    {profileToRender.education?.degree || profile.education.degree}
                  </div>
                  
                  {/* GPA - Current & Past Semester */}
                  <div className="mt-4 space-y-2">
                    <div className="text-xs text-muted font-medium">
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <div className="text-xs text-muted">{lang === "ko" ? "현재 학기" : "Current"}</div>
                        <div className="text-foreground font-semibold">{profileToRender.education?.recentGpa || profile.education.recentGpa}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted">{lang === "ko" ? "누적" : "Cumulative"}</div>
                        <div className="text-accent font-semibold">{profileToRender.education?.gpa || profile.education.gpa}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 3-column bottom section: Languages + Exploring | Soft Skills | Focus Areas */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Left column: Languages (compact) + Currently Exploring */}
              <div className="flex flex-col gap-6">
                {/* Languages Card - Compact */}
                <Card>
                  <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    {lang === "ko" ? "언어" : "Languages"}
                  </div>
                  <ul className="space-y-2 text-sm">
                    {(profileToRender.languages || profile.languages).map((l) => (
                      <li key={l} className="flex items-start text-foreground font-medium">
                        <span className="mr-2">⭐</span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Currently Exploring Card */}
                <Card>
                  <div className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    {lang === "ko" ? "현재 탐구 중" : "Currently Exploring"}
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    {[
                      lang === "ko" ? "고급 RAG 평가 전략" : "Advanced RAG evaluation strategies",
                      lang === "ko" ? "LangGraph 기반 에이전트 라우팅" : "LangGraph-based agent routing",
                      lang === "ko" ? "LLM 파이프라인 관찰성" : "System observability for LLM pipelines"
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Soft Skills Card with Badges */}
              <Card>
                <div className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {lang === "ko" ? "소프트 스킬" : "Soft Skills"}
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  {(profileToRender.softSkills || profile.softSkills).map((skill, idx) => {
                    const categoryColors = [
                      "bg-accent/20 text-accent border border-accent/40",
                      "bg-accent-2/20 text-accent-2 border border-accent-2/40",
                      "bg-purple-500/20 text-purple-400 border border-purple-500/40",
                      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
                      "bg-blue-500/20 text-blue-400 border border-blue-500/40",
                    ];
                    return (
                      <div key={skill} className={`px-3 py-1.5 rounded-full text-xs font-medium ${categoryColors[idx % categoryColors.length]}`}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Focus Areas Card */}
              <Card>
                <div className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
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
                    lang === "ko" ? "프로덕션 준비 AI 인프라" : "Production-ready AI infrastructure"
                  ].map((area) => (
                    <div key={area} className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/40">
                      • {area}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("skills", { eyebrow: "Technical Expertise" }).eyebrow || "Technical Expertise"}
              title={tSection("skills", { title: "Core Technical Stack" }).title || "Core Technical Stack"}
              subtitle={tSection("skills", { subtitle: "Specialized in AI, backend systems, and full-stack development" }).subtitle || "Specialized in AI, backend systems, and full-stack development"}
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillsToRender.map((group) => (
                <Card key={group.title}>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="text-base font-semibold tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {group.title}
                    </div>
                    {group.proficiency && (
                      <span className={cx(
                        "text-xs font-semibold px-2 py-1 rounded-full",
                        group.proficiency === "Expert" || group.proficiency === "전문가" ? "bg-accent/20 text-accent border border-accent/40" :
                        group.proficiency === "Advanced" || group.proficiency === "고급" ? "bg-accent-2/20 text-accent-2 border border-accent-2/40" :
                        "bg-muted/20 text-muted border border-muted/40"
                      )}>
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

        <section id="experience" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("experience", { eyebrow: "Professional Work" }).eyebrow || "Professional Work"}
              title={tSection("experience", { title: "Internships & Research" }).title || "Internships & Research"}
              subtitle={tSection("experience", { subtitle: "Hands-on experience building AI systems and leading teams" }).subtitle || "Hands-on experience building AI systems and leading teams"}
            />

            <div className="relative space-y-8">
              {/* Timeline accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-2 to-transparent hidden md:block" />
              
              {experienceToRender.map((item, index) => (
                <div key={`${item.org}-${item.title}`} className="relative">
                  {/* Timeline marker */}
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
                      <div className="text-sm font-medium text-accent-2">
                        {item.dates}
                      </div>
                    </div>

                    {item.note ? (
                      <div className="mt-3 text-sm text-muted">⚠ {item.note}</div>
                    ) : null}

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                      {item.bullets.map((b, bIndex) => {
                        // Highlight key achievement bullets
                        const isHighlight = b.includes("Deployed") || b.includes("Production") || b.includes("AWS") || b.includes("Reduced") || b.includes("Led") || b.includes("배포") || b.includes("운영") || b.includes("리드");
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

        <section id="projects" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("projects", { eyebrow: "Projects" }).eyebrow || "Projects"}
              title={tSection("projects", { title: "Team Work" }).title || "Team Work"}
              subtitle={tSection("projects", { subtitle: "AI and software projects designed and implemented through research and practical development" }).subtitle || "AI and software projects designed and implemented through research and practical development"}
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projectCards.map((project) => (
                <Card key={project.id}>
                  <div className="h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className={cx(
                        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
                        project.category === "AI" ? "bg-accent/15 text-accent border border-accent/30" :
                        project.category === "Backend" ? "bg-accent-2/15 text-accent-2 border border-accent-2/30" :
                        project.category === "Frontend" ? "bg-purple-500/15 text-purple-400 border border-purple-500/30" :
                        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      )}>
                        {project.category}
                      </span>
                    </div>

                    {/* Card Title */}
                    <div className="mb-3 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-geist-mono)" }}>
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{project.shortDescription}</p>
                    </div>

                    {/* Outcomes */}
                    {project.outcomes && project.outcomes.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.outcomes.map((outcome) => (
                          <span key={outcome} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-surface-2/80 text-muted-2 border border-border/50">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-xs font-medium text-muted mb-2">Tech Stack</div>
                      <p className="text-xs text-muted">{project.techStack}</p>
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors mt-auto"
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
              eyebrow={tSection("research", { eyebrow: "Research" }).eyebrow || "Research"}
              title={tSection("research", { title: "Publication & Evaluation" }).title || "Publication & Evaluation"}
              subtitle={tSection("research", { subtitle: "Research on conversational AI behavior in realistic environments" }).subtitle || "Research on conversational AI behavior in realistic environments"}
            />

            {/* Published Research - Premium Styling */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-amber-500/90 mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "🏆 출판된 연구" : "🏆 Published Research"}
              </h3>
              <div className="space-y-5">
                {researchToRender.map((r) => (
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

            {/* Research Interests */}
            <div>
              <h3 className="text-sm font-semibold text-muted mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "🔬 연구 관심사" : "🔬 Research Interests"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {(lang === "ko" ? koResearchInterests : researchInterests).map((interest) => (
                  <Card key={interest.area}>
                    <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>
                      {interest.area}
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {interest.focus}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="awards" className="border-t border-border/60 min-h-screen flex flex-col">
          <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-16 sm:pb-14 w-full">
            <SectionHeader
              eyebrow={tSection("awards", { eyebrow: "Recognition" }).eyebrow || "Recognition"}
              title={tSection("awards", { title: "Honors & Awards" }).title || "Honors & Awards"}
              subtitle={tSection("awards", { subtitle: "Awards and recognition from research and competitions" }).subtitle || "Awards and recognition from research and competitions"}
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

            <div className="space-y-6">
              {leadershipToRender.map((l, idx) => (
                <Card
                  key={l.title}
                  className={l.isPrimary ? "border-2 border-accent/50 bg-gradient-to-br from-surface/60 to-accent/5 shadow-lg shadow-accent/10" : ""}
                >
                  {/* Role Tier Badge */}
                  {l.isPrimary && (
                    <div className="mb-4 inline-block px-3 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/40 text-xs font-semibold">
                      {lang === "ko" ? "🌟 주요 역할" : "🌟 Primary Role"}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-3 inline-block px-3 py-1.5 rounded-full bg-muted/20 text-muted border border-muted/40 text-xs font-medium">
                    {l.category}
                  </div>

                  <div
                    className="text-base font-semibold tracking-tight text-foreground mb-2"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {l.title}
                  </div>

                  {/* Duration/Dates */}
                  <div className="text-xs text-accent-2 font-medium mb-3">
                    📅 {l.dates}
                  </div>

                  <div className="mt-4 text-sm leading-6 text-muted">
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
              eyebrow={tSection("contact", { eyebrow: "Get in Touch" }).eyebrow || "Get in Touch"}
              title={
                tSection("contact", { title: "Let's Build Together" }).title ||
                "Let's Build Together"
              }
              subtitle={
                tSection("contact", {
                  subtitle:
                    "Whether you're exploring RAG pipelines, LLM optimization, or full-stack solutions—let's connect",
                }).subtitle
              }
            />

            {/* Email Contact Card - Primary */}
            <div className="mb-8">
              <Card className="bg-gradient-to-br from-accent/10 to-accent-2/5 border-accent/40">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>
                      {lang === "ko" ? "📧 직접 연락" : "📧 Direct Contact"}
                    </div>
                    <div className="text-lg font-medium text-accent">{profile.links.email}</div>
                    <div className="text-xs text-muted mt-2">
                      {lang === "ko" ? "일반적으로 24시간 이내 답변" : "Typically respond within 24 hours"}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(profile.links.email);
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
              <h3 className="text-base font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "관심 분야별 연락처" : "Connect by Interest"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Hiring Managers */}
                <Card>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    🚀 {lang === "ko" ? "채용 담당자" : "Hiring Managers"}
                  </div>
                  <p className="text-xs text-muted mb-4">
                    {lang === "ko" ? "인턴십, 신입사원 채용, 풀스택 역할에 관심 있습니다." : "Open to internships, entry-level FT roles, and full-stack opportunities."}
                  </p>
                  <div className="flex flex-col gap-2">
                    <LinkButton
                      label={lang === "ko" ? "LinkedIn에서 메시지" : "Message on LinkedIn"}
                      href={profile.links.linkedin}
                      variant="primary"
                    />
                    <LinkButton
                      label={lang === "ko" ? "이메일로 연락" : "Email Me"}
                      href={`mailto:${profile.links.email}`}
                      variant="secondary"
                    />
                  </div>
                </Card>

                {/* Developers/Collaborators */}
                <Card>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    🧑‍💻 {lang === "ko" ? "개발자·협력자" : "Developers"}
                  </div>
                  <p className="text-xs text-muted mb-4">
                    {lang === "ko" ? "AI, RAG 파이프라인, 오픈소스 프로젝트 협업에 관심 있습니다." : "Open to RAG, AI, and open-source collaboration. Feel free to reach out!"}
                  </p>
                  <div className="flex flex-col gap-2">
                    <LinkButton
                      label={lang === "ko" ? "GitHub 보기" : "View GitHub"}
                      href={profile.links.github}
                      variant="primary"
                    />
                    <LinkButton
                      label={lang === "ko" ? "이메일로 논의" : "Email to Discuss"}
                      href={`mailto:${profile.links.email}`}
                      variant="secondary"
                    />
                  </div>
                </Card>

                {/* Researchers/Academics */}
                <Card>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    📚 {lang === "ko" ? "연구자·학술" : "Researchers"}
                  </div>
                  <p className="text-xs text-muted mb-4">
                    {lang === "ko" ? "LLM 평가, RAG 최적화 연구에 관심 있습니다." : "Interested in LLM evaluation and RAG optimization research."}
                  </p>
                  <div className="flex flex-col gap-2">
                    <LinkButton
                      label={lang === "ko" ? "연구 관심사" : "Research Interests"}
                      href="#research"
                      variant="primary"
                    />
                    <LinkButton
                      label={lang === "ko" ? "직접 이메일" : "Email Directly"}
                      href={`mailto:${profile.links.email}`}
                      variant="secondary"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {lang === "ko" ? "📄 이력서 다운로드" : "📄 Download Resume"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <LinkButton
                  label={lang === "ko" ? "📄 한국어 이력서" : "📄 Resume (Korean)"}
                  href={profile.links.resumeKo}
                  variant="primary"
                />
                <LinkButton
                  label={lang === "ko" ? "📄 영어 이력서" : "📄 Resume (English)"}
                  href={profile.links.resumeEn}
                  variant="primary"
                />
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mb-12">
              <h3 className="text-base font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
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
                    <div className="text-foreground font-medium">
                      {lang === "ko" ? "UTC+9" : "UTC+9 (KST)"}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted text-xs font-semibold mb-1">
                      {lang === "ko" ? "✅ 가능 상태" : "✅ Availability"}
                    </div>
                    <div className="text-foreground font-medium">
                      {lang === "ko" ? "유연함" : "Flexible"}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

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