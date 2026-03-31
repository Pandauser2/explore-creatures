import Image from "next/image";

import { QuoteForm } from "@/components/QuoteForm";

type HeroProps = {
  title: string;
  subtitle: string;
};

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[var(--primary)] p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-gray-800">{subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Get your estimate
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-800">
                <span className="card px-4 py-2">1000+ relocations</span>
                <span className="card px-4 py-2">50+ countries</span>
                <span className="card px-4 py-2">999+ pets</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex justify-center">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Pet travel illustration"
                  width={500}
                  height={500}
                  priority
                  className="float mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6">
        <QuoteForm />
      </div>
    </section>
  );
}
