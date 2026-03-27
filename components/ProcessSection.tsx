const steps = [
  "Submit details",
  "Receive estimate",
  "Prepare documents",
  "Travel"
];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <div key={step} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase text-slate-500">Step {idx + 1}</p>
            <p className="mt-1 font-medium text-slate-900">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
