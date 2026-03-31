import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

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
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
