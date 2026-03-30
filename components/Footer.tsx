export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-20">
      <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600">
        © {new Date().getFullYear()} Explore Creatures. All rights reserved.
      </div>
    </footer>
  );
}
