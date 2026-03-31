import { profile, social } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/[0.07]">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a7870]">
          05 / Contact
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left — headline + contact links */}
        <div className="flex flex-col gap-8">
          <h2
            className="font-serif font-bold text-[#f0ede6] leading-tight"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Let&apos;s work
            <br />
            <em className="italic text-[#c8a96e]">together.</em>
          </h2>

          <p className="text-[15px] leading-[1.8] text-[#7a7870] font-light max-w-sm">
            I&apos;m currently open to frontend developer opportunities. Whether
            it&apos;s a full-time role, freelance project, or just a conversation
            about tech — feel free to reach out.
          </p>

          <div className="flex flex-col gap-3">
            <ContactRow
              href={`mailto:${profile.email}`}
              icon={<MailIcon />}
              label={profile.email}
            />
            <ContactRow
              href={`tel:${profile.phone}`}
              icon={<PhoneIcon />}
              label={profile.phone}
            />
            <div className="flex items-center gap-3 font-mono text-[12px] text-[#7a7870]">
              <span className="w-8 h-8 border border-white/[0.07] rounded-sm flex items-center justify-center shrink-0">
                <PinIcon />
              </span>
              {profile.location}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 pt-1">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase text-[#7a7870] hover:text-[#c8a96e] transition-colors no-underline"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <div className="border border-white/[0.07] rounded-sm bg-[#111110] p-8 flex flex-col gap-6">
          {/* Available badge */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400">
              Available for opportunities
            </span>
          </div>

          <div className="border-t border-white/[0.07]" />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 font-mono text-[12px] text-[#7a7870] hover:text-[#c8a96e] transition-colors no-underline group"
    >
      <span className="w-8 h-8 border border-white/[0.07] rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#c8a96e]/40 group-hover:bg-[#c8a96e]/[0.06] transition-all duration-200">
        {icon}
      </span>
      {label}
    </a>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-3.5 h-3.5"
    >
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1 5l7 5 7-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-3.5 h-3.5"
    >
      <path d="M3 1h4l2 4-2.5 1.5a8 8 0 004 4L12 8l4 2v4a1 1 0 01-1 1C6.163 15 1 9.837 1 3a1 1 0 011-1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className="w-3.5 h-3.5"
    >
      <path d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z" />
      <circle cx="8" cy="6" r="1.5" />
    </svg>
  );
}
