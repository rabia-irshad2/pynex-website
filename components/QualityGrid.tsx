import Reveal from '@/components/Reveal';

type Quality = [string, string, string];

export default function QualityGrid({ qualities }: { qualities: Quality[] }) {
  return (
    <div className="qualities-v2-grid">
      {qualities.map(([number, title, description], index) => (
        <Reveal key={number} delay={index * 0.06}>
          <article className="quality-card">
            <span className="quality-icon" aria-hidden="true">{number}</span>
            <h3 className="quality-title">{title}</h3>
            <p className="quality-text">{description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
