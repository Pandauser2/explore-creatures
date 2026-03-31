import Image from "next/image";

export function Hero() {
  return (
    <div className="w-full">
      <Image
        src="/images/hero-illustration.png"
        alt="Pet travel illustration"
        width={1600}
        height={600}
        priority
        className="h-[400px] w-full object-cover md:h-[500px]"
      />
    </div>
  );
}
