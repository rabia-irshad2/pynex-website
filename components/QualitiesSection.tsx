import { Users, Zap, Award, TrendingUp, Target, ShieldCheck } from 'lucide-react';

const ICONS = [Users, Zap, Award, TrendingUp, Target, ShieldCheck];

const QUALITIES = [
  {
    title: 'Expert Team',
    text: 'Skilled professionals delivering high-quality, reliable technology solutions.',
  },
  {
    title: 'Efficient Delivery',
    text: 'Streamlined processes ensuring timely and consistent project execution.',
  },
  {
    title: 'Technical Excellence',
    text: 'Advanced technologies and best practices driving superior performance.',
  },
  {
    title: 'Scalable Solutions',
    text: 'Built to grow with your business and evolving requirements.',
  },
  {
    title: 'Client-Centric Approach',
    text: 'Focused on delivering value aligned with your business goals.',
  },
  {
    title: 'Proven Reliability',
    text: 'Consistent delivery backed by experience and trusted expertise.',
  },
];

export default function QualitiesSection() {
  return (
    <section className="qualities-v2 theme-dark-section">
      <div className="container-pynex">
        <div className="qualities-v2-header">
          <p className="section-label">Qualities</p>
          <h2 className="qualities-v2-title">Why Work With Us</h2>
        </div>

        <div className="qualities-v2-grid">
          {QUALITIES.map((q, i) => {
            const Icon = ICONS[i];
            return (
              <article key={q.title} className="quality-card">
                <span className="quality-icon">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="quality-title">{q.title}</h3>
                <p className="quality-text">{q.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}