import { profile, techTags } from "@/lib/data";
import ProfileCard from "./ProfileCard";
import DataGraph from "./DataGraph";

export default function Hero() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-16 overflow-hidden animate-fade-up-1 pt-14 md:pt-[72px] pb-10 md:pb-14"
    >
      <DataGraph />

      {/* Left */}
      <div className="relative z-[1] flex flex-col gap-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#c8a96e]">
          <span className="block w-8 h-px bg-[#c8a96e]" />
          {profile.available ? "Open to opportunities · Phnom Penh, Cambodia" : "Phnom Penh, Cambodia"}
        </div>

        {/* Title */}
        <h1
          className="font-serif font-bold text-[#f0ede6] leading-none tracking-tight"
          style={{ fontSize: "clamp(46px, 6.5vw, 82px)", letterSpacing: "-2px" }}
        >
          Frontend
          <br />
          <em className="italic text-[#c8a96e]">Developer</em>
          <br />
          &amp; Data Analyst
        </h1>

        {/* Bio */}
        <p className="text-[15px] leading-[1.75] text-[#7a7870] font-light max-w-lg">
          {profile.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#7a7870] border border-white/[0.07] px-3 py-1.5 rounded-sm hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 bg-[#c8a96e] text-[#0a0a08] font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-[#e8d5b0] transition-colors duration-200 no-underline"
          >
            View Projects
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="/MEY_SOYTRY_CV.pdf"
            download
            className="inline-flex items-center gap-2.5 border border-[#c8a96e]/40 text-[#c8a96e] font-mono text-[11px] tracking-[0.1em] uppercase px-6 py-3.5 rounded-sm hover:bg-[#c8a96e]/[0.08] hover:border-[#c8a96e] transition-all duration-200 no-underline"
          >
            Resume
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#7a7870] hover:text-[#f0ede6] border-b border-transparent hover:border-white/30 pb-0.5 transition-all duration-200 no-underline"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Right — Profile Card */}
      <div className="relative z-[1]">
        <ProfileCard />
      </div>
    </section>
  );
}
