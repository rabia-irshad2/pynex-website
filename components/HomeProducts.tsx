'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/content';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeProducts({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!products.length || paused) return;
    const t = setInterval(
      () => setActive((p) => (p + 1) % products.length),
      4000,
    );
    return () => clearInterval(t);
  }, [paused, products.length]);

  if (!products.length) return null;

  return (
    <section className="et-products" id="ai-products">
      <div className="et-products-inner">
        <p className="et-section-label--center">
          <span className="et-section-dot" /> AI Solutions
        </p>
        <h2 className="et-products-title">
          <span>AI Products,</span>
          <span>Built In-House</span>
        </h2>

        <div
          className="et-products-stage"
          onMouseLeave={() => setPaused(false)}
        >
          {products.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.id}
                className={`et-product-col${isActive ? ' is-active' : ''}`}
                onMouseEnter={() => {
                  setPaused(true);
                  setActive(i);
                }}
                onClick={() => {
                  setActive(i);
                  setPaused(false);
                }}
              >
                <div className="et-product-content">
                  <div className="et-product-head">
                    <span className="et-product-id">
                      0{i + 1} · {p.name}
                    </span>
                    <span className="et-product-live">
                      <span className="dot" /> LIVE
                    </span>
                  </div>
                  <div className="et-product-body">
                    <div className="et-product-copy">
                      <p className="et-product-tag">{p.tagline}</p>
                      <h3 className="et-product-name">{p.name}</h3>
                      <p className="et-product-desc">{p.description}</p>
                      <div className="et-product-stats">
                        {p.stats.slice(0, 2).map((s) => (
                          <div key={s.label} className="stat">
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={p.link} className="btn btn-primary btn-small">
                        Explore AI <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    <div className="et-product-visual">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="et-product-collapsed">
                  <span className="et-product-id-vert">0{i + 1}</span>
                  <span className="et-product-title-vert">{p.name}</span>
                </div>

                <div className="et-product-loading-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}