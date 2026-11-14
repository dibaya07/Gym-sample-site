import Image from 'next/image';
import { GYM_INFO, SERVICES, SOCIAL_LINKS } from '@/data/gym-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F4] text-[#101C2C]/75 border-t border-[#101C2C]/12 pt-16 pb-24 lg:pb-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#101C2C]/12">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 mb-4 group"
            >
              <span className="w-9 h-9 rounded-lg overflow-hidden border border-[#101C2C]/15 bg-[#101C2C] shrink-0">
                <Image
                  src="/images/vajra-kettlebell-logo.jpg"
                  alt={`${GYM_INFO.brandName} logo`}
                  width={36}
                  height={36}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-[#101C2C]">
                {GYM_INFO.brandName}
              </span>
            </a>
            <p className="text-sm text-[#101C2C]/70 leading-relaxed max-w-sm mb-5">
              Started in {GYM_INFO.foundedYear} on 100 Feet Road, Indiranagar, Bengaluru. Modern
              strength training, conditioning, and recovery.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-[#164E4A]">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F28C28] transition-colors"
                >
                  {item.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <p className="font-display text-xs font-bold tracking-wide text-[#101C2C] mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-[#101C2C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-[#101C2C] transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#101C2C] transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#101C2C] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#101C2C] transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-bold tracking-wide text-[#101C2C] mb-4">
              Services Provided
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-[#101C2C] transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-display text-xs font-bold tracking-wide text-[#101C2C] mb-4">
              Indiranagar Club
            </p>
            <div className="space-y-2.5 text-sm">
              <p>{GYM_INFO.fullAddress}</p>
              <p className="tabular-nums">{GYM_INFO.phone}</p>
              <p className="text-xs text-[#101C2C]/60 pt-1 tabular-nums">
                Mon–Sat 05:30–22:30 &middot; Sun 07:00–20:00
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#101C2C]/60">
          <p>
            &copy; {year} {GYM_INFO.brandName}, Bengaluru. All rights reserved.
          </p>
          <p>Placeholder rates provided for club demonstration.</p>
        </div>
      </div>
    </footer>
  );
}
