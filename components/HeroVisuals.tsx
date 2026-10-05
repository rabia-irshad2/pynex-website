//app/components/HeroVisuals.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroVisuals() {
  const shellRef = useRef<HTMLDivElement>(null);

  // Cursor-reactive glow: tracks pointer position within the hero and feeds it
  // into CSS custom properties consumed by the ::before radial gradient.
  useEffect(() => {
    const shell = shellRef.current?.closest<HTMLElement>('.hero-shell');
    if (!shell) return;
    const onMove = (e: MouseEvent) => {
      const rect = shell.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      shell.style.setProperty('--spot-x', `${px}%`);
      shell.style.setProperty('--spot-y', `${py}%`);
    };
    shell.addEventListener('mousemove', onMove);
    return () => shell.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="hero-photo-wrap" ref={shellRef}>
      <div className="hero-photo-container">
        <Image
          src="/images/hero/hero.jpg"
          alt="Team collaborating in a modern workspace"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="hero-photo"
        />
        <div className="hero-photo-spotlight" aria-hidden="true" />
      </div>
    </div>
  );
}