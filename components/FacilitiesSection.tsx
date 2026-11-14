import { EQUIPMENT_GALLERY } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

export function FacilitiesSection() {
  return (
    <section id="equipment" className="bg-white text-[#101C2C] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
            <span>03. Equipment &amp; Zones</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
          >
            Calibrated training equipment across every zone.
          </h2>
        </div>

        {/* Clean Equipment Image Grid — No Over-Explanation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT_GALLERY.map((item) => (
            <article
              key={item.id}
              className="group bg-[#FAF8F4] border border-[#101C2C]/12 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#164E4A]/45 hover:shadow-[0_12px_28px_rgba(16,28,44,0.06)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3EFE5]">
                <SiteImage
                  src={item.image}
                  alt={item.name}
                  fallbackLabel={item.name}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-105 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
                <p className="text-[11px] font-semibold text-[#164E4A] mb-0.5">{item.zone}</p>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#101C2C]">
                  {item.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
