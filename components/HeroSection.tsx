//components/HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HeroVisuals from './HeroVisuals';

export default function HeroSection() {
  return (
    <section className="hero-shell">
      <HeroVisuals />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-layout container-pynex">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>AI. Automation. Software.</span>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-headline-line">Built for</span>
            <span className="hero-headline-accent">smarter business.</span>
          </motion.h1>

          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We design AI, automation, and software systems that turn repetitive
            work into measurable business results.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact" className="hero-cta hero-cta-primary">
              Book a Call
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/services" className="hero-cta hero-cta-secondary">
              Explore Services
              <span className="hero-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <span className="hero-trust-label">Trusted by teams building with</span>
            <div className="hero-trust-logos">
              <span>React</span>
              <span className="hero-trust-dot" aria-hidden="true" />
              <span>Next.js</span>
              <span className="hero-trust-dot" aria-hidden="true" />
              <span>Python</span>
              <span className="hero-trust-dot" aria-hidden="true" />
              <span>AWS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}