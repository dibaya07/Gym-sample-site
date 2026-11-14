import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';
import { NavbarHeaderShell } from '@/components/NavbarHeaderShell';
import { NavbarDesktopLinks, type NavItem } from '@/components/NavbarDesktopLinks';

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Trainers', href: '#trainers', id: 'trainers' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Pricing', href: '#membership', id: 'membership' },
];

export function Navbar() {
  return (
    <NavbarHeaderShell>
      {/* Server-rendered Brand Logo + Wordmark */}
      <a
        href="#home"
        className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded-lg"
      >
        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-[#101C2C]/15 shadow-xs shrink-0 bg-[#101C2C] transition-transform duration-150 group-hover:scale-[1.03]">
          <Image
            src="/images/vajra-kettlebell-logo.jpg"
            alt={`${GYM_INFO.brandName} logo`}
            width={36}
            height={36}
            priority
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </span>
        <span className="font-display text-[15px] sm:text-[17px] font-bold tracking-[-0.025em] text-[#101C2C] whitespace-nowrap">
          {GYM_INFO.brandName}
        </span>
      </a>

      {/* Interactive Desktop Scroll-Spy Links Leaf */}
      <NavbarDesktopLinks links={NAV_LINKS} />

      {/* Server-rendered Live Location CTA */}
      <div className="flex items-center shrink-0">
        <a
          href="#location"
          className="btn-teal group !min-h-0 h-9 sm:h-[38px] !px-3 sm:!px-4 !py-0 !text-xs whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
        >
          <MapPin
            className="w-3.5 h-3.5 text-[#F28C28] shrink-0 transition-transform duration-150 group-hover:scale-110"
            aria-hidden="true"
          />
          <span>Live Location</span>
        </a>
      </div>
    </NavbarHeaderShell>
  );
}
