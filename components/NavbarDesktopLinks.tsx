'use client';

import { useEffect, useState } from 'react';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

interface NavbarDesktopLinksProps {
  links: NavItem[];
}

export function NavbarDesktopLinks({ links }: NavbarDesktopLinksProps) {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-18% 0px -65% 0px', threshold: 0 }
    );

    for (const link of links) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav
      aria-label="Primary Navigation"
      className="hidden lg:flex items-center gap-0.5 bg-[#F3EFE5]/80 border border-[#101C2C]/8 rounded-lg p-1"
    >
      {links.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveId(item.id)}
            className={`px-3 py-1.5 rounded-md text-[13px] whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] ${
              isActive
                ? 'bg-white text-[#101C2C] font-semibold shadow-[0_1px_4px_rgba(16,28,44,0.08)]'
                : 'text-[#101C2C]/70 font-medium hover:text-[#101C2C] hover:bg-white/60'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
