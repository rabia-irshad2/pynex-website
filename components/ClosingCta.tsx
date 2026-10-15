import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import Rv from './Rv';

export default function ClosingCta() {
  return (
    <section className="hm-sec hm-cta" aria-labelledby="hm-cta-h">
      <Rv className="hm-wrap hm-cta-in">
        <p className="hm-label">Start a project</p>
        <h2 id="hm-cta-h" className="hm-cta-h">
          Let&apos;s build what<br />
          <span>moves your numbers</span>
        </h2>
        <p className="hm-lede">Tell us the problem. We&apos;ll reply within one business day.</p>
        <div className="hm-cta-row">
          <Link href="/contact" className="hm-btn">
            Book a call <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a href="tel:+923141754779" className="hm-pill">
            <Phone size={16} aria-hidden="true" />Pakistan +92 314 1754779
          </a>
          <a href="tel:+971508124362" className="hm-pill">
            <Phone size={16} aria-hidden="true" />UAE +971 50 812 4362
          </a>
        </div>
      </Rv>
    </section>
  );
}