'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/content';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';

export default function HomeProducts({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play timer: Changes tab every 3 seconds
  useEffect(() => {
    if (isHovered || products.length <= 1) return; // Pause if hovered
    
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 3000); // 3000ms = 3 seconds (matches the CSS loading line)

    return () => clearInterval(timer);
  }, [isHovered, products.length]);

  if (!products.length) return null;

  return (
    <section className="et-products" id="ai-products">
      <div className="et-products-inner">
        
        {/* SECTION LABEL */}
        <p className="et-products-label">
          <span className="et-products-dot" /> AI Solutions
        </p>
        
        {/* HEADING */}
        <h2 className="et-products-title">
          <span>AI Products,</span>
          <span>Built In-House</span>
        </h2>

        {/* STAGE CONTAINER */}
        <div 
          className="et-products-stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {products.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.id}
                className={`et-product-col ${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(i)} // Allow manual click
              >
                {/* ACTIVE CONTENT */}
                <div className="et-product-content">
                  <div className="et-product-head">
                    <span className="et-product-id">0{i + 1} · {p.name}</span>
                    <span className="et-product-live"><span className="dot" /> LIVE</span>
                  </div>
                  
                  <div className="et-product-body">
                    <div className="et-product-copy">
                      <p className="et-product-tag">{p.tagline}</p>
                      <h3 className="et-product-name">{p.name}</h3>
                      <p className="et-product-desc">{p.description}</p>
                      
                      <div className="et-product-stats">
                        {p.stats.slice(0, 2).map(s => (
                          <div key={s.label} className="stat">
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <AnimatedButton href={p.link} className="btn-small mt-4">
                        Explore AI <ArrowUpRight size={16} aria-hidden="true" />
                      </AnimatedButton>
                    </div>

                    {/* PRODUCT IMAGE */}
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

                {/* COLLAPSED SIDEBAR TEXT */}
                <div className="et-product-collapsed">
                  <span className="et-product-id-vert">0{i + 1}</span>
                  <span className="et-product-title-vert">{p.name}</span>
                </div>

                {/* LOADING LINE */}
                <div className="et-product-loading-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}