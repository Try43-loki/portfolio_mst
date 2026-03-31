export const profile = {
  name: "Mey Soytry",
  role: "Frontend Developer",
  tagline: "Frontend Developer & Data Analyst",
  bio: "Hi, I'm Soytry — I build user-friendly web applications with modern technologies. Experienced as a Frontend Team Lead, I enjoy leveraging AI and new tools to create fast, elegant, and effective digital solutions.",
  email: "meysoytry@gmail.com",
  phone: "+855 86 329 085",
  location: "Phnom Penh, Cambodia",
  available: true,
};

export const techStack = [
  { category: "Frontend", skills: ["Next.js", "React.js", "TypeScript", "JavaScript"] },
  { category: "Styling", skills: ["TailwindCSS", "Shadcn/UI", "Web Design"] },
  { category: "Animation", skills: ["Framer Motion", "GSAP"] },
  { category: "Backend", skills: ["Java", "Spring Boot", "FastAPI"] },
  { category: "Data", skills: ["SQL", "PostgreSQL", "TanStack Query", "Axios"] },
  { category: "Tools", skills: ["Docker", "GitHub", "Power BI"] },
];

export const techTags = [
  "Next.js", "React", "TypeScript", "TailwindCSS",
  "Spring Boot", "GSAP", "PostgreSQL", "UI/UX Design",
];

export const projects = [
  {
    id: "sqlyst",
    name: "SQLyst",
    emoji: "🤖",
    subtitle: "AI Chatbot · Advanced Course Project",
    description:
      "A centralized AI-powered data analysis platform that enables non-technical users to interact with company data using natural language queries.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Motion", "FastAPI", "LLMs", "Prophet Model", "PostgreSQL"],
    role: "Design UX/UI · Implement Frontend & Backend · Train Prophet Model for Time Series Forecasting",
    highlight: true,
  },
  {
    id: "rippleeco",
    name: "RippleEco",
    emoji: "🌿",
    subtitle: "Environmental Platform · Basic Course Project",
    description:
      "Environmental platform that empowers individuals to participate in eco-friendly events, make donations, and raise awareness about environmental issues to government.",
    stack: ["Next.js", "JavaScript", "Tailwind", "Shadcn", "Spring Boot", "PostgreSQL", "Selenium", "Telegram Bot", "OneSignal"],
    role: "Design UX/UI · Frontend Team Lead · Design Frontend Architecture · Testing · Implement Backend",
    highlight: false,
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
    detail: "Data Engineering, ETL/ELT, Web Scraping, Python, Advanced Statistics, Power BI, Time Series Forecasting",
  },
  {
    degree: "Basic Course — Software Development",
    institution: "Korean Software HRD Center",
    period: "Feb – Jul 2025",
    detail: "Java, Spring Boot, Next.js, React, PostgreSQL, Docker, GitHub, UI/UX",
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

export const softSkills = ["Teamwork", "Responsibility", "Commitment", "Quick Learning", "Self Development"];

export const languages = [
  { name: "Khmer", flag: "🇰🇭", level: "Mother tongue" },
  { name: "English", flag: "🇺🇸", level: "Intermediate" },
  { name: "Korean", flag: "🇰🇷", level: "TOPIK I Level 1" },
];

// Sign up free at formspree.io → New Form → copy your form ID here
export const formspreeId = "YOUR_FORM_ID";

export const skillProficiency = [
  { name: "Next.js / React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "TailwindCSS", level: 92, category: "Frontend" },
  { name: "Data Analytics", level: 82, category: "Data" },
  { name: "Power BI", level: 78, category: "Data" },
  { name: "SQL / PostgreSQL", level: 80, category: "Data" },
  { name: "Spring Boot", level: 72, category: "Backend" },
  { name: "FastAPI", level: 70, category: "Backend" },
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/soytry-mey-3a156b332" },
  { label: "Telegram", href: "https://t.me/Tryy43" },
  { label: "Facebook", href: "https://www.facebook.com/share/17WwDPdvqy/" },
];
