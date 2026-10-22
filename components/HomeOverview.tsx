//components/HomeOverview.tsx
'use client';

import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Box } from 'lucide-react'; // Added Box icon

type ClientLogo = { name: string; src: string };
const CLIENT_LOGOS: ClientLogo[] = [];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function HomeOverview() {
  const [imageFailed, setImageFailed] = useState(false);
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>();
  const cta = useReveal<HTMLDivElement>();
  const visual = useReveal<HTMLDivElement>();
  const proof = useReveal<HTMLDivElement>();

  return (
    <section className="et-overview" aria-labelledby="et-overview-title">
      <div className="et-overview-inner">
        <p
          ref={label.ref}
          className={`et-section-label ${label.shown ? 'is-in' : ''}`}
        >
          <span className="et-section-dot" aria-hidden="true" />
          Overview
        </p>

        <div className="et-overview-grid">
          <div className="et-overview-copy">
            <h2
              ref={title.ref}
              id="et-overview-title"
              className={`et-overview-title ${title.shown ? 'is-in' : ''}`}
            >
              <span className="et-overview-title-mask">
                <span className="et-overview-title-line">Powering your</span>
              </span>
              <span className="et-overview-title-mask">
                <span className="et-overview-title-line">next innovation</span>
              </span>
            </h2>

            <div
              ref={cta.ref}
              className={`et-overview-cta-wrap ${cta.shown ? 'is-in' : ''}`}
            >
              <AnimatedButton href="/contact" className="et-overview-cta">
                Book a Call <ArrowUpRight size={16} aria-hidden="true" />
              </AnimatedButton>
            </div>

            {/* MOVED PROOF STRIP HERE */}
            <div
              ref={proof.ref}
              className={`et-overview-proof ${proof.shown ? 'is-in' : ''}`}
            >
              <Box size={28} className="et-overview-proof-icon" />
              <div className="et-overview-proof-text">
                <strong>We've executed 150+ successful</strong>
                <span>implementations.</span>
              </div>
            </div>
          </div>

          <div
            ref={visual.ref}
            className={`et-overview-visual ${visual.shown ? 'is-in' : ''}`}
          >
            <div className="et-overview-visual-frame">
              {imageFailed ? (
                <OverviewPlaceholder />
              ) : (
                <Image
                  src="/images/overview/overview.jpg"
                  alt="PYNEX team building software in the Islamabad office"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="et-overview-image"
                  priority
                  onError={() => setImageFailed(true)}
                />
              )}
              <span className="et-overview-visual-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewPlaceholder() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="et-overview-placeholder"
      aria-label="Illustration of a PYNEX workspace"
      role="img"
    >
      <defs>
        <radialGradient id="ov-bg" cx="30%" cy="20%">
          <stop offset="0%" stopColor="#0e1626" />
          <stop offset="100%" stopColor="#05080f" />
        </radialGradient>
        <linearGradient id="ov-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2a44" />
          <stop offset="100%" stopColor="#0a1220" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#ov-bg)" />
      <rect x="180" y="180" width="360" height="230" rx="12" fill="url(#ov-screen)" stroke="#1e3a5f" strokeWidth="2" />
      <rect x="340" y="410" width="40" height="60" fill="#0a1220" />
      <rect x="300" y="470" width="120" height="10" rx="4" fill="#0a1220" />
      <text x="400" y="560" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#4fa9ff" opacity="0.7" letterSpacing="3">
        PYNEX ENGINEERING
      </text>
    </svg>
  );
}