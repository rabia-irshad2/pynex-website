//app/components/QualityGrid.tsx
'use client';

import { Gauge, GitBranch, Headphones, Lightbulb, Network, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const qualityIcons = [Lightbulb, Sparkles, Gauge, Network, GitBranch, Headphones];

type Quality = [string, string, string];

export default function QualityGrid({ qualities }: { qualities: Quality[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="quality-grid">
      {qualities.map(([number, title, text], index) => {
        const Icon = qualityIcons[index] || Lightbulb;
        return (
          <motion.article
            key={title}
            className="quality-item"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: reduceMotion ? 0 : index * 0.07,
              ease: 'easeOut',
            }}
          >
            <Icon className="quality-icon" size={30} strokeWidth={1.8} aria-hidden="true" />
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        );
      })}
    </div>
  );
}