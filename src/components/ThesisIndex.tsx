"use client";

import { useState, useMemo } from "react";
import type { Thesis, DIStatus } from "@/lib/types";
import { ThesisCard } from "./ThesisCard";
import { DIBadge } from "./DIBadge";
import { outlineSections } from "@/lib/theses";

const ALL = "all" as const;

export function ThesisIndex({ theses }: { theses: Thesis[] }) {
  const [statusFilter, setStatusFilter] = useState<DIStatus | typeof ALL>(ALL);
  const [sectionFilter, setSectionFilter] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      theses.filter((t) => {
        const matchStatus = statusFilter === ALL || t.status === statusFilter;
        const matchSection =
          sectionFilter === ALL || t.sectionSlug === sectionFilter;
        return matchStatus && matchSection;
      }),
    [theses, statusFilter, sectionFilter]
  );

  const statuses: (DIStatus | typeof ALL)[] = [ALL, "D", "I", "D+I", "posit"];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-[var(--color-border)]">
        {/* Status filter */}
        <fieldset>
          <legend className="text-xs font-medium text-[var(--color-text-faint)] uppercase tracking-wider mb-2">
            Status
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors ${
                  statusFilter === s
                    ? "bg-[var(--color-ground-500)] border-[var(--color-ground-500)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-ground-500)] hover:text-[var(--color-ground-700)]"
                }`}
              >
                {s === ALL ? "all" : s}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Section filter */}
        <fieldset>
          <legend className="text-xs font-medium text-[var(--color-text-faint)] uppercase tracking-wider mb-2">
            Section
          </legend>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSectionFilter(ALL)}
              className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors ${
                sectionFilter === ALL
                  ? "bg-[var(--color-ground-500)] border-[var(--color-ground-500)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-ground-500)]"
              }`}
            >
              all
            </button>
            {outlineSections.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSectionFilter(s.slug)}
                className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors ${
                  sectionFilter === s.slug
                    ? "bg-[var(--color-ground-500)] border-[var(--color-ground-500)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-ground-500)]"
                }`}
              >
                {s.roman}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Count */}
      <p className="text-sm text-[var(--color-text-faint)] mb-6">
        {filtered.length} of {theses.length} theses
      </p>

      {/* Results */}
      <div className="space-y-3">
        {filtered.map((t) => (
          <ThesisCard key={t.id} thesis={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-text-faint)] py-12">
          No theses match the current filter.
        </p>
      )}
    </div>
  );
}
