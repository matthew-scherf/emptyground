"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/primer", label: "Primer" },
  { href: "/outline", label: "Outline" },
  { href: "/formal", label: "Formal core" },
  { href: "/theses", label: "Theses" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-6 h-14"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif font-semibold text-sm text-[var(--color-text-primary)] shrink-0"
        >
          EGM
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          {links.slice(1).map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  active
                    ? "bg-[var(--color-ground-100)] text-[var(--color-ground-700)] font-medium"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <a
          href="https://github.com/matthew-scherf/emptyground"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="ml-auto shrink-0 text-[var(--color-text-faint)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
