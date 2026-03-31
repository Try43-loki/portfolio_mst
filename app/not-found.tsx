import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a08] flex flex-col items-center justify-center px-6 text-center">
      {/* Grain overlay matches globals.css */}
      <div className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 404 number */}
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#c8a96e] mb-6 animate-fade-up">
        404 · Page not found
      </p>

      {/* Headline */}
      <h1
        className="font-serif font-bold text-[#f0ede6] leading-tight mb-4 animate-fade-up-1"
        style={{ fontSize: "clamp(40px, 7vw, 80px)", letterSpacing: "-2px" }}
      >
        Lost in the
        <br />
        <em className="italic text-[#c8a96e]">data.</em>
      </h1>

      <p className="font-mono text-[13px] text-[#7a7870] mb-10 max-w-xs leading-relaxed animate-fade-up-2">
        This page doesn&apos;t exist. Let&apos;s get you back to somewhere real.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 bg-[#c8a96e] text-[#0a0a08] font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-[#e8d5b0] transition-colors duration-200 no-underline animate-fade-up-3"
      >
        Back to portfolio
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>

      {/* Monogram watermark */}
      <span
        className="fixed bottom-8 right-10 font-serif font-bold text-[#c8a96e]/[0.06] select-none pointer-events-none"
        style={{ fontSize: "clamp(80px, 15vw, 160px)", letterSpacing: "-6px" }}
      >
        MST
      </span>
    </div>
  );
}
