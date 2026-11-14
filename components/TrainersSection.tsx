import { TRAINERS } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

export function TrainersSection() {
  return (
    <section id="trainers" className="bg-[#EDF3F2] text-[#101C2C] bg-teal-mist-grid py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
            <span>04. Trainers of Vajra</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
          >
            Meet our certified trainers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRAINERS.map((trainer) => (
            <article
              key={trainer.id}
              className="group flex flex-col bg-white border border-[#101C2C]/12 rounded-xl overflow-hidden shadow-[0_8px_28px_rgba(16,28,44,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3.6] w-full bg-[#FAF8F4] overflow-hidden">
                <SiteImage
                  src={trainer.image}
                  alt={trainer.name}
                  fallbackLabel={trainer.name}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top brightness-105 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-[#101C2C] mb-1.5">
                  {trainer.name}
                </h3>
                <p className="text-sm font-medium text-[#164E4A] mb-1">
                  {trainer.specialization}
                </p>
                <p className="text-xs font-semibold text-[#101C2C]/65">
                  {trainer.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
