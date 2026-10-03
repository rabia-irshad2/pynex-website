//app/components/PynexLogo.tsx
import Image from 'next/image';

export default function PynexLogo({
  height = 40,
  className = '',
}: {
  height?: number;
  className?: string;
}) {
  // Aspect ratio of logo.png = 1585 / 992 ≈ 1.598
  const width = Math.round(height * 1.598);

  return (
    <span
      className={`pynex-logo ${className}`}
      style={{ width, height }}
    >
      <Image
        src="/images/logo/logo.png"
        alt="PYNEX"
        fill
        priority
        sizes={`${width}px`}
        className="pynex-logo-img"
      />
    </span>
  );
}