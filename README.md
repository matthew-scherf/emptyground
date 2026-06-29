# Empty-Ground Monism

A complete metaphysics on a formal foundation. The central result is that no system can completely represent itself without contradiction. This is machine-checked in Lean 4. Every philosophical claim in the system is marked either **(D) demonstrated** (following from the formal core) or **(I) interpreted** (a reading laid over the mathematics). The seam between them is load-bearing and never elided.

## The argument in brief

The whole system descends from one theorem: **self-application together with negation has no fixed point** (Lawvere's fixed-point theorem, applied to `Not`). Cantor, Russell, the liar, Tarski, and Gödel are all this one fact under different inputs.

From this single engine, the formal core derives:

- No encoding of a carrier into its own predicate-space can be point-surjective (the catalogue cannot close)
- No coherent subject-predicate split exists (Tarski's undefinability, constructively)
- The gap between a carrier and its predicate-power is two-sided: no surjection and no injection
- Identity is the universal separator: every distinction reduces to a distinction of identity
- A complete and faithful self-account forces its codomain to be the carrier itself — the non-dual form
- Identity's image in predicate-space is faithful but never complete (the Yoneda floor and ceiling)
- The non-split form is inhabited; the split form is not

The philosophical system reads these results as a metaphysics: one impersonal, contentless ground (identity-as-such); a manifest world that is real but groundlessly arisen; every particular thing a faithful trace of the ground wrapped in lossy, contingent form; no thing with own-being; and at the centre a silence the whole structure proves it cannot cross.

## Repository structure

```
egm.lean                           Lean 4 proof development (all proofs machine-checked)
empty_ground_monism_outline.md     The full system in outline form, 32 theses with D/I marked
form_of_complete_self_knowledge.svg  Diagram: the three forms compared (representational, Yoneda, identity)
web/                               Next.js website
```

## The formal core (`egm.lean`)

Nine namespaces, nine sections of the argument:

| Namespace | Content |
|---|---|
| `Diagonal` | Lawvere's theorem; the engine |
| `Closure` | No encoding internalises all predicates; Tarski's theorem |
| `Gap` | The gap is two-sided: no surjection, no injection |
| `Distinction` | Identity is the universal separator |
| `Identification` | A lossless self-map erases distinction |
| `SelfAccount` | Complete + faithful forces the non-dual form |
| `Yoneda` | Identity's image: faithful (floor), never complete (ceiling) |
| `Whole` | The non-split form is inhabited; the split form is empty |
| `self_knowledge_is_non_dual` | Capstone theorem unifying all four results |

Proofs can be run in the browser at [live.lean-lang.org](https://live.lean-lang.org) without installing anything.

## The D/I convention

Every claim is marked:

- **(D)** — demonstrated. Follows from the formal core. A reader must accept it or name the exact line of the Lean proof they reject.
- **(I)** — interpreted. A reading laid over the mathematics; offered as the most rational available interpretation, never as proven.
- **(D+I)** — a demonstrated foundation with an interpreted extension; the seam between them is marked.
- **posit** — an explicitly underived axiom, declared openly.

The system has exactly two posits: that the ground is luminous (aware, in the sense of pure knowing-as-being), and that this particular world rather than another is the brute fact the system begins from.


## Traditional parallels

The system draws on and diverges from several traditions. All borrowings are explicit, with divergence notes:

- **Madhyamaka Buddhism**: śūnyatā (emptiness of own-being) is the closest parallel to the no-svabhāva result, established here by diagonal proof rather than prasaṅga
- **Advaita Vedanta**: nirguna Brahman points toward the ground, but the ground here is not Being or Consciousness as established attributes; chit (luminosity) is a posit, not a result
- **Taoism**: the unnamed Tao and ziran (self-so arising) map onto the apophatic ground and groundless arising, with the cosmogonic role explicitly rejected
- **Buddhist anattā**: the impersonal ground is the formal warrant for no-self, derived rather than asserted

Two terms are coined where no existing vocabulary is accurate without misimporting background commitments: **trace-image** (the Yoneda image of an element, its lossless presence in predicate-space) and **contingent form** (the lossy excess, a thing's determinate character).

## Licence

The Lean proofs and philosophical text are the author's original work.
