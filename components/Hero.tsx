export function Hero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#FFF7E6] py-20">
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
            className="mt-6 inline-block rounded-full bg-[#3399FF] px-8 py-3 font-semibold text-white shadow-xl transition-all hover:bg-[#2f89e6] motion-safe:hover:scale-105"
          >
            Get your estimate
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Trusted by pet parents moving across 50+ countries
          </p>
        </div>
        <div className="relative flex justify-center overflow-visible md:justify-end">
          <div
            className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200 via-orange-100 to-transparent opacity-50 blur-3xl"
            aria-hidden
          />
          <img
            src="/images/hero.png"
            alt="Pet travel illustration"
            className="relative w-[120%] max-w-none translate-x-6 motion-reduce:animate-none animate-[floatSlow_6s_ease-in-out_infinite] md:w-[130%] md:translate-x-12"
          />
        </div>
      </div>
      <div className="mt-16 border-t border-gray-200" />
    </section>
  );
}
