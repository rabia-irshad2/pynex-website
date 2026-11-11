import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, RefreshCw, Box } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

const FEATURES = [
  {
    icon: RefreshCw,
    title: 'REAL-TIME 3D CUSTOMIZATION',
    desc: 'CONFIGURE PRODUCTS WITH LIVE, INTERACTIVE 3D PREVIEWS.',
  },
  {
    icon: Box,
    title: 'DYNAMIC DESIGN CONTROL',
    desc: 'CUSTOMIZE COLORS, MATERIALS, AND DETAILS WITH EASE.',
  },
];

export default function HomeFeaturedProduct() {
  return (
    <section className="et-featured">
      <div className="et-featured-inner">
        
        {/* LEFT COLUMN */}
        <div className="et-featured-copy">
          <p className="et-section-label">
            <span className="et-section-dot" /> Our Recent Product
          </p>
          
          {/* Heading flows naturally, no <br/> tags to allow 2-line spillover */}
          <h2 className="et-featured-title">
            Give clients the freedom to work their way.
          </h2>
          
          <p className="et-featured-desc">
            A configurable platform that adapts to each client&apos;s workflow, 
            branding, and data — instead of forcing everyone into the same rigid template.
          </p>

          <div className="et-featured-btn-wrap">
            <AnimatedButton href="/contact" variant="outline" className="et-test-btn">
              Test Live <ArrowUpRight size={16} />
            </AnimatedButton>
          </div>

          {/* SMALL ROUNDED SQUARE CARDS */}
          <div className="et-featured-cards">
            {FEATURES.map((feature, i) => (
              <div key={i} className="et-feature-card">
                <feature.icon size={24} className="et-feature-icon" />
                <div className="et-feature-content">
                  <h3 className="et-feature-card-title">{feature.title}</h3>
                  <p className="et-feature-card-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE MATCHES HEIGHT OF CARDS */}
        <div className="et-featured-visual">
          <div className="et-featured-device">
            <Image
              src="/images/overview/overview.jpg"
              alt="Product interface"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}