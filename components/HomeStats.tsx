//components/HomeStats.tsx
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';

export default function HomeStats() {
  return (
    <section className="home-stats">
      <div className="container-pynex">
        <div className="home-stats-row">
          <p className="home-stats-lede">
            <strong>150+</strong> successful implementations.
          </p>
          <Button href="/projects" className="home-stats-link" variant="outline">
            <>View more <ArrowUpRight size={16} aria-hidden="true" /></>
          </Button>
        </div>
      </div>
    </section>
  );
}
