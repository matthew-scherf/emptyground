import type { Metadata } from "next";
import { theses } from "@/lib/theses";
import { ThesisIndex } from "@/components/ThesisIndex";
import { DILegend } from "@/components/DIBadge";

export const metadata: Metadata = {
  title: "Theses",
  description: "All 32 theses of Empty-Ground Monism, filterable by status and section.",
};

export default function ThesesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          All theses
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
          32 Theses
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-2xl mb-8">
          The complete set of claims, indexed. Filter by epistemic status (D/I/posit) or
          section. Selecting a status shows only claims at that level of warrant. The two
          posits are the only claims that are neither demonstrated nor interpreted: they are
          explicitly declared axioms.
        </p>
        <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)]">
          <DILegend />
        </div>
      </header>

      <ThesisIndex theses={theses} />
    </div>
  );
}
