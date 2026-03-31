export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-20">
      <div className="mx-auto max-w-6xl space-y-3 px-6 text-sm text-slate-600">
        <p className="text-sm text-gray-500">Built with ❤️ for pet parents worldwide</p>
        <p className="text-sm text-gray-500">Contact: hello@explorecreatures.com</p>
        <p>© {new Date().getFullYear()} Explore Creatures. All rights reserved.</p>
      </div>
    </footer>
  );
}
