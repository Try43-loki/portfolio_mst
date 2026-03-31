"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const hero = project.images[0];
  const count = project.images.length;

  return (
    <div className="group border border-white/[0.07] rounded-sm bg-[#111110] hover:border-[#c8a96e]/20 transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">

        {/* ── Hero image ── */}
        <div
          className="relative border-b lg:border-b-0 lg:border-r border-white/[0.07] bg-[#0d0d0b] aspect-video overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={hero.src}
            alt={`${project.name} — ${hero.label}`}
            fill
            className="object-contain transition-all duration-500 group-hover:brightness-110"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={index === 0}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0a0a08]/0 group-hover:bg-[#0a0a08]/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/40 backdrop-blur-sm flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" stroke="#c8a96e" strokeWidth="1.5" className="w-4 h-4">
                  <circle cx="10" cy="10" r="3" />
                  <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41" />
                </svg>
              </div>
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#c8a96e]">
                View Gallery
              </span>
            </div>
          </div>

          {/* Image count badge */}
          <div className="absolute top-3 right-3 font-mono text-[9px] tracking-widest text-[#7a7870] bg-[#0a0a08]/80 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-white/[0.07]">
            {count} imgs
          </div>

          {/* Label */}
          <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] bg-[#0a0a08]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#c8a96e]/20">
            {hero.label}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="p-7 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="font-serif text-[22px] font-bold text-[#f0ede6] leading-tight">
                  {project.name}
                </h3>
                {project.highlight && (
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/30 px-2 py-0.5 rounded-full shrink-0">
                    Featured
                  </span>
                )}
              </div>
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#c8a96e]/80">
                {project.subtitle}
              </p>
            </div>
            <span className="font-mono text-[10px] text-white/20 group-hover:text-[#c8a96e] transition-colors shrink-0 mt-0.5">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-[1.8] text-[#7a7870] font-light">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[9px] tracking-[0.08em] uppercase text-[#c8a96e] bg-[#c8a96e]/[0.08] border border-[#c8a96e]/20 px-2 py-0.5 rounded-sm"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Role + View Details */}
          <div className="flex items-center justify-between gap-3 pt-4 mt-auto border-t border-white/[0.07]">
            <div className="flex items-start gap-2.5 min-w-0">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#7a7870]/50 shrink-0 pt-0.5">
                Role
              </span>
              <span className="font-mono text-[10px] tracking-[0.06em] text-[#7a7870] leading-relaxed truncate">
                {project.role}
              </span>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-3.5 py-1.5 rounded-sm hover:bg-[#c8a96e]/[0.08] hover:border-[#c8a96e]/60 transition-all duration-200"
            >
              Details
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-2.5 h-2.5">
                <path d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {modalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
