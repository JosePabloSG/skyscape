
import AboutSection from "@/components/about";
import CTASection from "@/components/cta";
import GallerySection from "@/components/gallery";
import HeroSection from "@/components/hero";
import Navbar from "@/components/layout/nav/nav";
import ProcessSection from "@/components/process";
import ServicesSection from "@/components/services";
import { SECTION_IDS } from "@/lib/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id={SECTION_IDS.hero}>
          <HeroSection />
        </section>
        <section id={SECTION_IDS.services}>
          <ServicesSection />
        </section>
        <section id={SECTION_IDS.gallery}>
          <GallerySection />
        </section>
        <section id={SECTION_IDS.about}>
          <AboutSection />
        </section>
        <section id={SECTION_IDS.process}>
          <ProcessSection />
        </section>
        <section id={SECTION_IDS.cta}>
          <CTASection />
        </section>
      </main>
    </>
  )
}