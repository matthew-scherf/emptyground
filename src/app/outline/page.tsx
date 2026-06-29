import Link from "next/link";
import type { Metadata } from "next";
import { outlineSections, theses } from "@/lib/theses";
import { DIBadge } from "@/components/DIBadge";
import type { DIStatus } from "@/lib/types";

export const metadata: Metadata = {
  title: "Outline",
  description: "Empty-Ground Monism: ten sections, 32 theses. The complete metaphysical system.",
};

export default function OutlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Outline
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
          An outline of a complete metaphysics on a formal foundation
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          The whole system descends from one fact: self-application together with negation has no
          fixed point (Lawvere&rsquo;s theorem). Cantor, Russell, the liar, Tarski, Gödel are this
          single fact under different inputs.
        </p>
      </header>

      <ol className="space-y-3">
        {outlineSections.map((section) => {
          const sectionTheses = theses.filter((t) =>
            section.thesisIds.includes(t.id)
          );
          const statusCounts = sectionTheses.reduce<Record<DIStatus, number>>(
            (acc, t) => {
              acc[t.status] = (acc[t.status] || 0) + 1;
              return acc;
            },
            { D: 0, I: 0, "D+I": 0, posit: 0 }
          );

          return (
            <li key={section.slug}>
              <Link
                href={`/outline/${section.slug}`}
                className="group flex items-start gap-5 p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-ground-500)] hover:shadow-sm transition-all bg-white dark:bg-[var(--color-surface-alt)]"
              >
                <span className="font-mono text-lg font-bold text-[var(--color-text-faint)] group-hover:text-[var(--color-ground-500)] transition-colors w-10 shrink-0 mt-0.5">
                  {section.roman}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)] mb-1">
                    {section.title}
                  </h2>
                  {section.epigraph && (
                    <p className="text-xs text-[var(--color-text-faint)] italic mb-2">
                      {section.epigraph}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(statusCounts) as [DIStatus, number][])
                      .filter(([, n]) => n > 0)
                      .map(([status, n]) => (
                        <span key={status} className="flex items-center gap-1">
                          <DIBadge status={status} size="xs" />
                          <span className="text-xs text-[var(--color-text-faint)]">×{n}</span>
                        </span>
                      ))}
                  </div>
                </div>
                <span className="text-xs text-[var(--color-text-faint)] shrink-0 mt-1">
                  {section.thesisIds.length} theses →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
