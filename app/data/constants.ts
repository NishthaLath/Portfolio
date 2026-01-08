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
  ProjectCardData,
  ProjectDetailData,
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

export const projectCards: ProjectCardData[] = [
  {
    id: "disaster-rag",
    title: "AI-Based Disaster Scenario Generation System",
    shortDescription: "RAG + Large Language Models",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
    category: "AI",
    outcomes: ["Research-grade", "Multi-source RAG"],
  },
  {
    id: "posture-detection",
    title: "AI-Based Posture Detection and Feedback System",
    shortDescription: "Real-time computer vision for exercise analysis",
    techStack: "Python, Computer Vision, MediaPipe, OpenCV",
    category: "AI",
    outcomes: ["Real-time", "Low-latency"],
  },
  {
    id: "shebots",
    title: "SheBots — AI-Powered Academic Support Chatbot",
    shortDescription: "Bilingual conversational AI for academic support",
    techStack: "FastAPI, RAG, LangChain, GPT-4, Docker",
    category: "AI",
    outcomes: ["Production", "Bilingual"],
  },
  {
    id: "inflowchat",
    title: "InflowChat — Enterprise AI Chatbot",
    shortDescription: "Production-ready enterprise chatbot platform",
    techStack: "React, TypeScript, Gemini API, FAISS",
    category: "Frontend",
    outcomes: ["Production", "Enterprise"],
  },
  {
    id: "cafe-kiosk",
    title: "AI-Based Voice Recognition Café Kiosk",
    shortDescription: "Fine-tuned LLaMA for conversational ordering",
    techStack: "LLaMA3, FastAPI, NLP, Fine-Tuning",
    category: "AI",
    outcomes: ["+10% accuracy", "Fine-tuned"],
  },
  {
    id: "transportation-kiosk",
    title: "길:벗 (VISIONED) — Accessible Transportation Kiosk",
    shortDescription: "Voice-driven public transportation kiosk for accessibility",
    techStack: "Node.js, Express, Google Cloud APIs, React",
    category: "Full-Stack",
    outcomes: ["Accessibility", "Voice-driven"],
  },
  {
    id: "kert-website",
    title: "KERT Cybersecurity Club Website",
    shortDescription: "Official website for university cybersecurity club",
    techStack: "Java, Spring Boot, React, Docker",
    category: "Backend",
    outcomes: ["Deployed", "Secure API"],
  },
];

