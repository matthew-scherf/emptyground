import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  outlineSections,
  theses,
  getSectionBySlug,
  getThesisBySection,
} from "@/lib/theses";
import { ThesisCard } from "@/components/ThesisCard";
import { getTermsForThesis } from "@/lib/glossary";
import type { OutlineSectionSlug } from "@/lib/types";

export function generateStaticParams() {
  return outlineSections.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const s = getSectionBySlug(section);
  if (!s) return {};
  return {
    title: `${s.roman} · ${s.title}`,
    description: s.epigraph,
  };
}

export default async function OutlineSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const current = getSectionBySlug(section);
  if (!current) notFound();

  const sectionTheses = getThesisBySection(section as OutlineSectionSlug);

  const currentIndex = outlineSections.findIndex((s) => s.slug === section);
  const prev = outlineSections[currentIndex - 1];
  const next = outlineSections[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--color-text-faint)] mb-10">
        <Link href="/outline" className="hover:text-[var(--color-ground-500)]">
          Outline
        </Link>
        <span>›</span>
        <span>{current.roman}</span>
      </nav>

      {/* Header */}
      <header className="mb-12 max-w-2xl">
        <p className="font-mono text-3xl font-bold text-[var(--color-text-faint)] mb-1">
          {current.roman}
        </p>
        <h1 className="text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
          {current.title}
        </h1>
        {current.epigraph && (
          <p className="text-base italic text-[var(--color-text-secondary)] border-l-4 border-[var(--color-ground-200)] pl-4">
            {current.epigraph}
          </p>
        )}
      </header>

      {/* Theses */}
      <div className="space-y-8">
        {sectionTheses.map((thesis) => {
          const related = getTermsForThesis(thesis.id);
          return (
            <div key={thesis.id}>
              <ThesisCard thesis={thesis} expanded />
              {related.length > 0 && (
                <div className="mt-2 ml-9 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                    Glossary:
                  </span>
                  {related.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-ground-700)] hover:border-[var(--color-ground-500)] transition-colors"
                    >
                      {term.term}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prev / Next */}
      <nav
        className="mt-16 pt-8 border-t border-[var(--color-border)] flex justify-between gap-4"
        aria-label="Section navigation"
      >
        {prev ? (
          <Link
            href={`/outline/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ground-700)] transition-colors"
          >
            ← {prev.roman} · {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/outline/${next.slug}`}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ground-700)] transition-colors ml-auto"
          >
            {next.roman} · {next.title} →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
