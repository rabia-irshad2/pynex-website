//components/HomeProducts.tsx — Eastern Tech vertical tabs, auto-advance
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/content';

export default function HomeProducts({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);
  const [autoPaused, setAutoPaused] = useState(false);
  const total = products.length;
  const timerRef = useRef<number | null>(null);

  // Auto-advance every 7s
  useEffect(() => {
    if (total <= 1 || autoPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [total, autoPaused]);

  if (!total) return null;
  const active = products[index];

  return (
    <section className="et-products" aria-labelledby="et-products-title">
      <div className="et-products-inner">
        {/* Centered header */}
        <p className="et-section-label et-section-label--center">
          <span className="et-section-dot" aria-hidden="true" />
          AI Solutions
        </p>

        <h2 id="et-products-title" className="et-products-title">
          <span>AI Products,</span>
          <span>Built In-House</span>
        </h2>

        <p className="et-products-lede">
          Alongside custom builds, we run our own AI products — live and ready to deploy.
        </p>

        {/* Vertical tabs + panel */}
        <div
          className="et-products-stage"
          onMouseEnter={() => setAutoPaused(true)}
          onMouseLeave={() => setAutoPaused(false)}
        >
          {/* Collapsed tabs — right column */}
          <aside className="et-products-tabs" role="tablist" aria-label="AI products">
            {products.map((p, i) => {
              const isActive = i === index;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setIndex(i)}
                  className={`et-products-tab${isActive ? ' is-active' : ''}`}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <span className="et-products-tab-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="et-products-tab-label">{p.name}</span>
                </button>
              );
            })}
          </aside>

          {/* Active panel */}
          <div
            key={active.id}
            className="et-products-panel"
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
          >
            <div className="et-products-panel-head">
              <span className="et-products-panel-id">
                {String(index + 1).padStart(2, '0')} · {active.name}
              </span>
              <span className="et-products-panel-live">
                <i aria-hidden="true" />
                Live
              </span>
            </div>

            <div className="et-products-panel-body">
              <div className="et-products-panel-copy">
                <p className="et-products-panel-tag">{active.tagline}</p>
                <h3 className="et-products-panel-name">{active.name}</h3>
                <p className="et-products-panel-desc">{active.description}</p>

                <div className="et-products-panel-stats">
                  {active.stats.slice(0, 2).map((s) => (
                    <div key={s.label} className="et-products-panel-stat">
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>

                <Link href={active.link} className="et-products-panel-cta">
                  {active.linkLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="et-products-panel-media">
                <ProductArt id={active.id} name={active.name} />
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="et-products-progress" aria-hidden="true">
          {products.map((p, i) => (
            <span
              key={p.id}
              className={`et-products-progress-dot${i === index ? ' is-on' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductArt({ id, name }: { id: string; name: string }) {
  return (
    <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" className="et-product-art" role="img" aria-label={`${name} illustration`}>
      <defs>
        <radialGradient id={`pa-bg-${id}`} cx="30%" cy="20%">
          <stop offset="0%" stopColor="#0e2138" />
          <stop offset="100%" stopColor="#05080f" />
        </radialGradient>
        <linearGradient id={`pa-bar-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7de5ff" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="900" height="600" fill={`url(#pa-bg-${id})`} />
      <rect x="60" y="60" width="780" height="60" rx="12" fill="#12243c" stroke="#1e3a5f" />
      <circle cx="95" cy="90" r="8" fill="#ef4444" />
      <circle cx="120" cy="90" r="8" fill="#f59e0b" />
      <circle cx="145" cy="90" r="8" fill="#10b981" />
      <text x="200" y="96" fontFamily="monospace" fontSize="14" fill="#7de5ff" letterSpacing="2">{name.toUpperCase()}</text>
      <rect x="60" y="150" width="230" height="120" rx="14" fill="#12243c" stroke="#1e3a5f" />
      <rect x="335" y="150" width="230" height="120" rx="14" fill="#12243c" stroke="#1e3a5f" />
      <rect x="610" y="150" width="230" height="120" rx="14" fill="#12243c" stroke="#1e3a5f" />
      <rect x="60" y="310" width="520" height="230" rx="14" fill="#12243c" stroke="#1e3a5f" />
      <g>
        <rect x="110" y="440" width="40" height="60" rx="3" fill={`url(#pa-bar-${id})`} />
        <rect x="180" y="400" width="40" height="100" rx="3" fill={`url(#pa-bar-${id})`} />
        <rect x="250" y="360" width="40" height="140" rx="3" fill={`url(#pa-bar-${id})`} />
        <rect x="320" y="420" width="40" height="80" rx="3" fill={`url(#pa-bar-${id})`} />
        <rect x="390" y="380" width="40" height="120" rx="3" fill={`url(#pa-bar-${id})`} />
        <rect x="460" y="350" width="40" height="150" rx="3" fill={`url(#pa-bar-${id})`} />
      </g>
      <rect x="610" y="310" width="230" height="230" rx="14" fill="#12243c" stroke="#1e3a5f" />
    </svg>
  );
}