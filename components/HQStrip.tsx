import Image from 'next/image';

export default function HQStrip() {
  return (
    <section className="et-hq">
      <div className="et-hq-inner">
        <div className="et-hq-copy">
          <p className="et-section-label"><span className="et-section-dot"/> Inside PYNEX</p>
          <h2 className="et-hq-title">Step Inside The<br/>PYNEX HQ</h2>
        </div>
        <div className="et-hq-image">
           <Image src="/images/overview/overview.jpg" alt="PYNEX workspace" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
