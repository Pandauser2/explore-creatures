import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

type HeroProps = {
  title: string;
  subtitle: string;
};

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
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
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="card px-4 py-2">1000+ relocations</span>
            <span className="card px-4 py-2">50+ countries</span>
            <span className="card px-4 py-2">999+ pets</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="Happy pet travel"
              width={600}
              height={400}
              priority
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl">
        <QuoteForm />
      </div>
    </section>
  );
}
