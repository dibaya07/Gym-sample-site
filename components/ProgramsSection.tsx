import { SERVICES } from '@/data/gym-data';
import { ProgramsFilterGrid } from '@/components/ProgramsFilterGrid';

export function ProgramsSection() {
  const headingSlot = (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
        <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
        <span>02. Services We Provide</span>
      </div>
      <h2
        style={{ textWrap: 'balance' }}
        className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
      >
        Training services tailored to your goals.
      </h2>
    </div>
  );

  return (
    <section id="services" className="bg-[#F3EFE5] text-[#101C2C] bg-cream-grid py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ProgramsFilterGrid services={SERVICES} headingSlot={headingSlot} />
      </div>
    </section>
  );
}
