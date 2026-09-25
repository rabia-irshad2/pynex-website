'use client';

import { Gauge, GitBranch, Headphones, Lightbulb, Network, Sparkles } from 'lucide-react';

const qualityIcons = [Lightbulb, Sparkles, Gauge, Network, GitBranch, Headphones];

type Quality = [string, string, string];

export default function QualityGrid({ qualities }: { qualities: Quality[] }) {
  return (
    <div className="quality-grid">
      {qualities.map(([number, title, text], index) => {
        const Icon = qualityIcons[index] || Lightbulb;
        return (
          <article key={title} className="quality-item">
            <Icon className="quality-icon" size={30} strokeWidth={1.8} aria-hidden="true" />
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
}
