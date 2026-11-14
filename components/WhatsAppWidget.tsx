import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';

export function WhatsAppWidget() {
  const whatsappHref = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${GYM_INFO.brandName}, I would like to enquire about memberships in Indiranagar.`
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${GYM_INFO.brandName} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-40 hidden lg:inline-flex items-center gap-2.5 h-11 px-4 rounded-lg bg-[#101C2C] text-[#FAF8F4] border border-[#AEB7BC]/25 shadow-[0_12px_28px_rgba(16,28,44,0.22)] hover:bg-[#164E4A] hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
    >
      <span className="w-6 h-6 rounded-md bg-[#25D366]/18 text-[#25D366] flex items-center justify-center shrink-0">
        <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
      <span className="font-display text-xs font-semibold tracking-tight">
        WhatsApp Concierge
      </span>
      <ArrowUpRight
        className="w-3.5 h-3.5 text-[#F28C28] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
