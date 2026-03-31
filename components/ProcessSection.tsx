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
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
          How it works ✈️
        </h2>
        <p className="mb-10 text-lg text-gray-600">A simple, guided process from start to finish.</p>
        <div className="relative overflow-hidden pb-14 md:pb-16">
          <div className="pointer-events-none absolute bottom-[-10px] left-0 w-16 md:w-20 animate-travel">
            <img
              src="/images/pet-travel.svg"
              alt="Pet traveling"
              className="h-auto w-full opacity-90 animate-process-pet-bob"
            />
          </div>
          <div className="relative z-10 grid gap-6 md:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative z-10 p-4 transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
