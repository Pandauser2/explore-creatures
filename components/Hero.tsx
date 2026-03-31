export function Hero() {
  return (
    <section className="w-full bg-[#FFF7E6] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-2 md:gap-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Move your pet internationally without stress 🐾
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We handle airlines, paperwork, and country-specific travel rules end-to-end.
          </p>
          <a
            href="#quote-form"
            className="mt-6 inline-block rounded-full bg-[#3399FF] px-6 py-3 text-white shadow-lg transition-transform motion-safe:hover:scale-105"
          >
            Get your estimate
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Trusted by pet parents moving across 50+ countries
          </p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 opacity-40 blur-3xl"
            aria-hidden
          />
          <img
            src="/images/hero.png"
            alt="Pet travel illustration"
            className="relative w-full max-w-lg scale-105 motion-reduce:animate-none animate-[floatSlow_6s_ease-in-out_infinite] md:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
