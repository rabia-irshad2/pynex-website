//components/HeroIcons3D.tsx — 3D-look SVG icons (no external files needed)
// Each icon uses gradients + highlights to mimic Eastern Tech's 3D render pack.
// Swap for real PNG renders later if HR provides them.

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/* ── Node.js — green sphere with hexagon ── */
export function NodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <radialGradient id="nodeG" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#c7f57e" />
          <stop offset="55%" stopColor="#7ec83f" />
          <stop offset="100%" stopColor="#3f7a1b" />
        </radialGradient>
        <radialGradient id="nodeHi" cx="35%" cy="25%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="56" fill="url(#nodeG)" />
      <circle cx="46" cy="46" r="30" fill="url(#nodeHi)" />
      <path
        d="M64 34 40 48v28l24 14 24-14V48L64 34zm0 8 18 10v20L64 82 46 72V52l18-10z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
    </svg>
  );
}

/* ── Code brackets </> — blue ── */
export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="codeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5fd4ff" />
          <stop offset="100%" stopColor="#0090d4" />
        </linearGradient>
        <linearGradient id="codeHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="112" height="112" rx="24" fill="url(#codeG)" />
      <rect x="8" y="8" width="112" height="56" rx="24" fill="url(#codeHi)" />
      <path
        d="M48 44 28 64l20 20M80 44l20 20-20 20M70 36 58 92"
        fill="none"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── JavaScript — yellow tile ── */
export function JsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="jsG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe94d" />
          <stop offset="100%" stopColor="#e0b800" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="112" height="112" rx="20" fill="url(#jsG)" />
      <rect x="8" y="8" width="112" height="52" rx="20" fill="#ffffff" fillOpacity="0.2" />
      <text
        x="64"
        y="88"
        textAnchor="middle"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="54"
        fill="#1a1a1a"
        fontWeight="900"
      >
        JS
      </text>
    </svg>
  );
}

/* ── Android — green robot head ── */
export function AndroidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <radialGradient id="andG" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#c4f57e" />
          <stop offset="60%" stopColor="#8bc34a" />
          <stop offset="100%" stopColor="#558b2f" />
        </radialGradient>
      </defs>
      <path
        d="M24 60c0-22 18-40 40-40s40 18 40 40v20c0 4-3 8-8 8H32c-5 0-8-4-8-8V60z"
        fill="url(#andG)"
      />
      <circle cx="46" cy="52" r="6" fill="#ffffff" />
      <circle cx="82" cy="52" r="6" fill="#ffffff" />
      <circle cx="46" cy="52" r="3" fill="#1a1a1a" />
      <circle cx="82" cy="52" r="3" fill="#1a1a1a" />
      <line x1="44" y1="24" x2="34" y2="12" stroke="#8bc34a" strokeWidth="6" strokeLinecap="round" />
      <line x1="84" y1="24" x2="94" y2="12" stroke="#8bc34a" strokeWidth="6" strokeLinecap="round" />
      <rect x="52" y="96" width="24" height="10" rx="4" fill="#8bc34a" />
    </svg>
  );
}

/* ── React — atom ── */
export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <radialGradient id="reactBg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#0b1f44" />
          <stop offset="100%" stopColor="#05080f" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="56" fill="url(#reactBg)" />
      <g fill="none" stroke="#61dafb" strokeWidth="4">
        <ellipse cx="64" cy="64" rx="52" ry="20" />
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(-60 64 64)" />
      </g>
      <circle cx="64" cy="64" r="9" fill="#61dafb" />
    </svg>
  );
}

/* ── Globe — blue earth ── */
export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <radialGradient id="globeG" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#7ec8f5" />
          <stop offset="55%" stopColor="#3b8fd4" />
          <stop offset="100%" stopColor="#0b3d70" />
        </radialGradient>
        <radialGradient id="globeHi" cx="30%" cy="25%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="56" fill="url(#globeG)" />
      <circle cx="46" cy="42" r="28" fill="url(#globeHi)" />
      <path
        d="M24 48c12 6 24 2 36-2s24-6 36 0M28 78c14 6 26 4 40-1s24-4 32 1M56 20c-4 14-6 26-6 44s2 30 8 44M84 22c4 14 4 26 2 42s-6 30-14 42"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Purple coil — 3D torus ── */
export function CoilIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="coilG1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c77dff" />
          <stop offset="50%" stopColor="#7b2ff7" />
          <stop offset="100%" stopColor="#5a1eb8" />
        </linearGradient>
        <linearGradient id="coilG2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M64 12c22 0 40 18 40 40 0 14-8 24-18 30 8 8 12 18 12 26 0 6-4 8-10 6-12-6-24-14-32-24-6 4-14 6-22 6-22 0-40-18-40-40s18-44 40-44z"
        fill="url(#coilG1)"
      />
      <path
        d="M44 32c14-4 28 2 34 14M76 60c8 6 14 16 14 26"
        fill="none"
        stroke="url(#coilG2)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="34" rx="12" ry="6" fill="#ffffff" fillOpacity="0.35" />
    </svg>
  );
}

/* ── Safari — compass ── */
export function SafariIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="safG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5fd4ff" />
          <stop offset="100%" stopColor="#0a6bc4" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="112" height="112" rx="26" fill="url(#safG)" />
      <rect x="8" y="8" width="112" height="56" rx="26" fill="#ffffff" fillOpacity="0.18" />
      <circle cx="64" cy="64" r="34" fill="none" stroke="#ffffff" strokeWidth="3" />
      <path
        d="M84 44 60 60 44 84l24-16 16-24z"
        fill="#ff4b4b"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Apple — chrome silver ── */
export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="appG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="50%" stopColor="#b0b0b0" />
          <stop offset="100%" stopColor="#6a6a6a" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="112" height="112" rx="24" fill="url(#appG)" />
      <rect x="8" y="8" width="112" height="52" rx="24" fill="#ffffff" fillOpacity="0.4" />
      <path
        d="M85 66c0-9 7-13 7-13-4-6-10-7-12-7-5-1-10 3-12 3-3 0-7-3-11-3-6 0-11 3-14 8-6 10-2 26 4 34 3 4 6 8 10 8 4 0 5-2 10-2s6 3 10 2c4-1 7-4 10-8 3-4 4-8 4-8-1 0-6-2-6-14zm-8-24c2-2 3-6 3-9-3 0-6 2-8 4-2 2-4 5-4 9 3 0 6-2 9-4z"
        fill="#1a1a1a"
      />
    </svg>
  );
}