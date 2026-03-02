export const PROJECTS = [
  {
    id: 1,
    title: "Green Field School System",
    type: "Full Stack · SaaS Platform",
    year: "2024",
    url: "https://green-field-school-system.vercel.app/",
    github: null,
    status: "live" as const,
    color: "#4ade80",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    summary:
      "Comprehensive school management system showcasing a fully customizable solution for educational institutions.",
    description:
      "Features student management, staff portal, finance tracking, attendance, timetable management, exams, medical records, library management, discipline and counseling, plus automated academic reports — all in one integrated platform.",
    highlights: [
      "Student & Staff Management",
      "Finance & Fee Tracking",
      "Automated Academic Reports",
      "Attendance & Timetables",
      "Medical & Library Records",
    ],
  },
  {
    id: 2,
    title: "EWaste Tracker",
    type: "AI · Blockchain · Web3",
    year: "2024",
    url: "https://github.com/wellingtonmwadali/EWaste-Tracker",
    github: "https://github.com/wellingtonmwadali/EWaste-Tracker",
    status: "open-source" as const,
    color: "#22d3ee",
    tags: ["Python", "Blockchain", "AI/ML", "Web3", "Carbon Tracking"],
    summary:
      "AI-powered blockchain platform for transparent e-waste lifecycle tracking and carbon impact measurement.",
    description:
      "A system combining AI intelligence with blockchain immutability to create a transparent, verifiable record of e-waste from collection through disposal — measuring real carbon impact at every stage.",
    highlights: [
      "Blockchain Immutability",
      "AI Lifecycle Analysis",
      "Carbon Impact Metrics",
      "Transparent Audit Trail",
      "Multi-stakeholder Platform",
    ],
  },
  {
    id: 3,
    title: "NAS Bot",
    type: "AI · Multi-Agent · FinTech",
    year: "2024",
    url: "https://github.com/wellingtonmwadali/nas-bot",
    github: "https://github.com/wellingtonmwadali/nas-bot",
    status: "open-source" as const,
    color: "#fbbf24",
    tags: ["GPT-4", "Python", "Multi-Agent", "Trading API", "FastAPI"],
    summary:
      "Agentic AI trading intelligence bot combining multi-agent architecture with GPT-4 powered reasoning.",
    description:
      "A professional-grade AI trading analysis system that generates intelligent trading signals for 6 major financial instruments using multi-agent coordination and large language model reasoning.",
    highlights: [
      "Multi-Agent Architecture",
      "GPT-4 Reasoning Engine",
      "6 Financial Instruments",
      "Real-time Signal Generation",
      "Risk Analysis Layer",
    ],
  },
  {
    id: 4,
    title: "ALX Multitone Magic",
    type: "Browser Extension · Chrome",
    year: "2024",
    url: "https://chromewebstore.google.com/detail/alx-multitone-magic/ephimbbnijochfniplkonmebaknmjojm",
    github: null,
    status: "published" as const,
    color: "#818cf8",
    tags: ["Chrome Extension", "JavaScript", "CSS", "UX Design"],
    summary:
      "A Chrome extension providing 9 custom themes to elevate the intranet experience.",
    description:
      "Delivers red, green, navy-blue, black, teal, light-blue, pink, purple, and yellow themes — giving users control over their daily intranet environment with one click.",
    highlights: [
      "9 Custom Themes",
      "One-Click Activation",
      "Intranet Optimization",
      "Chrome Web Store Published",
      "Zero Performance Impact",
    ],
  },
  {
    id: 5,
    title: "mama.ok",
    type: "AI · HealthTech · Full Stack",
    year: "2024",
    url: "https://mama-ok.vercel.app/",
    github: null,
    status: "live" as const,
    color: "#ec4899",
    tags: ["Next.js", "AI", "Healthcare", "TypeScript", "Wellness"],
    summary:
      "Trusted pregnancy & postpartum companion connecting mothers with certified consultants and AI-powered health guidance.",
    description:
      "Your trusted pregnancy & postpartum companion — connecting mothers with certified consultants, AI-powered health guidance, month-by-month wellness tracking, and hospital selection. Because every mother deserves expert support, warmth, and care, every step of the way.",
    highlights: [
      "AI Health Guidance",
      "Certified Consultants",
      "Month-by-Month Tracking",
      "Hospital Selection",
      "Postpartum Support",
    ],
  },
  {
    id: 6,
    title: "OSS Compass",
    type: "AI · Developer Tools · GitHub",
    year: "2024",
    url: "https://open-source-santa-7jnj.vercel.app/",
    github: null,
    status: "live" as const,
    color: "#a78bfa",
    tags: ["Next.js", "AI", "GitHub API", "TypeScript", "Open Source"],
    summary:
      "AI-powered platform matching developers to open source projects they'll actually stick with based on skills and interests.",
    description:
      "Matches developers to open source projects they'll actually stick with. Tell it your skill level, languages, and interests — it finds real, active GitHub repos, explains why each one fits you, and gives you a specific first contribution to make. No more stale 'good first issue' tags or guesswork.",
    highlights: [
      "Smart Project Matching",
      "Active Repo Discovery",
      "Personalized Fit Analysis",
      "First Contribution Guidance",
      "Skills-Based Filtering",
    ],
  },
];

export const SKILLS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  Backend: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"],
  "AI & ML": ["GPT-4 Integration", "Multi-Agent Systems", "LangChain", "ML Pipelines"],
  Blockchain: ["Web3.js", "Solidity", "Smart Contracts", "IPFS"],
  DevOps: ["Docker", "Vercel", "AWS", "CI/CD", "Git"],
};

export const STATS = [
  { num: "6+", label: "Projects Shipped" },
  { num: "5+", label: "AI Systems Built" },
  { num: "1", label: "Chrome Extension Published" },
  { num: "∞", label: "Problems Left to Solve" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/wellingtonmwadali" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/wellington-mwadali-/" },
  { label: "Email", url: "mailto:wellingtonmwadali@gmail.com" },
];

export const CONTACT = {
  email: "wellingtonmwadali@gmail.com",
  phone: "+254 790 147 060",
  whatsapp: "https://wa.me/254790147060",
};
