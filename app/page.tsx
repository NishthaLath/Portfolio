/* eslint-disable @typescript-eslint/no-unused-vars */
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
    "Computer Science & Engineering (KNU, 2022–2026). Research-backed builds with production-aware deployments.",
  quickFacts: [
    "Kyungpook National University (KNU)",
    "TOPIK Level 5",
    "AI + Web Systems",
  ],
  locationLine: "Daegu, South Korea",
  links: {
    github: "https://github.com/NishthaLath",
    linkedin: "https://www.linkedin.com/in/nishtha-lath-335206276/",
    email: "",
  },
  about: [
    "I’m a Computer Science & Engineering undergraduate at Kyungpook National University (2022–2026). My work sits at the intersection of LLM applications (RAG, conversational systems) and software engineering—from FastAPI backends to React frontends.",
    "I focus on systems that stay usable in real contexts: ambiguous language, messy data sources, and real users—especially in accessibility-focused kiosks and assistants.",
  ],
  academics: {
    school:
      "Kyungpook National University (KNU), South Korea — B.S. Computer Science & Engineering (2022–2026)",
    gpa: "GPA: 3.55 / 4.3 · Current semester GPA: 3.77 / 4.3",
    coursework: [
      "AI & Machine Learning",
      "Operating Systems",
      "Network Programming",
      "Database Systems",
      "Software Engineering",
      "Cybersecurity fundamentals",
    ],
  },
  languages: [
    "English — Fluent (Advanced)",
    "Hindi — Native",
    "Korean — Advanced (TOPIK Level 5)",
  ],
};

