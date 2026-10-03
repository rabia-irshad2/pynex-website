const slogans = [
  'Smarter Business Technology',
  'AI That Solves Real Problems',
  'Automation That Saves Time',
  'Software Built Around You',
  'Practical. Reliable. Intelligent.',
];

export default function SloganBand() {
  const text = slogans.map((slogan) => `• ${slogan}`).join('  ');

  return (
    <section className="slogan-band overflow-hidden" aria-label="PYNEX values">
      <div className="slogan-track text-white whitespace-nowrap" aria-hidden="true">
        <span>{text}</span><span>{text}</span>
      </div>
    </section>
  );
}
