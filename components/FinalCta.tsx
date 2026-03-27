type FinalCtaProps = {
  text: string;
};

export function FinalCta({ text }: FinalCtaProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">{text}</h2>
        <a
          href="#quote-form"
          className="mt-4 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
        >
          Start now
        </a>
      </div>
    </section>
  );
}
