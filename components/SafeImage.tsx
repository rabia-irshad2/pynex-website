'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type SafeImageProps = ImageProps & { fallback: React.ReactNode };

export default function SafeImage({ fallback, alt, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;

  return <Image {...props} alt={alt} onError={() => setFailed(true)} />;
}
