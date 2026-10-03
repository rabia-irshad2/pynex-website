//app/components/HeroVisuals.tsx
'use client';

import Image from 'next/image';

export default function HeroVisuals() {
  return (
    <div className="hero-photo-wrap">
      <div className="hero-photo-container">
        <Image
          src="/images/hero/hero.jpg"
          alt="Team collaborating in a modern workspace"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="hero-photo"
        />
      </div>
    </div>
  );
}