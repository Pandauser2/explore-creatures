const steps = [
  {
    title: "Share your details",
    text: "Tell us where your pet is traveling from and to."
  },
  {
    title: "Get your estimate",
    text: "Instant price range based on your route and pet."
  },
  {
    title: "We prepare everything",
    text: "Documents, compliance, and travel planning handled."
  },
  {
    title: "Safe journey",
    text: "Your pet travels safely to the destination."
  }
];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-2 text-2xl font-bold">How it works ✈️</h2>
      <p className="mb-10 text-gray-600">A simple, guided process from start to finish.</p>
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 hidden border-t border-gray-200 md:block" />
        <div className="grid gap-6 text-center md:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.title} className="p-4 transition hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B35] font-bold text-white">
                {idx + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
