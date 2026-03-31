import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[min(88vw,640px)] w-[min(88vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB84D]/35 blur-[80px]"
        aria-hidden
      />
      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <Image
            src="/images/hero-illustration.png"
            alt="Pet travel illustration"
            width={1600}
            height={600}
            priority
            className="h-[400px] w-full object-cover md:h-[500px]"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/60 to-black/20 pb-12 pt-24 md:items-center md:pb-0 md:pt-0">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-2xl rounded-2xl bg-black/40 px-5 py-6 backdrop-blur-sm md:bg-black/35 md:px-8 md:py-7">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85)] md:text-5xl md:leading-[1.1]">
                  Move your pet internationally without stress 🐾
                </h1>
                <p className="text-lg font-medium leading-relaxed text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.8)] md:text-xl">
                  We handle airlines, paperwork, and country-specific travel rules end-to-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
