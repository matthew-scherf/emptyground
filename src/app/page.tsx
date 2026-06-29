import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { outlineSections, theses } from "@/lib/theses";
import { DIBadge } from "@/components/DIBadge";

export const metadata: Metadata = {
  title: "Empty-Ground Monism",
  description:
    "A complete metaphysics on a formal foundation. One ground: empty of own-being, impersonal, and not a who.",
};

const modalSpine = [
  {
    tier: "Necessary",
    colorHex: "#0f6e56",
    bgClass: "bg-green-50 dark:bg-green-950/30",
    label: "Identity",
    desc: "Every distinction presupposes identity. The identity relation cannot fail to obtain.",
    thesisId: 2,
    status: "D" as const,
  },
  {
    tier: "Contingent",
    colorHex: "#534eb7",
    bgClass: "bg-indigo-50 dark:bg-indigo-950/30",
    label: "Manifestation",
    desc: "The specific world is not entailed by the ground. Its arising is real but underivable.",
    thesisId: 3,
    status: "D+I" as const,
  },
  {
    tier: "Impossible",
    colorHex: "#991e1d",
    bgClass: "bg-red-50 dark:bg-red-950/30",
    label: "Closed dualism",
    desc: "A system that completely represents itself by splitting knower from known cannot exist.",
    thesisId: 1,
    status: "D" as const,
  },
];

export default function HomePage() {
  const dCount = theses.filter(
    (t) => t.status === "D" || t.status === "D+I"
  ).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* One-line summary */}
      <section className="mb-16 max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
          Empty-Ground Monism
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8 max-w-xl">
          This is not philosophical speculation. The claims here are derived from
          machine-checked proofs in Lean 4. What can be proved from the
          mathematics is proved. What cannot is marked explicitly as
          interpretation and held apart. Nothing is asserted by fiat.
        </p>
        <blockquote className="text-xl sm:text-2xl font-serif leading-relaxed text-[var(--color-text-primary)] border-l-4 border-[var(--color-ground-500)] pl-6">
          The only coherent form of complete self-knowledge is non-dual: an
          impersonal, empty ground, identically the being of every locus; a
          world that is real, lossy, contingent, and groundlessly arisen; every
          existent a faithful trace of the ground wrapped in lossy appearance;
          all distinctions real but derivative; the self a splice undone by
          recognition rather than annihilation; and at the centre a silence the
          whole structure proves it cannot cross.
        </blockquote>
        <p className="mt-4 text-sm text-[var(--color-text-faint)] pl-6">
          Demonstrated where marked (D). Interpreted where marked (I). Passed
          over in silence where it must be.
        </p>
      </section>

      {/* Diagram */}
      <section
        className="mb-16"
        aria-label="The form of complete self-knowledge"
      >
        <div className="rounded-2xl border border-[var(--color-border)] bg-white dark:bg-[var(--color-surface-alt)] p-4 sm:p-8 overflow-x-auto">
          <Image
            src="/form_of_complete_self_knowledge.svg"
            alt="Three-row comparison: representational form (not complete), identity's self-image via the Yoneda map (not complete but faithful), and identity itself (complete and faithful, the forced non-dual form). Two independent roots converge at the top: the diagonal root (negation has no fixed point) and the separation root (distinction reduces to identity)."
            width={680}
            height={540}
            className="w-full max-w-2xl mx-auto"
            priority
            unoptimized
          />
        </div>
        <p className="mt-3 text-xs text-center text-[var(--color-text-faint)]">
          Two independent roots converge: only identity achieves both
          completeness and faithfulness. The form is forced.
        </p>
      </section>

      {/* Modal Spine */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
          I · The Modal Spine
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8 max-w-2xl">
          Three tiers within which every later claim sits. The skeleton:
          everything else hangs here.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {modalSpine.map(({ tier, colorHex, bgClass, label, desc, thesisId, status }) => (
            <Link
              key={tier}
              href={`/outline/spine#thesis-${thesisId}`}
              className={`group block rounded-xl border border-[var(--color-border)] p-5 transition-shadow hover:shadow-md ${bgClass}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ color: colorHex }}
                >
                  {tier}
                </span>
                <DIBadge status={status} size="xs" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-[var(--color-text-primary)]">
                {label}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Navigation grid */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
          Navigate
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <NavCard
            href="/outline"
            title="Outline"
            desc="Ten sections, 32 theses. The full system with D/I marked throughout."
            badge={`${outlineSections.length} sections`}
          />
          <NavCard
            href="/formal"
            title="Formal core"
            desc="The Lean 4 source annotated section by section. Every theorem linked to its theses."
            badge="9 namespaces"
          />
          <NavCard
            href="/theses"
            title="Theses"
            desc="All 32 theses indexed. Filter by D/I status or section."
            badge={`${dCount} with formal backing`}
          />
          <NavCard
            href="/glossary"
            title="Glossary"
            desc="System terms, traditional parallels, and coined vocabulary with divergence notes."
            badge="3 kinds of term"
          />
        </div>
      </section>

      {/* Outline section list */}
      <section>
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
          Sections
        </h2>
        <ol className="space-y-1">
          {outlineSections.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/outline/${s.slug}`}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[var(--color-surface-alt)] transition-colors group"
              >
                <span className="font-mono text-sm text-[var(--color-text-faint)] w-8 shrink-0">
                  {s.roman}
                </span>
                <span className="flex-1 text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)]">
                  {s.title}
                </span>
                <span className="text-xs text-[var(--color-text-faint)] shrink-0">
                  {s.thesisIds.length}{" "}
                  {s.thesisIds.length === 1 ? "thesis" : "theses"}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function NavCard({
  href,
  title,
  desc,
  badge,
}: {
  href: string;
  title: string;
  desc: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-ground-500)] hover:shadow-sm transition-all bg-white dark:bg-[var(--color-surface-alt)]"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)]">
          {title}
        </h3>
        <span className="text-[10px] font-mono text-[var(--color-text-faint)] whitespace-nowrap">
          {badge}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
        {desc}
      </p>
    </Link>
  );
}
