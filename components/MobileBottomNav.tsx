'use client';

import { useEffect, useState } from 'react';
import { CreditCard, Home, Layers, Mail, Users } from 'lucide-react';

const MOBILE_TABS = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'services', label: 'Services', href: '#services', icon: Layers },
  { id: 'membership', label: 'Plans', href: '#membership', icon: CreditCard },
  { id: 'about', label: 'About', href: '#about', icon: Users },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

const SECTION_ORDER = ['home', 'about', 'services', 'membership', 'contact'];

export function MobileBottomNav() {
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
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
    );

    for (const id of SECTION_ORDER) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md rounded-t-[20px] border-t border-[#101C2C]/10 shadow-[0_-8px_28px_rgba(16,28,44,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 items-center h-[62px] max-w-md mx-auto px-1">
        {MOBILE_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeId === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveId(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-h-[44px] w-full rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] ${
                isActive
                  ? 'text-[#C85A0A]'
                  : 'text-[#101C2C]/80 hover:text-[#101C2C]'
              }`}
            >
              <Icon
                className="w-[19px] h-[19px]"
                strokeWidth={isActive ? 2.1 : 1.75}
                aria-hidden="true"
              />
              <span className="mt-1 text-[9.5px] font-semibold tracking-[0.04em] uppercase leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
