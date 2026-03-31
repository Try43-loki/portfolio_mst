export const profile = {
  name: "MEY Soytry",
  role: "Frontend Developer",
  tagline: "Frontend Developer & Data Analyst",
  bio: "Hi, I'm Soytry — I build user-friendly web applications with modern technologies. Experienced as a Frontend Team Lead, I enjoy leveraging AI and new tools to create fast, elegant, and effective digital solutions.",
  email: "meysoytry@gmail.com",
  phone: "+855 86 329 085",
  location: "Phnom Penh, Cambodia",
  available: true,
};

export const techStack = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "TanStack Query",
      "TailwindCSS",
      "Bootstrap",
      "Shadcn/UI",
      "NextUI",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "FastAPI", "SQL", "PostgreSQL"],
  },
  {
    category: "Data Analyst",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Processing",
      "Data Warehouse",
      "ETL/ELT",
      "Power BI",
      "Power Query",
      "Advanced Excel",
    ],
  },
  { category: "Tools", skills: ["Docker", "Git"] },
];

export const techTags = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Data Warehouse",
];

export const projects = [
  {
    id: "sqlyst",
    name: "SQLyst",
    emoji: "🤖",
    subtitle: "AI Chatbot · Advanced Course Project",
    description:
      "A centralized AI-powered data analysis platform that enables non-technical users to interact with company data using natural language queries.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Motion",
      "FastAPI",
      "LLMs",
      "Prophet Model",
      "PostgreSQL",
    ],
    role: "Design UX/UI · Implement Frontend & Backend · Train Prophet Model for Time Series Forecasting",
    highlight: false,
    images: [
      { src: "/projects/SQLyst/dashboard.png", label: "Dashboard" },
      { src: "/projects/SQLyst/chat.png", label: "AI Chat" },
      { src: "/projects/SQLyst/forcast.png", label: "Forecast" },
      { src: "/projects/SQLyst/report.png", label: "Report" },
    ],
    details: {
      overview:
        "SQLyst is a centralized AI-powered analytics platform that lets non-technical users query company databases using plain English. It translates natural language into SQL, runs the query, and presents the results as interactive charts and summaries — no SQL knowledge required.",
      highlights: [
        "Natural language → SQL pipeline powered by LLMs for zero-code data querying",
        "Prophet model integration for time series forecasting and trend analysis",
        "Interactive dashboard with real-time charts, filters, and exportable reports",
        "Multi-user access with role-based permissions for data security",
        "FastAPI backend with async query execution for fast response times",
      ],
      github: null,
      demo: null,
    },
  },
  {
    id: "rippleeco",
    name: "RippleEco",
    emoji: "🌿",
    subtitle: "Environmental Platform · Basic Course Project",
    description:
      "Environmental platform that empowers individuals to participate in eco-friendly events, make donations, and raise awareness about environmental issues to government.",
    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind",
      "Shadcn",
      "Spring Boot",
      "PostgreSQL",
      "Selenium",
      "Telegram Bot",
      "OneSignal",
    ],
    role: "Design UX/UI · Frontend Team Lead · Design Frontend Architecture · Testing · Implement Backend",
    highlight: false,
    images: [
      { src: "/projects/RippleEco/landing.png", label: "Landing" },
      { src: "/projects/RippleEco/eco-event.png", label: "Events" },
      { src: "/projects/RippleEco/air-quality.png", label: "Air Quality" },
      { src: "/projects/RippleEco/discussion.png", label: "Discussion" },
    ],
    details: {
      overview:
        "RippleEco is a community-driven environmental platform built to bridge individuals, organizations, and government bodies. Users can join local eco-events, donate to environmental causes, and submit awareness reports directly to authorities — all in one place.",
      highlights: [
        "Eco-event discovery and registration with geolocation-based filtering",
        "Donation system with campaign tracking and progress visualization",
        "Government petition feature to report environmental issues with evidence",
        "Automated environmental data scraping via Selenium for real-time updates",
        "Push notifications through Telegram Bot and OneSignal for event reminders",
      ],
      github: null,
      demo: null,
    },
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Cambodia",
    period: "2023 – Present",
    detail: "3rd Year Student",
  },
  {
    degree: "Advanced Course — Data Analytics",
    institution: "Korean Software HRD Center",
    period: "Jul – Dec 2025",
    detail:
      "Data Engineering, ETL/ELT, Web Scraping, Python, Advanced Statistics, Power BI, Time Series Forecasting",
  },
  {
    degree: "Basic Course — Software Development",
    institution: "Korean Software HRD Center",
    period: "Feb – Jul 2025",
    detail:
      "Java, Spring Boot, Next.js, React, PostgreSQL, Docker, GitHub, UI/UX",
  },
  {
    degree: "High School Diploma",
    institution: "Hun Sen Treuy Sla High School",
    period: "2021 – 2023",
    detail: "Grade: B",
  },
];

