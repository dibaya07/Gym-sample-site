'use client';

import { useState } from 'react';
import { Expand, X } from 'lucide-react';
import type { GalleryPhoto } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

interface GalleryGridLightboxProps {
  photos: GalleryPhoto[];
}

export function GalleryGridLightbox({ photos }: GalleryGridLightboxProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {photos.map((photo) => {
          const colSpan = photo.span === 'wide' ? 'md:col-span-6' : 'md:col-span-3';
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className={`${colSpan} group relative rounded-xl overflow-hidden border border-[#101C2C]/12 bg-[#FAF8F4] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]`}
            >
              <div className="relative h-[240px] sm:h-[260px] w-full overflow-hidden">
                <SiteImage
                  src={photo.image}
                  alt={`${photo.title} — ${photo.zone}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-105 transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101C2C]/80 via-[#101C2C]/35 to-transparent p-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold text-[#F28C28]">{photo.zone}</p>
                    <p className="font-display text-sm font-bold text-white">{photo.title}</p>
                  </div>
                  <span className="w-8 h-8 rounded-md bg-white/90 text-[#101C2C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#101C2C]/65 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden border border-[#101C2C]/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[340px] sm:h-[460px] w-full bg-[#FAF8F4]">
              <SiteImage
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <button
                type="button"
                aria-label="Close gallery image"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/95 text-[#101C2C] hover:bg-[#F28C28] flex items-center justify-center shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-4 flex items-center justify-between gap-4 bg-white">
              <div>
                <p className="text-xs font-semibold text-[#164E4A]">{selectedPhoto.zone}</p>
                <p className="font-display text-lg font-bold text-[#101C2C]">
                  {selectedPhoto.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="btn-secondary !min-h-[38px] !px-4 !text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
