export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
        © {new Date().getFullYear()} Explore Creatures. All rights reserved.
      </div>
    </footer>
  );
}
