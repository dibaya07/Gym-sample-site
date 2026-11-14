'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dumbbell } from 'lucide-react';

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
  sizes?: string;
}

export function SiteImage({
  src,
  alt,
  className = 'object-cover',
  priority = false,
  fallbackLabel,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: SiteImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#101C2C] via-[#164E4A] to-[#101C2C] text-[#F3EFE5]/80 p-6 text-center"
      >
        <Dumbbell className="w-8 h-8 mb-3 text-[#F28C28]" aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-tight text-[#F3EFE5]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
