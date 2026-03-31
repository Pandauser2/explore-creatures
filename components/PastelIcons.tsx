import type { ReactNode } from "react";

const tones = {
  lavender: "bg-[#DDD6FE]",
  coral: "bg-[#FECDD3]",
  mint: "bg-[#A7F3D0]"
} as const;

export type PastelTone = keyof typeof tones;

export function IconCircle64({
  tone,
  children,
  className = ""
}: {
  tone: PastelTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-slate-700 ${tones[tone]} ${className}`}
      aria-hidden
    >
      {children}
    </span>
  );
}

const iconClass = "h-7 w-7";

export function SvgPlane() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    </svg>
  );
}

export function SvgDocument() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function SvgTruck() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M1 7h12v10H1V7Zm12 2h4l3 3v5h-7V9Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="18" r="2" fill="currentColor" />
      <circle cx="17.5" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

export function SvgCheck() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SvgGlobe() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SvgPaw() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <ellipse cx="9" cy="8" rx="2.2" ry="2.8" />
      <ellipse cx="15" cy="8" rx="2.2" ry="2.8" />
      <ellipse cx="6.5" cy="12" rx="2" ry="2.5" />
      <ellipse cx="17.5" cy="12" rx="2" ry="2.5" />
      <ellipse cx="12" cy="15.5" rx="4.2" ry="3.5" />
    </svg>
  );
}

export function SvgDog() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="14" rx="6" ry="5" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="9" r="4.5" fill="currentColor" opacity="0.85" />
      <path d="M8 6 6 3M16 6l2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="8.5" r="0.9" fill="#fff" />
      <circle cx="14" cy="8.5" r="0.9" fill="#fff" />
    </svg>
  );
}

export function SvgCat() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 5 6 2M16 5l2-3M6.5 14a5.5 5 0 1 1 11 0v2h-11v-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 11h.01M15 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
