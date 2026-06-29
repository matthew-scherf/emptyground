import type { FormalSection } from "./types";

export const formalSections: FormalSection[] = [
  {
    number: 1,
    slug: "diagonal",
    namespace: "Diagonal",
    title: "The engine: the diagonal has no fixed point",
    summary:
      "Negation has no fixed point: this is the single engine from which every negative result below is derived. Cantor, Russell, the liar, Tarski, and Gödel are all this one fact under different inputs. Lawvere's fixed-point theorem makes the engine explicit: if a map is point-surjective, every endomorphism of the codomain has a fixed point. Since ¬ has none, no point-surjective map into Prop can exist.",
    theorems: [
      {
        name: "no_fixpoint_of_iff",
        statement: "A proposition equivalent to its own negation is absurd.",
        lean: `theorem no_fixpoint_of_iff {p : Prop} (h : p ↔ ¬ p) : False :=
  have np : ¬ p := fun hp => (h.mp hp) hp
  np (h.mpr np)`,
        note: "The liar paradox, minimally stated.",
      },
      {
        name: "lawvere",
        statement:
          "If some e : A → (A → B) is point-surjective, every g : B → B has a fixed point.",
        lean: `theorem lawvere {A : Type u} {B : Type v} (e : A → (A → B))
    (he : ∀ f : A → B, ∃ a, e a = f) : ∀ g : B → B, ∃ b, g b = b := by
  intro g
  obtain ⟨a, ha⟩ := he (fun x => g (e x x))
  exact ⟨e a a, (congrFun ha a).symm⟩`,
        note:
          "All diagonal results below are this theorem applied to Not, which has no fixed point.",
      },
    ],
    thesisIds: [1, 2, 3],
  },
  {
    number: 2,
    slug: "closure",
    namespace: "Closure",
    title: "Closure: a representational self-account cannot close",
    summary:
      "An encoding of a carrier into its own predicate-power (enc : W → Predicate W) is the formal model of a representational self-account (a subject trying to represent all its own predicates). The diagonal shows no such encoding can be point-surjective. The escaped predicate is exhibited constructively: λ w, ¬ enc w w. The liar is the same result for a truth-predicate. Both derive from Diagonal.lawvere.",
    theorems: [
      {
        name: "no_internal_catalogue",
        statement: "No encoding internalizes all predicates: the catalogue cannot close.",
        lean: `theorem no_internal_catalogue {W : Type u} (enc : W → Predicate W) :
    ¬ Internalizes enc := by
  intro hRep
  obtain ⟨d, hd⟩ := hRep (fun w => ¬ enc w w)
  exact no_fixpoint_of_eq (congrFun hd d)`,
      },
      {
        name: "escaped_predicate",
        statement: "The escaping predicate is exhibited: the diagonal lies outside every range.",
        lean: `theorem escaped_predicate {W : Type u} (enc : W → Predicate W) :
    ∃ φ : Predicate W, ∀ w : W, enc w ≠ φ := by
  refine ⟨fun w => ¬ enc w w, ?_⟩
  intro w hw
  exact no_fixpoint_of_eq (congrFun hw w)`,
      },
      {
        name: "no_coherent_split",
        statement: "No system can judge a truth-predicate over itself with full adequacy.",
        lean: `theorem no_coherent_split (L : SplitSystem) : False :=
  no_fixpoint_of_iff (L.adequacy (fun s => ¬ L.Tr s))`,
        note: "Tarski's undefinability theorem. SplitSystem models the subject–predicate split.",
      },
    ],
    thesisIds: [1, 5, 15, 26, 28],
  },
  {
    number: 3,
    slug: "gap",
    namespace: "Gap",
    title: "The gap is two-sided",
    summary:
      "The carrier is too small to survey its predicate-power (no surjection exists, §2) and the predicate-power is too large to fit inside the carrier (no injection exists either). The representational layer overflows the carrier in both directions; no cleverer encoding closes the gap.",
    theorems: [
      {
        name: "no_surjection",
        statement: "No map from the carrier surjects onto its predicate-power.",
        lean: `theorem no_surjection {S : Type u} (f : S → Predicate S) :
    ¬ Closure.Internalizes f :=
  Closure.no_internal_catalogue f`,
      },
      {
        name: "no_injection",
        statement: "No injection embeds predicate-power back into the carrier.",
        lean: `theorem no_injection {S : Type u} (i : Predicate S → S)
    (hi : ∀ p q, i p = i q → p = q) : False := by
  let D : Predicate S := fun a => ∃ p, i p = a ∧ ¬ p a
  by_cases h : D (i D)
  · obtain ⟨p, hip, hnp⟩ := h
    rw [hi p D hip] at hnp; exact hnp h
  · exact h ⟨D, rfl, h⟩`,
        note: "Cantor's theorem in type-theoretic form.",
      },
    ],
    thesisIds: [1, 7, 16],
  },
  {
    number: 4,
    slug: "distinction",
    namespace: "Distinction",
    title: "Distinction: the separating criterion transcends the encoding",
    summary:
      "The second, independent root: no diagonal here. The identity of indiscernibles shows that agreement on all predicates forces equality. More: every distinction reduces to a distinction of identity. The identity predicates are the basis of all discernment. A genuine separating criterion that lies outside an encoding cannot be in that encoding.",
    theorems: [
      {
        name: "wide_collapses",
        statement:
          "Agreement on all predicates forces equality. The witnessing predicate is the identity predicate.",
        lean: `theorem wide_collapses {B : Type u} (b₁ b₂ : B)
    (h : WideIndiscernible b₁ b₂) : b₁ = b₂ :=
  ((h (fun x => x = b₁)).mp rfl).symm`,
      },
      {
        name: "identity_is_universal_separator",
        statement: "Every distinction reduces to a distinction of identity.",
        lean: `theorem identity_is_universal_separator {B : Type u}
    (φ : Predicate B) (b₁ b₂ : B) (h : ¬ (φ b₁ ↔ φ b₂)) :
    ¬ ((b₁ = b₁) ↔ (b₂ = b₁)) := by
  intro hiff; apply h; rw [hiff.mp rfl]`,
        note:
          "The identity predicates are a basis for all discernment. The ground of distinction is not itself one of the represented predicates.",
      },
      {
        name: "distinction_transcends_internalization",
        statement: "A genuine separating criterion is not one of the encoded predicates.",
        lean: `theorem distinction_transcends_internalization {B : Type u}
    (enc : B → Predicate B) (D : Predicate B) (b₁ b₂ : B)
    (hU : Indiscernible enc b₁ b₂) (h₁ : D b₁) (h₂ : ¬ D b₂) :
    ∀ w : B, enc w ≠ D := by
  intro w hw
  have e : enc w b₁ ↔ enc w b₂ := hU w
  rw [hw] at e; exact h₂ (e.mp h₁)`,
      },
    ],
    thesisIds: [2, 4, 13, 29],
  },
  {
    number: 5,
    slug: "identification",
    namespace: "Identification",
    title: "Identification: a lossless self-map erases distinction",
    summary:
      "To carry a genuine distinction, the knowledge map must be lossy; the gap is irreducible. An injective map that identifies two elements forces them to be the same. Contrapositively: to carry any distinction at all, the map must fail injectivity.",
    theorems: [
      {
        name: "faithful_forbids_the_pair",
        statement: "An injective map that identifies two elements forces them to be identical.",
        lean: `theorem faithful_forbids_the_pair
    {B C : Type u} (know : B → C) (D : B → Prop) (b₁ b₂ : B)
    (hFaithful : Faithful know) (hId : know b₁ = know b₂)
    (h₁ : D b₁) (h₂ : ¬ D b₂) : False := by
  have hEq : b₁ = b₂ := hFaithful b₁ b₂ hId
  rw [hEq] at h₁; exact h₂ h₁`,
      },
      {
        name: "pair_implies_lossy",
        statement: "To carry a distinction, the map must be lossy.",
        lean: `theorem pair_implies_lossy
    {B C : Type u} (know : B → C) (D : B → Prop) (b₁ b₂ : B)
    (hId : know b₁ = know b₂) (h₁ : D b₁) (h₂ : ¬ D b₂) : ¬ Faithful know :=
  fun hF => faithful_forbids_the_pair know D b₁ b₂ hF hId h₁ h₂`,
        note: "Determination is loss (thesis 7) falls out here as a formal consequence.",
      },
    ],
    thesisIds: [7, 11, 15, 27],
  },
  {
    number: 6,
    slug: "self-account",
    namespace: "SelfAccount",
    title: "The self-account: complete + faithful forces the form",
    summary:
      "A complete and faithful account is an equivalence of the carrier with its codomain. With predicate-power as codomain that is impossible (§2). So the codomain is forced to be the carrier itself, with no representational layer. The form is forced; the map is not unique.",
    theorems: [
      {
        name: "representation_never_complete",
        statement: "A representational self-account is never complete.",
        lean: `theorem representation_never_complete {S : Type u} (enc : S → Predicate S) :
    ¬ Complete enc := by
  intro hC
  obtain ⟨d, hd⟩ := hC (fun w => ¬ enc w w)
  exact Diagonal.no_fixpoint_of_eq (congrFun hd d)`,
      },
      {
        name: "identity_total",
        statement: "The identity self-account is both complete and faithful.",
        lean: `theorem identity_total {S : Type u} :
    Complete (id : S → S) ∧ Faithful (id : S → S) :=
  ⟨fun y => ⟨y, rfl⟩, fun _ _ h => h⟩`,
        note: "The forced form: the only complete and faithful self-account is non-dual.",
      },
      {
        name: "complete_faithful_is_equiv",
        statement: "A complete and faithful account is an equivalence of carrier and codomain.",
        lean: `theorem complete_faithful_is_equiv {S K : Type u} (k : S → K)
    (hc : Complete k) (hf : Faithful k) :
    ∃ j : K → S, (∀ x, j (k x) = x) ∧ (∀ y, k (j y) = y) := by
  refine ⟨fun y => (hc y).choose, ?_, fun y => (hc y).choose_spec⟩
  intro x; exact hf _ x (hc (k x)).choose_spec`,
      },
      {
        name: "form_not_unique",
        statement:
          "Completeness-and-faithfulness fixes the form (codomain = carrier), not the map.",
        lean: `theorem form_not_unique :
    ∃ k : Bool → Bool, Complete k ∧ Faithful k ∧ ∃ x, k x ≠ x := by
  refine ⟨not, ?_, ?_, ⟨true, by decide⟩⟩
  · intro y; cases y
    · exact ⟨true, rfl⟩
    · exact ⟨false, rfl⟩
  · intro x y h
    cases x <;> cases y <;> first | rfl | exact absurd h (by decide)`,
      },
    ],
    thesisIds: [1, 5, 26, 27, 28],
  },
  {
    number: 7,
    slug: "yoneda",
    namespace: "Yoneda",
    title: "Yoneda: identity emits its own faithful image, and nothing more",
    summary:
      "From identity alone one map is forced: each element to the predicate 'being me' (a ↦ (· = a)). It is faithful (the self-image is a perfect copy, the floor) but never complete. Its image is exactly the identity predicates; the rest of predicate-space is unreachable (the ceiling). This is the precise boundary on what identity produces in the representational layer.",
    theorems: [
      {
        name: "yoneda_faithful",
        statement: "Identity casts the carrier into predicate-space losslessly.",
        lean: `theorem yoneda_faithful {S : Type u} (a b : S) :
    yoneda a = yoneda b → a = b :=
  fun h => cast (congrFun h a) rfl`,
        note: "Floor: the self-image is a perfect copy.",
      },
      {
        name: "yoneda_not_complete",
        statement:
          "The image is exactly the identity predicates; the rest of predicate-space is unreachable.",
        lean: `theorem yoneda_not_complete {S : Type u} :
    ¬ Complete (yoneda : S → Predicate S) := by
  intro hC
  obtain ⟨w, hw⟩ := hC (fun x => ¬ yoneda x x)
  exact Diagonal.no_fixpoint_of_eq (congrFun hw w)`,
        note: "Ceiling: the diagonal blocks completion. The excess is structurally unreachable.",
      },
    ],
    thesisIds: [3, 11, 12, 25, 30],
  },
  {
    number: 8,
    slug: "whole",
    namespace: "Whole",
    title: "The whole: the non-split form is coherent",
    summary:
      "Refutation of the split is not enough; coherence needs a positive model. The non-split structure (a carrier whose self-account is the identity, with no predicate layer) has one. The split form is empty; the non-split form is inhabited.",
    theorems: [
      {
        name: "split_incoherent",
        statement: "The split form (SplitSystem) has no model.",
        lean: `theorem split_incoherent : Closure.SplitSystem → False :=
  Closure.no_coherent_split`,
      },
      {
        name: "whole_coherent",
        statement: "The non-split form (WholeSystem) is inhabited.",
        lean: `def point : WholeSystem :=
  { S := Unit, refl := id, is_identity := fun _ => rfl }

theorem whole_coherent : Nonempty WholeSystem := ⟨point⟩`,
        note: "The positive model. Unit type with the identity map is the minimal witness.",
      },
    ],
    thesisIds: [1, 5, 10, 21],
  },
  {
    number: 9,
    slug: "capstone",
    namespace: "self_knowledge_is_non_dual",
    title: "Capstone",
    summary:
      "The four results in one theorem: the split form has no model; the identity self-account is complete and faithful; the representational self-account is not complete; and identity's self-image in predicate-space is faithful but never complete.",
    theorems: [
      {
        name: "self_knowledge_is_non_dual",
        statement: "The complete capstone theorem.",
        lean: `theorem self_knowledge_is_non_dual :
    (Closure.SplitSystem → False)
    ∧ (∀ S : Type, SelfAccount.Complete (id : S → S)
                    ∧ SelfAccount.Faithful (id : S → S))
    ∧ (∀ (S : Type) (enc : S → Predicate S), ¬ SelfAccount.Complete enc)
    ∧ (∀ S : Type, (∀ a b : S, Yoneda.yoneda a = Yoneda.yoneda b → a = b)
                    ∧ ¬ SelfAccount.Complete (Yoneda.yoneda : S → Predicate S)) :=
  ⟨Closure.no_coherent_split,
   fun _ => SelfAccount.identity_total,
   fun _ enc => SelfAccount.representation_never_complete enc,
   fun _ => Yoneda.yoneda_floor_and_ceiling⟩`,
        note:
          "The forced form: complete self-knowledge is non-dual. The split form is empty; the identity form is the only option.",
      },
    ],
    thesisIds: [1, 2, 3, 5, 11],
  },
];

export function getFormalBySlug(slug: string): FormalSection | undefined {
  return formalSections.find((s) => s.slug === slug);
}
