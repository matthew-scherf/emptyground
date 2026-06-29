/-!
# The Form of Complete Self-Knowledge

A *self-account* is a system's attempt to represent itself to itself. This file
asks what form such an account must take to be both **complete** (nothing left
out) and **faithful** (no distinction collapsed).

The development has two independent roots:

* a **diagonal** root (Cantor / Lawvere): negation has no fixed point, so no
  carrier can survey its own predicate-power. A representational self-account
  cannot close.
* a **separation** root (Leibniz): indiscernibles are identical, and every
  distinction reduces to a distinction of identity. The ground of distinction is
  not itself one of the represented predicates.

The two roots meet at one point — **identity** — where the diagonal obstruction
vanishes (there is no representational layer to attack) and the separation ground
is perfectly satisfied (nothing distinguishable is left unseparated). What the
file certifies is a statement of *form*, not of metaphysics:

> A complete and faithful self-account cannot route through a representational
> layer. Its form is forced to be the carrier related to itself by identity.
-/

universe u v

def Predicate (W : Type u) := W → Prop


/-! ## 1. The engine: the diagonal has no fixed point

Every negative result below is one theorem — that negation admits no fixed
point — fed through a single device, Lawvere's fixed-point theorem. -/

namespace Diagonal

/-- A proposition equivalent to its own negation is absurd (the liar). -/
theorem no_fixpoint_of_iff {p : Prop} (h : p ↔ ¬ p) : False :=
  have np : ¬ p := fun hp => (h.mp hp) hp
  np (h.mpr np)

/-- A proposition equal to its own negation is absurd. -/
theorem no_fixpoint_of_eq {p : Prop} (h : p = ¬ p) : False :=
  have np : ¬ p := fun hp => (cast h hp) hp
  np (cast h.symm np)

/-- **Lawvere's fixed-point theorem.** If some `e : A → (A → B)` is
    point-surjective, every `g : B → B` has a fixed point. The diagonal results
    below are all this theorem applied to `Not`, which has none. -/
theorem lawvere {A : Type u} {B : Type v} (e : A → (A → B))
    (he : ∀ f : A → B, ∃ a, e a = f) : ∀ g : B → B, ∃ b, g b = b := by
  intro g
  obtain ⟨a, ha⟩ := he (fun x => g (e x x))
  exact ⟨e a a, (congrFun ha a).symm⟩

end Diagonal


/-! ## 2. Closure: a representational self-account cannot close -/

namespace Closure
open Diagonal

/-- An encoding internalizes every predicate (is point-surjective onto
    predicate-power) — the attempt to make the subject–predicate split
    self-contained. -/
def Internalizes {W : Type u} (enc : W → Predicate W) : Prop :=
  ∀ φ : Predicate W, ∃ w : W, enc w = φ

/-- No encoding internalizes all predicates: the catalogue cannot close. -/
theorem no_internal_catalogue {W : Type u} (enc : W → Predicate W) :
    ¬ Internalizes enc := by
  intro hRep
  obtain ⟨d, hd⟩ := hRep (fun w => ¬ enc w w)
  exact no_fixpoint_of_eq (congrFun hd d)

/-- The same fact as a corollary of Lawvere, exhibiting the single engine: the
    map with no fixed point is `Not`. -/
theorem catalogue_via_lawvere {W : Type u} (enc : W → Predicate W)
    (he : Internalizes enc) : False := by
  obtain ⟨p, hp⟩ := lawvere enc he Not
  exact no_fixpoint_of_eq hp.symm

/-- The escaping predicate, exhibited: the diagonal lies outside every range. -/
theorem escaped_predicate {W : Type u} (enc : W → Predicate W) :
    ∃ φ : Predicate W, ∀ w : W, enc w ≠ φ := by
  refine ⟨fun w => ¬ enc w w, ?_⟩
  intro w hw
  exact no_fixpoint_of_eq (congrFun hw w)

/-- A system judging a truth-predicate over itself with full adequacy. -/
structure SplitSystem where
  S : Type
  Tr : S → Prop
  diag : (S → Prop) → S
  adequacy : ∀ p : S → Prop, Tr (diag p) ↔ p (diag p)

/-- No such system is coherent (Tarski / the liar). -/
theorem no_coherent_split (L : SplitSystem) : False :=
  no_fixpoint_of_iff (L.adequacy (fun s => ¬ L.Tr s))

