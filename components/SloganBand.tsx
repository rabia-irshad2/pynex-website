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
    <section className="slogan-band bg-pynex-gradient py-8 md:py-12 overflow-hidden">
      <div className="slogan-track text-white text-3xl md:text-5xl font-bold whitespace-nowrap">{text} {text}</div>
    </section>
  );
}
