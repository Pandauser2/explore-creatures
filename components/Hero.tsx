import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[min(88vw,640px)] w-[min(88vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB84D]/45 blur-[80px]"
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
          <div className="absolute inset-0 flex items-center bg-black/30">
            <div className="mx-auto max-w-6xl px-6 text-white">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Move your pet anywhere in the world 🐾
              </h1>
              <p className="text-lg md:text-xl">
                We handle airlines, paperwork, and complex travel rules end-to-end
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
