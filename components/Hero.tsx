import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

type HeroProps = {
  title: string;
  subtitle: string;
  cta: string;
};

export function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-2 md:py-12">
      <div className="order-2 md:order-1">
        <div className="relative mb-5 overflow-hidden rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Happy pet ready for travel"
            width={900}
            height={600}
            priority
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-0 bg-slate-900/35" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-lg text-slate-700">{subtitle}</p>
        <a
          href="#quote-form"
          className="mt-5 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          {cta}
        </a>
      </div>
      <div className="order-1 md:order-2">
        <QuoteForm />
      </div>
    </section>
  );
}
