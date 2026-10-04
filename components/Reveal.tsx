'use client';

import { motion, useReducedMotion } from 'framer-motion';

type RevealDirection = 'up' | 'left' | 'right';

export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  ariaLabel?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const hiddenPosition = direction === 'left'
    ? { x: -40, y: 0 }
    : direction === 'right'
      ? { x: 40, y: 0 }
      : { x: 0, y: 40 };

  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      initial={prefersReducedMotion ? false : { opacity: 0, ...hiddenPosition }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
