import Link from "next/link";
import type { Thesis } from "@/lib/types";
import { DIBadge } from "./DIBadge";

export function ThesisCard({
  thesis,
  expanded = false,
}: {
  thesis: Thesis;
  expanded?: boolean;
}) {
  return (
    <article
      id={`thesis-${thesis.id}`}
      className="group border border-[var(--color-border)] rounded-xl bg-white dark:bg-[var(--color-surface-alt)] p-6 transition-shadow hover:shadow-sm"
    >
      <header className="flex items-start gap-3 mb-3">
        <span
          className="text-xs font-mono text-[var(--color-text-faint)] mt-0.5 shrink-0 w-6"
          aria-label={`Thesis ${thesis.id}`}
        >
          {thesis.id}.
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <DIBadge status={thesis.status} />
            {thesis.formalRef && (
              <span className="text-xs font-mono text-[var(--color-text-faint)]">
                {thesis.formalRef}
              </span>
            )}
            {thesis.leanNamespace && (
              <Link
                href={`/formal/${thesis.leanNamespace
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-xs font-mono text-[var(--color-ground-500)] hover:text-[var(--color-ground-700)] underline-offset-2 hover:underline"
              >
                {thesis.leanNamespace}
              </Link>
            )}
          </div>
          <p className="text-base font-medium text-[var(--color-text-primary)] leading-snug">
            {thesis.claim}
          </p>
        </div>
      </header>

      {expanded && (
        <div className="ml-9 mt-4 pt-4 border-t border-[var(--color-border)]">
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] prose-serif">
            {thesis.body}
          </p>
          {thesis.traditionalLinks && thesis.traditionalLinks.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {thesis.traditionalLinks.map((slug) => (
                <Link
                  key={slug}
                  href={`/glossary/${slug}`}
                  className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {slug}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {!expanded && (
        <div className="ml-9 mt-2">
          <Link
            href={`/outline/${thesis.sectionSlug}#thesis-${thesis.id}`}
            className="text-xs text-[var(--color-text-faint)] hover:text-[var(--color-ground-500)] transition-colors"
          >
            Section {thesis.section}: {thesis.sectionSlug} →
          </Link>
        </div>
      )}
    </article>
  );
}
