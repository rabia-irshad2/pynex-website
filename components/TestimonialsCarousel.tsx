//components/TestimonialsCarousel.tsx
'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import ScrollRevealText from '@/components/ScrollRevealText';
import type { Testimonial } from '@/lib/content';

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : 2);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = Math.ceil(testimonials.length / perView);
  const safeIndex = Math.min(index, Math.max(0, total - 1));

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(total - 1, i + 1));
  }

  const start = safeIndex * perView;
  const visible = testimonials.slice(start, start + perView);

  return (
    <section className="testimonials-section theme-dark-section">
      <div className="container-pynex">
        <div className="testimonials-header">
          <Reveal>
            <p className="section-label">Testimonials</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="What Our Clients Say"
            className="testimonials-title"
            variant="focus"
          />
        </div>

        <div className="testimonials-track">
          {visible.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 0.1}>
              <article className="testimonial-quote-card">
                <Quote
                  className="testimonial-quote-icon"
                  size={28}
                  aria-hidden="true"
                />
                <p className="testimonial-quote-text">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="testimonial-footer">
                  <div className="testimonial-author">
                    <strong>{t.name}</strong>
                    {(t.role || t.company) && (
                      <span>
                        {t.role}
                        {t.role && t.company ? ' — ' : ''}
                        {t.company}
                      </span>
                    )}
                  </div>

                  {t.caseStudyHref && (
                    <Button href={t.caseStudyHref} className="testimonial-case-link" variant="outline">
                      View case study
                    </Button>
                  )}
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        {total > 1 && (
          <div className="testimonials-controls">
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              aria-label="Previous testimonials"
              className="testimonials-arrow"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="testimonials-counter">
              {safeIndex + 1} / {total}
            </span>

            <button
              onClick={next}
              disabled={safeIndex === total - 1}
              aria-label="Next testimonials"
              className="testimonials-arrow"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
