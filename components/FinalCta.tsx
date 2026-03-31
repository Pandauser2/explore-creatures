type FinalCtaProps = {
  text: string;
};

export function FinalCta({ text }: FinalCtaProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{text}</h2>
          <a
            href="#quote-form"
            className="mt-4 inline-flex items-center rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Start your pet&apos;s journey
          </a>
        </div>
      </div>
    </section>
  );
}
