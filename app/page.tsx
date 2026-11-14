import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { TrainersSection } from '@/components/TrainersSection';
import { GallerySection } from '@/components/GallerySection';
import { MembershipSection } from '@/components/MembershipSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { SocialLinksSection } from '@/components/SocialLinksSection';
import { ContactLocationSection } from '@/components/ContactLocationSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const mapsApiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.GOOGLE_MAPS_API_KEY ||
    '';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <TrainersSection />
        <GallerySection />
        <MembershipSection />
        <TestimonialsSection />
        <SocialLinksSection />
        <ContactLocationSection mapsApiKey={mapsApiKey} />
        <FinalCtaSection />
      </main>

      <Footer />

      <MobileBottomNav />
      <WhatsAppWidget />
    </div>
  );
}
