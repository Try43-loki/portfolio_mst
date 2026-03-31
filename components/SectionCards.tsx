import Link from "next/link";
import { projects, techStack } from "@/lib/data";

export default function SectionCards() {
  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-4 mb-7 animate-fade-up-2">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          Explore
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07] rounded-sm overflow-hidden mb-20 animate-fade-up-3"
      >
        {/* About Me */}
        <Card href="#about" icon={<UserIcon />} title="About Me">
          Passionate frontend dev who loves building user-friendly apps and leveraging AI to stay ahead of the curve.
        </Card>

        {/* Education */}
        <Card href="#education" icon={<GradIcon />} title="Education">
          B.IT at University of Cambodia · Korean Software HRD Center — Basic &amp; Advanced tracks (2023–2025).
        </Card>

        {/* Experience */}
        <Card href="#experience" icon={<BriefIcon />} title="Experience">
          Frontend Team Lead at KSHRD · Internship Photographer at University of Cambodia (2023–2024).
        </Card>

        {/* Tech Stack */}
        <CardTech />

        {/* Projects — wide */}
        <CardProjects />

        {/* Motivation */}
        <Card href="#motivation" icon={<StarIcon />} title="Motivation">
          Driven by curiosity, self-development, and a commitment to creating modern solutions that make a real impact.
        </Card>

        {/* Contact */}
        <Card href="mailto:meysoytry@gmail.com" icon={<MailIcon />} title="Contact Me" external>
          meysoytry@gmail.com
          <br />+855 86 329 085
          <br />Phnom Penh, Cambodia
        </Card>
      </div>
    </div>
  );
}

/* ---------- generic card ---------- */
function Card({
  href, icon, title, children, external = false,
}: {
  href: string; icon: React.ReactNode; title: string;
  children: React.ReactNode; external?: boolean;
}) {
  const inner = (
    <div className="card-item bg-[#111110] p-7 flex flex-col gap-3.5 cursor-pointer hover:bg-[#1a1a18] transition-colors duration-200 min-h-[155px] h-full group">
      <div className="w-9 h-9 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#c8a96e] group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/[0.08] transition-all duration-200">
        {icon}
      </div>
      <div className="font-serif text-[18px] font-bold text-[#f0ede6] leading-tight">
        {title}
      </div>
      <div className="text-[12px] leading-relaxed text-[#7a7870] font-light flex-1">
        {children}
      </div>
      <span className="self-end text-white/20 group-hover:text-[#c8a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
        <ArrowIcon />
      </span>
    </div>
  );

  if (external) return <a href={href} className="no-underline">{inner}</a>;
  return <Link href={href} className="no-underline">{inner}</Link>;
}

/* ---------- tech stack card ---------- */
function CardTech() {
  const badges = ["Next.js", "React", "TypeScript", "Tailwind", "GSAP", "Spring Boot", "PostgreSQL", "Docker"];
  return (
    <div className="card-item bg-[#111110] p-7 flex flex-col gap-3.5 cursor-pointer hover:bg-[#1a1a18] transition-colors duration-200 min-h-[155px] group">
      <div className="w-9 h-9 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#c8a96e] group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/[0.08] transition-all duration-200">
        <CodeIcon />
      </div>
      <div className="font-serif text-[18px] font-bold text-[#f0ede6] leading-tight">Tech Stack</div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {badges.map((b) => (
          <span
            key={b}
            className="font-mono text-[9px] tracking-[0.08em] uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/20 px-2 py-1 rounded-sm"
          >
            {b}
          </span>
        ))}
      </div>
      <span className="self-end text-white/20 group-hover:text-[#c8a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-auto">
        <ArrowIcon />
      </span>
    </div>
  );
}

/* ---------- projects wide card ---------- */
function CardProjects() {
  return (
    <Link
      href="#projects"
      className="no-underline col-span-2"
    >
      <div className="card-item bg-[#111110] p-7 flex flex-col gap-3.5 cursor-pointer hover:bg-[#1a1a18] transition-colors duration-200 min-h-[155px] h-full group">
        <div className="w-9 h-9 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#c8a96e] group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/[0.08] transition-all duration-200">
          <MonitorIcon />
        </div>
        <div className="font-serif text-[18px] font-bold text-[#f0ede6] leading-tight">Projects</div>
        <div className="flex gap-4 mt-1">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex-1 bg-white/[0.03] border border-white/[0.07] rounded-sm p-3"
            >
              <div className="text-[12px] font-medium text-[#f0ede6] mb-1">
                {p.emoji} {p.name}
              </div>
              <div className="text-[11px] text-[#7a7870] leading-relaxed">
                {p.description.slice(0, 90)}…
              </div>
            </div>
          ))}
        </div>
        <span className="self-end text-white/20 group-hover:text-[#c8a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-auto">
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

/* ---------- icons ---------- */
const iconProps = { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.3", className: "w-4 h-4" } as const;

function UserIcon() { return <svg {...iconProps}><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"/></svg>; }
function GradIcon() { return <svg {...iconProps}><path d="M8 2L1 6l7 4 7-4-7-4z"/><path d="M1 6v5c0 1.5 3 3 7 3s7-1.5 7-3V6"/></svg>; }
function BriefIcon() { return <svg {...iconProps}><rect x="2" y="4" width="12" height="10" rx="1"/><path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M2 9h12"/></svg>; }
function CodeIcon() { return <svg {...iconProps}><path d="M4 6L1 8l3 2M12 6l3 2-3 2M9 4l-2 8"/></svg>; }
function StarIcon() { return <svg {...iconProps}><path d="M8 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z"/></svg>; }
function MailIcon() { return <svg {...iconProps}><rect x="1" y="3" width="14" height="10" rx="1"/><path d="M1 5l7 5 7-5"/></svg>; }
function MonitorIcon() { return <svg {...iconProps}><rect x="1" y="3" width="14" height="10" rx="1"/><path d="M1 7h14"/><circle cx="4" cy="5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="5" r="0.5" fill="currentColor"/></svg>; }
function ArrowIcon() { return <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3.5 h-3.5"><path d="M2 12L12 2M12 2H5M12 2v7"/></svg>; }
