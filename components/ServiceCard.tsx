'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ServiceFrontmatter } from '@/lib/content';

const MotionLink = motion(Link);

const serviceImages: Record<string, string> = {
  'ai-solutions': '/images/services/ai-solutions.jpg',
  'business-automation': '/images/services/business-automation.jpg',
  'custom-software': '/images/services/custom-software.jpg',
  'digital-products': '/images/services/digital-products.jpg',
};

export default function ServiceCard({ service, introduction, index = 0 }: { service: ServiceFrontmatter; introduction?: string; index?: number }) {
  const imageSrc = serviceImages[service.slug] || '/images/services/ai-solutions.jpg';
  const serviceIntroduction = introduction || service.shortDescription;
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionLink
      href={`/services/${service.slug}`}
      aria-label={`Learn more about ${service.title}`}
      className="premium-service-card service-flip-card"
      initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : (index % 3) * 0.12, ease: 'easeOut' }}
    >
      <div className="service-flip-inner">
        <div className="service-flip-front premium-service-face">
          <Image src={imageSrc} alt="" fill className="service-face-image" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="service-face-shade" aria-hidden="true" />
          <div className="premium-service-body">
            <span className="service-chip">PYNEX service</span>
            <h3>{service.title}</h3>
            <span className="premium-service-hint">Hover to explore</span>
          </div>
        </div>
        <div className="service-flip-back premium-service-face">
          <Image src={imageSrc} alt="" fill className="service-face-image" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="service-face-shade service-face-shade-back" aria-hidden="true" />
          <div className="premium-service-body">
            <span className="service-chip">Service overview</span>
            <h3>{service.title}</h3>
            <p>{serviceIntroduction}</p>
            <span className="premium-service-link">Explore service <ArrowRight size={18} aria-hidden="true" /></span>
          </div>
        </div>
      </div>
    </MotionLink>
  );
}
