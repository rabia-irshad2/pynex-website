//components/ProcessTimeline.tsx
import Reveal from '@/components/Reveal';
import ScrollRevealText from '@/components/ScrollRevealText';

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We start by mapping how your business actually works — the tools, the teams, the daily friction.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We turn the problem into a clear technical plan: what to build, what to buy, what to leave alone.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Working software in weeks, not months. You see progress at every stage and can course-correct early.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We ship it, train your team, and stay on call as it scales. Support doesn&apos;t end at go-live.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-centered theme-dark-section home-process-section">
      <div className="container-pynex">
        <div className="centered-header">
          <Reveal>
            <p className="section-label">Our process</p>
          </Reveal>

          <ScrollRevealText
            as="h2"
            text="From a clear problem to a useful system."
            className="centered-title-wrap"
            variant="focus"
          />

          <Reveal delay={0.2}>
            <p className="centered-subtitle">
              Four steps. One system that works the way your team works.
            </p>
          </Reveal>
        </div>

        <div className="process-track">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <article className="process-step">
                <div className="process-step-marker">
                  <span className="process-step-number">{step.number}</span>
                  <span className="process-step-pulse" aria-hidden="true" />
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-text">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}