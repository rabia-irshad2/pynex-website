export default function SloganBand({ text }: { text: string }) {
  return (
    <section className="slogan-band bg-pynex-gradient py-8 md:py-12 overflow-hidden">
      <div className="slogan-track text-white text-3xl md:text-5xl font-bold whitespace-nowrap">{text} {text}</div>
    </section>
  );
}