const skills = [
  {
    title: "AI / LLMs",
    items: [
      "LLaMA, GPT",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt engineering",
      "Fine-tuning (Unsloth)",
      "NLP & conversational AI",
      "Dataset creation & preprocessing",
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
      "CORS, reverse proxy, port binding",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js (TypeScript)",
      "HTML, CSS (Tailwind)",
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
      "Built the frontend architecture in React (TypeScript) and Tailwind CSS for an internal AI chatbot platform.",
      "Designed role-based dashboards (user vs admin) and implemented prompt customization, file/link management, and admin controls.",
      "Led planning and coordination using Trello, WBS, and Gantt-style scheduling.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub"],
  },
  {
    title: "Undergraduate Lab Intern",
    org: "Intelligent Software Systems Lab",
    dates: "Oct 2025 – Dec 2025",
    note: "Dates match resume; confirm if extended.",
    bullets: [
      "Built a RAG-based disaster response assistant integrating legal manuals, population datasets, and geo-spatial risk data.",
      "Implemented FAISS retrieval, LangChain pipelines, and an optimized FastAPI backend for heterogeneous inputs.",
      "Reduced hallucination risk through retrieval filtering and prompt tuning.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "LLMs"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "SheBots",
    subtitle: "AI-integrated RAG chatbot for a department website",
    role: "Lead backend & AI developer",
    whatBuilt: [
      "Designed a hybrid RAG architecture using LangChain + FAISS.",
      "Integrated GPT-4.1 with retrieval and served it via a FastAPI backend.",
      "Deployed on AWS EC2 using Docker and NGINX.",
      "Handled deployment constraints including disk expansion, reverse proxy setup, CORS, and port binding.",
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "AWS EC2", "Docker", "NGINX"],
    outcomes: [
      "Production-deployed chatbot for departmental information access.",
      "Stable and maintainable AI service under real deployment conditions.",
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
      "Built a voice-driven kiosk backend using Node.js.",
      "Integrated Google Cloud APIs (STT, TTS, Maps).",
      "Implemented route optimization logic and backend–frontend integration.",
    ],
    stack: ["Node.js", "React", "Google Cloud STT/TTS/Maps"],
    outcomes: [
      "Functional prototype with accessibility-focused interaction design.",
    ],
    repoLinks: [
      { label: "Backend", href: "https://github.com/NishthaLath/VISIONED-KNU-Kiosk-Backend" },
    ],
  },
  {
    title: "AI-Driven Voice Recognition Cafe Kiosk",
    subtitle: "LLM tuning for robust voice ordering",
    role: "Frontend + AI lead",
    whatBuilt: [
      "Designed prompts for complex, ambiguous, multi-item orders.",
      "Fine-tuned LLaMA models using Unsloth and deployed via Hugging Face Hub.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "LLaMA", "Unsloth"],
  },
  {
    title: "AI-Based Multi-CCTV Person Detection & Behavior Analysis",
    subtitle: "Multi-person tracking, action recognition, and re-identification",
    role: "Core AI pipeline developer",
    whatBuilt: [
      "Built tracking with YOLO + DeepSORT.",
      "Implemented action recognition using ST-GCN.",
      "Added cross-camera re-identification with FaceNet and OSNet (Torchreid).",
      "Evaluated performance on real datasets.",
    ],
    stack: ["Python", "OpenCV", "YOLO", "DeepSORT", "ST-GCN", "Torchreid"],
    repoLinks: [
      { label: "Organization", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis" },
      { label: "HumanRecognition", href: "https://github.com/Multi-CCTV-Human-Behavior-Analysis/HumanRecognition" },
    ],
  },
];

const research: ResearchItem[] = [
  {
    title: "Evaluating LLaMA Model for Enhanced Conversational AI in Voice Recognition Kiosks",
    venue: "UCWIT 2024 (KIISE-hosted)",
    award: "Excellent Paper Award (Top 4 / 47 teams)",
    summaryBullets: [
      "Compared rule-based conversational systems (RASA) with LLaMA under realistic kiosk-style dialogue scenarios.",
      "Built controlled test conversations and a task-based evaluation methodology.",
      "Observed stronger handling of ambiguity and multi-intent inputs with LLaMA.",
    ],
    stack: ["LLaMA", "RASA", "Python", "NLP evaluation"],
    repoLinks: [
      { label: "Paper Repo", href: "https://github.com/NishthaLath/UCWIT-2024-ResearchPaper" },
    ],
  },
];

const leadership = [
  {
    title: "International Student Representative (CS Department)",
    detail: "Student support and departmental coordination.",
  },
  {
    title: "ISO Member",
    detail: "Event organization and international student support.",
  },
  {
    title: "KERT Cybersecurity Club Member",
    detail: "CTFs, web security, and cryptography fundamentals.",
  },
  {
    title: "Dance & Debate Competitions",
    detail: "Multiple awards; bilingual debating (Korean & English).",
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

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/80 bg-surface/60 p-6 shadow-lg shadow-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-border backdrop-blur-sm">
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
  const githubEnabled = Boolean(profile.links.github);
  const linkedinEnabled = Boolean(profile.links.linkedin);
  const emailEnabled = Boolean(profile.links.email);

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
            {navLinks.map((item) => (
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
          </div>
        </div>
      </header>

      <main id="content">
        <section id="top" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.22),transparent_60%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <p className="text-sm font-medium text-muted">
                  {profile.locationLine}
                </p>

                <h1
                  className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {profile.name} <span className="text-muted">({profile.nameNative})</span>
                </h1>

                <p className="mt-5 text-lg leading-8 text-muted">
                  {profile.subheadline}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <LinkButton label="View projects" href="#projects" variant="primary" />
                  <LinkButton label="Contact" href="#contact" variant="secondary" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {profile.quickFacts.map((f) => (
                    <Tag key={f}>{f}</Tag>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4">
                <Card>
                  <div className="text-sm font-medium text-muted">Focus areas</div>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    <li>AI systems & LLM applications</li>
                    <li>Conversational AI & RAG</li>
                    <li>Web & backend engineering</li>
                    <li>Research-oriented development</li>
                    <li>Accessible, human-centered systems</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="About"
              title="Engineering that stays usable in real contexts"
              subtitle="A concise snapshot of my background, focus, and academic foundation."
            />

            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <Card>
                  <div className="space-y-4 text-base leading-7 text-muted">
                    {profile.about.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="md:col-span-5">
                <div className="space-y-6">
                  <Card>
                    <div className="text-sm font-medium text-muted">
                      Academic
                    </div>
                    <div className="mt-3 text-sm text-foreground/90">
                      {profile.academics.school}
                    </div>
                    <div className="mt-2 text-sm text-muted">
                      {profile.academics.gpa}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.academics.coursework.map((c) => (
                        <Tag key={c}>{c}</Tag>
                      ))}
                    </div>
                  </Card>

                  <Card>
                    <div className="text-sm font-medium text-muted">
                      Languages
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                      {profile.languages.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Skills"
              title="A focused stack across AI, backend, and web UI"
              subtitle="Grouped to keep signal high and avoid tool noise."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
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

        <section id="experience" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Experience"
              title="Internships and lab work with clear ownership"
              subtitle="Short timeline entries with what shipped and what I owned."
            />

            <div className="space-y-5">
              {experience.map((item) => (
                <Card key={`${item.org}-${item.title}`}
                  >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div
                        className="text-lg font-semibold tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                      >
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        {item.org}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-muted">
                      {item.dates}
                    </div>
                  </div>

                  {item.note ? (
                    <div className="mt-3 text-sm text-muted">
                      ⚠ {item.note}
                    </div>
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

        <section id="projects" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Projects"
              title="Case-study style builds"
              subtitle="A compact case-study format: what problem, what I built, and what it achieved."
            />

            <div className="space-y-5">
              {projects.map((p) => (
                <Card key={p.title}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div
                        className="text-lg font-semibold tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                      >
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm text-muted">{p.subtitle}</div>
                    </div>
                    <div className="text-sm font-medium text-muted">{p.role}</div>
                  </div>

                  <div className="mt-5 grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <div className="text-sm font-medium text-muted">
                        What I built
                      </div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                        {p.whatBuilt.map((b) => (
                          <li key={b}>• {b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="text-sm font-medium text-muted">Stack</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>

                      {p.outcomes && p.outcomes.length > 0 ? (
                        <>
                          <div className="mt-6 text-sm font-medium text-muted">
                            Outcome
                          </div>
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                            {p.outcomes.map((o) => (
                              <li key={o}>• {o}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                      {p.repoLinks && p.repoLinks.length > 0 ? (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {p.repoLinks.map((r) => (
                            <LinkButton key={r.href} label={r.label} href={r.href} variant="secondary" />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Research"
              title="Publication and evaluation work"
              subtitle="Research work focused on conversational AI behavior in realistic kiosk settings."
            />

            <div className="space-y-5">
              {research.map((r) => (
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
                    <div className="inline-flex rounded-full border-2 border-accent/50 bg-gradient-to-r from-accent/10 to-accent-2/10 px-4 py-1.5 text-sm font-semibold text-foreground shadow-md shadow-accent/20 backdrop-blur-sm">
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
                        <LinkButton key={rl.href} label={rl.label} href={rl.href} variant="secondary" />
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="awards" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Awards"
              title="Recognitions"
              subtitle="Awards and acknowledgements from research and competitions."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  Excellent Paper Award
                </div>
                <div className="mt-2 text-sm text-muted">
                  UCWIT 2024 (KIISE-hosted) — Top 4 / 47 teams
                </div>
                <div className="mt-4 text-sm leading-6 text-muted">
                  Awarded for research evaluating LLaMA vs rule-based dialogue systems in voice-recognition kiosk scenarios.
                </div>
              </Card>

              <Card>
                <div
                  className="text-base font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  Dance & Debate
                </div>
                <div className="mt-2 text-sm text-muted">
                  Multiple awards · Bilingual debating (Korean & English)
                </div>
                <div className="mt-4 text-sm leading-6 text-muted">
                  Competitive participation alongside technical work and leadership roles.
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="leadership" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Leadership"
              title="Roles built on responsibility"
              subtitle="Activities that reflect coordination, community work, and technical growth."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {leadership.map((l) => (
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

        <section id="contact" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeader
              eyebrow="Contact"
              title="Let’s connect"
              subtitle="For internships, research, or engineering roles in AI systems, RAG, and full-stack work."
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

            <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted sm:flex-row sm:items-center">
              <div>© {new Date().getFullYear()} {profile.name}</div>
              <div className="text-muted-2">
                Built with Next.js + Tailwind
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