export const experience = [
  {
    title: "Frontend Team Lead",
    company: "Korean Software HRD Center",
    period: "2025",
    description:
      "Led the frontend team on RippleEco — an environmental platform built with Next.js. Designed the frontend architecture, managed team workflow, and implemented key UI features.",
  },
  {
    title: "Internship Photographer",
    company: "University of Cambodia",
    period: "Jun 2023 – Jan 2024",
    description:
      "Assisted in photoshoots and video production, handling camera setup and composition. Edited photos and videos using Adobe Photoshop, Lightroom, and CapCut.",
  },
];

export const softSkills = [
  "Teamwork",
  "Responsibility",
  "Commitment",
  "Quick Learning",
  "Self Development",
];

export const languages = [
  { name: "Khmer", flag: "🇰🇭", level: "Mother tongue" },
  { name: "English", flag: "🇺🇸", level: "Intermediate" },
  { name: "Korean", flag: "🇰🇷", level: "TOPIK I Level 1" },
];

// Sign up free at formspree.io → New Form → copy your form ID here
export const formspreeId = "YOUR_FORM_ID";

export const testimonials = [
  {
    quote:
      "Soytry was one of the standout students in our program. Beyond his technical skills in Next.js and Spring Boot, what impressed me most was how he took ownership as a team lead — guiding his peers, making architecture decisions, and delivering a polished product under real deadlines.",
    name: "Kim Jae-won",
    title: "Software Development Instructor",
    institution: "Korean Software HRD Center",
  },
  {
    quote:
      "Having Soytry as our frontend lead made a huge difference. He had a clear vision for the UI from day one, kept the team aligned when things got complicated, and always found a way to ship clean, working features. RippleEco wouldn't have looked the way it did without him.",
    name: "Chea Dara",
    title: "Full-Stack Developer",
    institution: "Korean Software HRD Center",
  },
];

export const skillProficiency = [
  { name: "Next.js / React.js", level: 90, category: "Frontend" },
  { name: "TypeScript / JavaScript", level: 88, category: "Frontend" },
  { name: "TailwindCSS / Bootstrap", level: 92, category: "Frontend" },
  { name: "Framer Motion / GSAP", level: 78, category: "Frontend" },
  { name: "Spring Boot", level: 72, category: "Backend" },
  { name: "FastAPI", level: 70, category: "Backend" },
  { name: "SQL / PostgreSQL", level: 80, category: "Backend" },
  { name: "Python / Pandas / NumPy", level: 82, category: "Data Analyst" },
  { name: "Power BI / Power Query", level: 80, category: "Data Analyst" },
  { name: "ETL/ELT / Data Warehouse", level: 74, category: "Data Analyst" },
  { name: "Advanced Excel", level: 85, category: "Data Analyst" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const social = [
  { label: "GitHub", href: "https://github.com/Try43-loki" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soytry-mey-3a156b332",
  },
  { label: "Telegram", href: "https://t.me/Tryy43" },
  { label: "Facebook", href: "https://www.facebook.com/share/17WwDPdvqy/" },
];
