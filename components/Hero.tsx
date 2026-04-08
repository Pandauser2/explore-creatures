export function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#FFF7E6] pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-2 md:gap-8">
        <div className="max-w-lg min-w-0">
          <p className="text-sm font-semibold text-[#3399FF] mb-2">
            International Pet Relocation
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Move your pet internationally without stress 🐾
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We handle airlines, paperwork, and country-specific travel rules end-to-end.
          </p>
          <a
            href="#quote-form"
            className="mt-8 inline-block rounded-full bg-[#3399FF] px-8 py-3 font-semibold text-white shadow-xl transition-all hover:bg-[#2f89e6] motion-safe:hover:scale-105"
          >
            Get your estimate
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Trusted by pet parents moving across 50+ countries
          </p>
        </div>
        <div className="relative flex justify-center overflow-hidden md:justify-end">
          <div
            className="pointer-events-none absolute right-0 top-[45%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#FFB84D]/40 via-[#FFD89B]/30 to-transparent blur-3xl"
            aria-hidden
          />
          <img
            src="/images/hero.png"
            alt="Pet travel illustration"
            className="relative w-[110%] max-w-none translate-x-4 motion-reduce:animate-none animate-[floatSlow_6s_ease-in-out_infinite] md:w-[115%] md:translate-x-8"
          />
        </div>
      </div>
    </section>
  );
}
