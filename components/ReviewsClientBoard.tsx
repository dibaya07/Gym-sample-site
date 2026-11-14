'use client';

import { useState, useSyncExternalStore, type FormEvent } from 'react';
import { CheckCircle2, MessageSquarePlus, Star } from 'lucide-react';
import type { MemberReview } from '@/data/gym-data';

const STORAGE_KEY = 'vajra_custom_reviews_v1';
const STORAGE_EVENT = 'vajra_reviews_updated';

function subscribeToReviews(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(STORAGE_EVENT, callback);
  };
}

function getReviewsSnapshot(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) || '[]';
  } catch {
    return '[]';
  }
}

function getServerReviewsSnapshot(): string {
  return '[]';
}

interface ReviewsClientBoardProps {
  initialReviews: MemberReview[];
}

export function ReviewsClientBoard({ initialReviews }: ReviewsClientBoardProps) {
  const customReviewsJson = useSyncExternalStore(
    subscribeToReviews,
    getReviewsSnapshot,
    getServerReviewsSnapshot
  );

  let customReviews: MemberReview[] = [];
  try {
    const parsed = JSON.parse(customReviewsJson);
    if (Array.isArray(parsed)) {
      customReviews = parsed as MemberReview[];
    }
  } catch {
    customReviews = [];
  }

  const reviews = [...customReviews, ...initialReviews];

  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (quote.trim().length < 6) {
      setError('Please share a short review.');
      return;
    }

    const parts = name.trim().split(/\s+/);
    const initials =
      parts.length >= 2
        ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
        : parts[0].slice(0, 2).toUpperCase();

    const newReview: MemberReview = {
      id: `rev-user-${reviews.length + 1}-${initials.toLowerCase()}`,
      name: name.trim(),
      role: area.trim() || 'Indiranagar, Bengaluru',
      tenure: 'Submitted today',
      rating,
      initials,
      quote: quote.trim(),
    };

    try {
      const updatedCustom = [newReview, ...customReviews];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCustom));
      window.dispatchEvent(new Event(STORAGE_EVENT));
    } catch {
      // Ignore storage write errors
    }

    setName('');
    setArea('');
    setRating(5);
    setQuote('');
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-white border border-[#101C2C]/12 rounded-xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(16,28,44,0.04)] mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <MessageSquarePlus className="w-5 h-5 text-[#164E4A]" aria-hidden="true" />
          <h2 className="font-display text-lg font-bold text-[#101C2C]">Add Your Review</h2>
        </div>

        {submitted && (
          <div
            role="status"
            className="mb-5 flex items-center gap-2.5 bg-[#EDF3F2] border border-[#164E4A]/25 rounded-lg px-4 py-3 text-xs font-semibold text-[#164E4A]"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Your review has been added below.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="page-review-name"
                className="block text-xs font-semibold text-[#101C2C] mb-1.5"
              >
                Your Name *
              </label>
              <input
                id="page-review-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aarav Sharma"
                className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg focus:outline-none focus:bg-white focus:border-[#164E4A]"
              />
            </div>

            <div>
              <label
                htmlFor="page-review-area"
                className="block text-xs font-semibold text-[#101C2C] mb-1.5"
              >
                Neighborhood (Optional)
              </label>
              <input
                id="page-review-area"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Indiranagar"
                className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg focus:outline-none focus:bg-white focus:border-[#164E4A]"
              />
            </div>

            <div>
              <span className="block text-xs font-semibold text-[#101C2C] mb-1.5">
                Rating
              </span>
              <div className="flex items-center gap-1 min-h-[42px]">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    aria-label={`Rate ${value} out of 5 stars`}
                    className="p-1.5 rounded hover:bg-[#F3EFE5] cursor-pointer"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        value <= rating
                          ? 'fill-[#F28C28] text-[#F28C28]'
                          : 'text-[#AEB7BC]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="page-review-quote"
              className="block text-xs font-semibold text-[#101C2C] mb-1.5"
            >
              Your Feedback *
            </label>
            <textarea
              id="page-review-quote"
              rows={3}
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Share your experience with our gym floor, equipment, or trainers."
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg focus:outline-none focus:bg-white focus:border-[#164E4A]"
            />
          </div>

          {error && <p className="text-xs font-semibold text-red-700">{error}</p>}

          <div className="flex justify-end">
            <button type="submit" className="btn-navy !min-h-[42px]">
              Submit Review
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="font-display text-xl font-bold text-[#101C2C]">
            All Member Reviews ({reviews.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-white border border-[#101C2C]/12 rounded-xl p-6 shadow-[0_6px_18px_rgba(16,28,44,0.03)]"
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

                <blockquote className="text-sm text-[#101C2C]/80 leading-relaxed mb-5">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#101C2C]/10">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-md bg-[#F3EFE5] text-[#164E4A] font-display text-xs font-bold flex items-center justify-center shrink-0"
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-[#101C2C] truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#101C2C]/65 truncate">
                    {item.role} &middot; {item.tenure}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