export const projectDetails: Record<string, ProjectDetailData> = {
  "disaster-rag": {
    id: "disaster-rag",
    title: "AI-Based Disaster Scenario Generation System",
    shortDescription: "RAG + Large Language Models",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
    category: "AI",
    outcomes: ["Research-grade", "Multi-source RAG"],
    dates: "Oct 2025 – Dec 2025",
    organization: "Intelligent Software Systems Lab",
    whatBuilt: [
      "Designed and implemented a multi-source Retrieval-Augmented Generation (RAG) system for disaster scenario generation.",
      "Integrated heterogeneous data sources including disaster response manuals, legal documents, population statistics, and geo-spatial data.",
      "Built an end-to-end pipeline that converts structured and unstructured data (CSV, PDF, GeoJSON) into vector embeddings for semantic retrieval.",
    ],
    role: "Backend and AI pipeline developer.",
    technicalContributions: [
      "Implemented document ingestion and preprocessing pipelines for multiple formats, ensuring consistent chunking and metadata handling.",
      "Built vector search using FAISS to support accurate semantic retrieval across large, mixed datasets.",
      "Implemented LLM routing and orchestration using LangGraph, enabling model-agnostic support for GPT, LLaMA, and Gemini.",
      "Applied prompt engineering, response validation, and fallback strategies to reduce hallucinations and improve system reliability.",
      "Modularized the system into microservices using Docker to isolate ingestion, retrieval, and generation components.",
    ],
    techStackFull: [
      "Large Language Models (GPT, LLaMA, Gemini)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "FAISS",
      "Python",
      "Docker",
      "Git",
    ],
    outcome: [
      "Achieved reliable, context-aware disaster scenario generation suitable for research and policy-level analysis.",
      "Improved retrieval accuracy and response consistency across heterogeneous data sources.",
      "Delivered a research-grade system extensible to additional data domains and models.",
    ],
    repository: "https://github.com/NishthaLath/Disaster_Management_RAG_System",
  },
  "posture-detection": {
    id: "posture-detection",
    title: "AI-Based Posture Detection and Feedback System",
    shortDescription: "Real-time computer vision for exercise analysis",
    techStack: "Python, Computer Vision, MediaPipe, OpenCV",
    category: "AI",
    outcomes: ["Real-time", "Low-latency"],
    dates: "Sep 2025 – Dec 2025",
    organization: "Kyungpook National University",
    whatBuilt: [
      "Developed a real-time posture detection and feedback system for exercise analysis using computer vision.",
      "Implemented camera-based pose estimation to extract skeletal keypoints from live video streams.",
      "Evaluated posture correctness through joint angle computation and geometric analysis.",
    ],
    role: "Sole developer.",
    technicalContributions: [
      "Integrated MediaPipe Pose for real-time keypoint detection.",
      "Implemented joint angle calculation logic to detect incorrect posture during exercises.",
      "Designed a real-time feedback loop that visually highlights posture errors during movement.",
      "Optimized the system to run efficiently on standard consumer hardware without requiring GPUs or specialized sensors.",
      "Designed the system architecture to be easily extendable to additional exercises.",
    ],
    techStackFull: [
      "Python",
      "Computer Vision",
      "MediaPipe Pose",
      "OpenCV",
      "Real-Time Video Processing",
      "Joint Angle Analysis",
    ],
    outcome: [
      "Delivered a low-latency posture analysis system suitable for beginner-level fitness and rehabilitation use.",
      "Demonstrated practical application of pose estimation in real-time feedback systems.",
    ],
    repository: "https://github.com/AI-Personal-Trainer/Posture_Angles_Extractor",
  },
  shebots: {
    id: "shebots",
    title: "SheBots — AI-Powered Academic Support Chatbot",
    shortDescription: "Bilingual conversational AI for academic support",
    techStack: "FastAPI, RAG, LangChain, GPT-4, Docker",
    category: "AI",
    outcomes: ["Production", "Bilingual"],
    dates: "Sep 2025 – Dec 2025",
    organization: "Kyungpook National University",
    whatBuilt: [
      "Designed and developed a bilingual (Korean/English) AI chatbot for academic and administrative support within the Computer Science department.",
      "Implemented Retrieval-Augmented Generation to answer queries based on structured university documents and manuals.",
    ],
    role: "Lead backend and AI developer.",
    technicalContributions: [
      "Designed a modular backend architecture separating frontend, LLM service, and RAG service.",
      "Implemented document ingestion, chunking strategies, and vector indexing using FAISS.",
      "Integrated GPT-4.1 and GPT-5 APIs with multilingual query handling and context-aware response generation.",
      "Optimized prompt design and retrieval strategies to improve answer accuracy for academic Q&A.",
      "Deployed the system using Docker and tested under real usage constraints including latency, concurrency, and resource limits.",
    ],
    techStackFull: [
      "FastAPI",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "FAISS",
      "GPT-4.1 / GPT-5 APIs",
      "Docker",
      "Tailwind CSS",
    ],
    outcome: [
      "Deployed a production-ready chatbot serving real users.",
      "Achieved stable performance and high response accuracy under real-world usage conditions.",
    ],
    repository: "https://github.com/orgs/SheBots/repositories",
  },
  inflowchat: {
    id: "inflowchat",
    title: "InflowChat — Enterprise AI Chatbot",
    shortDescription: "Production-ready enterprise chatbot platform",
    techStack: "React, TypeScript, Gemini API, FAISS",
    category: "Frontend",
    outcomes: ["Production", "Enterprise"],
    dates: "Dec 2024 – Jan 2025",
    organization: "RikkeiSoft Corporation (Internship)",
    whatBuilt: [
      "Contributed to the development of an enterprise AI chatbot platform for internal company queries and document-based information retrieval.",
    ],
    role: "Sole frontend developer.",
    technicalContributions: [
      "Designed and implemented user and admin interfaces using React (TypeScript).",
      "Built role-based UI flows distinguishing general users and administrators.",
      "Implemented admin dashboards for prompt configuration, document management, and system control.",
      "Integrated frontend with backend APIs handling LLM inference and vector retrieval.",
      "Collaborated with backend engineers to ensure smooth API contracts and reliable UI behavior.",
    ],
    techStackFull: [
      "React.js (TypeScript)",
      "Tailwind CSS",
      "Axios",
      "Gemini API",
      "FAISS",
      "PostgreSQL",
      "JWT",
      "Google SSO",
      "Git",
    ],
    outcome: [
      "Delivered a production-ready frontend used in internal company workflows.",
      "Improved usability and administrative control over AI system behavior.",
    ],
    repository: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend",
  },
  "cafe-kiosk": {
    id: "cafe-kiosk",
    title: "AI-Based Voice Recognition Café Kiosk",
    shortDescription: "Fine-tuned LLaMA for conversational ordering",
    techStack: "LLaMA3, FastAPI, NLP, Fine-Tuning",
    category: "AI",
    outcomes: ["+10% accuracy", "Fine-tuned"],
    dates: "Sep 2024 – Dec 2024",
    organization: "Capstone Project (Industry-Collaborated)",
    whatBuilt: [
      "Upgraded an existing voice-based café ordering kiosk by replacing a RASA-based NLP system with a fine-tuned LLaMA3 model.",
    ],
    role: "AI system and architecture lead.",
    technicalContributions: [
      "Fine-tuned LLaMA3 for Korean conversational AI using Unsloth.",
      "Processed over 140,000 conversational data points including ambiguous and multi-intent orders.",
      "Conducted extensive testing with 100+ input-response scenarios to improve error handling and contextual understanding.",
      "Designed a modular system integrating Google Cloud Speech-to-Text with backend services.",
      "Implemented support for complex order modifications, substitutions, and multilingual expansion.",
    ],
    techStackFull: [
      "LLaMA3",
      "NLP",
      "Fine-Tuning (Unsloth)",
      "FastAPI",
      "Spring Boot",
      "PyQT",
      "MySQL",
      "Google Cloud STT",
    ],
    outcome: [
      "Achieved over 10% improvement in response accuracy and efficiency.",
      "Delivered a scalable, voice-driven kiosk system suitable for real retail environments.",
    ],
    repository: "https://github.com/orgs/AI-coffee-Kiosk/repositories",
  },
  "transportation-kiosk": {
    id: "transportation-kiosk",
    title: "길:벗 (VISIONED) — Accessible Transportation Kiosk",
    shortDescription: "Voice-driven public transportation kiosk for accessibility",
    techStack: "Node.js, Express, Google Cloud APIs, React",
    category: "Full-Stack",
    outcomes: ["Accessibility", "Voice-driven"],
    dates: "Oct 2024 – Nov 2024",
    organization: "Kyungpook National University",
    whatBuilt: [
      "Developed an accessible public transportation kiosk tailored for seniors and users with limited mobility.",
    ],
    role: "Backend lead and API developer.",
    technicalContributions: [
      "Designed and implemented backend APIs using Node.js and Express.",
      "Integrated Google Cloud Speech-to-Text and Text-to-Speech for voice-based interaction.",
      "Implemented real-time route recommendations using Google Maps API.",
      "Optimized server-side performance for real-time data handling.",
      "Collaborated with frontend designers to ensure accessibility-focused UX.",
    ],
    techStackFull: [
      "Node.js",
      "Express.js",
      "Google Cloud STT/TTS",
      "Google Maps API",
      "React",
      "GitHub",
    ],
    outcome: [
      "Delivered a functional, voice-driven kiosk prototype emphasizing accessibility.",
      "Demonstrated social impact aligned with inclusive mobility goals.",
    ],
    repository: "https://github.com/orgs/VISIONED-KNU/repositories",
  },
  "kert-website": {
    id: "kert-website",
    title: "KERT Cybersecurity Club Website",
    shortDescription: "Official website for university cybersecurity club",
    techStack: "Java, Spring Boot, React, Docker",
    category: "Backend",
    outcomes: ["Deployed", "Secure API"],
    dates: "May 2024 – Oct 2024",
    organization: "Kyungpook National University",
    whatBuilt: [
      "Developed the official website for the university cybersecurity club as a centralized information platform.",
    ],
    role: "Backend developer.",
    technicalContributions: [
      "Designed and implemented secure RESTful APIs using Java and Spring Boot.",
      "Implemented authentication and backend logic with Spring Security.",
      "Designed database schemas using JPA/Hibernate with H2 for testing.",
      "Deployed the system using Docker to ensure environment consistency.",
      "Collaborated with frontend developers using React.",
    ],
    techStackFull: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "H2 Database",
      "Docker",
      "React",
    ],
    outcome: [
      "Deployed a stable, secure backend for a real student organization.",
      "Improved communication and visibility for club activities.",
    ],
    repository: "https://github.com/NishthaLath/KERT_Backend",
  },
};

