import { profile, social } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-7 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-up-4">
      <span className="font-mono text-[11px] tracking-[0.08em] text-[#7a7870]">
        © 2026 Mey Soytry — Frontend Developer
      </span>

      <div className="flex items-center gap-5">
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.08em] text-[#7a7870] hover:text-[#c8a96e] no-underline transition-colors duration-200"
          >
            {s.label} ↗
          </a>
        ))}

        <span className="w-px h-3.5 bg-white/[0.07]" />

        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[11px] tracking-[0.08em] text-[#c8a96e] hover:text-[#e8d5b0] no-underline transition-colors duration-200"
        >
          {profile.email} →
        </a>
      </div>
    </footer>
  );
}
