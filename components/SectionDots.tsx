"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

const SECTIONS = navLinks.map((l) => l.href.replace("#", ""));

export default function SectionDots() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {SECTIONS.map((id) => {
        const label = navLinks.find((l) => l.href === `#${id}`)?.label ?? id;
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${label}`}
            title={label}
            className="group relative flex items-center justify-end gap-2"
          >
            {/* Tooltip label */}
            <span className="absolute right-6 font-mono text-[9px] tracking-widest uppercase text-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {label}
            </span>

            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? "8px" : "4px",
                height: isActive ? "8px" : "4px",
                background: isActive ? "#c8a96e" : "rgba(122,120,112,0.5)",
                boxShadow: isActive ? "0 0 8px rgba(200,169,110,0.5)" : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
