"use client";

import { useState } from "react";
import { formspreeId } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10">
        <div className="w-12 h-12 border border-[#c8a96e]/40 rounded-sm flex items-center justify-center text-[#c8a96e]">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path d="M2 8l4 4 8-8" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-serif text-[20px] font-bold text-[#f0ede6] mb-1">
            Message sent!
          </p>
          <p className="font-mono text-[12px] text-[#7a7870]">
            I&apos;ll get back to you soon.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-[10px] tracking-widest uppercase text-[#7a7870] hover:text-[#c8a96e] transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#0a0a08] border border-white/[0.07] rounded-sm px-4 py-3 font-mono text-[13px] text-[#f0ede6] placeholder:text-[#7a7870]/40 focus:outline-none focus:border-[#c8a96e]/50 transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] tracking-widest uppercase text-[#7a7870]">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] tracking-widest uppercase text-[#7a7870]">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-widest uppercase text-[#7a7870]">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-[11px] text-red-400/80">
          Something went wrong. Try emailing directly instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2.5 bg-[#c8a96e] text-[#0a0a08] font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-[#e8d5b0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 mt-1"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
