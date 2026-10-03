//app/components/QualityGrid.tsx
'use client';

import {
  Gauge,
  GitBranch,
  Headphones,
  Lightbulb,
  Network,
  Sparkles,
} from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useRef } from 'react';

const qualityIcons = [Lightbulb, Sparkles, Gauge, Network, GitBranch, Headphones];

type Quality = [string, string, string];

function FloatingCard({
  children,
  index,
  tiltEnabled = true,
}: {
  children: React.ReactNode;
  index: number;
  tiltEnabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 40,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 40,
  });

  // Floating animation offset per card
  const floatDelay = index * 0.4;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled || reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="qcard-scene">
      <motion.div
        ref={ref}
        className="qcard-float"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="qcard"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 6 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatDelay,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function QualityGrid({ qualities }: { qualities: Quality[] }) {
  return (
    <div className="quality-grid-3d">
      {qualities.map(([number, title, text], index) => {
        const Icon = qualityIcons[index] || Lightbulb;
        return (
          <FloatingCard key={title} index={index}>
            <article className="qcard-body">
              <div className="qcard-glow" aria-hidden="true" />
              <div className="qcard-icon-wrap">
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <span className="qcard-number">{number}</span>
              <h3 className="qcard-title">{title}</h3>
              <p className="qcard-text">{text}</p>
              <div className="qcard-beam" aria-hidden="true" />
            </article>
          </FloatingCard>
        );
      })}
    </div>
  );
}