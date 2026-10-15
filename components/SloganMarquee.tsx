//components/SloganMarquee.tsx — original PYNEX slogans
const SLOGANS = [
  'Automate the routine',
  'Ship what matters',
  'Software that earns its keep',
  'AI with a clear job',
  'Islamabad · UAE · Remote-ready',
  'Measured in hours saved',
];

export default function SloganMarquee() {
  const loop = [...SLOGANS, ...SLOGANS, ...SLOGANS];
  return (
    <div className="slogan-marquee" aria-label="PYNEX values">
      <div className="slogan-marquee-track" aria-hidden="true">
        {loop.map((slogan, i) => (
          <span className="slogan-marquee-item" key={i}>
            {slogan}
            <span className="slogan-marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}