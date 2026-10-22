//components/Hero.tsx
import {
  NodeIcon, CodeIcon, JsIcon, AndroidIcon, ReactIcon,
  GlobeIcon, CoilIcon, SafariIcon, AppleIcon,
} from '@/components/HeroIcons3D';

type HeroIconDef = {
  id: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  left: string;
  top: string;
  size: number;
  rotate: number;
  delay: number;
};

const HERO_ICONS: HeroIconDef[] = [
  // ── Left arc ──
  { id: 'node',    Icon: NodeIcon,    left: '6%',  top: '50%', size: 160, rotate: -12, delay: 0    },
  { id: 'code',    Icon: CodeIcon,    left: '16%', top: '68%', size: 130, rotate: 6,   delay: 0.08 },
  { id: 'js',      Icon: JsIcon,      left: '22%', top: '86%', size: 140, rotate: -4,  delay: 0.16 },

  // ── Bottom row ──
  { id: 'android', Icon: AndroidIcon, left: '38%', top: '96%', size: 116, rotate: 0,   delay: 0.24 },
  { id: 'react',   Icon: ReactIcon,   left: '52%', top: '94%', size: 124, rotate: 0,   delay: 0.32 },
  { id: 'globe',   Icon: GlobeIcon,   left: '63%', top: '90%', size: 110, rotate: 0,   delay: 0.4  },

  // ── Right arc ──
  { id: 'coil',    Icon: CoilIcon,    left: '76%', top: '78%', size: 150, rotate: 8,   delay: 0.48 },
  { id: 'safari',  Icon: SafariIcon,  left: '86%', top: '60%', size: 125, rotate: -6,  delay: 0.56 },
  { id: 'apple',   Icon: AppleIcon,   left: '92%', top: '40%', size: 140, rotate: 12,  delay: 0.64 },
];

export default function Hero() {
  return (
    <section className="et-hero" aria-labelledby="et-hero-title">
      <ul className="et-hero-icons" aria-hidden="true">
        {HERO_ICONS.map(({ id, Icon, left, top, size, rotate, delay }, i) => (
          <li
            key={id}
            className="et-hero-icon"
            style={
              {
                left,
                top,
                width: size,
                height: size,
                '--rot': `${rotate}deg`,
                '--i': i,
                '--d': `${delay}s`,
              } as React.CSSProperties
            }
          >
            <Icon width={size} height={size} />
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