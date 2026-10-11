//components/HomeStats.tsx
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HomeStats() {
  return (
    <section className="home-stats">
      <div className="container-pynex">
        <div className="home-stats-row">
          <p className="home-stats-lede">
            <strong>150+</strong> successful implementations.
          </p>
          <Link href="/projects" className="home-stats-link">
            View more
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}