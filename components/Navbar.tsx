export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-slate-900">
          Explore Creatures
        </a>
        <a
          href="#quote-form"
          className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Check your pet&apos;s travel cost
        </a>
      </div>
    </header>
  );
}
