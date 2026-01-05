export interface ProjectCardData {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string;
}

export interface ProjectDetailData extends ProjectCardData {
  dates: string;
  organization: string;
  whatBuilt: string[];
  role: string;
  technicalContributions: string[];
  techStackFull: string[];
  outcome: string[];
  repository?: string;
}

export const projectCards: ProjectCardData[] = [
  {
    id: "disaster-rag",
    title: "AI-Based Disaster Scenario Generation System",
    shortDescription: "RAG + Large Language Models",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
  },
  {
    id: "posture-detection",
    title: "AI-Based Posture Detection and Feedback System",
    shortDescription: "Real-time computer vision for exercise analysis",
    techStack: "Python, Computer Vision, MediaPipe, OpenCV",
  },
  {
    id: "shebots",
    title: "SheBots — AI-Powered Academic Support Chatbot",
    shortDescription: "Bilingual conversational AI for academic support",
    techStack: "FastAPI, RAG, LangChain, GPT-4, Docker",
  },
  {
    id: "inflowchat",
    title: "InflowChat — Enterprise AI Chatbot",
    shortDescription: "Production-ready enterprise chatbot platform",
    techStack: "React, TypeScript, Gemini API, FAISS",
  },
  {
    id: "cafe-kiosk",
    title: "AI-Based Voice Recognition Café Kiosk",
    shortDescription: "Fine-tuned LLaMA for conversational ordering",
    techStack: "LLaMA3, FastAPI, NLP, Fine-Tuning",
  },
  {
    id: "transportation-kiosk",
    title: "길:벗 (VISIONED) — Accessible Transportation Kiosk",
    shortDescription: "Voice-driven public transportation kiosk for accessibility",
    techStack: "Node.js, Express, Google Cloud APIs, React",
  },
  {
    id: "kert-website",
    title: "KERT Cybersecurity Club Website",
    shortDescription: "Official website for university cybersecurity club",
    techStack: "Java, Spring Boot, React, Docker",
  },
];

export const projectDetails: Record<string, ProjectDetailData> = {
  "disaster-rag": {
    id: "disaster-rag",
    title: "AI-Based Disaster Scenario Generation System",
    shortDescription: "RAG + Large Language Models",
    techStack: "LLMs, RAG, LangChain, FAISS, Docker",
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
