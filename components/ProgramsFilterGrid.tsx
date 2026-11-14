'use client';

import { useState, type ReactNode } from 'react';
import type { GymService, ServiceCategory } from '@/data/gym-data';
import { SiteImage } from '@/components/SiteImage';

const CATEGORIES: Array<'All' | ServiceCategory> = [
  'All',
  'Strength',
  'Conditioning',
  'Mobility & Coaching',
];

interface ProgramsFilterGridProps {
  services: GymService[];
  headingSlot: ReactNode;
}

export function ProgramsFilterGrid({ services, headingSlot }: ProgramsFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | ServiceCategory>('All');

  const visibleServices =
    activeCategory === 'All'
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        {headingSlot}

        <div
          role="tablist"
          aria-label="Filter gym services by category"
          className="flex flex-wrap items-center gap-1 p-1.5 bg-white border border-[#101C2C]/12 rounded-lg self-start lg:self-auto shadow-xs"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 min-h-[38px] font-display text-xs font-semibold rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] ${
                  isActive
                    ? 'bg-[#164E4A] text-[#FAF8F4] shadow-xs'
                    : 'text-[#101C2C]/70 hover:text-[#101C2C] hover:bg-[#FAF8F4]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleServices.map((service) => (
          <article
            key={service.id}
            className="group bg-white border border-[#101C2C]/12 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#164E4A]/45 hover:shadow-[0_12px_28px_rgba(16,28,44,0.06)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F4]">
              <SiteImage
                src={service.image}
                alt={`${service.title} at Vajra Athletic`}
                fallbackLabel={service.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover brightness-105 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold text-[#164E4A] mb-0.5">
                  {service.category}
                </p>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#101C2C]">
                  {service.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
