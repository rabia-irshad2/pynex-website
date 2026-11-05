//components/Hero.tsx
'use client';

import Image from 'next/image';

type HeroIconDef = {
  id: string;
  src: string;
  left: string;
  top: string;
  size: number;
  mobileSize: number; // Added mobile size
  rotate: number;
  delay: number;
  clickEffect?: 'spin' | 'wiggle' | 'pulse' | 'flip' | 'tumble' | 'swing';
};

const HERO_ICONS: HeroIconDef[] = [
  // ── Left arc ──
  { id: 'code',    src: '/images/hero/code.svg',    left: '8%',  top: '45%', size: 120, mobileSize: 60, rotate: -12, delay: 0,    clickEffect: 'pulse' },
  { id: 'js',      src: '/images/hero/js.svg',      left: '15%', top: '68%', size: 130, mobileSize: 70, rotate: 6,   delay: 0.08, clickEffect: 'wiggle' },
  
  // ── Bottom row (Moved up slightly so they don't hit the bottom) ──
  { id: 'android', src: '/images/hero/android.svg', left: '30%', top: '82%', size: 110, mobileSize: 55, rotate: -4,  delay: 0.16, clickEffect: 'swing' },
  { id: 'react',   src: '/images/hero/react.svg',   left: '50%', top: '85%', size: 110, mobileSize: 60, rotate: 0,   delay: 0.24, clickEffect: 'spin' },
  { id: 'earth',   src: '/images/hero/earth.svg',   left: '70%', top: '80%', size: 120, mobileSize: 60, rotate: 0,   delay: 0.32, clickEffect: 'flip' },
  
  // ── Right arc ──
  { id: 'ios',     src: '/images/hero/ios.svg',     left: '85%', top: '55%', size: 120, mobileSize: 65, rotate: 8,   delay: 0.48, clickEffect: 'flip' },
  { id: 'new1',    src: '/images/hero/icon2.svg',   left: '92%', top: '30%', size: 130, mobileSize: 70, rotate: 12,  delay: 0.56, clickEffect: 'tumble' },
];

export default function Hero() {
  return (
    <section className="et-hero" aria-labelledby="et-hero-title">
      <ul className="et-hero-icons" aria-hidden="true">
        {HERO_ICONS.map(({ id, src, left, top, size, mobileSize, rotate, delay, clickEffect }, i) => (
          <li
            key={id}
            className="et-hero-icon"
            style={
              {
                left,
                top,
                '--size': `${size}px`,
                '--mobile-size': `${mobileSize}px`,
                '--rot': `${rotate}deg`,
                '--i': i,
                '--d': `${delay}s`,
              } as React.CSSProperties
            }
          >
            {/* LAYER 1: Jump Animation */}
            <div className="et-hero-jump-wrapper">
              {/* LAYER 2: Spin/Effect Animation */}
              <div className={`et-hero-effect-wrapper ${clickEffect ? `effect-${clickEffect}` : ''}`}>
                <Image
                  src={src}
                  alt=""
                  width={size}
                  height={size}
                  draggable={false}
                  priority
                  className="et-hero-icon-img"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h1 id="et-hero-title" className="et-hero-title">
        <span className="et-hero-line">Built For</span>
        <span className="et-hero-line et-hero-accent">Smarter Business</span>
      </h1>
    </section>
  );
}