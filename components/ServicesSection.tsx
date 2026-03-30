import {
  Plane,
  FileCheck,
  Truck
} from "lucide-react";

type ServicesSectionProps = {
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

const hardcodedServices = [
  {
    title: "Flight & Travel Planning",
    description:
      "We plan the safest, most comfortable route for your pet, based on airline rules and timing.",
    Icon: Plane
  },
  {
    title: "Documentation & Compliance",
    description:
      "We handle all paperwork, health certificates, and country-specific requirements.",
    Icon: FileCheck
  },
  {
    title: "Door-to-Door Support",
    description:
      "From pickup to final delivery, we coordinate every step of your pet’s journey.",
    Icon: Truck
  }
] as const;

const fallbackIcons = {
  Plane,
  FileCheck,
  Truck
} as const;

export function ServicesSection({ services: _services }: ServicesSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl text-slate-900">
          Everything your pet needs for a smooth journey 🐾
        </h2>
        <p className="mb-8 text-lg text-gray-600">We handle every step so you don’t have to worry.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {hardcodedServices.map((service) => {
            const Icon = service.Icon ?? fallbackIcons.Plane;
            return (
              <div key={service.title} className="card cursor-pointer transition hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-[#FF6B35]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
