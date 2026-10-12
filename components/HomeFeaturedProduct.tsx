//components/HomeFeaturedProduct.tsx
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';

export default function HomeFeaturedProduct() {
  return (
    <section className="home-featured-product theme-dark-section">
      <div className="container-pynex">
        <Reveal>
          <p className="section-label">Our recent product</p>
        </Reveal>

        <div className="home-featured-product-grid">
          <div className="home-featured-product-text">
            <Reveal direction="left">
              <h2 className="home-featured-product-title">
                Give clients the freedom to{' '}
                <span className="home-featured-product-accent">
                  work their way.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="home-featured-product-lede">
                A configurable platform that adapts to each client&apos;s workflow,
                branding, and data — instead of forcing everyone into the same
                rigid template.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="home-featured-product-features">
                <li>
                  <strong>Real-time customization</strong>
                  Configure workflows, dashboards, and views with live previews.
                </li>
                <li>
                  <strong>Dynamic design control</strong>
                  Branding, colors, and module layouts that update instantly.
                </li>
                <li>
                  <strong>Built for scale</strong>
                  From a single team to multi-tenant deployments.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.35}>
              <Button href="/contact" className="home-featured-product-cta" variant="outline">
                <>Test Live <ArrowUpRight size={18} aria-hidden="true" /></>
              </Button>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15}>
            <div className="home-featured-product-visual">
              <Image
                src="/images/services/custom-software.jpg"
                alt="Custom software interface preview"
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
