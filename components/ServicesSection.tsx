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
    emoji: "✈️"
  },
  {
    title: "Documentation & Compliance",
    description:
      "We handle all paperwork, health certificates, and country-specific requirements.",
    emoji: "📋"
  },
  {
    title: "Door-to-Door Support",
    description:
      "From pickup to final delivery, we coordinate every step of your pet’s journey.",
    emoji: "🚚"
  }
] as const;

export function ServicesSection({ services: _services }: ServicesSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Everything your pet needs for a smooth journey 🐾
        </h2>
        <p className="mb-8 text-lg text-gray-600">We handle every step so you don’t have to worry.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {hardcodedServices.map((service) => (
            <div key={service.title} className="card transition hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                {service.emoji}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
