import { MessageCircle } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';

export function FinalCtaSection() {
  const whatsappHref = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${GYM_INFO.brandName}, I am ready to book a gym visit in Indiranagar.`
  )}`;

  return (
    <section className="bg-[#EDF3F2] text-[#101C2C] bg-teal-mist-grid py-20 lg:py-24 border-t border-[#101C2C]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#101C2C]/12 rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[0_14px_36px_rgba(16,28,44,0.06)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
              <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>Indiranagar, Bengaluru</span>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#101C2C] leading-[1.05] mb-4"
            >
              Your Stronger Self Starts Here.
            </h2>
            <p className="text-base text-[#101C2C]/75 leading-[1.6]">
              Visit {GYM_INFO.brandName} or message our Indiranagar desk directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal !min-h-[48px] !px-6"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#membership"
              className="btn-secondary !min-h-[48px] !px-6"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
