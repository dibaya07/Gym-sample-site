import { ArrowUpRight, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/gym-data';

function getPlatformIcon(id: string) {
  switch (id) {
    case 'instagram':
      return <Instagram className="w-5 h-5" aria-hidden="true" />;
    case 'youtube':
      return <Youtube className="w-5 h-5" aria-hidden="true" />;
    default:
      return <MessageCircle className="w-5 h-5 text-[#25D366]" aria-hidden="true" />;
  }
}

export function SocialLinksSection() {
  return (
    <section id="social" className="bg-white text-[#101C2C] py-16 lg:py-20 border-t border-[#101C2C]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
              <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>08. Social Links</span>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-3xl sm:text-[2.25rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
            >
              Follow our daily lifts and community updates.
            </h2>
          </div>
          <p className="text-sm text-[#101C2C]/70 max-w-sm">
            Stay connected with our Bengaluru coaches, events, and workout clips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-[#FAF8F4] border border-[#101C2C]/12 rounded-xl p-6 hover:bg-white hover:border-[#164E4A]/45 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(16,28,44,0.06)] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-[#101C2C] text-[#FAF8F4] flex items-center justify-center shrink-0 group-hover:bg-[#164E4A] transition-colors">
                  {getPlatformIcon(item.id)}
                </span>
                <span className="w-8 h-8 rounded-md bg-white border border-[#101C2C]/10 group-hover:bg-[#F28C28] group-hover:border-[#F28C28] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#101C2C]" aria-hidden="true" />
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#164E4A] mb-0.5">{item.platform}</p>
                <p className="font-display text-lg font-bold text-[#101C2C] mb-1.5">
                  {item.handle}
                </p>
                <p className="text-xs text-[#101C2C]/70">{item.note}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
