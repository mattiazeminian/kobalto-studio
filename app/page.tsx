import { InteractiveIntro } from "@/components/InteractiveIntro";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ScrollStatement } from "@/components/ScrollStatement";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { projects } from "@/src/content/site";

export default function HomePage() {
  return (
    <main>
      <a className="skip-link" href="#progetti">
        Vai ai progetti
      </a>
      <InteractiveIntro />
      <div className="gallery-column">
        <ProjectGallery projects={projects} />
      </div>
      <ScrollStatement />
      <ServicesSection />
      <section className="closing-cta">
        <span className="eyebrow">Kobalto Studio / Verona</span>
        <h2>Un sito o un prodotto da progettare?</h2>
        <a className="pill pill-light" href="/contatti">
          Parliamone
        </a>
      </section>
      <Footer />
    </main>
  );
}
