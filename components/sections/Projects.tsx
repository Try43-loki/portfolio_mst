import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          04 / Projects
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group border border-white/[0.07] rounded-sm bg-[#111110] p-8 hover:bg-[#1a1a18] hover:border-[#c8a96e]/20 transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <span
                  className="text-3xl leading-none"
                  role="img"
                  aria-label={project.name}
                >
                  {project.emoji}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-0.5">
                    <h3 className="font-serif text-[22px] font-bold text-[#f0ede6] leading-tight">
                      {project.name}
                    </h3>
                    {project.highlight && (
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/30 px-2.5 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#c8a96e]/80">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <span className="font-mono text-[10px] tracking-widest uppercase text-white/20 group-hover:text-[#c8a96e] transition-colors mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.8] text-[#7a7870] font-light mb-6 max-w-3xl">
              {project.description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[9px] tracking-[0.08em] uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/20 px-2.5 py-1 rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Role */}
            <div className="flex items-start gap-3 pt-4 border-t border-white/[0.07]">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#7a7870]/50 shrink-0 pt-0.5">
                Role
              </span>
              <span className="font-mono text-[10px] tracking-[0.06em] text-[#7a7870]">
                {project.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
