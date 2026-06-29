import Link from "next/link";
import type { Metadata } from "next";
import { glossaryTerms, getTermsByKind } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "System terms, coined vocabulary, and traditional parallels for Empty-Ground Monism.",
};

const kindLabel: Record<string, string> = {
  system: "System terms",
  coined: "Coined terms",
  traditional: "Traditional terms",
};

const kindDesc: Record<string, string> = {
  system:
    "Technical vocabulary native to this system, defined by its formal results.",
  coined:
    "New terms invented where no existing vocabulary is accurate without misimporting background commitments.",
  traditional:
    "Terms from existing traditions, with explicit notes on where the parallel holds and where it breaks.",
};

export default function GlossaryPage() {
  const systemTerms = getTermsByKind("system");
  const coinedTerms = getTermsByKind("coined");
  const traditionalTerms = getTermsByKind("traditional");

  const groups = [
    { kind: "system", terms: systemTerms },
    { kind: "coined", terms: coinedTerms },
    { kind: "traditional", terms: traditionalTerms },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Glossary
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
          Vocabulary
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          Three kinds of term. System terms are native to EGM and derivable from the formal
          results. Coined terms are new vocabulary invented where no existing term is accurate.
          Traditional terms are borrowed with explicit notes on approximation and divergence; a
          borrowed term is never a synonym.
        </p>
      </header>

      {groups.map(({ kind, terms }) => (
        <section key={kind} className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-1">
            {kindLabel[kind]}
          </h2>
          <p className="text-xs text-[var(--color-text-faint)] italic mb-6">
            {kindDesc[kind]}
          </p>
          <ul className="space-y-2">
            {terms.map((term) => (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-ground-500)] hover:shadow-sm transition-all bg-white dark:bg-[var(--color-surface-alt)]"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)]">
                        {term.term}
                      </span>
                      {term.pronunciation && (
                        <span className="text-xs text-[var(--color-text-faint)] font-mono">
                          /{term.pronunciation}/
                        </span>
                      )}
                      {kind === "coined" && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--color-posit-bg)] text-[var(--color-posit-text)] border border-[var(--color-posit-border)]">
                          coined
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                      {term.definition}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--color-text-faint)] shrink-0 mt-0.5">
                    {term.thesisIds.length} theses →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