end Closure


/-! ## 3. The gap is two-sided

The carrier is too small to *survey* its predicate-power (no surjection) and the
predicate-power is too large to *fit inside* the carrier (no injection). The
representational layer overflows the carrier from both directions; no cleverer
encoding closes it. -/

namespace Gap

theorem no_surjection {S : Type u} (f : S → Predicate S) :
    ¬ Closure.Internalizes f :=
  Closure.no_internal_catalogue f

theorem no_injection {S : Type u} (i : Predicate S → S)
    (hi : ∀ p q, i p = i q → p = q) : False := by
  let D : Predicate S := fun a => ∃ p, i p = a ∧ ¬ p a
  by_cases h : D (i D)
  · have hcopy := h
    obtain ⟨p, hip, hnp⟩ := hcopy
    rw [hi p D hip] at hnp
    exact hnp h
  · exact h ⟨D, rfl, h⟩

end Gap


/-! ## 4. Distinction: the separating criterion transcends the encoding

The second, independent root. No diagonal here — only the identity of
indiscernibles. Its key fact: every distinction reduces to a distinction of
identity, so the identity predicates are the basis of all discernment. -/

namespace Distinction

/-- Indiscernible within an encoding: agreeing on every encoded predicate. -/
def Indiscernible {B : Type u} (enc : B → Predicate B) (b₁ b₂ : B) : Prop :=
  ∀ w : B, enc w b₁ ↔ enc w b₂

/-- Indiscernible under all predicates whatsoever. -/
def WideIndiscernible {B : Type u} (b₁ b₂ : B) : Prop :=
  ∀ φ : Predicate B, φ b₁ ↔ φ b₂

/-- **Identity of indiscernibles.** Agreement on all predicates forces equality;
    the witnessing predicate is the identity predicate `(· = b₁)`. -/
theorem wide_collapses {B : Type u} (b₁ b₂ : B)
    (h : WideIndiscernible b₁ b₂) : b₁ = b₂ :=
  ((h (fun x => x = b₁)).mp rfl).symm

/-- **Every distinction reduces to a distinction of identity.** If any predicate
    separates two elements, the identity predicate already separates them — so
    the identity predicates are a basis for all discernment. -/
theorem identity_is_universal_separator {B : Type u}
    (φ : Predicate B) (b₁ b₂ : B) (h : ¬ (φ b₁ ↔ φ b₂)) :
    ¬ ((b₁ = b₁) ↔ (b₂ = b₁)) := by
  intro hiff
  apply h
  rw [hiff.mp rfl]

/-- A genuine separating criterion is not one of the encoded predicates. -/
theorem distinction_transcends_internalization {B : Type u}
    (enc : B → Predicate B) (D : Predicate B) (b₁ b₂ : B)
    (hU : Indiscernible enc b₁ b₂) (h₁ : D b₁) (h₂ : ¬ D b₂) :
    ∀ w : B, enc w ≠ D := by
  intro w hw
  have e : enc w b₁ ↔ enc w b₂ := hU w
  rw [hw] at e
  exact h₂ (e.mp h₁)

/-- Encoding-relative indiscernibility coexists with a genuine distinction; the
    criterion simply lies outside the encoding. -/
theorem narrow_satisfiable :
    ∃ (B : Type) (enc : B → Predicate B) (D : Predicate B) (b₁ b₂ : B),
      Indiscernible enc b₁ b₂ ∧ D b₁ ∧ ¬ D b₂ :=
  ⟨Bool, fun _ _ => True, fun b => b = true, true, false,
    fun _ => Iff.rfl, rfl, by decide⟩

end Distinction


/-! ## 5. Identification: a lossless self-map erases distinction

To carry a genuine distinction, the knowledge map must be lossy; the gap is
irreducible. -/

namespace Identification

/-- An injective ("lossless") knowledge map. -/
def Faithful {B C : Type u} (know : B → C) : Prop :=
  ∀ x y, know x = know y → x = y

/-- Identical self-knowledge under a lossless map forces identity, so no genuine
    distinction can survive. -/
theorem faithful_forbids_the_pair
    {B C : Type u} (know : B → C) (D : B → Prop) (b₁ b₂ : B)
    (hFaithful : Faithful know) (hId : know b₁ = know b₂)
    (h₁ : D b₁) (h₂ : ¬ D b₂) : False := by
  have hEq : b₁ = b₂ := hFaithful b₁ b₂ hId
  rw [hEq] at h₁
  exact h₂ h₁

