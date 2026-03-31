"use client";

import { useEffect, useState } from "react";

type Phase = "enter" | "hold" | "exit" | "done";

export default function Loader() {
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 1500);
    const t3 = setTimeout(() => setPhase("done"), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  const isExiting = phase === "exit";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] bg-[#0a0a08] flex flex-col items-center justify-center gap-3"
      style={{
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "translateY(-12px)" : "translateY(0)",
        transition: isExiting ? "opacity 0.55s ease, transform 0.55s ease" : "none",
        pointerEvents: isExiting ? "none" : "all",
      }}
    >
      {/* MS monogram */}
      <span
        className="font-serif font-bold text-[#c8a96e] leading-none"
        style={{
          fontSize: "clamp(56px, 8vw, 80px)",
          letterSpacing: "-4px",
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "scale(0.92)" : "scale(1)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}
      >
        MST
      </span>

      {/* Underline that draws out */}
      <div
        className="bg-[#c8a96e]"
        style={{
          height: "1px",
          width: phase === "enter" ? "0px" : "52px",
          opacity: 0.55,
          transition: "width 0.45s cubic-bezier(0.22,1,0.36,1) 0.5s",
        }}
      />
    </div>
  );
}
