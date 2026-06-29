import Link from "next/link";
import type { Metadata } from "next";
import { DILegend } from "@/components/DIBadge";

export const metadata: Metadata = {
  title: "About",
  description: "The method, conventions, and structure of Empty-Ground Monism.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          About
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
          Method and conventions
        </h1>
      </header>

      <div className="prose dark:prose-invert max-w-none text-[var(--color-text-secondary)] text-sm leading-relaxed space-y-8">

        <section>
          <h2 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
            The D/I seam
          </h2>
          <p>
            The system marks every claim as either <strong>(D) Demonstrated</strong> or{" "}
            <strong>(I) Interpreted</strong>. This distinction is not stylistic: it is the
            system&rsquo;s central discipline and is itself a consequence of the formal results:
            since self-representation cannot complete (§2 of the Lean core), no system can claim
            to have unified its own demonstrated and interpreted levels without contradiction.
          </p>
          <p className="mt-4">
            A claim marked (D) follows from the formal core and must be accepted or specifically
            rejected with a named line of the Lean proof. A claim marked (I) is a reading laid
            over the mathematics, offered as the most rational available interpretation, never
            as proven. Claims marked (D+I) have a demonstrated formal foundation and an
            interpreted extension; the seam between them is shown. Claims marked (posit) are
            explicitly underived axioms.
          </p>
          <div className="mt-6 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)]">
            <DILegend />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
            The formal core
          </h2>
          <p>
            The <Link href="/formal" className="text-[var(--color-ground-500)] hover:underline">formal core</Link> is
            a Lean 4 proof development. Lean is an interactive theorem prover: claims marked (D)
            are machine-checked. The whole development descends from one theorem:
            Lawvere&rsquo;s fixed-point theorem, applied to <code className="font-mono text-xs bg-[var(--color-surface-alt)] text-[var(--color-text-primary)] px-1 rounded">Not</code>, which has no fixed
            point.
          </p>
          <p className="mt-4">
            Every section of the outline that carries a formal reference (§2, §4, etc.) is
            linked to the corresponding Lean namespace. The theorems can be run in the browser
            via{" "}
            <a
              href="https://live.lean-lang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-ground-500)] hover:underline"
            >
              lean4web
            </a>{" "}
            without installing anything.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
            The glossary and the question of new terms
          </h2>
          <p>
            The <Link href="/glossary" className="text-[var(--color-ground-500)] hover:underline">glossary</Link>{" "}
            organises vocabulary into three kinds. System terms are native to EGM. Traditional
            terms are borrowed from Buddhism, Vedanta, Taoism, and other traditions, with
            explicit notes on where the parallel holds and where it breaks. A borrowed term is
            never a synonym: importing śūnyatā without noting its Madhyamaka commitments, or
            importing nirguna without noting that Advaita still assigns being and consciousness
            to it, would compromise the D/I discipline.
          </p>
          <p className="mt-4">
            Where no existing term is accurate without misimporting background commitments, the
            system coins new ones. Currently:{" "}
            <Link href="/glossary/trace-image" className="text-[var(--color-ground-500)] hover:underline">
              trace-image
            </Link>{" "}
            (the Yoneda image of an element, its lossless presence in predicate-space) and{" "}
            <Link href="/glossary/contingent-form" className="text-[var(--color-ground-500)] hover:underline">
              contingent form
            </Link>{" "}
            (the lossy excess, its determinate character). Both are marked (coined) in the
            glossary.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
            Coverage versus silence
          </h2>
          <p>
            The system is a metaphysics of ontological status: it speaks fully about what kind
            of thing anything is (ground, predicate-layer, necessary, contingent). It is silent
            by design on the internal structure of horizontal categories: how time flows, how
            causal direction arises, what the metric of space is. These require primitives
            (dynamics, transition relations) that are not present in the formal core.
          </p>
          <p className="mt-4">
            The silence on these topics is not a gap; it is a result of the Yoneda ceiling
            (§7): identity emits its faithful image and nothing more. What lies beyond the image
            is structurally unreachable from the formal core, and any claim about it would
            require additional axioms the system does not have.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
            The two underived posits
          </h2>
          <p>
            The system has exactly two claims that are neither demonstrated nor interpreted:
            explicit axioms marked (posit). They are declared openly before reasoning closes
            around them.
          </p>
          <ul className="mt-4 space-y-3 list-none">
            <li className="pl-4 border-l-2 border-[var(--color-posit-border)]">
              <strong className="text-[var(--color-text-primary)]">Luminosity.</strong> That the
              ground is aware: not in the sense of having intentional states, but in the sense
              of pure knowing-as-being. This is verifiable only from the inside. The materialist
              who reads the ground as blank commits no error the system can catch.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-posit-border)]">
              <strong className="text-[var(--color-text-primary)]">
                The brute particular world.
              </strong>{" "}
              Why this manifestation and not another is underivable (demonstrated by the Yoneda
              ceiling). The specific cosmos is accepted as the brute fact the system begins from
              and cannot reduce further.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