/-- Contrapositive: to carry a distinction, the map must be lossy. -/
theorem pair_implies_lossy
    {B C : Type u} (know : B → C) (D : B → Prop) (b₁ b₂ : B)
    (hId : know b₁ = know b₂) (h₁ : D b₁) (h₂ : ¬ D b₂) : ¬ Faithful know :=
  fun hF => faithful_forbids_the_pair know D b₁ b₂ hF hId h₁ h₂

/-- The lossy case is realized. -/
theorem lossy_admits_distinction :
    ∃ (B C : Type) (know : B → C) (D : B → Prop) (b₁ b₂ : B),
      know b₁ = know b₂ ∧ D b₁ ∧ ¬ D b₂ ∧ ¬ Faithful know :=
  ⟨Bool, Unit, fun _ => (), fun b => b = true, true, false,
    rfl, rfl, by decide, fun h => absurd (h true false rfl) (by decide)⟩

end Identification


/-! ## 6. The self-account: complete + faithful forces the form

A complete and faithful account is an equivalence of the carrier with its
codomain. With predicate-power as codomain that is impossible (§2), so the
codomain is forced to be the carrier itself — no representational layer. The
*form* is forced; the *map* is not unique. -/

namespace SelfAccount

/-- Complete: nothing left out (surjective). -/
def Complete {S K : Type u} (k : S → K) : Prop := ∀ y : K, ∃ x : S, k x = y
/-- Faithful: no distinction collapsed (injective). -/
def Faithful {S K : Type u} (k : S → K) : Prop := ∀ x y, k x = k y → x = y

/-- A representational self-account is never complete (the diagonal). -/
theorem representation_never_complete {S : Type u} (enc : S → Predicate S) :
    ¬ Complete enc := by
  intro hC
  obtain ⟨d, hd⟩ := hC (fun w => ¬ enc w w)
  exact Diagonal.no_fixpoint_of_eq (congrFun hd d)

/-- The identity self-account is both complete and faithful. -/
theorem identity_total {S : Type u} :
    Complete (id : S → S) ∧ Faithful (id : S → S) :=
  ⟨fun y => ⟨y, rfl⟩, fun _ _ h => h⟩

/-- A complete and faithful account is an equivalence of carrier and codomain. -/
theorem complete_faithful_is_equiv {S K : Type u} (k : S → K)
    (hc : Complete k) (hf : Faithful k) :
    ∃ j : K → S, (∀ x, j (k x) = x) ∧ (∀ y, k (j y) = y) := by
  refine ⟨fun y => (hc y).choose, ?_, fun y => (hc y).choose_spec⟩
  intro x
  exact hf _ x (hc (k x)).choose_spec

/-- The forced form does not single out one map: any bijection of the carrier is
    complete and faithful. Completeness-and-faithfulness fixes the *form*
    (codomain = carrier), not the map. -/
theorem form_not_unique :
    ∃ k : Bool → Bool, Complete k ∧ Faithful k ∧ ∃ x, k x ≠ x := by
  refine ⟨not, ?_, ?_, ⟨true, by decide⟩⟩
  · intro y; cases y
    · exact ⟨true, rfl⟩
    · exact ⟨false, rfl⟩
  · intro x y h; cases x <;> cases y <;> first | rfl | exact absurd h (by decide)

end SelfAccount


/-! ## 7. Yoneda: identity emits its own faithful image, and nothing more

From identity alone one map is forced — each element to the predicate "being me".
It is faithful (the self-image is a perfect copy) but never complete (its image is
exactly the identity predicates; the rest of predicate-space is unreachable, by
the diagonal). This is the precise boundary on what identity produces in the
representational layer: a faithful copy of itself — the floor — and provably no
more — the ceiling. -/

namespace Yoneda
open SelfAccount

/-- The map forced by identity alone. -/
def yoneda {S : Type u} : S → Predicate S := fun a => (fun x => x = a)

/-- **Floor — faithful.** Identity casts the carrier into predicate-space
    losslessly. -/
theorem yoneda_faithful {S : Type u} (a b : S) :
    yoneda a = yoneda b → a = b :=
  fun h => cast (congrFun h a) rfl

