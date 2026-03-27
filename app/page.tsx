import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getSiteData } from "@/lib/sheets";

export default async function Page() {
  const data = await getSiteData();

  return (
    <main>
      <Navbar cta={data.hero.cta} />
      <Hero title={data.hero.title} subtitle={data.hero.subtitle} cta={data.hero.cta} />
      <ServicesSection services={data.services} />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta text={data.finalCta} />
      <Footer />
    </main>
  );
}
