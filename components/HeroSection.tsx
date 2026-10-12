//components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';
import HeroVisuals from './HeroVisuals';
import HeroTechStrip from './HeroTechStrip';

export default function HeroSection() {
  return (
    <section className="hero-shell">
      <HeroVisuals />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-layout container-pynex">
        <div className="hero-content">
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-headline-line">Built for</span>
            <span className="hero-headline-accent">smarter business</span>
          </motion.h1>

          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Technology that makes your business smarter, faster, and more efficient.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/contact" className="hero-cta hero-cta-primary">
              <>Book a Call <ArrowUpRight size={18} aria-hidden="true" /></>
            </Button>
            <Button href="/services" variant="outline" className="hero-cta hero-cta-secondary">
              <>Explore Services <ArrowUpRight size={18} aria-hidden="true" /></>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HeroTechStrip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
