//components/Hero.tsx — Eastern Tech hero, bottom arc, icons below headline top
import {
  NodeIcon, CodeIcon, JsIcon, AndroidIcon, ReactIcon,
  GlobeIcon, CoilIcon, SafariIcon, AppleIcon,
} from '@/components/HeroIcons3D';

type HeroIconDef = {
  id: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  left: string;
  top: string;      // now 55%–92%, all BELOW the headline top
  size: number;
  rotate: number;
  delay: number;
};

const HERO_ICONS: HeroIconDef[] = [
  // ── Left arc (bottom half only) ──
  { id: 'node',    Icon: NodeIcon,    left: '5%',  top: '58%', size: 150, rotate: -12, delay: 0    },
  { id: 'code',    Icon: CodeIcon,    left: '13%', top: '76%', size: 122, rotate: 6,   delay: 0.08 },
  { id: 'js',      Icon: JsIcon,      left: '20%', top: '90%', size: 130, rotate: -4,  delay: 0.16 },

  // ── Bottom row (hugging the bottom of the headline) ──
  { id: 'android', Icon: AndroidIcon, left: '38%', top: '98%', size: 104, rotate: 0,   delay: 0.24 },
  { id: 'react',   Icon: ReactIcon,   left: '52%', top: '96%', size: 112, rotate: 0,   delay: 0.32 },
  { id: 'globe',   Icon: GlobeIcon,   left: '64%', top: '92%', size: 100, rotate: 0,   delay: 0.4  },

  // ── Right arc (bottom half only) ──
  { id: 'coil',    Icon: CoilIcon,    left: '77%', top: '80%', size: 140, rotate: 8,   delay: 0.48 },
  { id: 'safari',  Icon: SafariIcon,  left: '87%', top: '62%', size: 116, rotate: -6,  delay: 0.56 },
  { id: 'apple',   Icon: AppleIcon,   left: '93%', top: '48%', size: 128, rotate: 12,  delay: 0.64 },
];

export default function Hero() {
  return (
    <section className="et-hero" aria-labelledby="et-hero-title">
      {/* 3D icons layer */}
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

      {/* Headline — kept at your preferred large size */}
      <h1 id="et-hero-title" className="et-hero-title">
        <span className="et-hero-line">Built For</span>
        <span className="et-hero-line et-hero-accent">Smarter Business</span>
      </h1>
    </section>
  );
}