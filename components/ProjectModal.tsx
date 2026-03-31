"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mount portal
  useEffect(() => setMounted(true), []);

  // Entrance animation
  useEffect(() => {
    if (!mounted) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Keyboard: Esc + arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const prev = () => setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setActiveImg((i) => (i + 1) % project.images.length);

  if (!mounted) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.28s ease",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#111110] border border-white/[0.07] rounded-sm flex flex-col"
        style={{
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-8 h-8 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#7a7870] hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-200 bg-[#111110]"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">

          {/* ── Carousel side ── */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.07]">
            {/* Main image */}
            <div className="relative aspect-video bg-[#0d0d0b] overflow-hidden group/img">
              {project.images.map((img, i) => (
                <div
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ opacity: i === activeImg ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={`${project.name} — ${img.label}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              ))}

              {/* Prev arrow */}
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0a0a08]/80 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#7a7870] hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all backdrop-blur-sm"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <path d="M10 3L6 8l4 5" />
                </svg>
              </button>

              {/* Next arrow */}
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0a0a08]/80 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#7a7870] hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all backdrop-blur-sm"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <path d="M6 3l4 5-4 5" />
                </svg>
              </button>

              {/* Label badge */}
              <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] bg-[#0a0a08]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#c8a96e]/20 pointer-events-none">
                {project.images[activeImg].label}
              </div>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.05]">
              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className="transition-all duration-200"
                    style={{
                      width: i === activeImg ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: i === activeImg ? "#c8a96e" : "rgba(200,169,110,0.25)",
                    }}
                  />
                ))}
              </div>

              {/* Counter + keyboard hint */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-widest text-[#7a7870]/40 hidden sm:block">
                  ← → to navigate
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#7a7870] bg-[#0a0a08]/60 px-2 py-0.5 rounded-sm border border-white/[0.07]">
                  {activeImg + 1} / {project.images.length}
                </span>
              </div>
            </div>
          </div>

          {/* ── Content side ── */}
          <div className="p-7 flex flex-col gap-5 overflow-y-auto">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h2 className="font-serif text-[26px] font-bold text-[#f0ede6] leading-tight">
                  {project.name}
                </h2>
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

            <div className="h-px bg-white/[0.07]" />

            {/* Overview */}
            <p className="text-[14px] leading-[1.85] text-[#7a7870] font-light">
              {project.details.overview}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#c8a96e]">
                Key Highlights
              </span>
              <ul className="flex flex-col gap-2">
                {project.details.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#c8a96e] mt-[7px] shrink-0" />
                    <span className="text-[13px] leading-relaxed text-[#7a7870] font-light">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#c8a96e]">
                Tech Stack
              </span>
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
            </div>

            {/* Role */}
            <div className="flex items-start gap-2.5 pt-4 border-t border-white/[0.07]">
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#7a7870]/50 shrink-0 pt-0.5">
                Role
              </span>
              <span className="font-mono text-[10px] tracking-[0.06em] text-[#7a7870] leading-relaxed">
                {project.role}
              </span>
            </div>

            {/* Links */}
            {(project.details.github || project.details.demo) && (
              <div className="flex gap-3 pt-2 mt-auto">
                {project.details.github && (
                  <a
                    href={project.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#0a0a08] bg-[#c8a96e] px-5 py-2.5 rounded-sm hover:bg-[#e8d5b0] transition-colors no-underline"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.details.demo && (
                  <a
                    href={project.details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#c8a96e] border border-[#c8a96e]/40 px-5 py-2.5 rounded-sm hover:bg-[#c8a96e]/[0.08] transition-colors no-underline"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
