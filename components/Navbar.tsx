"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, profile, social } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // ── Smart hide ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 10) {
        setVisible(true);
      } else if (y > lastY.current + 8) {
        setVisible(false);
        setMenuOpen(false);
      } else if (y < lastY.current - 8) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracking ────────────────────────────────────────────────
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full",
        scrolled || menuOpen
          ? "bg-[#0a0a08]/90 backdrop-blur-md border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between py-6 md:py-7">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-[#f0ede6] no-underline"
        >
          MEY{" "}
          <span className="italic text-[#c8a96e]">Soytry</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c8a96e] ml-0.5 align-super" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/[0.07] text-[#7a7870] hover:text-[#c8a96e] hover:border-[#c8a96e]/40 hover:bg-[#c8a96e]/[0.06] transition-all duration-200"
              >
                {s.label === "GitHub" ? <GitHubIcon />
                : s.label === "LinkedIn" ? <LinkedInIcon />
                : s.label === "Telegram" ? <TelegramIcon />
                : <FacebookIcon />}
              </a>
            ))}
          </div>

          <span className="w-px h-4 bg-white/[0.07]" />

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <span key={link.href} className="flex items-center">
                  {i > 0 && <span className="w-px h-3.5 bg-white/[0.07] mx-1" />}
                  <Link
                    href={link.href}
                    className={[
                      "font-mono text-[11px] tracking-widest uppercase no-underline px-3 py-2 rounded-sm transition-all duration-200",
                      isActive
                        ? "text-[#c8a96e] bg-[#c8a96e]/[0.06]"
                        : "text-[#7a7870] hover:text-[#c8a96e] hover:bg-[#c8a96e]/[0.06]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </span>
              );
            })}
          </nav>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-5 bg-[#f0ede6] transition-all duration-200 origin-center"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="block h-px w-5 bg-[#f0ede6] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-5 bg-[#f0ede6] transition-all duration-200 origin-center"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-4 sm:px-8 pb-6 pt-2 border-t border-white/[0.07]">
          <nav className="flex flex-col mb-5">
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "font-mono text-[11px] tracking-widest uppercase no-underline px-2 py-3 border-b border-white/[0.05] transition-colors duration-200",
                    isActive ? "text-[#c8a96e]" : "text-[#7a7870]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase text-[#7a7870] hover:text-[#c8a96e] transition-colors no-underline flex items-center gap-1.5"
              >
                {s.label === "GitHub" ? <GitHubIcon />
                  : s.label === "LinkedIn" ? <LinkedInIcon />
                  : s.label === "Telegram" ? <TelegramIcon />
                  : <FacebookIcon />}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>
  );
}
