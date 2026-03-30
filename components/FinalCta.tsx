type FinalCtaProps = {
  text: string;
};

export function FinalCta({ text }: FinalCtaProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-3xl md:text-4xl font-bold">{text}</h2>
          <a href="#quote-form" className="btn-primary mt-4 inline-flex items-center">
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}
