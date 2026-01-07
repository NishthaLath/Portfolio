import type {
  Profile,
  SkillGroup,
  ExperienceItem,
  ProjectItem,
  ResearchItem,
  LeadershipItem,
  LinkItem,
  ResearchInterest,
  SectionContent,
} from "../types";

export const profile: Profile = {
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
    resumeEn:
      "https://drive.google.com/file/d/1OTfZOcni_pwuJHin3wRD9-DwDqyCFwpb/view?usp=drive_link",
    resumeKo:
      "https://drive.google.com/file/d/10VST30cYUv_vhqYBp_Wz-EuZXED7arHb/view?usp=drive_link",
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
  languages: ["English: Fluent", "Korean: Advanced (TOPIK 5)", "Hindi: Native"],
};

export const koProfile: Profile = {
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
  languages: ["영어: 유창", "한국어: 고급 (TOPIK 5급)", "힌디어: 모국어"],
};

export const skills: SkillGroup[] = [
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
    items: ["Docker", "NGINX", "AWS EC2", "Git & GitHub", "Hugging Face Hub"],
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
    items: ["Python", "Java", "JavaScript", "C", "C++"],
  },
];

export const koSkills: SkillGroup[] = [
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
    items: ["Docker", "NGINX", "AWS EC2", "Git & GitHub", "Hugging Face Hub"],
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

export const experience: ExperienceItem[] = [
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

export const koExperience: ExperienceItem[] = [
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

export const projects: ProjectItem[] = [
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
      {
        label: "Frontend",
        href: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend",
      },
      {
        label: "Organization",
        href: "https://github.com/InfoFlow-ChatBot-RikkeiSoft-Corp",
      },
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
      {
        label: "Backend",
        href: "https://github.com/NishthaLath/VISIONED-KNU-Kiosk-Backend",
      },
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
      {
        label: "Organization",
        href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis",
      },
      {
        label: "HumanRecognition",
        href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis/HumanRecognition",
      },
    ],
  },
];

export const koProjects: ProjectItem[] = [
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
      {
        label: "프론트엔드",
        href: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend",
      },
      {
        label: "조직용",
        href: "https://github.com/InfoFlow-ChatBot-RikkeiSoft-Corp",
      },
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
      {
        label: "백엔드",
        href: "https://github.com/NishthaLath/VISIONED-KNU-Kiosk-Backend",
      },
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
      {
        label: "조직용",
        href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis",
      },
      {
        label: "HumanRecognition",
        href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis/HumanRecognition",
      },
    ],
  },
];

export const research: ResearchItem[] = [
  {
    title:
      "Evaluating the LLaMA Model for Enhanced Conversational AI in Voice Recognition Kiosks",
    venue: "UCWIT 2024 (KIISE-hosted)",
    award: "Excellent Paper Award (Top 4/47 teams)",
    summaryBullets: [
      "Compared rule-based conversational systems (RASA) with LLaMA in realistic kiosk-style dialogue scenarios.",
      "Designed controlled test conversations and a task-based evaluation methodology.",
      "Observed stronger handling of ambiguity and multi-intent inputs with LLaMA.",
    ],
    stack: ["LLaMA", "RASA", "Python", "NLP evaluation"],
    repoLinks: [
      {
        label: " Github Paper Repo →",
        href: "https://github.com/NishthaLath/UCWIT-2024-ResearchPaper",
      },
    ],
  },
];

