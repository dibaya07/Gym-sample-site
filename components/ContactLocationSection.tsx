import { Clock, MapPin, Phone } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';
import { LazyGymLocationMap } from '@/components/LazyGymLocationMap';
import { WhatsAppEnquiryForm } from '@/components/WhatsAppEnquiryForm';

interface ContactLocationSectionProps {
  mapsApiKey: string;
}

export function ContactLocationSection({ mapsApiKey }: ContactLocationSectionProps) {
  return (
    <section id="contact" className="bg-[#F3EFE5] text-[#101C2C] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
            <span>09. Contact &amp; Live Location</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-display text-3xl sm:text-[2.5rem] font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
          >
            Send a WhatsApp enquiry or check our live location.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Static Club Info + Interactive WhatsApp Enquiry Leaf */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-[#101C2C]/12 rounded-xl p-6 sm:p-8 shadow-[0_10px_28px_rgba(16,28,44,0.04)]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-6 mb-6 border-b border-[#101C2C]/12 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#164E4A] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-[#101C2C]">Bengaluru Club</p>
                    <p className="text-xs text-[#101C2C]/75 leading-relaxed">
                      {GYM_INFO.addressLine1}
                      <br />
                      {GYM_INFO.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#164E4A] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-[#101C2C]">Club Hours</p>
                    <ul className="text-xs text-[#101C2C]/75 space-y-0.5 tabular-nums">
                      {GYM_INFO.hours.map((h) => (
                        <li key={h.days}>
                          {h.days}: {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#164E4A] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-[#101C2C]">Phone &amp; WhatsApp</p>
                    <a
                      href={`tel:${GYM_INFO.phone.replace(/[^+\d]/g, '')}`}
                      className="text-xs text-[#101C2C]/75 hover:text-[#164E4A] underline tabular-nums"
                    >
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <WhatsAppEnquiryForm
                brandName={GYM_INFO.brandName}
                neighborhood={GYM_INFO.neighborhood}
                city={GYM_INFO.city}
                whatsappNumber={GYM_INFO.whatsappNumber}
              />
            </div>
          </div>

          {/* Right Column: Lazy-Loaded Live Location Map */}
          <div id="location" className="lg:col-span-6 flex flex-col">
            <LazyGymLocationMap apiKey={mapsApiKey} />
          </div>
        </div>
      </div>
    </section>
  );
}