/-- **Ceiling — not complete.** The image is exactly the identity predicates; the
    rest of predicate-space is unreachable (the diagonal again). -/
theorem yoneda_not_complete {S : Type u} :
    ¬ Complete (yoneda : S → Predicate S) := by
  intro hC
  obtain ⟨w, hw⟩ := hC (fun x => ¬ yoneda x x)
  exact Diagonal.no_fixpoint_of_eq (congrFun hw w)

/-- The boundary in one statement: identity emits a faithful self-image and
    nothing beyond it. -/
theorem yoneda_floor_and_ceiling {S : Type u} :
    (∀ a b : S, yoneda a = yoneda b → a = b)
    ∧ ¬ Complete (yoneda : S → Predicate S) :=
  ⟨yoneda_faithful, yoneda_not_complete⟩

end Yoneda


/-! ## 8. The whole: the non-split form is coherent

Refutation of the split is not enough; coherence needs a positive model. The
non-split structure — a carrier whose self-account is the identity, with no
predicate layer — has one. The split form is empty; the non-split form is
inhabited. -/

namespace Whole

theorem split_incoherent : Closure.SplitSystem → False :=
  Closure.no_coherent_split

structure WholeSystem where
  S : Type
  refl : S → S
  is_identity : ∀ x, refl x = x

def point : WholeSystem :=
  { S := Unit, refl := id, is_identity := fun _ => rfl }

theorem whole_coherent : Nonempty WholeSystem := ⟨point⟩

theorem coherence_is_non_split :
    (Closure.SplitSystem → False) ∧ Nonempty WholeSystem :=
  ⟨split_incoherent, whole_coherent⟩

end Whole


/-! ## 9. Capstone -/

/-- The split form has no model; the identity self-account is complete and
    faithful; the representational self-account is not complete; and identity's
    self-image in predicate-space is faithful but never complete. -/
theorem self_knowledge_is_non_dual :
    (Closure.SplitSystem → False)
    ∧ (∀ S : Type, SelfAccount.Complete (id : S → S)
                    ∧ SelfAccount.Faithful (id : S → S))
    ∧ (∀ (S : Type) (enc : S → Predicate S), ¬ SelfAccount.Complete enc)
    ∧ (∀ S : Type, (∀ a b : S, Yoneda.yoneda a = Yoneda.yoneda b → a = b)
                    ∧ ¬ SelfAccount.Complete (Yoneda.yoneda : S → Predicate S)) :=
  ⟨Closure.no_coherent_split,
   fun _ => SelfAccount.identity_total,
   fun _ enc => SelfAccount.representation_never_complete enc,
   fun _ => Yoneda.yoneda_floor_and_ceiling⟩


/-!
## Synthesis

1. **A representational total self-account is impossible.** Any subject–predicate
   split either contradicts itself (the liar) or leaves a diagonal predicate
   provably outside (§2). Both are one fact: negation has no fixed point (§1).

2. **The gap is two-sided.** Predicate-power neither maps down onto the carrier
   nor embeds back into it (§3). The overflow is structural, not a near-miss.

3. **A separating criterion lies outside the encoding** (§4), and every
   distinction reduces to a distinction of identity — the identity predicates are
   the basis of all discernment.

4. **A lossless self-map erases distinction** (§5); to carry distinction the map
   must be lossy.

5. **The form of a complete, faithful self-account is forced to be non-dual**
   (§6): it cannot route through predicate-power, so its codomain is the carrier
   itself. The form is forced; the map is not unique.

6. **Identity emits its own faithful image into the representational layer, and
   nothing more** (§7). The self-image is faithful (floor) but never complete
   (ceiling); the excess of predicate-space over that image is exactly the
   diagonal remainder of §2–3.

**Core result.** The only coherent form for complete self-knowledge is non-dual:
the carrier related to itself by identity, with no knower–known gap.

**A marked boundary.** The file establishes *presupposition*, not *production*:
that the split presupposes the unsplit and fails to be it. It contains no map by
which identity *generates* the representational excess — §7 shows identity emits
exactly its faithful copy and §2–3 show the remainder is unreachable. Whether any
such generation exists is not a question these materials can pose; it would
require primitives (a dynamics, a transition) that are not present here. The
results are structural. Any reading of "identity" as a metaphysical ground is
interpretation laid over the mathematics, not a theorem of it.
-/
