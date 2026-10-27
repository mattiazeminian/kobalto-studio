import { CtaSection } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/footer";
import { FoundersSection } from "@/components/sections/founders";
import { HeroRail } from "@/components/sections/hero-rail";
import { WorkGrid } from "@/components/sections/work-grid";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-2.5">
      <section className="relative flex flex-col justify-center w-full gap-2.5 desktop:flex-row mx-auto">
        <HeroRail />
        <WorkGrid />
      </section>

      <FoundersSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
