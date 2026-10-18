'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/content';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';

export default function HomeProducts({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);

  if (!products.length) return null;

  return (
    <section className="et-products" id="ai-products">
      <div className="et-products-inner">
        
        {/* Restored Heading */}
        <p className="et-section-label et-section-label--center">
          <span className="et-section-dot" /> AI Solutions
        </p>
        <h2 className="et-products-title">
          <span>AI Products,</span>
          <span>Built In-House</span>
        </h2>

        {/* Expanding Columns Container */}
        <div className="et-products-stage">
          {products.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.id}
                className={`et-product-col ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                {/* Active Content */}
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
                          <div key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></div>
                        ))}
                      </div>

                      <AnimatedButton href={p.link} className="btn-small mt-4">Explore AI <ArrowUpRight size={16} aria-hidden="true" /></AnimatedButton>
                    </div>

                    {/* 3D Image Placeholder (Robot/Dashboard) */}
                    <div className="et-product-visual">
                      <Image 
                        src={p.image}
                        alt={p.name} 
                        fill 
                        className="object-contain"
                        // Fallback to an SVG if image doesn't exist
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* SVG Fallback Illustration */}
                      <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full pointer-events-none opacity-80" preserveAspectRatio="xMidYMax meet">
                        <defs>
                          <linearGradient id="botGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.8"/><stop offset="100%" stopColor="#4fa9ff" stopOpacity="0.2"/></linearGradient>
                        </defs>
                        <path d="M200 150 Q250 150 250 200 L250 400 Q250 480 200 480 Q150 480 150 400 L150 200 Q150 150 200 150 Z" fill="url(#botGrad)" />
                        <circle cx="200" cy="120" r="40" fill="url(#botGrad)" />
                        <rect x="180" y="110" width="40" height="10" rx="5" fill="#00C6FF" className="animate-pulse" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Collapsed Sidebar Title */}
                <div className="et-product-collapsed">
                  <span className="et-product-id-vert">0{i + 1}</span>
                  <span className="et-product-title-vert">{p.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