// Korean versions of project data
export const projectCardsKo: ProjectCardData[] = [
  {
    id: "disaster-rag",
    title: "AI 기반 재난 시나리오 생성 시스템",
    shortDescription: "RAG + 대규모 언어 모델",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
    category: "AI",
    outcomes: ["연구 수준", "다중 소스 RAG"],
  },
  {
    id: "posture-detection",
    title: "AI 기반 자세 감지 및 피드백 시스템",
    shortDescription: "운동 분석을 위한 실시간 컴퓨터 비전",
    techStack: "Python, Computer Vision, MediaPipe, OpenCV",
    category: "AI",
    outcomes: ["실시간 처리", "낮은 지연시간"],
  },
  {
    id: "shebots",
    title: "SheBots — AI 기반 학문 지원 챗봇",
    shortDescription: "학문 지원을 위한 이중 언어 대화형 AI",
    techStack: "FastAPI, RAG, LangChain, GPT-4, Docker",
    category: "AI",
    outcomes: ["운영 중", "이중 언어"],
  },
  {
    id: "inflowchat",
    title: "InflowChat — 엔터프라이즈 AI 챗봇",
    shortDescription: "프로덕션 기반 엔터프라이즈 챗봇 플랫폼",
    techStack: "React, TypeScript, Gemini API, FAISS",
    category: "Frontend",
    outcomes: ["운영 중", "엔터프라이즈"],
  },
  {
    id: "cafe-kiosk",
    title: "AI 기반 음성 인식 카페 키오스크",
    shortDescription: "대화형 주문을 위한 미세조정된 LLaMA",
    techStack: "LLaMA3, FastAPI, NLP, Fine-Tuning",
    category: "AI",
    outcomes: ["+10% 정확도", "미세조정"],
  },
  {
    id: "transportation-kiosk",
    title: "길:벗 (VISIONED) — 접근성 교통 키오스크",
    shortDescription: "접근성을 위한 음성 기반 대중교통 키오스크",
    techStack: "Node.js, Express, Google Cloud APIs, React",
    category: "Full-Stack",
    outcomes: ["접근성", "음성 기반"],
  },
  {
    id: "kert-website",
    title: "KERT 사이버보안 동아리 웹사이트",
    shortDescription: "대학 사이버보안 동아리 공식 웹사이트",
    techStack: "Java, Spring Boot, React, Docker",
    category: "Backend",
    outcomes: ["배포 완료", "안전한 API"],
  },
];

