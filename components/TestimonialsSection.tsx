const testimonials = [
  {
    avatar: "🐶",
    name: "Maya R.",
    route: "India → UK",
    quote:
      "Our dog was anxious about flying, but the team handled everything perfectly. He arrived calm and safe. Huge relief for us."
  },
  {
    avatar: "🐱",
    name: "Arun P.",
    route: "Bangalore → Singapore",
    quote:
      "Super smooth process from paperwork to delivery. They kept me updated at every step."
  },
  {
    avatar: "🐾",
    name: "Lina K.",
    route: "Indonesia → Germany",
    quote:
      "I was worried about international rules, but they managed everything. Made a stressful move feel easy."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">Loved by pet parents 🐶</h2>
        <p className="mb-8 text-lg text-gray-600">
          Real stories from people who trusted us with their pets.
        </p>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {testimonials.map((item) => (
            <article key={item.name} className="card">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="text-2xl">{item.avatar}</div>
                <div>
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
