//app/components/PynexLogo.tsx
import Image from 'next/image';

export default function PynexLogo({
  size = 48,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`pynex-logo ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo/logo.png"
        alt="PYNEX"
        width={size * 2}
        height={size * 2}
        priority
        className="pynex-logo-img"
      />
    </span>
  );
}