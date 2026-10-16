//components/HomeServices.tsx — 3 flip cards with floating 3D icons
'use client';

import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Workflow, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Svc = {
  slug: string;
  frontmatter: { title: string; shortDescription?: string };
  introduction: string;
};

const SERVICE_DATA: Record<
  string,
  {
    icon: LucideIcon;
    Art: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    hue: number;
    label: string;
    features: string[];
  }
> = {
  'ai-solutions': {
    icon: BrainCircuit,
    Art: AIArt,
    hue: 275,
    label: 'AI Solutions',
    features: [
      'Custom AI assistants & chatbots',
      'Document & data analysis tools',
      'Prediction and recommendation engines',
      'LLM-powered workflow automation',
    ],
  },
  'business-automation': {
    icon: Workflow,
    Art: AutomationArt,
    hue: 212,
    label: 'Business Automation',
    features: [
      'Workflow mapping & optimization',
      'Integrations with existing tools',
      'Scheduled tasks & data syncs',
      'Real-time dashboards & alerts',
    ],
  },
  'custom-software': {
    icon: Code2,
    Art: SoftwareArt,
    hue: 190,
    label: 'Custom Software',
    features: [
      'Web apps, portals & internal tools',
      'Scalable, secure architecture',
      'API design and third-party integrations',
      'Ongoing support & iteration',
    ],
  },
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function HomeServices({ services }: { services: Svc[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>();

  const order = ['ai-solutions', 'business-automation', 'custom-software'];
  const ordered = order
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Svc => Boolean(s));

  if (!ordered.length) return null;

  return (
    <section className="et-services" id="services" aria-labelledby="et-services-title">
      <div className="et-services-inner">
        {/* Label — AI Solutions below */}
        <p ref={label.ref} className={`et-section-label et-section-label--center ${label.shown ? 'is-in' : ''}`}>
          <span className="et-section-dot" aria-hidden="true" />
          Services
        </p>

        {/* Headline — bigger */}
        <h2 ref={title.ref} id="et-services-title" className={`et-services-title ${title.shown ? 'is-in' : ''}`}>
          <span className="et-services-title-line">AI Solutions</span>
          <span className="et-services-title-line">Built for modern</span>
          <span className="et-services-title-line">businesses</span>
        </h2>

        {/* Flip cards grid */}
        <div className="et-services-grid">
          {ordered.map((svc, i) => {
            const data = SERVICE_DATA[svc.slug];
            if (!data) return null;
            const Icon = data.icon;
            const Art = data.Art;
            const isFlipped = flipped === svc.slug;

            return (
              <div
                key={svc.slug}
                className={`et-flip-card${isFlipped ? ' is-flipped' : ''}`}
                style={{ '--i': i, '--h': data.hue } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="et-flip-card-inner"
                  aria-pressed={isFlipped}
                  aria-label={`${data.label} — click to ${isFlipped ? 'hide' : 'show'} details`}
                  onClick={() => setFlipped(isFlipped ? null : svc.slug)}
                >
                  {/* FRONT */}
                  <div className="et-flip-face et-flip-front">
                    {/* Floating icon top-left */}
                    <span className="et-flip-icon" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.75} />
                    </span>

                    {/* Media art */}
                    <div className="et-flip-media" aria-hidden="true">
                      <Art className="et-flip-svg" />
                      <span className="et-flip-shade" />
                    </div>

                    {/* Body */}
                    <div className="et-flip-body">
                      <span className="et-flip-label">
                        <span className="et-flip-label-dot" />
                        Services · {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="et-flip-title">{data.label}</h3>
                      <span className="et-flip-hint">
                        Click to explore <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="et-flip-face et-flip-back">
                    <div className="et-flip-back-inner">
                      <span className="et-flip-back-label">What's included</span>
                      <h3 className="et-flip-back-title">{data.label}</h3>
                      <ul className="et-flip-back-list">
                        {data.features.map((f, j) => (
                          <li key={j} style={{ animationDelay: `${0.15 + j * 0.06}s` }}>
                            <span className="et-flip-bullet" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="et-flip-back-cta"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore service
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="et-services-footer">
          <Link href="/services" className="et-services-view-more">
            View More
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   3D SVG art — same as before
   ═══════════════════════════════════════════════ */

function AIArt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" {...props}>
      <defs>
        <radialGradient id="ai-bg" cx="30%" cy="20%">
          <stop offset="0%" stopColor="#2a1550" />
          <stop offset="60%" stopColor="#0e0620" />
          <stop offset="100%" stopColor="#05030f" />
        </radialGradient>
        <radialGradient id="ai-core" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#c7a0ff" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <radialGradient id="ai-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#c7a0ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c7a0ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#ai-bg)" />
      <circle cx="300" cy="380" r="220" fill="none" stroke="#a78bfa" strokeOpacity="0.15" strokeWidth="1.5" />
      <circle cx="300" cy="380" r="170" fill="none" stroke="#a78bfa" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 8" />
      <circle cx="300" cy="380" r="120" fill="none" stroke="#c4b5fd" strokeOpacity="0.35" strokeWidth="1.5" />
      <g stroke="#c4b5fd" strokeOpacity="0.5" strokeWidth="1.5">
        <line x1="300" y1="380" x2="120" y2="240" />
        <line x1="300" y1="380" x2="480" y2="240" />
        <line x1="300" y1="380" x2="120" y2="520" />
        <line x1="300" y1="380" x2="480" y2="520" />
      </g>
      <circle cx="120" cy="240" r="14" fill="#a78bfa" opacity="0.7" />
      <circle cx="480" cy="240" r="14" fill="#a78bfa" opacity="0.7" />
      <circle cx="120" cy="520" r="14" fill="#a78bfa" opacity="0.7" />
      <circle cx="480" cy="520" r="14" fill="#a78bfa" opacity="0.7" />
      <circle cx="300" cy="380" r="90" fill="url(#ai-glow)" />
      <circle cx="300" cy="380" r="60" fill="url(#ai-core)" />
      <circle cx="280" cy="360" r="18" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  );
}

function AutomationArt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" {...props}>
      <defs>
        <radialGradient id="au-bg" cx="30%" cy="20%">
          <stop offset="0%" stopColor="#0a2a5c" />
          <stop offset="60%" stopColor="#041a3a" />
          <stop offset="100%" stopColor="#020a18" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#au-bg)" />
      <circle cx="140" cy="180" r="42" fill="#0ea5e9" opacity="0.9" />
      <circle cx="460" cy="180" r="42" fill="#0ea5e9" opacity="0.9" />
      <circle cx="300" cy="380" r="60" fill="#38bdf8" />
      <circle cx="300" cy="380" r="14" fill="#ffffff" fillOpacity="0.9" />
      <circle cx="140" cy="580" r="42" fill="#0ea5e9" opacity="0.9" />
      <circle cx="460" cy="580" r="42" fill="#0ea5e9" opacity="0.9" />
      <path d="M140 222 Q140 300 300 320" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M460 222 Q460 300 300 320" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M300 440 Q300 500 140 540" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M300 440 Q300 500 460 540" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8" />
    </svg>
  );
}

function SoftwareArt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" {...props}>
      <defs>
        <radialGradient id="sw-bg" cx="30%" cy="20%">
          <stop offset="0%" stopColor="#062a3a" />
          <stop offset="60%" stopColor="#021418" />
          <stop offset="100%" stopColor="#010809" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#sw-bg)" />
      <rect x="100" y="200" width="400" height="290" rx="16" fill="#0f2a3d" stroke="#0e7490" strokeWidth="2.5" />
      <circle cx="120" cy="217" r="5" fill="#ef4444" />
      <circle cx="138" cy="217" r="5" fill="#f59e0b" />
      <circle cx="156" cy="217" r="5" fill="#10b981" />
      <rect x="130" y="260" width="90" height="7" rx="3" fill="#22d3ee" />
      <rect x="130" y="280" width="140" height="7" rx="3" fill="#0ea5e9" opacity="0.7" />
      <rect x="130" y="300" width="70" height="7" rx="3" fill="#38bdf8" opacity="0.55" />
      <rect x="130" y="320" width="180" height="7" rx="3" fill="#22d3ee" opacity="0.9" />
      <rect x="150" y="340" width="120" height="7" rx="3" fill="#0ea5e9" opacity="0.7" />
      <rect x="280" y="490" width="40" height="50" fill="#0a1e2a" />
      <rect x="240" y="540" width="120" height="14" rx="6" fill="#0a1e2a" />
    </svg>
  );
}