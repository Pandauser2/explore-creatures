import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[min(88vw,640px)] w-[min(88vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB84D]/45 blur-[80px]"
        aria-hidden
      />
      <div className="relative z-10">
        <Image
          src="/images/hero-illustration.png"
          alt="Pet travel illustration"
          width={1600}
          height={600}
          priority
          className="relative z-10 h-[400px] w-full object-cover md:h-[500px]"
        />
      </div>
    </div>
  );
}
