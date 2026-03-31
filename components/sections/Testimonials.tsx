import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          Testimonials
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      {testimonials.length === 1 ? (
        <SingleTestimonial t={testimonials[0]} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ── Single prominent layout ──────────────────────────────────────────── */
function SingleTestimonial({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Decorative quote mark */}
      <span
        className="absolute -top-6 -left-4 font-serif font-bold text-[#c8a96e] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(80px, 12vw, 120px)", opacity: 0.12 }}
        aria-hidden="true"
      >
        "
      </span>

      <blockquote className="relative z-10 flex flex-col gap-8">
        <p
          className="font-serif italic text-[#f0ede6]/90 leading-relaxed"
          style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>

        <div className="flex items-center gap-4">
          <Initial name={t.name} />
          <div>
            <p className="font-serif text-[16px] font-bold text-[#f0ede6]">
              {t.name}
            </p>
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#c8a96e] mt-0.5">
              {t.title}
            </p>
            <p className="font-mono text-[10px] tracking-[0.08em] text-[#7a7870] mt-0.5">
              {t.institution}
            </p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}

/* ── Card layout for 2+ testimonials ─────────────────────────────────── */
function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="group relative border border-white/[0.07] rounded-sm bg-[#111110] p-8 flex flex-col gap-6 hover:bg-[#1a1a18] hover:border-[#c8a96e]/20 transition-all duration-300 overflow-hidden">
      {/* Background quote watermark */}
      <span
        className="absolute -top-4 -right-2 font-serif font-bold text-[#c8a96e] select-none pointer-events-none leading-none"
        style={{ fontSize: "100px", opacity: 0.05 }}
        aria-hidden="true"
      >
        "
      </span>

      <blockquote className="relative z-10 flex flex-col gap-6 h-full">
        <p className="text-[14px] leading-[1.85] text-[#f0ede6]/75 font-light flex-1">
          &ldquo;{t.quote}&rdquo;
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
          <Initial name={t.name} small />
          <div>
            <p className="font-serif text-[15px] font-bold text-[#f0ede6]">
              {t.name}
            </p>
            <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#c8a96e] mt-0.5">
              {t.title}
            </p>
            <p className="font-mono text-[9px] tracking-[0.06em] text-[#7a7870] mt-0.5">
              {t.institution}
            </p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}

/* ── Initial avatar ────────────────────────────────────────────────────── */
function Initial({
  name,
  small = false,
}: {
  name: string;
  small?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const size = small ? "w-9 h-9 text-[12px]" : "w-12 h-12 text-[15px]";

  return (
    <div
      className={`${size} shrink-0 rounded-sm border border-[#c8a96e]/30 bg-[#c8a96e]/[0.07] flex items-center justify-center font-serif font-bold text-[#c8a96e]`}
    >
      {initials}
    </div>
  );
}
