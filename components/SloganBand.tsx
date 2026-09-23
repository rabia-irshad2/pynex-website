export default function SloganBand({ text }: { text: string }) {
  return (
    <section className="bg-pynex-gradient py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <p className="text-white text-3xl md:text-5xl font-bold text-center leading-tight">{text}</p>
      </div>
    </section>
  );
}
