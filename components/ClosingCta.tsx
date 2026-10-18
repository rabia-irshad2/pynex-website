//components/ClosingCta.tsx — self-contained, no external Rv dependency
'use client';

import { ArrowUpRight, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton';

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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function ClosingCta() {
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>();
  const actions = useReveal<HTMLDivElement>();

  return (
    <section className="et-closing" aria-labelledby="et-closing-title">
      <div className="et-closing-inner">
        <p
          ref={label.ref}
          className={`et-section-label et-section-label--center ${label.shown ? 'is-in' : ''}`}
        >
          <span className="et-section-dot" aria-hidden="true" />
          Start a project
        </p>

        <h2
          ref={title.ref}
          id="et-closing-title"
          className={`et-closing-title ${title.shown ? 'is-in' : ''}`}
        >
          <span className="et-closing-title-line">Let&apos;s build what</span>
          <span className="et-closing-title-line et-closing-title-accent">
            moves your numbers
          </span>
        </h2>

        <p
          ref={actions.ref}
          className={`et-closing-lede ${actions.shown ? 'is-in' : ''}`}
        >
          Tell us the problem. We&apos;ll reply within one business day.
        </p>

        <div
          ref={actions.ref}
          className={`et-closing-actions ${actions.shown ? 'is-in' : ''}`}
        >
          <AnimatedButton href="/contact">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></AnimatedButton>

          <a href="tel:+923141754779" className="et-closing-pill">
            <Phone size={14} aria-hidden="true" />
            Pakistan +92 314 1754779
          </a>

          <a href="tel:+971508124362" className="et-closing-pill">
            <Phone size={14} aria-hidden="true" />
            UAE +971 50 812 4362
          </a>
        </div>
      </div>
    </section>
  );
}
