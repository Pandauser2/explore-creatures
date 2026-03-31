import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { QuoteForm } from "@/components/QuoteForm";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getSiteData } from "@/lib/sheets";

export default async function Page() {
  const data = await getSiteData();

  return (
    <main>
      <Navbar />
      <div className="fade-in">
        <Hero />
      </div>
      <div className="fade-in">
        <section className="py-16 bg-[var(--bg-soft)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
            {/* Left: Value prop */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">
                Move your pet internationally without stress 🐾
              </h1>
              <p className="mb-6 text-gray-600">
                Trusted by pet parents across 50+ countries. We handle airlines, paperwork, and
                complex travel rules end-to-end.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>✅ 100+ relocations</span>
                <span>🌍 50+ countries</span>
                <span>✈️ Airline compliant</span>
              </div>
            </div>
            {/* Right: Form */}
            <QuoteForm />
          </div>
        </section>
      </div>
      <div className="fade-in">
        <ServicesSection services={data.services} />
      </div>
      <div className="fade-in">
        <ProcessSection />
      </div>
      <div className="fade-in">
        <FounderSection />
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
