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
          <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-4 py-12 md:grid-cols-2 md:items-start">
            <div className="max-w-lg md:pr-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Real customer experience
              </p>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                {"We discovered wildlife experiences we would've never found on our own."}
              </p>
              <p className="mt-4 text-sm text-gray-600">- Priya Sharma, Happy Customer</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/happy_customer.png"
                alt="Happy customer"
                className="h-auto w-full max-w-sm rounded-xl"
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
      <section id="contact" className="w-full bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Talk to Us Before You Book
          </h2>
          <p className="mt-4 text-gray-600">
            <a href="tel:+917003930780" className="font-medium text-slate-900 hover:underline">
              Phone: +91 7003930780
            </a>
          </p>
          <p className="mt-2 text-gray-600">
            <a
              href="mailto:Info.explorecreatures@gmail.com"
              className="font-medium text-slate-900 hover:underline"
            >
              Email: Info.explorecreatures@gmail.com
            </a>
          </p>
          <p className="mt-2 text-gray-600">Address: 24/4 G Jatin Das Road, Kolkata 700029</p>
          <a
            href="https://wa.me/917003930780"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5a]"
          >
            Chat on WhatsApp
          </a>
          <p className="mt-3 text-sm text-gray-500">
            We typically respond within minutes on WhatsApp
          </p>
        </div>
      </section>
      <a
        href="https://wa.me/917003930780"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M16.04 3.2C9.14 3.2 3.56 8.74 3.56 15.58c0 2.2.58 4.35 1.68 6.24L3.2 28.8l7.17-1.88a12.56 12.56 0 0 0 5.67 1.36h.01c6.89 0 12.48-5.54 12.48-12.38 0-3.31-1.3-6.43-3.65-8.77A12.47 12.47 0 0 0 16.04 3.2Zm0 22.95h-.01a10.3 10.3 0 0 1-5.24-1.42l-.38-.23-4.25 1.11 1.14-4.14-.25-.42a10.2 10.2 0 0 1-1.57-5.47c0-5.65 4.63-10.25 10.33-10.25 2.76 0 5.35 1.07 7.3 3.01a10.16 10.16 0 0 1 3.03 7.24c0 5.65-4.64 10.25-10.3 10.25Zm5.62-7.71c-.31-.15-1.84-.9-2.12-1-.29-.11-.49-.15-.7.15-.2.31-.8 1-1 1.2-.18.2-.37.23-.68.08-.31-.15-1.32-.48-2.51-1.53-.93-.82-1.56-1.84-1.74-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.37.46-.56.15-.18.2-.31.31-.51.1-.21.05-.39-.02-.55-.08-.15-.7-1.67-.96-2.29-.25-.6-.5-.52-.7-.52h-.59c-.2 0-.52.08-.79.39-.27.31-1.04 1.01-1.04 2.45s1.07 2.84 1.22 3.03c.15.2 2.1 3.19 5.1 4.47.71.31 1.27.49 1.7.62.72.22 1.37.19 1.88.12.58-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.07-.12-.27-.2-.58-.35Z" />
        </svg>
      </a>
      <Footer />
    </main>
  );
}
