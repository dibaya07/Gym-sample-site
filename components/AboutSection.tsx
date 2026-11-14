import { MapPin, Calendar, Users } from 'lucide-react';
import { ABOUT_STATS, GYM_INFO } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-white text-[#101C2C] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
            <div className="relative flex-1 min-h-[320px] lg:min-h-[410px] rounded-xl overflow-hidden border border-[#101C2C]/12 shadow-[0_12px_32px_rgba(16,28,44,0.06)]">
              <SiteImage
                src="/images/indian_gym_floor_1794575633498.jpg"
                alt="Vajra Athletic Bengaluru sunlit strength floor and turf"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
                <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
                <span>01. About {GYM_INFO.brandName}</span>
              </div>
              <h2
                style={{ textWrap: 'balance' }}
                className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1] mb-5"
              >
                {GYM_INFO.brandName} — Training Bengaluru since {GYM_INFO.foundedYear}.
              </h2>
              <p className="text-base text-[#101C2C]/75 leading-relaxed mb-7">
                {GYM_INFO.story}
              </p>

              {/* Key Club Identity Facts: Name, Location, Founded, Trainers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FAF8F4] border border-[#101C2C]/10 rounded-xl p-5 mb-7">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display text-xs font-bold text-[#101C2C]">Location</p>
                    <p className="text-xs text-[#101C2C]/70 mt-0.5">
                      100 Feet Road, Indiranagar, Bengaluru
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display text-xs font-bold text-[#101C2C]">Started</p>
                    <p className="text-xs text-[#101C2C]/70 mt-0.5">
                      Founded in {GYM_INFO.foundedYear} (10+ Years)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display text-xs font-bold text-[#101C2C]">Coaches</p>
                    <p className="text-xs text-[#101C2C]/70 mt-0.5">
                      Led by Arjun, Ananya &amp; Vikram
                    </p>
                  </div>
                </div>
              </div>

              {/* Concise Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#101C2C]/12 pt-6">
                <div>
                  <h3 className="font-display text-sm font-bold text-[#164E4A] mb-1.5">
                    Our Mission
                  </h3>
                  <p className="text-sm text-[#101C2C]/75 leading-relaxed">
                    {GYM_INFO.mission}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-[#164E4A] mb-1.5">
                    Our Vision
                  </h3>
                  <p className="text-sm text-[#101C2C]/75 leading-relaxed">
                    {GYM_INFO.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Ledger */}
        <div className="mt-14 pt-10 border-t border-[#101C2C]/12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#101C2C] tabular-nums mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-[#164E4A] mb-0.5">{stat.label}</p>
              <p className="text-xs text-[#101C2C]/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
