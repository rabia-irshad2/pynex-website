//components/HomeProducts.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';
import type { Product } from '@/lib/content';

export default function HomeProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="home-products theme-dark-section">
      <div className="container-pynex">
        <div className="home-products-header">
          <Reveal>
            <p className="section-label">AI Solutions</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="AI Products, Built In-House"
            className="home-products-title"
            variant="focus"
          />

          <Reveal delay={0.2}>
            <p className="home-products-lede">
              Alongside custom builds, we run our own AI products — live and
              ready to deploy.
            </p>
          </Reveal>
        </div>

        <div className="home-products-list">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.1}>
              <Link
                href={product.link}
                className={`home-product-card${index % 2 === 1 ? ' is-reversed' : ''}`}
              >
                <div className="home-product-text">
                  <span className="home-product-id">
                    {product.id} · AI Product
                  </span>
                  <h3 className="home-product-name">{product.name}</h3>
                  <p className="home-product-tagline">{product.tagline}</p>
                  <p className="home-product-description">
                    {product.description}
                  </p>

                  <div className="home-product-stats">
                    {product.stats.map((stat) => (
                      <div key={stat.label} className="home-product-stat">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <span className="home-product-link">
                    {product.linkLabel}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>

                <div className="home-product-visual">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 550px"
                    className="home-product-image"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}