//components/TestimonialsCarousel.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import type { Testimonial } from '@/lib/content';

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  if (total === 0) return null;

  return (
    <section className="testimonials theme-dark-section">
      <div className="container-pynex">
        <div className="testimonials-header">
          <Reveal>
            <p className="section-label">testimonials</p>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text="What Our Clients Say"
            className="testimonials-title"
            variant="focus"
          />
        </div>

        <Reveal key={current.name}>
          <article className="testimonial-card">
            <p className="testimonial-quote">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="testimonial-meta">
              <div className="testimonial-author">
                <strong>{current.name}</strong>
                {(current.role || current.company) && (
                  <span>
                    {current.role}
                    {current.role && current.company ? ' — ' : ''}
                    {current.company}
                  </span>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        {total > 1 && (
          <div className="testimonials-controls">
            <button
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              aria-label="Previous testimonial"
              className="testimonial-arrow"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="testimonial-counter">
              {index + 1}/{total}
            </span>
            <button
              onClick={() => setIndex((i) => (i + 1) % total)}
              aria-label="Next testimonial"
              className="testimonial-arrow"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}