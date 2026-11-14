import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { GYM_INFO, INITIAL_REVIEWS } from '@/data/gym-data';
import { ReviewsClientBoard } from '@/components/ReviewsClientBoard';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#101C2C] flex flex-col">
      {/* Server-rendered Top Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#101C2C]/12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-display text-lg font-bold tracking-[-0.02em] text-[#101C2C]"
          >
            <span className="w-8 h-8 rounded-lg overflow-hidden border border-[#101C2C]/15 bg-[#101C2C] shrink-0">
              <Image
                src="/images/vajra-kettlebell-logo.jpg"
                alt={`${GYM_INFO.brandName} logo`}
                width={32}
                height={32}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </span>
            <span>{GYM_INFO.brandName}</span>
          </Link>

          <Link href="/" className="btn-secondary !min-h-[38px] !px-4 !text-xs">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.04em] text-[#164E4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#F28C28]" aria-hidden="true" />
            <span>Member Feedback Archive</span>
          </div>
          <h1
            style={{ textWrap: 'balance' }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[#101C2C] leading-[1.1] mb-3"
          >
            Member Reviews &amp; Feedback
          </h1>
          <p className="text-sm sm:text-base text-[#101C2C]/75">
            Read recent and past feedback from our Bengaluru club or add your own review below.
          </p>
        </div>

        <ReviewsClientBoard initialReviews={INITIAL_REVIEWS} />
      </main>
    </div>
  );
}
