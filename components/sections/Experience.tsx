import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          03 / Experience
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="relative flex flex-col">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-5 bottom-5 w-px bg-white/[0.07]" />

        {experience.map((exp, i) => (
          <div key={i} className="relative flex gap-8 pb-10 last:pb-0 group">
            {/* Step number */}
            <div className="relative z-10 w-10 h-10 shrink-0 border border-white/[0.07] bg-[#0a0a08] rounded-sm flex items-center justify-center group-hover:border-[#c8a96e]/40 group-hover:bg-[#111110] transition-all duration-300">
              <span className="font-mono text-[9px] tracking-widest text-[#c8a96e]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1.5 border border-white/[0.07] rounded-sm bg-[#111110] p-6 group-hover:bg-[#1a1a18] group-hover:border-[#c8a96e]/20 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-1.5">
                <h3 className="font-serif text-[20px] font-bold text-[#f0ede6] leading-snug">
                  {exp.title}
                </h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#c8a96e] shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#7a7870] mb-3">
                {exp.company}
              </p>

              <p className="text-[13px] leading-relaxed text-[#7a7870]/80 font-light">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
