export function Navbar() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4">
      <a href="#" className="text-lg font-bold text-slate-900">
        Explore Creatures
      </a>
      <a
        href="#how-it-works"
        className="text-sm font-semibold text-gray-600 transition hover:text-gray-900"
      >
        How it works
      </a>
    </header>
  );
}
