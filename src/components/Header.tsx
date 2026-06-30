"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Selected Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/90 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200"
        >
          Selected Work
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 transition hover:border-zinc-500 md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">
            {isOpen ? "Close" : "Menu"}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <nav
        id="mobile-navigation"
        className={[
          "overflow-hidden border-t border-zinc-800/80 bg-zinc-950 px-4 transition-[max-height] duration-300 md:hidden",
          isOpen ? "max-h-72 py-3" : "max-h-0 py-0",
        ].join(" ")}
        aria-label="Mobile"
      >
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "block rounded-lg px-3 py-2 text-sm",
                    isActive
                      ? "bg-zinc-800 text-zinc-100"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100",
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
