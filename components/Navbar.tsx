export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-slate-900">
          Explore Creatures
        </a>
        <a href="#quote-form" className="btn-primary inline-flex items-center">
          Start your estimate
        </a>
      </div>
    </header>
  );
}
