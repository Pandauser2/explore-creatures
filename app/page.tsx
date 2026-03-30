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
      <Navbar />
      <div className="fade-in">
        <Hero title={data.hero.title} subtitle={data.hero.subtitle} />
      </div>
      <div className="fade-in">
        <ServicesSection services={data.services} />
      </div>
      <div className="fade-in">
        <ProcessSection />
      </div>
      <div className="fade-in">
        <TestimonialsSection />
      </div>
      <div className="fade-in">
        <FaqSection />
      </div>
      <div className="fade-in">
        <FinalCta text={data.finalCta} />
      </div>
      <Footer />
    </main>
  );
}
