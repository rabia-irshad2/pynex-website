//components/HeroVisuals.tsx
'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroVisuals() {
  const shellRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const shell = shellRef.current?.closest<HTMLElement>('.hero-shell');
    if (!shell || reduceMotion) return;

    const onMove = (e: MouseEvent) => {
      const rect = shell.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      shell.style.setProperty('--spot-x', `${px}%`);
      shell.style.setProperty('--spot-y', `${py}%`);
    };

    shell.addEventListener('mousemove', onMove);
    return () => shell.removeEventListener('mousemove', onMove);
  }, [reduceMotion]);

  return (
    <div className="hero-photo-wrap" ref={shellRef}>
      <div className="hero-photo-container">
        <Image
          src="/images/hero/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-photo-spotlight" aria-hidden="true" />
      </div>
    </div>
  );
}