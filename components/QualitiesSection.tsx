//components/QualitiesSection.tsx
'use client';

import {
  Users,
  Zap,
  Sparkles,
  TrendingUp,
  Target,
  ShieldCheck,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';

const ICONS = [Users, Zap, Sparkles, TrendingUp, Target, ShieldCheck];

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
    <section className="section-centered theme-dark-section alt-bg qualities-v2">
      <div className="container-pynex">
        <div className="centered-header">
          <Reveal>
            <p className="section-label">Qualities</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="Why work with us"
            className="centered-title-wrap"
            variant="focus"
          />
        </div>

        <div className="qualities-v2-grid">
          {QUALITIES.map((q, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <Reveal key={q.title} delay={i * 0.08}>
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
      className="quality-v2-card"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="quality-v2-icon"
        whileHover={reduceMotion ? undefined : { scale: 1.12, rotate: -6 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
      </motion.div>

      <h3 className="quality-v2-title">{title}</h3>
      <p className="quality-v2-text">{text}</p>
    </motion.article>
  );
}