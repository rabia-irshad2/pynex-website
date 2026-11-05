import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

export default function HomeFeaturedProduct() {
  return (
    <section className="et-featured">
      <div className="et-featured-inner">
        <div className="et-featured-copy">
          <p className="et-section-label">
            <span className="et-section-dot" /> Our Recent Product
          </p>
          <h2 className="et-featured-title">
            <span className="text-white">Give clients the freedom</span>
            <br />
            <span className="text-[#00C6FF]">to work their way.</span>
          </h2>
          <p className="et-featured-desc">
            A configurable platform that adapts to each client&apos;s workflow,
            branding, and data — instead of forcing everyone into the same rigid
            template.
          </p>
          <ul className="et-featured-list">
            <li>
              <span className="icon">
                <Check size={14} />
              </span>
              <strong>Real-time customization</strong> — configure workflows
              live.
            </li>
            <li>
              <span className="icon">
                <Check size={14} />
              </span>
              <strong>Dynamic design control</strong> — branding updates
              instantly.
            </li>
            <li>
              <span className="icon">
                <Check size={14} />
              </span>
              <strong>Built for scale</strong> — from one team to multi-tenant.
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary">
            Test Live <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="et-featured-visual">
          <Image
            src="/images/overview/overview.jpg"
            alt="Product interface"
            fill
            className="object-cover rounded-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}