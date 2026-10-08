const SLOGANS = ['Think clearly', 'Build intentionally', 'Move work forward', 'Make room for what\'s next'];

export default function Marquee() {
  return (
    <div className="services-marquee" aria-label="Think clearly. Build intentionally. Move work forward.">
      <div className="services-marquee-track">
        {[0, 1].map((copy) => (
          <div className="services-marquee-group" key={copy} aria-hidden={copy === 1}>
            {SLOGANS.map((slogan) => (
              <span className="services-marquee-item" key={slogan}>
                {slogan}<i aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}