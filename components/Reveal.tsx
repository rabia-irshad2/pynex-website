//app/components/Reveal.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance = 24,
  once = true,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  const offset =
    direction === 'none'
      ? {}
      : direction === 'up'
      ? { y: distance }
      : direction === 'down'
      ? { y: -distance }
      : direction === 'left'
      ? { x: distance }
      : { x: -distance };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}