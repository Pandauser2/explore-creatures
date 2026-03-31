export function Hero() {
  return (
    <section className="w-full bg-[#FFF7E6] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
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
        <div className="flex justify-center">
          <img
            src="/images/hero.png"
            alt="Pet travel illustration"
            className="w-full max-w-md motion-reduce:animate-none animate-[floatSlow_6s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
