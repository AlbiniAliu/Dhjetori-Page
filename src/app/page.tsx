import { BioSection } from "@/components/sections/bio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CraftSection } from "@/components/sections/craft-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { MediaSection } from "@/components/sections/media-section";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <HeroSection />
      <BioSection />
      <HighlightsSection />
      <MediaSection />
      <CraftSection />
      <ContactSection />
    </main>
  );
}
