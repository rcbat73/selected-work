import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="font-medium text-zinc-200">Rudys Calderin</p>
          <p>
            Frontend Engineer focused on AI automation and interactive products.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="transition hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="transition hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
