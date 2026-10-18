'use client';

import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Workflow, Code2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Svc = { slug: string; frontmatter: { title: string; shortDescription?: string }; introduction: string };

const ART_DATA: Record<string, any> = {
  'ai-solutions': { label: 'AI Solutions', Art: AIArt, features: ['Custom AI assistants', 'Document analysis', 'Prediction engines', 'LLM workflow automation'] },
  'business-automation': { label: 'Business Automation', Art: AutomationArt, features: ['Workflow mapping', 'Tool integrations', 'Data syncing', 'Real-time alerts'] },
  'custom-software': { label: 'Custom Software', Art: SoftwareArt, features: ['Web apps & portals', 'Scalable architecture', 'API design', 'Ongoing support'] },
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
            const Art = data.Art;

            return (
              <div key={svc.slug} className="et-flip-card" style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}>
                <div className="et-flip-inner">
                  {/* FRONT */}
                  <div className="et-flip-front">
                    <div className="et-flip-media"><Art className="et-flip-svg" /></div>
                    <div className="et-flip-body">
                      <span className="et-flip-label"><span className="et-flip-dot" /> Services</span>
                      <h3 className="et-flip-title">{data.label}</h3>
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="et-flip-back">
                    <div className="et-flip-back-inner">
                      <h3 className="et-flip-back-title">{data.label}</h3>
                      <ul className="et-flip-back-list">
                        {data.features.map((f: string, j: number) => <li key={j}>{f}</li>)}
                      </ul>
                      <Link href={`/services/${svc.slug}`} className="btn btn-primary btn-small">
                        <span className="btn-swap">
                          <span className="btn-swap-front">Explore <ArrowUpRight size={14} /></span>
                          <span className="btn-swap-back">Explore <ArrowUpRight size={14} /></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`et-services-footer ${grid.shown ? 'is-in' : ''}`}>
          <Link href="/services" className="btn btn-outline">
            <span className="btn-swap">
              <span className="btn-swap-front">View More <ArrowUpRight size={16} /></span>
              <span className="btn-swap-back">View More <ArrowUpRight size={16} /></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// SVG components for AI, Automation, Software
function AIArt(props: any) { return <svg viewBox="0 0 600 800" {...props}><rect width="600" height="800" fill="#0e0620"/><circle cx="300" cy="400" r="150" fill="#8b5cf6" opacity="0.2"/><circle cx="300" cy="400" r="80" fill="#c7a0ff"/><path d="M300 400 L150 250 M300 400 L450 250 M300 400 L150 550 M300 400 L450 550" stroke="#8b5cf6" strokeWidth="4"/></svg>; }
function AutomationArt(props: any) { return <svg viewBox="0 0 600 800" {...props}><rect width="600" height="800" fill="#041a3a"/><circle cx="300" cy="400" r="100" fill="#0ea5e9"/><circle cx="150" cy="250" r="40" fill="#0ea5e9"/><circle cx="450" cy="250" r="40" fill="#0ea5e9"/><circle cx="150" cy="550" r="40" fill="#0ea5e9"/><circle cx="450" cy="550" r="40" fill="#0ea5e9"/><path d="M150 290 L300 400 L450 290 M150 510 L300 400 L450 510" stroke="#38bdf8" strokeWidth="6" fill="none"/></svg>; }
function SoftwareArt(props: any) { return <svg viewBox="0 0 600 800" {...props}><rect width="600" height="800" fill="#021418"/><rect x="100" y="200" width="400" height="300" rx="12" fill="#0f2a3d" stroke="#0e7490" strokeWidth="4"/><circle cx="120" cy="220" r="5" fill="#ef4444"/><circle cx="140" cy="220" r="5" fill="#f59e0b"/><circle cx="160" cy="220" r="5" fill="#10b981"/><rect x="130" y="270" width="150" height="8" rx="4" fill="#22d3ee"/><rect x="130" y="300" width="200" height="8" rx="4" fill="#0ea5e9"/><rect x="280" y="500" width="40" height="50" fill="#0a1e2a"/></svg>; }