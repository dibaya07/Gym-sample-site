import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { INITIAL_REVIEWS } from '@/data/gym-data';

export function TestimonialsSection() {
  const topThreeReviews = INITIAL_REVIEWS.slice(0, 3);

  return (
    <section
      id="reviews"
      className="bg-[#EDF3F2] text-[#101C2C] bg-teal-mist-grid py-14 lg:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-2">
              <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
              <span>07. Member Feedback &amp; Reviews</span>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1]"
            >
              What our members say.
            </h2>
          </div>

          <Link
            href="/reviews"
            className="btn-teal group !min-h-[40px] !px-4 !text-xs self-start sm:self-auto"
          >
            <span>See All &amp; Add Review</span>
            <ArrowRight
              className="w-3.5 h-3.5 text-[#F28C28] transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Compact Horizontal 3-Review Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {topThreeReviews.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-white border border-[#101C2C]/12 rounded-xl p-5 shadow-[0_6px_18px_rgba(16,28,44,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#F28C28] text-[#F28C28]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#164E4A] tabular-nums">
                    {item.rating}.0 / 5.0
                  </span>
                </div>

                <blockquote className="text-sm text-[#101C2C]/80 leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-[#101C2C]/10">
                <div
                  aria-hidden="true"
                  className="w-8 h-8 rounded-md bg-[#F3EFE5] text-[#164E4A] font-display text-xs font-bold flex items-center justify-center shrink-0"
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-[#101C2C] truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-[#101C2C]/65 truncate">
                    {item.role} &middot; {item.tenure}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
