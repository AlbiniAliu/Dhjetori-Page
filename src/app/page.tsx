import { BioSection } from "@/components/sections/bio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CraftSection } from "@/components/sections/craft-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { MediaSection } from "@/components/sections/media-section";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden pt-[var(--nav-height)]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 85% 12%, var(--color-accent-soft), transparent 70%)",
        }}
      />
      <HeroSection />
      <BioSection />
      <HighlightsSection />
      <MediaSection />
      <CraftSection />
      <ContactSection />
    </main>
  );
}
