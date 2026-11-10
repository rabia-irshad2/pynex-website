'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton'; // Make sure this path is correct

type Svc = {
  slug: string;
  frontmatter: { title: string; shortDescription?: string };
  introduction: string;
};

const ART: Record<string, { label: string; image: string; features: string[] }> = {
  'ai-solutions': {
    label: 'AI & Agentic Systems',
    image: '/images/services/ai-solutions.jpg',
    features: ['Custom AI assistants', 'Document analysis', 'Prediction engines', 'LLM workflow automation'],
  },
  'business-automation': {
    label: 'Software Development',
    image: '/images/services/business-automation.jpg',
    features: ['Workflow mapping', 'Tool integrations', 'Data syncing', 'Real-time alerts'],
  },
  'custom-software': {
    label: 'Product Discovery & Design',
    image: '/images/services/custom-software.jpg',
    features: ['Web apps & portals', 'Scalable architecture', 'API design', 'Ongoing support'],
  },
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function HomeServices({ services }: { services: Svc[] }) {
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>();
  const grid = useReveal<HTMLDivElement>();
  const footer = useReveal<HTMLDivElement>();

  const ordered = ['custom-software', 'business-automation', 'ai-solutions']
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Svc => Boolean(s));

  return (
    <section className="et-services" id="services">
      <div className="et-services-inner">
        <p
          ref={label.ref}
          className={`et-section-label--center ${label.shown ? 'is-in' : ''}`}
        >
          <span className="et-section-dot" /> Services
        </p>

        <h2
          ref={title.ref}
          className={`et-services-title ${title.shown ? 'is-in' : ''}`}
        >
          <span className="et-services-title-line">Explore Our</span>
          <span className="et-services-title-line">Complete Technology</span>
          <span className="et-services-title-line">Services</span>
        </h2>

        <div
          ref={grid.ref}
          className={`et-services-grid ${grid.shown ? 'is-in' : ''}`}
        >
          {ordered.map((svc, i) => {
            const data = ART[svc.slug];
            if (!data) return null;
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="et-flip-card"
                style={{ '--delay': `${i * 0.15 + 0.1}s` } as React.CSSProperties}
              >
                <div className="et-flip-inner">
                  {/* FRONT OF CARD */}
                  <div className="et-flip-face et-flip-front">
                    <Image
                      src={data.image}
                      alt={data.label}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      className="et-flip-img"
                    />
                    <div className="et-flip-shade" />
                    <div className="et-flip-body">
                      <span className="et-flip-label">
                        <span className="et-flip-dot" /> Services
                      </span>
                      <h3 className="et-flip-title">{data.label}</h3>
                    </div>
                  </div>

                  {/* BACK OF CARD */}
                  <div className="et-flip-face et-flip-back">
                    <Image
                      src={data.image}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      className="et-flip-img et-flip-img-back"
                    />
                    <div className="et-flip-back-overlay" />
                    <div className="et-flip-back-inner">
                      <h3 className="et-flip-back-title">{data.label}</h3>
                      <p className="et-flip-back-desc">
                        {svc.introduction || svc.frontmatter.shortDescription}
                      </p>
                      <ul className="et-flip-back-list">
                        {data.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      {/* "Explore" text removed here */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* NEW VIEW MORE BUTTON */}
        <div 
          ref={footer.ref} 
          className={`et-services-footer ${footer.shown ? 'is-in' : ''}`}
        >
          <AnimatedButton href="/services" variant="outline">
            View More <ArrowUpRight size={18} />
          </AnimatedButton>
        </div>

      </div>
    </section>
  );
}