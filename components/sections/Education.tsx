import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          02 / Education
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="flex flex-col gap-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group border border-white/[0.07] rounded-sm bg-[#111110] p-7 hover:bg-[#1a1a18] hover:border-[#c8a96e]/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-6 mb-2">
              <h3 className="font-serif text-[20px] font-bold text-[#f0ede6] leading-snug">
                {edu.degree}
              </h3>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#c8a96e] shrink-0 mt-0.5">
                {edu.period}
              </span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#7a7870] mb-3">
              {edu.institution}
            </p>

            <p className="text-[13px] leading-relaxed text-[#7a7870]/80 font-light">
              {edu.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
