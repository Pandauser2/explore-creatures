export function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full bg-transparent">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-bold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          Explore Creatures
        </a>
        <a
          href="#how-it-works"
          className="text-sm font-semibold text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition hover:text-white"
        >
          How it works
        </a>
      </div>
    </header>
  );
}