export const koResearch: ResearchItem[] = [
  {
    title:
      "음성 인식 키오스크 환경에서 대화형 AI 성능 향상을 위한 LLaMA 모델 평가",
    venue: "UCWIT 2024 (KIISE 주최)",
    award: "우수 논문상 (47팀 중 Top 4)",
    summaryBullets: [
      "현실적인 키오스크 대화 시나리오에서 규칙 기반 대화 시스템(RASA)과 LLaMA를 비교 평가했습니다.",
      "제어된 테스트 대화와 과제 기반 평가 방법론을 설계했습니다.",
      "LLaMA가 모호한 입력과 다중 의도 처리에서 더 우수한 성능을 보임을 확인했습니다.",
    ],
    stack: ["LLaMA", "RASA", "Python", "NLP 평가"],
    repoLinks: [
      {
        label: "논문 레포지토리",
        href: "https://github.com/NishthaLath/UCWIT-2024-ResearchPaper",
      },
    ],
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    area: "RAG System Optimization",
    focus:
      "Reducing hallucinations through retrieval quality and prompt engineering",
  },
  {
    area: "LLM Fine-tuning & Evaluation",
    focus:
      "Domain-specific model adaptation and comparative performance analysis",
  },
  {
    area: "Conversational AI for Accessibility",
    focus:
      "Voice-driven interfaces for underserved populations and inclusive design",
  },
  {
    area: "Multi-modal AI Systems",
    focus:
      "Integrating text, speech, and visual data for comprehensive AI applications",
  },
];

export const koResearchInterests: ResearchInterest[] = [
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

export const leadership: LeadershipItem[] = [
  {
    title: "International Student Representative (CS Department)",
    category: "Student Council",
    dates: "2024–2026",
    detail:
      "Coordinated student support initiatives and facilitated 10+ department-wide events for 50+ international students. Improved onboarding satisfaction through streamlined communication channels.",
    isPrimary: false,
  },
  {
    title: "ISO Member",
    category: "Community",
    dates: "2023–2025",
    detail:
      "Organized and executed 8+ cultural and social events for international student community. Built cross-cultural networks and mentorship programs.",
    isPrimary: false,
  },
  {
    title: "KERT Cybersecurity Club",
    category: "Technical",
    dates: "2024–Present",
    detail:
      "Active in CTF competitions and web security research. Contributed foundational work in cryptography implementations and security architecture documentation.",
    isPrimary: false,
  },
  {
    title: "Dance & Debate",
    category: "Competitive",
    dates: "2022–2026",
    detail:
      "Multiple competition awards including regional debate championships. Bilingual proficiency in Korean and English debate formats. Balanced competitive excellence with technical and leadership commitments.",
    isPrimary: false,
  },
];

export const koLeadership: LeadershipItem[] = [
  {
    title: "국제 학생 대표 (컴퓨터공학과)",
    category: "🏛️ 학과 운영",
    dates: "2024–2026",
    detail:
      "50명 이상의 국제 학생을 위해 10회 이상의 학과 행사를 조직 및 운영. 소통 체계를 개선하여 국제 학생의 만족도를 향상시켰습니다.",
    isPrimary: true,
  },
  {
    title: "ISO 회원",
    category: "🎯 커뮤니티",
    dates: "2023–2025",
    detail:
      "국제 학생 커뮤니티를 위해 8회 이상의 문화·사교 행사 기획 및 실행. 다문화 네트워크와 멘토십 프로그램을 구축했습니다.",
    isPrimary: false,
  },
  {
    title: "KERT 사이버보안 동아리",
    category: "🛡️ 기술",
    dates: "2024–현재",
    detail:
      "CTF 대회 및 웹 보안 연구에 적극 참여. 암호학 구현 및 보안 아키텍처 문서화에 기여했습니다.",
    isPrimary: false,
  },
  {
    title: "댄스 및 토론",
    category: "🎭 대회",
    dates: "2022–2026",
    detail:
      "지역 토론 대회를 포함한 여러 대회에서 수상. 한국어·영어 이중 언어 토론 능력 보유. 기술 및 리더십 활동과 병행하며 대회 경험을 쌓았습니다.",
    isPrimary: false,
  },
];

export const navLinks: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Awards", href: "#awards" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const koNavLinks: LinkItem[] = [
  { label: "소개", href: "#about" },
  { label: "기술", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#projects" },
  { label: "연구", href: "#research" },
  { label: "수상", href: "#awards" },
  { label: "리더십", href: "#leadership" },
  { label: "연락", href: "#contact" },
];

export const sectionsKo: Record<string, SectionContent> = {
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
    subtitle:
      "인턴십, 연구, AI 시스템 및 풀스택 엔지니어링 관련 문의를 환영합니다.",
  },
};

export const CURRENT_YEAR = 2026;
