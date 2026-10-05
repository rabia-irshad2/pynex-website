//app/components/ScrollRevealText.tsx
'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ScrollRevealText({
  text,
  className = '',
  as: Tag = 'h2',
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const words = useMemo(() => text.split(' '), [text]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4'],
  });

  return (
    <div ref={ref} className={className}>
      <Tag className="sr-text">
        {words.map((word, i) => {
          const start = (i / words.length) * 0.7;
          const end = start + (1 / words.length) * 0.9;

          return (
            <ScrollWord
              key={`${word}-${i}`}
              progress={scrollYProgress}
              start={start}
              end={end}
              reduced={!!reduce}
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
}: {
  children: React.ReactNode;
  progress: any;
  start: number;
  end: number;
  reduced: boolean;
}) {
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0.15, 1]);
  const blur = useTransform(progress, [start, end], reduced ? [0, 0] : [4, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <span className="sr-word">
      <motion.span className="sr-word-inner" style={{ opacity, filter }}>
        {children}
      </motion.span>
      <span className="sr-word-space"> </span>
    </span>
  );
}