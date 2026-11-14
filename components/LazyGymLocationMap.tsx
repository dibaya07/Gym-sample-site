'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';

const DynamicGymLocationMap = dynamic(
  () => import('@/components/GymLocationMap').then((mod) => mod.GymLocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[430px] bg-white text-[#101C2C] rounded-xl border border-[#101C2C]/12 p-6 flex flex-col justify-between animate-pulse">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#164E4A]">
          <MapPin className="w-4 h-4 text-[#F28C28]" aria-hidden="true" />
          <span>Loading Indiranagar live map...</span>
        </div>
        <div className="flex-1 my-4 rounded-lg bg-[#FAF8F4] border border-[#101C2C]/8" />
        <div className="text-xs text-[#101C2C]/60">
          {GYM_INFO.fullAddress}
        </div>
      </div>
    ),
  }
);

interface LazyGymLocationMapProps {
  apiKey: string;
}

export function LazyGymLocationMap({ apiKey }: LazyGymLocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldLoad) return;

    if (typeof IntersectionObserver === 'undefined') {
      const rafId = requestAnimationFrame(() => setShouldLoad(true));
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '450px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="h-full min-h-[430px]">
      {shouldLoad ? (
        <DynamicGymLocationMap apiKey={apiKey} />
      ) : (
        <div className="h-full min-h-[430px] bg-white text-[#101C2C] rounded-xl border border-[#101C2C]/12 p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#164E4A]">
            <MapPin className="w-4 h-4 text-[#F28C28]" aria-hidden="true" />
            <span>{GYM_INFO.neighborhood}, {GYM_INFO.city}</span>
          </div>
          <div className="flex-1 my-4 rounded-lg bg-[#FAF8F4] border border-[#101C2C]/8 flex items-center justify-center p-6 text-center">
            <div>
              <p className="font-display text-base font-bold text-[#101C2C] mb-1">
                {GYM_INFO.brandName} — Live Map
              </p>
              <p className="text-xs text-[#101C2C]/65">{GYM_INFO.fullAddress}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            className="btn-teal self-start !min-h-[38px] !px-4 !text-xs"
          >
            Load Interactive Map
          </button>
        </div>
      )}
    </div>
  );
}
