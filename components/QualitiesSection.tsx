//components/QualitiesSection.tsx
'use client';

import { Users, Zap, Award, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';

const ICONS = [Users, Zap, Award, TrendingUp, Target, ShieldCheck];

const QUALITIES = [
  {
    title: 'Expert Team',
    text: 'Skilled professionals delivering high-quality, reliable technology solutions.',
  },
  {
    title: 'Efficient Delivery',
    text: 'Streamlined processes ensuring timely and consistent project execution.',
  },
  {
    title: 'Technical Excellence',
    text: 'Advanced technologies and best practices driving superior performance.',
  },
  {
    title: 'Scalable Solutions',
    text: 'Built to grow with your business and evolving requirements.',
  },
  {
    title: 'Client-Centric Approach',
    text: 'Focused on delivering value aligned with your business goals.',
  },
  {
    title: 'Proven Reliability',
    text: 'Consistent delivery backed by experience and trusted expertise.',
  },
];

export default function QualitiesSection() {
  return (
    <section className="qualities-v2 theme-dark-section">
      <div className="container-pynex">
        <div className="qualities-v2-header">
          <Reveal>
            <p className="section-label">qualities</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="Why work with us"
            className="qualities-v2-title"
            variant="focus"
          />
        </div>

        <div className="qualities-v2-grid">
          {QUALITIES.map((q, i) => {
            const Icon = ICONS[i] || Zap;
            return (
              <Reveal key={q.title} delay={i * 0.06}>
                <QualityCard icon={Icon} title={q.title} text={q.text} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QualityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className="quality-card"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <motion.span
        className="quality-icon"
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {/* Increased size from 22 to 32 */}
        <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
      </motion.span>
      <h3 className="quality-title">{title}</h3>
      <p className="quality-text">{text}</p>
    </motion.article>
  );
}