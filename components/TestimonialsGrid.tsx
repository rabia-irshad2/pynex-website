//app/components/TestimonialsGrid.tsx
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/content';

export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="testimonial-grid">
      {testimonials.map((t, i) => (
        <article className="testimonial-card" key={`${t.name}-${i}`}>
          <Quote className="testimonial-quote-icon" size={28} aria-hidden="true" />
          <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
          <footer className="testimonial-attribution">
            <strong>{t.name}</strong>
            {(t.role || t.company) && (
              <span>
                {t.role}
                {t.role && t.company ? ', ' : ''}
                {t.company}
              </span>
            )}
          </footer>
        </article>
      ))}
    </div>
  );
}
