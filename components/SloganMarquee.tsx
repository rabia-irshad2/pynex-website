//components/SloganMarquee.tsx — dummy slogans until HR provides final copy
const SLOGANS = [
  'Innovate. Build. Scale.',
  'Driven by Technology Excellence',
  'Solutions That Drive Impact',
  'Scalable Solutions for Business',
  'Where Innovation Performs',
  'Driven by Results',
];

export default function SloganMarquee() {
  const loop = [...SLOGANS, ...SLOGANS];
  return (
    <div className="slogan-band" aria-label="PYNEX values">
      <div className="slogan-band-track" aria-hidden="true">
        {loop.map((slogan, i) => (
          <span className="slogan-band-item" key={i}>
            {slogan}
            <i className="slogan-band-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}