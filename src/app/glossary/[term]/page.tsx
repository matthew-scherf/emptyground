import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { glossaryTerms, getTermBySlug } from "@/lib/glossary";
import { getThesisById } from "@/lib/theses";
import { ThesisCard } from "@/components/ThesisCard";

const approxLabel = {
  close: "Close parallel",
  partial: "Partial parallel",
  analogical: "Analogical",
};

const approxColor = {
  close: "var(--color-yes-600)",
  partial: "var(--color-ground-500)",
  analogical: "var(--color-text-faint)",
};

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const t = getTermBySlug(term);
  if (!t) return {};
  return { title: t.term, description: t.definition };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = getTermBySlug(term);
  if (!entry) notFound();

  const relatedTheses = entry.thesisIds
    .map((id) => getThesisById(id))
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--color-text-faint)] mb-10">
        <Link href="/glossary" className="hover:text-[var(--color-ground-500)]">
          Glossary
        </Link>
        <span>›</span>
        <span>{entry.term}</span>
      </nav>

      {/* Header */}
      <header className="mb-10 max-w-2xl">
        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
          <h1 className="text-3xl font-serif font-semibold text-[var(--color-text-primary)]">
            {entry.term}
          </h1>
          {entry.pronunciation && (
            <span className="text-base font-mono text-[var(--color-text-faint)]">
              /{entry.pronunciation}/
            </span>
          )}
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
              entry.kind === "system"
                ? "bg-[var(--color-ground-100)] border-[var(--color-ground-500)] text-[var(--color-ground-700)]"
                : entry.kind === "coined"
                ? "bg-[var(--color-posit-bg)] border-[var(--color-posit-border)] text-[var(--color-posit-text)]"
                : "bg-[var(--color-surface-alt)] border-[var(--color-border)] text-[var(--color-text-secondary)]"
            }`}
          >
            {entry.kind}
          </span>
        </div>

        {entry.formalRef && (
          <p className="text-xs font-mono text-[var(--color-text-faint)] mb-4">
            {entry.formalRef}
          </p>
        )}

        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {entry.definition}
        </p>

        {entry.systemUse !== entry.definition && (
          <div className="p-4 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)]">
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-faint)] mb-2">
              In this system
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {entry.systemUse}
            </p>
          </div>
        )}
      </header>

      {/* Traditional parallels */}
      {entry.traditionalParallels && entry.traditionalParallels.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
            Traditional parallels
          </h2>
          <div className="space-y-4">
            {entry.traditionalParallels.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[var(--color-border)] bg-white dark:bg-[var(--color-surface-alt)]"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="font-semibold text-sm text-[var(--color-text-primary)]">
                    {p.tradition}
                  </span>
                  <span className="font-mono text-sm text-[var(--color-ground-500)]">
                    {p.term}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: approxColor[p.approximation] }}
                  >
                    {approxLabel[p.approximation]}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--color-text-faint)] uppercase tracking-wider mb-1">
                    Divergence
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {p.divergence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* See also */}
      {entry.seeAlso && entry.seeAlso.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
            See also
          </h2>
          <div className="flex flex-wrap gap-2">
            {entry.seeAlso.map((slug) => (
              <Link
                key={slug}
                href={`/glossary/${slug}`}
                className="text-sm px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-ground-500)] hover:text-[var(--color-ground-700)] transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related theses */}
      {relatedTheses.length > 0 && (
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
            Theses using this term
          </h2>
          <div className="space-y-3">
            {relatedTheses.map(
              (thesis) => thesis && <ThesisCard key={thesis.id} thesis={thesis} />
            )}
          </div>
        </section>
      )}
    </div>
  );
}
