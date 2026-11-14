import { ArrowUpRight } from 'lucide-react';
import { GYM_INFO, MEMBERSHIP_PLANS } from '@/data/gym-data';

export function MembershipSection() {
  return (
    <section id="membership" className="bg-[#F3EFE5] text-[#101C2C] bg-cream-grid py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
              <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>06. Membership Pricing</span>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
            >
              Flexible membership plans.
            </h2>
          </div>
          <p className="text-xs text-[#101C2C]/65 max-w-sm leading-relaxed">
            Placeholder rates shown below for demonstration—easy to adjust for your club tiers.
          </p>
        </div>

        {/* 4-Column Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = Boolean(plan.featured);
            const shortActionName = plan.name.replace(' Plan', '');
            const whatsappPlanHref = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${GYM_INFO.brandName}, I am interested in the ${plan.name} (${plan.priceInr}/mo) at your Indiranagar gym.`
            )}`;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl p-6 sm:p-7 border transition-all duration-200 ${
                  isFeatured
                    ? 'bg-[#164E4A] text-[#FAF8F4] border-[#164E4A] shadow-[0_18px_40px_rgba(22,78,74,0.18)]'
                    : 'bg-white text-[#101C2C] border-[#101C2C]/12 hover:border-[#164E4A]/35'
                }`}
              >
                <div className="mb-7">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold ${
                        isFeatured ? 'text-[#F28C28]' : 'text-[#164E4A]'
                      }`}
                    >
                      {plan.durationLabel}
                    </span>
                    {isFeatured && (
                      <span className="text-xs font-bold text-[#F28C28]">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="font-display text-4xl font-bold tracking-tight tabular-nums">
                      {plan.priceInr}
                    </span>
                    <span
                      className={`text-sm ${
                        isFeatured ? 'text-[#F3EFE5]/80' : 'text-[#101C2C]/65'
                      }`}
                    >
                      / mo
                    </span>
                  </div>
                  <p
                    className={`text-xs mb-4 ${
                      isFeatured ? 'text-[#F3EFE5]/75' : 'text-[#101C2C]/60'
                    }`}
                  >
                    {plan.billingNote}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      isFeatured ? 'text-[#FAF8F4]/90' : 'text-[#101C2C]/75'
                    }`}
                  >
                    {plan.summary}
                  </p>
                </div>

                <a
                  href={whatsappPlanHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isFeatured
                      ? 'btn-primary group !w-full !justify-between'
                      : 'btn-teal group !w-full !justify-between'
                  }
                >
                  <span>Enquire {shortActionName}</span>
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center transition-transform duration-150 group-hover:translate-x-0.5 ${
                      isFeatured ? 'bg-[#101C2C]/12' : 'bg-white/12'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
