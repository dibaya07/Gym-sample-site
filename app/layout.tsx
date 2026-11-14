import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { QuotaDefenseBanner } from '@/components/QuotaDefenseBanner';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vajra Athletic | Strength & Conditioning Club — Indiranagar, Bengaluru',
  description:
    'Founded in 2016 in Indiranagar, Bengaluru. Modern strength training, fat loss, personal coaching, Olympic equipment, and recovery facilities.',
  icons: {
    icon: '/images/vajra-kettlebell-logo.jpg',
    shortcut: '/images/vajra-kettlebell-logo.jpg',
    apple: '/images/vajra-kettlebell-logo.jpg',
  },
  openGraph: {
    title: 'Vajra Athletic | Strength & Conditioning Club — Indiranagar, Bengaluru',
    description:
      'Founded in 2016 in Indiranagar, Bengaluru. Modern strength training, fat loss, personal coaching, Olympic equipment, and recovery facilities.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vajra Athletic | Strength & Conditioning Club — Indiranagar, Bengaluru',
    description:
      'Founded in 2016 in Indiranagar, Bengaluru. Modern strength training, fat loss, personal coaching, Olympic equipment, and recovery facilities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#FAF8F4] text-[#101C2C] font-sans antialiased selection:bg-[#F28C28] selection:text-[#101C2C]"
      >
        <QuotaDefenseBanner />
        {children}
      </body>
    </html>
  );
}
