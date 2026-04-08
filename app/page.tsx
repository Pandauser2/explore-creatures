import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { IconCircle64, SvgCheck, SvgGlobe, SvgPaw, SvgPlane } from "@/components/PastelIcons";
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
        <ServicesSection services={data.services} />
      </div>
      <div className="fade-in">
        <section aria-label="Happy customers">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl">
              <img
                src="/images/happy_customer.png"
                alt="Happy customer"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="fade-in">
        <ProcessSection />
      </div>
      <div className="fade-in">
        <TestimonialsSection />
      </div>
      <div className="fade-in">
        <FounderSection />
      </div>
      <div className="fade-in">
        <section className="bg-[var(--bg-soft)] pt-8 pb-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
            {/* Left: Value prop */}
            <div>
              <h2 className="mb-4 flex flex-wrap items-center gap-3 text-3xl font-extrabold md:text-4xl">
                <IconCircle64 tone="coral">
                  <SvgPaw />
                </IconCircle64>
                Move your pet internationally without stress
              </h2>
              <p className="mb-6 text-gray-600">
                Trusted by pet parents across 50+ countries. We handle airlines, paperwork, and
                complex travel rules end-to-end.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center">
                <span className="inline-flex items-center gap-2">
                  <IconCircle64 tone="lavender">
                    <SvgCheck />
                  </IconCircle64>
                  100+ relocations
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconCircle64 tone="coral">
                    <SvgGlobe />
                  </IconCircle64>
                  50+ countries
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconCircle64 tone="mint">
                    <SvgPlane />
                  </IconCircle64>
                  Airline compliant
                </span>
              </div>
            </div>
            {/* Right: Form */}
            <QuoteForm />
          </div>
        </section>
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
