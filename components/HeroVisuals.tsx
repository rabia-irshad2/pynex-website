'use client';

import Image from 'next/image';
export default function HeroVisuals() {
  return (
    <div className="hero-photo-layer" aria-hidden="true">
      <Image
        src="/images/hero/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-photo"
      />
    </div>
  );
}
