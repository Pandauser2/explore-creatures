import type { PastelTone } from "@/components/PastelIcons";
import {
  IconCircle64,
  SvgDocument,
  SvgPaw,
  SvgPlane,
  SvgTruck
} from "@/components/PastelIcons";

type ServicesSectionProps = {
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

const hardcodedServices: {
  title: string;
  description: string;
  detail: string;
  tone: PastelTone;
  icon: "plane" | "document" | "truck";
}[] = [
  {
    title: "Flight & Travel Planning",
    description:
      "We plan the safest, most comfortable route for your pet, based on airline rules and timing.",
    detail: "Airline-approved routing and crate guidance for your pet’s size and breed.",
    tone: "lavender",
    icon: "plane"
  },
  {
    title: "Documentation & Compliance",
    description:
      "We handle all paperwork, health certificates, and country-specific requirements.",
    detail: "Country entry rules, vaccination records, and export/import forms in one place.",
    tone: "coral",
    icon: "document"
  },
  {
    title: "Door-to-Door Support",
    description:
      "From pickup to final delivery, we coordinate every step of your pet’s journey.",
    detail: "Pickup timing, handoffs, and updates so you always know where things stand.",
    tone: "mint",
    icon: "truck"
  }
];

function ServiceGlyph({ name }: { name: "plane" | "document" | "truck" }) {
  if (name === "document") return <SvgDocument />;
  if (name === "truck") return <SvgTruck />;
  return <SvgPlane />;
}

export function ServicesSection({ services: _services }: ServicesSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 flex flex-wrap items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          <IconCircle64 tone="mint">
            <SvgPaw />
          </IconCircle64>
          Everything your pet needs for a smooth journey
        </h2>
        <p className="mb-8 text-lg text-gray-600">We handle every step so you don’t have to worry.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {hardcodedServices.map((service) => (
            <div key={service.title} className="card transition hover:shadow-lg">
              <div className="mb-4">
                <IconCircle64 tone={service.tone}>
                  <ServiceGlyph name={service.icon} />
                </IconCircle64>
              </div>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
              <p className="mt-3 text-sm text-gray-600">{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
