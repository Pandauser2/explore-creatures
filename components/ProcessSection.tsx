import { IconCircle64, SvgPlane } from "@/components/PastelIcons";

const steps = [
  {
    title: "Share your details",
    text: "Tell us where your pet is traveling from and to."
  },
  {
    title: "See your price range",
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
    <section id="how-it-works" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 flex flex-wrap items-center gap-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          <IconCircle64 tone="mint">
            <SvgPlane />
          </IconCircle64>
          How it works
        </h2>
        <p className="mb-10 text-lg text-gray-600">A simple, guided process from start to finish.</p>
        <div className="relative overflow-hidden pb-14 md:pb-16">
          <img
            src="/images/process-pet.gif"
            alt="Pet traveling"
            className="pointer-events-none absolute left-2 top-[2.75rem] z-[1] w-16 -translate-y-1/2 opacity-[0.8] md:left-4 md:top-[3rem] md:w-20"
          />
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
