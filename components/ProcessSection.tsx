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
        <div className="relative overflow-hidden pt-20 pb-14 md:pb-16">
          <div className="relative z-20 grid gap-8 text-center md:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative z-20 p-4 transition-transform hover:-translate-y-1"
              >
                <p className="mb-1 text-xs font-semibold text-gray-400">Step {idx + 1}</p>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-8 h-16 w-full md:h-20">
            <div className="pointer-events-none absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 border-0 border-t-2 border-dashed border-gray-300" />
            <img
              src="/images/process-pet.gif"
              alt="Pet traveling"
              className="travel-pet pointer-events-none z-10 w-14 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