export const projectDetailsKo: Record<string, ProjectDetailData> = {
  "disaster-rag": {
    id: "disaster-rag",
    title: "AI 기반 재난 시나리오 생성 시스템",
    shortDescription: "RAG + 대규모 언어 모델",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
    category: "AI",
    outcomes: ["연구 수준", "다중 소스 RAG"],
    dates: "2025년 10월 – 2025년 12월",
    organization: "지능형 소프트웨어 시스템 연구실",
    whatBuilt: [
      "재난 시나리오 생성을 위한 다중 소스 RAG 시스템을 설계 및 구현했습니다.",
      "재난 대응 매뉴얼, 법률 문서, 인구 통계, 지리 정보 등 이기종 데이터를 통합했습니다.",
      "CSV, PDF, GeoJSON 등 구조·비구조 데이터를 벡터 임베딩으로 변환하는 파이프라인을 구축했습니다.",
    ],
    role: "백엔드 및 AI 파이프라인 개발자",
    technicalContributions: [
      "여러 형식의 문서를 일관되게 분할·메타데이터 처리하는 전처리 파이프라인을 구현했습니다.",
      "FAISS 기반 벡터 검색을 구축하여 대규모 혼합 데이터셋에서 정확한 의미 검색을 지원했습니다.",
      "LangGraph를 활용해 GPT, LLaMA, Gemini 등 모델을 유연하게 오케스트레이션했습니다.",
      "프롬프트 엔지니어링과 응답 검증, 폴백 전략을 적용해 환각을 줄이고 신뢰성을 높였습니다.",
      "Docker로 마이크로서비스화해 수집·검색·생성 컴포넌트를 분리했습니다.",
    ],
    techStackFull: [
      "대규모 언어 모델 (GPT, LLaMA, Gemini)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "FAISS",
      "Python",
      "Docker",
      "Git",
    ],
    outcome: [
      "연구 및 정책 분석에 활용 가능한 신뢰도 높은 재난 시나리오 생성 성능을 달성했습니다.",
      "이기종 데이터에서 검색 정확도와 응답 일관성을 개선했습니다.",
      "추가 데이터 도메인과 모델을 쉽게 확장할 수 있는 연구용 시스템을 제공했습니다.",
    ],
    repository: "https://github.com/NishthaLath/Disaster_Management_RAG_System",
  },
  "posture-detection": {
    id: "posture-detection",
    title: "AI 기반 자세 감지 및 피드백 시스템",
    shortDescription: "운동 분석을 위한 실시간 컴퓨터 비전",
    techStack: "Python, Computer Vision, MediaPipe, OpenCV",
    category: "AI",
    outcomes: ["실시간 처리", "낮은 지연시간"],
    dates: "2025년 9월 – 2025년 12월",
    organization: "경북대학교",
    whatBuilt: [
      "컴퓨터 비전을 활용해 운동 자세를 실시간으로 감지하고 피드백을 제공하는 시스템을 개발했습니다.",
      "실시간 영상 스트림에서 골격 키포인트를 추출하고 관절 각도를 계산했습니다.",
      "기하 분석을 통해 자세의 정확성을 평가했습니다.",
    ],
    role: "단독 개발자",
    technicalContributions: [
      "MediaPipe Pose를 통합하여 실시간 키포인트 추출을 구현했습니다.",
      "관절 각도 계산 로직을 구현해 운동 중 잘못된 자세를 탐지했습니다.",
      "실시간 피드백 루프를 설계하여 잘못된 자세를 시각적으로 강조했습니다.",
      "GPU 없이도 동작하도록 최적화해 소비자급 하드웨어에서 효율적으로 실행했습니다.",
      "향후 다른 운동으로 확장할 수 있도록 아키텍처를 설계했습니다.",
    ],
    techStackFull: [
      "Python",
      "Computer Vision",
      "MediaPipe Pose",
      "OpenCV",
      "실시간 영상 처리",
      "관절 각도 분석",
    ],
    outcome: [
      "초보자 운동 및 재활 목적에 적합한 저지연 자세 분석 시스템을 제공했습니다.",
      "자세 인식의 실용적 활용성을 입증했습니다.",
    ],
    repository: "https://github.com/AI-Personal-Trainer/Posture_Angles_Extractor",
  },
  shebots: {
    id: "shebots",
    title: "SheBots — AI 기반 학문 지원 챗봇",
    shortDescription: "학문 지원을 위한 이중 언어 대화형 AI",
    techStack: "FastAPI, RAG, LangChain, GPT-4, Docker",
    category: "AI",
    outcomes: ["운영 중", "이중 언어"],
    dates: "2025년 9월 – 2025년 12월",
    organization: "경북대학교",
    whatBuilt: [
      "컴퓨터공학과 학문·행정 지원을 위한 한국어·영어 이중 언어 챗봇을 설계·개발했습니다.",
      "대학 문서와 매뉴얼 기반 질의응답을 위해 RAG를 구현했습니다.",
    ],
    role: "백엔드 및 AI 리드 개발자",
    technicalContributions: [
      "프런트엔드, LLM 서비스, RAG 서비스를 분리한 모듈형 백엔드 아키텍처를 설계했습니다.",
      "문서 수집, 청킹 전략, FAISS 벡터 인덱싱을 구현했습니다.",
      "GPT-4.1 및 GPT-5 API와 다국어 질의 처리를 통합했습니다.",
      "프롬프트 설계와 검색 전략을 최적화하여 학문 Q&A 정확도를 높였습니다.",
      "Docker로 배포하고 지연·동시성 등 실제 제약에서 테스트했습니다.",
    ],
    techStackFull: [
      "FastAPI",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "FAISS",
      "GPT-4.1 / GPT-5 APIs",
      "Docker",
      "Tailwind CSS",
    ],
    outcome: [
      "실사용자를 대상으로 운영 가능한 챗봇을 배포했습니다.",
      "현실 환경에서 안정적 성능과 높은 응답 정확도를 달성했습니다.",
    ],
    repository: "https://github.com/orgs/SheBots/repositories",
  },
  inflowchat: {
    id: "inflowchat",
    title: "InflowChat — 엔터프라이즈 AI 챗봇",
    shortDescription: "프로덕션 기반 엔터프라이즈 챗봇 플랫폼",
    techStack: "React, TypeScript, Gemini API, FAISS",
    category: "Frontend",
    outcomes: ["운영 중", "엔터프라이즈"],
    dates: "2024년 12월 – 2025년 1월",
    organization: "RikkeiSoft Corporation (인턴십)",
    whatBuilt: [
      "사내 질의 및 문서 기반 정보 검색을 위한 엔터프라이즈 AI 챗봇 플랫폼 개발에 기여했습니다.",
    ],
    role: "단독 프런트엔드 개발자",
    technicalContributions: [
      "React(TypeScript)로 사용자/관리자 인터페이스를 설계·구현했습니다.",
      "일반 사용자와 관리자를 구분하는 역할 기반 UI 흐름을 구축했습니다.",
      "프롬프트 설정, 문서 관리, 시스템 제어를 위한 관리자 대시보드를 구현했습니다.",
      "LLM 추론 및 벡터 검색 API와 프런트엔드를 통합했습니다.",
      "백엔드 엔지니어와 협업하여 안정적인 API 계약을 유지했습니다.",
    ],
    techStackFull: [
      "React.js (TypeScript)",
      "Tailwind CSS",
      "Axios",
      "Gemini API",
      "FAISS",
      "PostgreSQL",
      "JWT",
      "Google SSO",
      "Git",
    ],
    outcome: [
      "사내 워크플로우에서 사용되는 프로덕션 프런트엔드를 제공했습니다.",
      "AI 시스템 거동에 대한 관리 편의성과 제어성을 향상했습니다.",
    ],
    repository: "https://github.com/NishthaLath/InflowChat_Chatbot_Frontend",
  },
  "cafe-kiosk": {
    id: "cafe-kiosk",
    title: "AI 기반 음성 인식 카페 키오스크",
    shortDescription: "대화형 주문을 위한 미세조정된 LLaMA",
    techStack: "LLaMA3, FastAPI, NLP, Fine-Tuning",
    category: "AI",
    outcomes: ["+10% 정확도", "미세조정"],
    dates: "2024년 9월 – 2024년 12월",
    organization: "캡스톤 프로젝트 (산학협력)",
    whatBuilt: [
      "기존 RASA 기반 NLP 시스템을 LLaMA3 미세조정 모델로 교체해 음성 주문 키오스크를 업그레이드했습니다.",
    ],
    role: "AI 시스템 및 아키텍처 리드",
    technicalContributions: [
      "Unsloth로 한국어 대화형 AI를 위해 LLaMA3를 파인튜닝했습니다.",
      "모호·다중 의도를 포함한 14만여 개 대화 데이터를 처리했습니다.",
      "100개 이상의 입력-응답 시나리오로 광범위한 테스트를 수행했습니다.",
      "Google Cloud STT와 백엔드를 통합하는 모듈형 시스템을 설계했습니다.",
      "복잡한 주문 수정, 대체, 다국어 확장을 지원했습니다.",
    ],
    techStackFull: [
      "LLaMA3",
      "NLP",
      "Fine-Tuning (Unsloth)",
      "FastAPI",
      "Spring Boot",
      "PyQT",
      "MySQL",
      "Google Cloud STT",
    ],
    outcome: [
      "+10% 이상의 응답 정확도와 효율 향상을 달성했습니다.",
      "실제 매장 환경에 적합한 확장 가능한 음성 기반 키오스크 시스템을 제공했습니다.",
    ],
    repository: "https://github.com/orgs/AI-coffee-Kiosk/repositories",
  },
  "transportation-kiosk": {
    id: "transportation-kiosk",
    title: "길:벗 (VISIONED) — 접근성 교통 키오스크",
    shortDescription: "접근성을 위한 음성 기반 대중교통 키오스크",
    techStack: "Node.js, Express, Google Cloud APIs, React",
    category: "Full-Stack",
    outcomes: ["접근성", "음성 기반"],
    dates: "2024년 10월 – 2024년 11월",
    organization: "경북대학교",
    whatBuilt: [
      "고령자 및 이동성 제약 사용자를 위한 접근성 중심 대중교통 키오스크를 개발했습니다.",
    ],
    role: "백엔드 리드 및 API 개발자",
    technicalContributions: [
      "Node.js와 Express로 백엔드 API를 설계·구현했습니다.",
      "Google Cloud STT/TTS를 통합하여 음성 기반 상호작용을 지원했습니다.",
      "Google Maps API로 실시간 경로 추천을 구현했습니다.",
      "실시간 데이터 처리를 위한 서버 성능을 최적화했습니다.",
      "접근성 중심 UX를 위해 프런트엔드 디자이너와 협업했습니다.",
    ],
    techStackFull: [
      "Node.js",
      "Express.js",
      "Google Cloud STT/TTS",
      "Google Maps API",
      "React",
      "GitHub",
    ],
    outcome: [
      "음성 기반 접근성 키오스크 프로토타입을 제공했습니다.",
      "포용적 이동성을 목표로 하는 사회적 임팩트를 입증했습니다.",
    ],
    repository: "https://github.com/orgs/VISIONED-KNU/repositories",
  },
  "kert-website": {
    id: "kert-website",
    title: "KERT 사이버보안 동아리 웹사이트",
    shortDescription: "대학 사이버보안 동아리 공식 웹사이트",
    techStack: "Java, Spring Boot, React, Docker",
    category: "Backend",
    outcomes: ["배포 완료", "안전한 API"],
    dates: "2024년 5월 – 2024년 10월",
    organization: "경북대학교",
    whatBuilt: [
      "대학 사이버보안 동아리 공식 웹사이트를 개발했습니다.",
    ],
    role: "백엔드 개발자",
    technicalContributions: [
      "Java와 Spring Boot로 보안 RESTful API를 설계·구현했습니다.",
      "Spring Security로 인증과 백엔드 로직을 구현했습니다.",
      "JPA/Hibernate와 H2를 사용해 데이터베이스 스키마를 설계했습니다.",
      "Docker로 배포하여 환경 일관성을 확보했습니다.",
      "React 프런트엔드와 협업해 기능을 통합했습니다.",
    ],
    techStackFull: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "H2 Database",
      "Docker",
      "React",
    ],
    outcome: [
      "실제 동아리에 사용되는 안정적이고 안전한 백엔드를 배포했습니다.",
      "동아리 활동을 위한 정보 전달과 커뮤니케이션을 개선했습니다.",
    ],
    repository: "https://github.com/NishthaLath/KERT_Backend",
  },
};

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
    isPrimary: false,
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
