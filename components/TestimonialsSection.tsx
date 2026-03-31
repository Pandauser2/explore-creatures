import type { PastelTone } from "@/components/PastelIcons";
import { IconCircle64, SvgCat, SvgDog, SvgPaw } from "@/components/PastelIcons";

const testimonials: {
  avatar: "dog" | "cat" | "paw";
  tone: PastelTone;
  name: string;
  route: string;
  quote: string;
}[] = [
  {
    avatar: "dog",
    tone: "lavender",
    name: "Maya R.",
    route: "India → UK",
    quote:
      "Our dog was anxious about flying, but the team handled everything perfectly. He arrived calm and safe. Huge relief for us."
  },
  {
    avatar: "cat",
    tone: "coral",
    name: "Arun P.",
    route: "Bangalore → Singapore",
    quote:
      "Super smooth process from paperwork to delivery. They kept me updated at every step."
  },
  {
    avatar: "paw",
    tone: "mint",
    name: "Lina K.",
    route: "Indonesia → Germany",
    quote:
      "I was worried about international rules, but they managed everything. Made a stressful move feel easy."
  }
];

function AvatarIcon({ kind }: { kind: "dog" | "cat" | "paw" }) {
  if (kind === "dog") return <SvgDog />;
  if (kind === "cat") return <SvgCat />;
  return <SvgPaw />;
}

export function TestimonialsSection() {
  return (
    <section className="bg-yellow-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 flex flex-wrap items-center gap-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          <IconCircle64 tone="lavender">
            <SvgDog />
          </IconCircle64>
          Loved by pet parents
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Real stories from people who trusted us with their pets.
        </p>
        <div className="grid gap-6 text-center md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-md"
            >
              <div className="mb-3 flex items-center justify-center gap-3">
                <IconCircle64 tone={item.tone}>
                  <AvatarIcon kind={item.avatar} />
                </IconCircle64>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.route}</p>
                </div>
              </div>
              <div className="mb-2 text-yellow-400">★★★★★</div>
              <p className="text-sm text-slate-700">&quot;{item.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
