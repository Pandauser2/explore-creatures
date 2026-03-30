import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

type HeroProps = {
  title: string;
  subtitle: string;
  cta: string;
};

export function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="w-full px-4 py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Stress-free pet travel, start to finish 🐾
          </h1>
          <p className="mt-4 max-w-xl text-slate-700">
            Move your pet safely with expert support. Get a quick estimate in seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#quote-form" className="btn-primary inline-flex items-center">
              Get your estimate
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-slate-900"
            >
              {cta}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="card px-4 py-2">1000+ relocations</span>
            <span className="card px-4 py-2">50+ countries</span>
            <span className="card px-4 py-2">999+ pets</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8"
              alt="Happy pet and owner in travel setting"
              width={1400}
              height={900}
              priority
              className="h-72 w-full rounded-2xl object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl">
        <QuoteForm />
      </div>
    </section>
  );
}
