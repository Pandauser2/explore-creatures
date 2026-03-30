import {
  FileCheck,
  Package,
  Plane,
  ShieldCheck,
  Stethoscope,
  Truck
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

type ServicesSectionProps = {
  services: Service[];
};

const iconMap = {
  Plane,
  FileCheck,
  Truck,
  Stethoscope,
  ShieldCheck,
  Package
} as const;

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900">Services</h2>
      <p className="mt-2 text-slate-700">Everything you need for a smooth pet relocation.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Package;
          return (
            <article key={service.title} className="card">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
