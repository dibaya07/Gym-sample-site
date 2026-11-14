import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

export function HeroSection() {
  const whatsappHref = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${GYM_INFO.brandName}, I would like to visit your gym in Indiranagar.`
  )}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-premium text-[#101C2C] border-b border-[#101C2C]/10"
    >
      {/* Subtle architectural accent framing lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-[#164E4A]/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-[300px] h-[300px] rounded-full border border-[#F28C28]/18"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3.5 sm:mb-5">
              <span className="w-5 sm:w-6 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>{GYM_INFO.brandName} &middot; {GYM_INFO.tagline}</span>
            </div>

            <h1
              style={{ textWrap: 'balance' }}
              className="font-display font-bold text-[#101C2C] tracking-[-0.03em] leading-[1.08] text-[1.85rem] sm:text-[2.75rem] lg:text-[3.85rem] mb-4 sm:mb-6"
            >
              Indiranagar’s Modern Strength &amp; Conditioning Club.
            </h1>

            <p className="text-sm sm:text-[17px] text-[#101C2C]/75 leading-[1.6] max-w-xl mb-6 sm:mb-8">
              Show up for yourself today. Turn every drop of daily effort into strength,
              discipline, and energy that lasts a lifetime.
            </p>

            {/* Restored Previous Our Services Button Style + WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 mb-8 sm:mb-10">
              <a
                href="#services"
                className="btn-secondary group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
              >
                <span>Our Services</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#164E4A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Compact Club Stats */}
            <div className="pt-5 sm:pt-6 border-t border-[#101C2C]/12 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div>
                <p className="font-display text-xl sm:text-[26px] font-bold tracking-tight text-[#101C2C] tabular-nums">
                  Est. {GYM_INFO.foundedYear}
                </p>
                <p className="text-[11px] sm:text-xs text-[#101C2C]/65 mt-0.5">Indiranagar, BLR</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-[26px] font-bold tracking-tight text-[#164E4A] tabular-nums">
                  2,100+
                </p>
                <p className="text-[11px] sm:text-xs text-[#101C2C]/65 mt-0.5">Active Members</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-[26px] font-bold tracking-tight text-[#F28C28] tabular-nums">
                  22
                </p>
                <p className="text-[11px] sm:text-xs text-[#101C2C]/65 mt-0.5">Certified Coaches</p>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Framed Indian Gym Floor Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-sm border border-[#101C2C]/12 rounded-xl p-3 shadow-[0_20px_48px_rgba(16,28,44,0.1)]">
              <div className="relative h-[210px] sm:h-[260px] lg:h-[275px] w-full rounded-lg overflow-hidden bg-[#F3EFE5]">
                <SiteImage
                  src="/images/indian_gym_floor_1794575633498.jpg"
                  alt="Vajra Athletic gym floor in Indiranagar, Bengaluru"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center brightness-105"
                />
              </div>

              <div className="pt-3.5 pb-1.5 px-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#164E4A]">
                    100 Feet Road, Indiranagar
                  </p>
                  <p className="text-sm font-display font-bold tracking-tight text-[#101C2C]">
                    Open Daily &middot; 05:30 AM – 10:30 PM
                  </p>
                </div>
                <a
                  href="#location"
                  aria-label="View live location map"
                  className="w-10 h-10 rounded-lg bg-[#F3EFE5] border border-[#101C2C]/10 hover:bg-[#F28C28] hover:border-[#F28C28] text-[#101C2C] flex items-center justify-center shrink-0 transition-all duration-150"
                >
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
