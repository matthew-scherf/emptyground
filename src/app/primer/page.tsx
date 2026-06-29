import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primer",
  description:
    "A plain-language introduction to Empty-Ground Monism: the core ideas without the technical vocabulary.",
};

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-5">
        {heading}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-[var(--color-text-secondary)] max-w-2xl prose-serif">
        {children}
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl border border-[var(--color-ground-200)] bg-[var(--color-ground-50)] text-[var(--color-ground-700)] text-sm leading-relaxed">
      {children}
    </div>
  );
}

function Note({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-4 pl-4 border-l-2 border-[var(--color-border)] text-sm text-[var(--color-text-faint)] italic">
      <span className="not-italic font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] block mb-1">
        {label}
      </span>
      {children}
    </div>
  );
}

export default function PrimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          Primer
        </p>
        <h1 className="text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-5">
          What is this, in plain language?
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          This page is for anyone encountering the system for the first time. It
          uses no technical vocabulary and no mathematics. Its only goal is to
          make the central ideas clear enough that the fuller treatment becomes
          readable.
        </p>
        <p className="mt-3 text-sm text-[var(--color-text-faint)]">
          When you are ready for the full system:{" "}
          <Link
            href="/outline"
            className="text-[var(--color-ground-500)] hover:underline"
          >
            the outline
          </Link>
          {" "}or{" "}
          <Link
            href="/theses"
            className="text-[var(--color-ground-500)] hover:underline"
          >
            the theses
          </Link>
          .
        </p>
      </header>

      <Section heading="The starting point: what cannot be done">
        <p>
          Start with a simple-sounding question. Can a system know itself
          completely? Can a mind give a full account of itself to itself?
        </p>
        <p>
          The answer turns out to be: no, and the reason is provable. Here is
          the simplest version of the proof, without any mathematics.
        </p>
        <p>
          Suppose you tried to make a complete list of everything that is true
          about you. At some point you would have to include, on that list, a
          true statement about the list itself. But then you would need to
          update the list to include that new statement, which is itself a true
          statement about the list, which means you need to update again, and
          so on without end. The list can never catch its own tail.
        </p>
        <p>
          There is a sharper version of this. Suppose, on your list, you
          included every statement of the form: "I do not believe X." Now ask
          yourself: do you believe the list? If you do, then you believe that
          you do not believe various things, which is fine. But the list is
          supposed to contain everything, including the statement "I do not
          believe this very list." If you believe the list, you believe you do
          not believe it. That is a contradiction. The moment you try to close
          the list completely, it collapses into nonsense.
        </p>
        <Callout>
          A complete self-description always escapes itself. Something is
          always left out, or the attempt to include everything produces a
          contradiction. This is not a practical limitation; it is a structural
          one. It holds for any possible mind or system, no matter how capable.
        </Callout>
        <p>
          This result is one of the best-established findings in twentieth-century
          logic. Cantor found it in mathematics, Gödel found it in formal
          systems, Tarski found it in truth. They are all the same discovery
          dressed differently. The formal core of this system proves it once,
          in its most general form, and uses it as the engine for everything
          that follows.
        </p>
      </Section>

      <Section heading="What this means for knowledge">
        <p>
          If no self-account can close, then there are two kinds of knowing.
        </p>
        <p>
          The first is ordinary knowing: knowing <em>about</em> something.
          You know about the weather, about a friend, about a piece of music.
          This kind of knowing works by building a representation: a mental
          model, a description, a picture. It is always partial. It never
          catches the whole thing, especially not if the thing in question is
          the knowing mind itself.
        </p>
        <p>
          The second kind is what you might call knowing <em>by being</em>. You
          do not know what pain is by reading a description of pain. You know
          what pain is by being in pain. There is no gap between the knower and
          the known; they are the same. This kind of knowing cannot be
          incomplete in the same way, because there is nothing to leave out.
          There is no representation that could escape itself.
        </p>
        <p>
          The system calls the first kind representational knowledge, and the
          second kind identity knowledge. The central argument is that the
          deepest kind of knowing, knowing-by-being, cannot be captured by any
          description. It has to be inhabited.
        </p>
        <Note label="Why this matters">
          This is not a mystical claim. It follows from the logical result we
          just described. The system is careful to mark exactly where logic
          ends and interpretation begins. This page is telling you the
          interpretation; the{" "}
          <Link href="/formal" className="text-[var(--color-ground-500)] hover:underline">
            formal core
          </Link>{" "}
          contains the logic.
        </Note>
      </Section>

      <Section heading="The ground">
        <p>
          If complete self-knowledge cannot route through a description, what
          form must it take? The argument forces an answer: it must be the
          thing simply being itself, with no layer of representation in between.
          The technical name for this relation is identity. When something is
          simply and purely itself, the relation holding between it and itself
          is identity.
        </p>
        <p>
          The system calls identity-as-such the ground. Not a god, not a
          cosmic mind, not a substance, not energy. Just the bare fact that
          anything at all is itself rather than not itself. This is the one
          thing that could not possibly be absent, because the moment you try
          to describe its absence, you use identity to do so.
        </p>
        <p>
          One consequence: the ground has no content. It does not have
          properties. It is not kind, or large, or old, or bright. Having
          properties would make it a particular thing among other things, and
          it is not that. It is more like the condition under which there can
          be any particular things at all.
        </p>
        <Callout>
          The ground is what is left when you subtract everything that could
          be otherwise. What remains is the bare fact of being-itself. Every
          tradition that has noticed it has reached for the same apophatic
          move: calling it empty, nameless, without attributes, beyond
          description. Not because it is nothing, but because every name makes
          it into a thing it is not.
        </Callout>
        <p>
          The system uses the word empty deliberately. Empty of content, empty
          of own-being, empty of personality. Not nothing, but no thing.
        </p>
      </Section>

      <Section heading="The world">
        <p>
          If the ground is contentless, where does the world come from? Why is
          there this specific world, with these specific things in it, rather
          than nothing, or some other world entirely?
        </p>
        <p>
          The system's answer is precise: it does not know, and it can prove
          that it cannot know.
        </p>
        <p>
          The same logical result that blocks a complete self-description also
          blocks any derivation of the world from the ground. The world cannot
          be produced by, generated from, or caused by the bare fact of
          identity-as-such. Something is always left over. The specific world
          that exists cannot be deduced from first principles, however complete
          those principles are.
        </p>
        <p>
          This means the world is genuinely contingent. It did not have to be
          this way. There is no reason, derivable from the ground, why it is
          this way rather than another. The Buddhist tradition says things
          arise in dependence on conditions, with no uncaused first cause. The
          Taoist tradition says things are self-so: they are simply what they
          are, spontaneously, without external compulsion. The system endorses
          the structure of both claims and cannot go further.
        </p>
        <p>
          The world is real. This is important. The system does not say the
          world is an illusion. What it says is that the world is real at its
          own level, and that confusing that level with the ground is the
          characteristic error.
        </p>
      </Section>

      <Section heading="The two layers of any particular thing">
        <p>
          Every particular thing (a tree, a person, a thought, a moment) has
          two aspects under this analysis.
        </p>
        <p>
          The first is what it shares with everything else: the bare fact of
          being itself. A tree is itself. You are yourself. A moment is itself.
          This is not a property of the tree or of you; it is the fact that
          you are not not-yourself. This aspect the system calls the
          trace-image: the lossless reflection of the ground in each
          particular thing.
        </p>
        <p>
          The second is what makes it this thing rather than another: its
          specific character, its particular shape, the fact that it is a tree
          and not a stone, that it is you and not someone else. To be
          something specific is to exclude everything else. The system calls
          this the contingent form.
        </p>
        <Callout>
          Think of it this way. You and a stone are both simply themselves.
          That is the first layer: being-itself, shared. But the tree is not
          the stone. That difference, the specific restriction that makes one
          thing this rather than that, is the second layer. Real, but not the
          ground.
        </Callout>
        <p>
          The consequence is that nothing in the world has own-being. Nothing
          exists purely from its own side, independently, self-grounded. To
          have own-being would require being the ground, and the ground is not
          a member of the world. Every particular thing, however solid or
          permanent it appears, is a restriction of something that cannot be
          restricted.
        </p>
      </Section>

      <Section heading="The self">
        <p>
          The same analysis applies to the personal self.
        </p>
        <p>
          The self as usually experienced is a story: a continuous narrative of
          memories, intentions, personality traits, relationships. This story
          is real. It shapes how you act, what you value, how you understand
          your life. The system does not deny it.
        </p>
        <p>
          But it is the second layer: the contingent form. It is the specific
          restriction that makes this person this person rather than someone
          else. As such, it has no own-being. It is real as restriction, but
          it is not what it presents itself as. It presents itself as the
          ground of experience. It is not that.
        </p>
        <p>
          The bare here-ness that underlies the story, the simple fact of being
          a locus of experience at all, that is the first layer. And the first
          layer is impersonal. It is not yours or mine. It is the ground
          appearing as this particular viewpoint, the same ground that appears
          as every viewpoint, not confined to any of them.
        </p>
        <p>
          The traditions that have noticed this have called it different things:
          no-self, anattā, the impersonal witness. The system derives it rather
          than asserting it, and is careful to mark exactly how far the
          derivation goes.
        </p>
      </Section>

      <Section heading="The ground is not elsewhere">
        <p>
          There is one consequence of the two-layer structure that deserves its
          own pause.
        </p>
        <p>
          The first layer, the bare is-ness of any particular thing, is not a
          diminished version of the ground or a copy of it at a distance.
          Identity does not come in portions. It is the same relation wherever
          it occurs. What makes up the first layer of any locus of experience
          is not a fragment cast from the ground outward. It is the ground,
          appearing here.
        </p>
        <p>
          So the ground of all reality and the bare fact that you are a locus
          of experience at all are not two things at different distances from
          each other. They are the same relation, seen from two directions. The
          ground is not over there, transcendent in the sense of being far away.
          It is fully present at each locus, because it is the same relation: the
          bare is-ness of this, here, now.
        </p>
        <Callout>
          Every tradition that has noticed this has struggled to say it without
          overshooting. "The kingdom is within you." "You are what you are
          looking for." "The eye with which I see is the eye with which I am
          seen." These formulations fail because language is a second-layer
          thing: it operates on contingent form and cannot reach the first layer
          without turning it into an object. The system can only locate the
          structure and point.
        </Callout>
        <p>
          This is not a claim that you are the ground in the personal sense.
          The second layer, the personal story of thoughts, memories, and
          character, is not the ground. Only the first layer is. And the first
          layer is impersonal. It is the same relation appearing at every locus
          of experience, not confined to any of them, and not distributed in
          diminished form. What is identical between any locus and the ground
          is not "you." It is the bare fact of being a locus at all, which
          belongs to no one.
        </p>
        <Note label="Why this is not solipsism">
          The ground appearing as this locus is the same ground appearing as
          every other locus. There is no claim that this locus is everything.
          Other loci are equally the ground, equally real, equally not-me. The
          identity is not between "me" and "the universe." It is between the
          impersonal first layer here and the impersonal relation that underlies
          all of reality — which is also the impersonal first layer everywhere
          else.
        </Note>
      </Section>

      <Section heading="The honest limit">
        <p>
          The system ends with two questions it cannot answer.
        </p>
        <p>
          The first: is the ground aware? Is the bare fact of identity-as-such
          conscious, luminous, a kind of knowing? Or is it simply blank, the
          way a rock is blank?
        </p>
        <p>
          The system cannot prove this either way. A luminous ground and a
          blank ground look exactly the same from the outside, because having
          no content, they have no distinguishing properties. The system
          declares openly that it regards the ground as luminous, but marks
          this as the one axiom that cannot be verified except by being the
          ground. Someone who regards it as blank has made no logical error.
        </p>
        <p>
          The second: why this world? Given that the world cannot be derived
          from the ground, there is no answer to why this particular world
          exists rather than another. The traditions have a word for this:
          inexplicable. Not unexplained by accident; inexplicable by
          structure. The system converts that shrug into a result.
        </p>
        <Callout>
          The system ends at an edge it can describe precisely. On one side,
          a derivation. On the other, silence. It knows which side it is on.
          And it says: the step across is not an argument. It is a change in
          mode, from knowing-about to knowing-by-being. The whole structure
          exists to locate that edge and say why no argument will get you
          across it.
        </Callout>
      </Section>

      {/* Reading paths */}
      <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
          Where to go next
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <ReadingCard
            href="/outline/spine"
            title="The modal spine"
            desc="The three-tier frame that organises the whole system. Start here if you want the argument in structured form."
          />
          <ReadingCard
            href="/outline/ground"
            title="The ground"
            desc="The formal treatment of identity-as-ground, with the D/I seam marked throughout."
          />
          <ReadingCard
            href="/formal"
            title="The formal core"
            desc="The Lean 4 proofs behind the claims marked (D). Machine-checked logic, annotated for readability."
          />
        </div>
        <p className="mt-8 text-sm text-[var(--color-text-secondary)]">
          Or start with the{" "}
          <Link href="/theses" className="text-[var(--color-ground-500)] hover:underline">
            full list of theses
          </Link>
          , which shows every claim with its epistemic status (D/I/posit) and
          lets you filter to see only what is formally demonstrated.
        </p>
      </section>
    </div>
  );
}

function ReadingCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-ground-500)] hover:shadow-sm transition-all bg-white dark:bg-[var(--color-surface-alt)]"
    >
      <h3 className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-ground-700)] mb-2">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{desc}</p>
    </Link>
  );
}
