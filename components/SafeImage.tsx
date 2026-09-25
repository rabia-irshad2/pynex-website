'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type SafeImageProps = Omit<ImageProps, 'src'> & { src?: ImageProps['src']; fallback: React.ReactNode };

export default function SafeImage({ fallback, alt, src, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <>{fallback}</>;

  return <Image {...props} src={src} alt={alt} onError={() => setFailed(true)} />;
}
