import CTASection from "@/components/cta";
import GallerySection from "@/components/gallery";
import HeroSection from "@/components/hero";
import ProcessSection from "@/components/process";
import ServicesSection from "@/components/services";

export default function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <CTASection />
    </>
  )
}