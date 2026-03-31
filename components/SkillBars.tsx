"use client";

import { useEffect, useRef, useState } from "react";
import { skillProficiency } from "@/lib/data";

const CATEGORY_ORDER = ["Frontend", "Data", "Backend"];

const grouped = CATEGORY_ORDER.map((cat) => ({
  category: cat,
  skills: skillProficiency.filter((s) => s.category === cat),
}));

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="pt-12 mt-2 border-t border-white/[0.07]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#c8a96e]">
          Proficiency
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        {grouped.map(({ category, skills }) => (
          <div key={category} className="flex flex-col gap-5">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7a7870]/50">
              {category}
            </span>

            {skills.map((skill, i) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#f0ede6]/80">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#c8a96e]">
                    {skill.level}%
                  </span>
                </div>
                {/* Track */}
                <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c8a96e] rounded-full"
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                      transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
