import { PHOTO_GALLERY } from '@/data/gym-data';
import { GalleryGridLightbox } from '@/components/GalleryGridLightbox';

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white text-[#101C2C] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
              <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>05. Photo Gallery</span>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
            >
              Inside our Indiranagar training floor.
            </h2>
          </div>
          <p className="text-sm text-[#101C2C]/70 max-w-sm">
            Natural daylight, solid steel racks, and calm recovery suites.
          </p>
        </div>

        <GalleryGridLightbox photos={PHOTO_GALLERY} />
      </div>
    </section>
  );
}
