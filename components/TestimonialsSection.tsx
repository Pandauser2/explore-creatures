const testimonials = [
  {
    name: "Maya R.",
    quote: "The estimate was fast and accurate. Our dog arrived safely and calmly."
  },
  {
    name: "Arun P.",
    quote: "Great communication from paperwork to final handover. Very smooth process."
  },
  {
    name: "Lina K.",
    quote: "I was stressed about international rules, but the team handled everything."
  }
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900">Loved by pet parents</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card">
            <p className="text-sm text-slate-700">&quot;{item.quote}&quot;</p>
            <p className="mt-3 text-sm font-semibold text-slate-900">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
