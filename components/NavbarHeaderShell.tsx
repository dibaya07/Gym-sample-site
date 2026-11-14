'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface NavbarHeaderShellProps {
  children: ReactNode;
}

export function NavbarHeaderShell({ children }: NavbarHeaderShellProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateScrolled = () => {
      rafId = 0;
      const isNowScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === isNowScrolled ? prev : isNowScrolled));
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-2.5 pb-1 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-[1280px] mx-auto rounded-xl border transition-all duration-200 px-3.5 sm:px-5 h-14 sm:h-[62px] flex items-center justify-between gap-3 sm:gap-6 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-[#101C2C]/14 shadow-[0_12px_32px_rgba(16,28,44,0.08)]'
            : 'bg-[#FAF8F4]/92 backdrop-blur-md border-[#101C2C]/10 shadow-[0_4px_16px_rgba(16,28,44,0.04)]'
        }`}
      >
        {children}
      </div>
    </header>
  );
}
