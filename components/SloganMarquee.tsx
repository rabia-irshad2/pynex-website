//components/SloganMarquee.tsx
const SLOGANS = [
  'Innovate. Build. Scale.',
  'Driven by Technology Excellence',
  'Solutions That Drive Impact',
  'Scalable Solutions for Business',
  'Where Innovation Performs',
  'Driven by Results',
];

export default function SloganMarquee() {
  return (
    <div className="slogan-marquee" aria-label="PYNEX values">
      <div className="slogan-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="slogan-marquee-group" key={copy}>
            {SLOGANS.map((slogan, i) => (
              <span className="slogan-marquee-item" key={`${copy}-${i}`}>
                {slogan}
                <span className="slogan-marquee-dot" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}