import { CtaSection } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/footer";
import { FoundersSection } from "@/components/sections/founders";
import { HeroRail } from "@/components/sections/hero-rail";
import { HowWeHelpSection } from "@/components/sections/how-we-help";
import { ManifestoSection } from "@/components/sections/manifesto";
import { WorkGrid } from "@/components/sections/work-grid";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-2.5">
      <section className="relative flex flex-col gap-2.5 desktop:flex-row">
        <HeroRail />
        <WorkGrid />
      </section>

      <ManifestoSection />
      <HowWeHelpSection />
      <FoundersSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
