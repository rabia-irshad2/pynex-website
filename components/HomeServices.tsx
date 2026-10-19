'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton';

type Svc = { slug: string; frontmatter: { title: string; shortDescription?: string }; introduction: string };

const ART_DATA: Record<string, { label: string; image: string; features: string[] }> = {
  'ai-solutions': { label: 'AI Solutions', image: '/images/services/ai-solutions.jpg', features: ['Custom AI assistants', 'Document analysis', 'Prediction engines', 'LLM workflow automation'] },
  'business-automation': { label: 'Business Automation', image: '/images/services/business-automation.jpg', features: ['Workflow mapping', 'Tool integrations', 'Data syncing', 'Real-time alerts'] },
  'custom-software': { label: 'Custom Software', image: '/images/services/custom-software.jpg', features: ['Web apps & portals', 'Scalable architecture', 'API design', 'Ongoing support'] },
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function HomeServices({ services }: { services: Svc[] }) {
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>();
  const grid = useReveal<HTMLDivElement>();

  const ordered = ['ai-solutions', 'business-automation', 'custom-software']
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is Svc => Boolean(s));

  return (
    <section className="et-services" id="services">
      <div className="et-services-inner">
        
        <p ref={label.ref} className={`et-section-label et-section-label--center ${label.shown ? 'is-in' : ''}`}>
          <span className="et-section-dot" /> Services
        </p>

        <h2 ref={title.ref} className={`et-services-title ${title.shown ? 'is-in' : ''}`}>
          <span className="et-services-title-line">Explore Our</span>
          <span className="et-services-title-line">Complete Technology</span>
          <span className="et-services-title-line">Services</span>
        </h2>

        <div ref={grid.ref} className={`et-services-grid ${grid.shown ? 'is-in' : ''}`}>
          {ordered.map((svc, i) => {
            const data = ART_DATA[svc.slug];
            if (!data) return null;

            return (
              <div key={svc.slug} className="et-flip-card" style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}>
                <div className="et-flip-inner">
                  {/* FRONT */}
                  <div className="et-flip-front">
                    <div className="et-flip-media"><Image src={data.image} alt={`${data.label} service`} fill sizes="(max-width: 700px) 100vw, 33vw" className="et-flip-svg" /></div>
                    <div className="et-flip-body">
                      <span className="et-flip-label"><span className="et-flip-dot" /> Services</span>
                      <h3 className="et-flip-title">{data.label}</h3>
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="et-flip-back">
                    <div className="et-flip-back-media" aria-hidden="true">
                      <Image src={data.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                    </div>
                    <div className="et-flip-back-shade" aria-hidden="true" />
                    <div className="et-flip-back-inner">
                      <h3 className="et-flip-back-title">{data.label}</h3>
                      <p className="et-flip-back-description">
                        {svc.introduction || svc.frontmatter.shortDescription}
                      </p>
                      <ul className="et-flip-back-list">
                        {data.features.map((f: string, j: number) => <li key={j}>{f}</li>)}
                      </ul>
                      <AnimatedButton href={`/services/${svc.slug}`} className="btn-small">Explore <ArrowUpRight size={14} /></AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`et-services-footer ${grid.shown ? 'is-in' : ''}`}>
          <AnimatedButton href="/services" variant="outline">View More <ArrowUpRight size={16} /></AnimatedButton>
        </div>
      </div>
    </section>
  );
}
