//app/components/ScrollRevealText.tsx
'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

type Variant = 'rise' | 'focus' | 'expand' | 'slideUp' | 'slideDown';

export default function ScrollRevealText({
  text,
  className = '',
  as: Tag = 'h2',
  variant = 'focus',
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const words = useMemo(() => text.split(' '), [text]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.35'],
  });

  return (
    <div ref={ref} className={className}>
      <Tag className={`sr-text sr-variant-${variant}`}>
        {words.map((word, i) => {
          const total = words.length;
          const start = (i / total) * 0.65;
          const end = start + (1 / total) * 0.9;

          return (
            <ScrollWord
              key={`${word}-${i}`}
              progress={scrollYProgress}
              start={start}
              end={end}
              reduced={!!reduce}
              variant={variant}
            >
              {word}
            </ScrollWord>
          );
        })}
      </Tag>
    </div>
  );
}

function ScrollWord({
  children,
  progress,
  start,
  end,
  reduced,
  variant,
}: {
  children: React.ReactNode;
  progress: any;
  start: number;
  end: number;
  reduced: boolean;
  variant: Variant;
}) {
  // Base transforms
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0, 1]);

  // Variant-specific transforms
  const y = useTransform(
    progress,
    [start, end],
    reduced
      ? [0, 0]
      : variant === 'rise'
      ? [24, 0]
      : variant === 'slideUp'
      ? [40, 0]
      : variant === 'slideDown'
      ? [-40, 0]
      : [0, 0]
  );

  const blurPx = useTransform(
    progress,
    [start, end],
    reduced ? [0, 0] : variant === 'focus' ? [6, 0] : [0, 0]
  );
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);

  const scale = useTransform(
    progress,
    [start, end],
    reduced ? [1, 1] : variant === 'expand' ? [0.94, 1] : [1, 1]
  );

  const rotateX = useTransform(
    progress,
    [start, end],
    reduced ? [0, 0] : variant === 'expand' ? [18, 0] : [0, 0]
  );

  return (
    <span className="sr-word">
      <motion.span
        className="sr-word-inner"
        style={{
          opacity,
          y,
          filter,
          scale,
          rotateX,
          transformOrigin: 'center bottom',
          display: 'inline-block',
          willChange: 'opacity, transform, filter',
        }}
      >
        {children}
      </motion.span>
      <span className="sr-word-space"> </span>
    </span>
  );
}