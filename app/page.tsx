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
      <section className="py-16">
        <div className="fade-in">
          <Hero title={data.hero.title} subtitle={data.hero.subtitle} />
        </div>
      </section>
      <section className="py-16">
        <div className="fade-in">
          <ServicesSection services={data.services} />
        </div>
      </section>
      <section className="py-16">
        <div className="fade-in">
          <ProcessSection />
        </div>
      </section>
      <section className="py-16">
        <div className="fade-in">
          <TestimonialsSection />
        </div>
      </section>
      <FaqSection />
      <FinalCta text={data.finalCta} />
      <Footer />
    </main>
  );
}
