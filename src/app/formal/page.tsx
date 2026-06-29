import Link from "next/link";
import type { Metadata } from "next";
import { formalSections } from "@/lib/formal";

export const metadata: Metadata = {
  title: "Formal core",
  description:
    "The Lean 4 source of Empty-Ground Monism, annotated section by section.",
};

export default function FormalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Formal core
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
          The form of complete self-knowledge
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          A Lean 4 proof development in nine namespaces. Every negative result is
          Lawvere&rsquo;s fixed-point theorem (§1) applied to <code className="font-mono text-xs bg-[var(--color-surface-alt)] px-1 rounded">Not</code>, which
          has no fixed point. Every theorem is linked to the metaphysical theses it
          underwrites.
        </p>
        <a
          href="https://live.lean-lang.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[var(--color-ground-500)] hover:text-[var(--color-ground-700)] transition-colors"
        >
          Run any theorem in lean4web ↗
        </a>
      </header>

      {/* Section list */}
      <ol className="space-y-3">
        {formalSections.map((section) => (
          <li key={section.slug}>
            <Link
              href={`/formal/${section.slug}`}
              className="group flex items-start gap-5 p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-ground-500)] hover:shadow-sm transition-all bg-white dark:bg-[var(--color-surface-alt)]"
            >
              <span className="font-mono text-sm font-semibold text-[var(--color-text-faint)] group-hover:text-[var(--color-ground-500)] transition-colors w-6 shrink-0 mt-0.5">
                §{section.number}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)]">
                    {section.title}
                  </h2>
                  <code className="text-xs font-mono text-[var(--color-text-faint)]">
                    {section.namespace}
                  </code>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                  {section.summary}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-[var(--color-text-faint)]">
                  {section.theorems.length} theorems →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {/* Synthesis */}
      <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <h2 className="text-lg font-serif font-semibold mb-6 text-[var(--color-text-primary)]">
          Synthesis
        </h2>
        <div className="space-y-3 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          <p>
            <strong className="text-[var(--color-text-primary)]">
              A representational total self-account is impossible.
            </strong>{" "}
            Any subject–predicate split either contradicts itself (the liar) or leaves a diagonal
            predicate provably outside (§2). Both are one fact: negation has no fixed point (§1).
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">
              The gap is two-sided.
            </strong>{" "}
            Predicate-power neither maps down onto the carrier nor embeds back into it (§3).
            The overflow is structural, not a near-miss.
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">
              The form of a complete, faithful self-account is forced to be non-dual (§6):
            </strong>{" "}
            it cannot route through predicate-power, so its codomain is the carrier itself. The
            form is forced; the map is not unique.
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">A marked boundary.</strong>{" "}
            The file establishes presupposition, not production: that the split presupposes the
            unsplit and fails to be it. Whether any generation exists is not a question these
            materials can pose. The results are structural.
          </p>
        </div>
      </section>
    </div>
  );
}
