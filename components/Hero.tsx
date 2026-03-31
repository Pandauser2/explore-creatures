export function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        src="/images/hero.png"
        alt="Pet travel illustration"
        className="hero-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Move your pet internationally without stress 🐾
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            We handle airlines, paperwork, and country rules end-to-end.
          </p>
          <a
            href="#quote-form"
            className="mt-6 inline-block rounded-full bg-[#3399FF] px-6 py-3 text-white shadow-lg transition-transform motion-safe:hover:scale-105"
          >
            Get your estimate
          </a>
        </div>
      </div>
    </section>
  );
}
