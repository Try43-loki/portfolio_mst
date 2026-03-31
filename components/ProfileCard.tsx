"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { profile, languages } from "@/lib/data";

export default function ProfileCard() {
  const [photoUrl, setPhotoUrl] = useState<string>("/profile.jpg");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhotoUrl(URL.createObjectURL(file));
  };

  return (
    <div className="border border-white/[0.07] rounded-sm overflow-hidden bg-[#111110]">
      {/* Photo area */}
      <div
        className="relative bg-[#1a1a18] cursor-pointer group"
        style={{ aspectRatio: "3/4" }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />

        {photoUrl ? (
          <Image
            src={photoUrl}
            alt="MEY Soytry"
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:bg-white/[0.03] transition-colors duration-200">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              className="w-16 h-16 opacity-[0.15] text-[#f0ede6]"
            >
              <circle cx="32" cy="22" r="12" />
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" />
            </svg>
            <p className="font-mono text-[9px] tracking-widest uppercase text-[#7a7870] opacity-60">
              Click to upload photo
            </p>
          </div>
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111110] to-transparent pointer-events-none" />
      </div>

      {/* Meta */}
      <div className="px-6 pb-6 pt-5">
        <h2 className="font-serif text-xl font-bold text-[#f0ede6] mb-1">
          {profile.name}
        </h2>
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#c8a96e] mb-4">
          {profile.role} · IT Student
        </p>

        <div className="flex flex-col gap-2 mb-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 font-mono text-[11px] text-[#7a7870] hover:text-[#c8a96e] transition-colors no-underline"
          >
            <MailIcon />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 font-mono text-[11px] text-[#7a7870] hover:text-[#c8a96e] transition-colors no-underline"
          >
            <PhoneIcon />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2 font-mono text-[11px] text-[#7a7870]">
            <PinIcon />
            {profile.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
          {languages.map((l) => (
            <span
              key={l.name}
              className="font-mono text-[9px] tracking-[0.1em] uppercase text-[#7a7870] border border-white/[0.07] px-2.5 py-1 rounded-full"
              title={l.level}
            >
              {l.flag} {l.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3 h-3 shrink-0">
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1 5l7 5 7-5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3 h-3 shrink-0">
      <path d="M3 1h4l2 4-2.5 1.5a8 8 0 004 4L12 8l4 2v4a1 1 0 01-1 1C6.163 15 1 9.837 1 3a1 1 0 011-1z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3 h-3 shrink-0">
      <path d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z" />
      <circle cx="8" cy="6" r="1.5" />
    </svg>
  );
}
