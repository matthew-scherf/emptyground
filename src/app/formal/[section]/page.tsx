import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formalSections, getFormalBySlug } from "@/lib/formal";
import { getThesisById } from "@/lib/theses";
import { LeanBlock } from "@/components/LeanBlock";
import { ThesisCard } from "@/components/ThesisCard";

export function generateStaticParams() {
  return formalSections.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const s = getFormalBySlug(section);
  if (!s) return {};
  return {
    title: `§${s.number} · ${s.title}`,
    description: s.summary,
  };
}

export default async function FormalSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const current = getFormalBySlug(section);
  if (!current) notFound();

  const currentIndex = formalSections.findIndex((s) => s.slug === section);
  const prev = formalSections[currentIndex - 1];
  const next = formalSections[currentIndex + 1];

  const relatedTheses = current.thesisIds
    .map((id) => getThesisById(id))
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--color-text-faint)] mb-10">
        <Link href="/formal" className="hover:text-[var(--color-ground-500)]">
          Formal core
        </Link>
        <span>›</span>
        <span>§{current.number}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-2xl font-bold text-[var(--color-text-faint)]">
            §{current.number}
          </span>
          <code className="text-sm font-mono text-[var(--color-ground-500)]">
            namespace {current.namespace}
          </code>
        </div>
        <h1 className="text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
          {current.title}
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {current.summary}
        </p>
      </header>

      {/* Theorems */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
          Theorems
        </h2>
        <div className="space-y-2">
          {current.theorems.map((thm) => (
            <LeanBlock
              key={thm.name}
              name={thm.name}
              lean={thm.lean}
              note={thm.note}
              namespace={current.namespace}
            />
          ))}
        </div>
      </section>

      {/* Related theses */}
      {relatedTheses.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
            Theses this section underwrites
          </h2>
          <div className="space-y-3">
            {relatedTheses.map(
              (thesis) => thesis && <ThesisCard key={thesis.id} thesis={thesis} />
            )}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav
        className="pt-8 border-t border-[var(--color-border)] flex justify-between gap-4"
        aria-label="Section navigation"
      >
        {prev ? (
          <Link
            href={`/formal/${prev.slug}`}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ground-700)] transition-colors"
          >
            ← §{prev.number} · {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/formal/${next.slug}`}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ground-700)] transition-colors ml-auto"
          >
            §{next.number} · {next.title} →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
