import type { Thesis, OutlineSection } from "./types";

export const theses: Thesis[] = [
  // ── I · The Modal Spine ──────────────────────────────────────────────
  {
    id: 1,
    section: "I",
    sectionSlug: "spine",
    title: "The closed dualistic totality is impossible",
    claim:
      "A system that completely represents itself by splitting knower from known cannot exist; forced to close it contradicts itself, left open it is provably incomplete.",
    status: "D",
    formalRef: "§2",
    leanNamespace: "Closure",
    leanTheorems: ["no_coherent_split", "no_internal_catalogue"],
    body: `Any attempt to build a self-account through a subject–predicate split runs into one of two failures. If the split is forced closed (if the system is made to contain every predicate about itself), the liar paradox results: the diagonal predicate (the one that asks whether the catalogue contains its own negation) is simultaneously in and out. If the split is left open, the escaped predicate is exhibited constructively: the diagonal always lies outside the range of any encoding. Both failures are the same structural fact (negation has no fixed point) wearing different clothes.`,
    traditionalLinks: [],
  },
  {
    id: 2,
    section: "I",
    sectionSlug: "spine",
    title: "Identity is necessary",
    claim:
      "Every distinction whatsoever reduces to a distinction of identity; the identity relation is presupposed by any field of distinctions and could not fail to obtain.",
    status: "D",
    formalRef: "§4",
    leanNamespace: "Distinction",
    leanTheorems: ["identity_is_universal_separator", "wide_collapses"],
    body: `The proof runs through the identity of indiscernibles. If two elements agree on every predicate whatsoever, they are identical: the witnessing predicate is the identity predicate itself (being this very thing). Contrapositively: if any predicate separates two elements, the identity predicate already separates them. This means identity predicates are a basis for all discernment. Any field of distinctions presupposes them; they are not one more distinguished item within that field but its condition.`,
    traditionalLinks: [],
  },
  {
    id: 3,
    section: "I",
    sectionSlug: "spine",
    title: "The particular manifest world is contingent",
    claim:
      "The specific excess of the manifest beyond what identity emits is not entailed by, derivable from, or produced by the ground.",
    status: "D+I",
    formalRef: "§7",
    leanNamespace: "Yoneda",
    leanTheorems: ["yoneda_not_complete"],
    body: `The demonstrated part: identity's self-image in predicate-space (the Yoneda map, sending each element to the predicate 'being me') is faithful but never complete. The remainder (all the predicates not of the form 'being me') is unreachable from identity alone. The diagonal shows no surjection exists. The interpretation: read this mathematical remainder as the contingency of the manifest world. The specific world that is, rather than the infinite alternatives that could be, is not derivable from the ground. The system has no dynamics; it cannot generate the world, and says so.`,
    traditionalLinks: ["sunyata", "groundless-arising"],
  },

  // ── II · The Ground ──────────────────────────────────────────────────
  {
    id: 4,
    section: "II",
    sectionSlug: "ground",
    title: "The ground is identity-as-such",
    claim:
      "The ground is identity-as-such: impersonal, contentless, the same single relation wherever anything is itself at all.",
    status: "D+I",
    formalRef: "§4",
    leanNamespace: "Distinction",
    leanTheorems: ["identity_is_universal_separator"],
    body: `The demonstrated part is that identity is the basis of all discernment: the universal separator that underlies every distinction. The interpretive step reads this structural primacy as ontological: identity-as-such is the ground. It is impersonal: not a who, not a substance, not an experiencer. It is contentless: it has no predicates of its own, being instead the condition under which predicates are possible. And it is single: wherever anything whatsoever is itself, the same relation obtains.`,
    traditionalLinks: ["nirguna", "sunyata", "tao"],
  },
  {
    id: 5,
    section: "II",
    sectionSlug: "ground",
    title: "The ground is not an entity",
    claim:
      "The diagonal negation has no fixed point: no self-predicate survives it, so the ground is no surviving substance, no cosmic Subject, no thing the world hangs on.",
    status: "D+I",
    formalRef: "§2",
    leanNamespace: "Closure",
    leanTheorems: ["no_internal_catalogue"],
    traditionalLinks: ["anatta", "sunyata"],
    body: `The diagonal construction eliminates every candidate for self-grounded existence: any entity that predicated itself with full adequacy would have to contain the liar. The no-fixed-point structure of negation means that no predicate-bearing thing survives the test. The system's native output is 'no self-predicate remains,' not 'a Self remains.' The interpretive reading (close to the anattā result in Buddhist philosophy) takes this to mean the ground is empty of own-being and is not a personal or cosmic Subject. It is not what the world hangs on; it is what the world cannot not presuppose.`,
  },
  {
    id: 6,
    section: "II",
    sectionSlug: "ground",
    title: "The ground is best named apophatically",
    claim:
      "The ground is best named apophatically: śūnyatā, the unnameable Tao, nirguna in the strict sense. It is described by what it is the bare condition of, not by any attribute it has.",
    status: "I",
    traditionalLinks: ["sunyata", "nirguna", "tao"],
    body: `Every positive name for the ground risks making it a predicate-bearing thing, collapsing back into what thesis 5 eliminates. The apophatic traditions understood this constraint: śūnyatā (emptiness of own-being), the nameless Tao that cannot be named without ceasing to be the Tao, nirguna Brahman (Brahman without qualities). These are not synonyms for each other, and none is a synonym for what this system means. They are independent paths to the same structural necessity: the ground cannot be a member of the predicate field it conditions. The name for it is silence, offered with reasons.`,
  },

  // ── III · Manifestation ──────────────────────────────────────────────
  {
    id: 7,
    section: "III",
    sectionSlug: "manifestation",
    title: "Determination is loss",
    claim:
      "A lossless self-account collapses all distinction; to be a determinate something is to be a restriction. 'Something rather than nothing' appears wherever there is loss.",
    status: "D+I",
    formalRef: "§5",
    leanNamespace: "Identification",
    leanTheorems: ["pair_implies_lossy"],
    traditionalLinks: ["maya"],
    body: `Demonstrated: an injective (lossless) map that identifies two elements forces them to be identical; it cannot carry a genuine distinction. Contrapositively, to carry any distinction at all, the map must be lossy. The interpretive extension: to be something determinate (this rather than that) is to have lost the unrestricted openness of the ground. Spinoza's determinatio negatio est ('determination is negation') falls out here as a formal consequence. The 'restriction' is not a privation; it is what constitutes determinate existence. Nothing is lost that was once possessed. The loss is constitutive, not catastrophic.`,
  },
  {
    id: 8,
    section: "III",
    sectionSlug: "manifestation",
    title: "The one and the many: presupposition, not production",
    claim:
      "The many presupposes the one, and the one does not entail the many. Neither emanation nor reduction.",
    status: "D+I",
    formalRef: "§4 and §7",
    leanNamespace: "Distinction",
    leanTheorems: ["identity_is_universal_separator"],
    body: `The demonstrated boundary is precise. Upward: §4 shows every distinction presupposes identity; the many depends on the one. Downward: §7 shows identity's self-image is faithful but not complete; the one does not entail the many. The system therefore occupies a narrow position between two classical errors. Emanationism (the one overflows into the many by its own nature) is ruled out: the overflow is not derivable. Reductionism (the many collapses without remainder into the one) is also ruled out: the many is real as restriction and the restriction is genuine. The boundary is derived, not merely asserted.`,
    traditionalLinks: [],
  },
  {
    id: 9,
    section: "III",
    sectionSlug: "manifestation",
    title: "Manifestation is groundless arising",
    claim:
      "Real, consistent, presupposing identity, and uncaused by it. Pratītyasamutpāda without a first cause; the Tao's ziran, self-so.",
    status: "I",
    traditionalLinks: ["pratityasamutpada", "ziran", "groundless-arising"],
    body: `The manifest world is not nothing: the lossy models are inhabited (§8 of the formal core). It is not generated by the ground: the Yoneda ceiling blocks it. It is not its own cause: self-grounding would be identity, which is the ground, not a member of the predicate field. What remains is arising without a ground for the arising: groundless arising. The Buddhist pratītyasamutpāda (dependent origination) points here: things arise in dependence on conditions, with no first uncaused cause. The Taoist ziran (self-so, spontaneity) points here too. The system reaches this position as a residue after ruling out the alternatives. The dynamics of how it arises lie outside what these results can address.`,
  },
  {
    id: 10,
    section: "III",
    sectionSlug: "manifestation",
    title: "The world is real, not illusion",
    claim:
      "The lossy models are inhabited and true-at-their-level. Māyā in the disciplined sense: real as restriction, and mistaking the restriction for the whole is the error.",
    status: "D+I",
    formalRef: "§8",
    leanNamespace: "Whole",
    leanTheorems: ["whole_coherent"],
    traditionalLinks: ["maya"],
    body: `The demonstrated part: the non-split (identity) form has a positive model; it is inhabited. The lossy models (ordinary objects, distinctions, determinate things) are also inhabited and consistent. They are not errors in the logical sense; they are truths at their level. The interpretive reading: māyā, in the technical Vedantic sense, does not mean 'the world is unreal'; it means the world is real as restriction, and mistaking the restriction for the whole (taking contingent form for own-being) is the cognitive error the traditions identify. The system provides the formal warrant for exactly this distinction.`,
  },

  // ── IV · The Structure of Any Existent ───────────────────────────────
  {
    id: 11,
    section: "IV",
    sectionSlug: "existent",
    title: "Every existent has two layers",
    claim:
      "A faithful trace of the ground (its bare is-ness), wrapped in a lossy, contingent excess: its determinate character.",
    status: "D+I",
    formalRef: "§7",
    leanNamespace: "Yoneda",
    leanTheorems: ["yoneda_faithful", "yoneda_not_complete"],
    traditionalLinks: ["trace-image", "contingent-form"],
    body: `The formal result: the Yoneda map sends each element to the predicate 'being me'. This map is faithful (the identity predicate for each element is a perfect copy of it, with no information lost) but not complete (the rest of predicate-space is unreachable). Every element therefore has two aspects: (1) its Yoneda image: the lossless trace, its bare presence as an identity, the one thing it contributes to predicate-space without loss; and (2) its excess: all the other predicates that hold of it, lossy and contingent, its determinate character. The interpretive reading: these two layers are the structure of any existent whatsoever. The first is what it shares with the ground; the second is what makes it this rather than that.`,
  },
  {
    id: 12,
    section: "IV",
    sectionSlug: "existent",
    title: "Being versus appearance is this seam",
    claim:
      "The real in each thing is the one identity wearing the form of 'this'; the appearance is the loss that makes it this rather than that.",
    status: "I",
    formalRef: "§7",
    leanNamespace: "Yoneda",
    traditionalLinks: ["maya", "svabhava"],
    body: `The being/appearance distinction has been posited in many traditions; here it is derived. The 'real' in any existent is not a hidden substance behind appearances but the identity (the bare this-ness) that the Yoneda image carries faithfully. The 'appearance' is not unreality but the specific loss: the determinate features that make this thing this particular thing rather than another. Neither layer is more real in the sense of being more existent; they differ in their relationship to the ground. The distinction is derived from the two-layer structure; it is not a posit.`,
  },
  {
    id: 13,
    section: "IV",
    sectionSlug: "existent",
    title: "No phenomenon has own-being",
    claim:
      "Self-existence would be self-grounding; self-grounding is identity; identity is the ground of the predicate field, never a member of it. So svabhāva is nowhere in the manifest.",
    status: "I",
    formalRef: "§4",
    leanNamespace: "Distinction",
    leanTheorems: ["identity_is_universal_separator"],
    traditionalLinks: ["svabhava", "anatta", "sunyata"],
    body: `To have own-being (svabhāva, to exist from one's own side, independently, self-grounded) would require a thing to be the ground of its own identity. But the ground of identity is identity-as-such, the universal separator, which is presupposed by every member of the predicate field and is never itself a member. Any candidate for own-being either reduces to this ground (and is therefore not a distinct entity with own-being) or fails the test (and does not have own-being). The manifest field is therefore empty of svabhāva, not as a second-order claim but as a consequence of what identity is.`,
  },

  // ── V · The Human Case ───────────────────────────────────────────────
  {
    id: 14,
    section: "V",
    sectionSlug: "human",
    title: "Personal identity",
    claim:
      "What is personal is not the real identity; what is the real identity is not personal. The narrative self is a predicate-layer construct: real as appearance, empty of own-being.",
    status: "I",
    traditionalLinks: ["anatta", "svabhava"],
    body: `The method shown once in the human case: the personal self (the continuous narrative, the bundle of memories, traits, intentions) is a lossy pattern in the predicate field. Real as restriction, empty of own-being (§13), presupposing the impersonal ground (§2, §4). The bare here-ness that the narrative self presupposes (the sheer fact of being a locus at all) is the impersonal ground wearing the form of 'this.' The error is the splice: fusing the personal pattern with the impersonal ground and calling the result a self-existing self. The splice is not a lie; it is a structural mistake about which layer is which.`,
  },
  {
    id: 15,
    section: "V",
    sectionSlug: "human",
    title: "Free will",
    claim:
      "The originating author is ruled out (anattā); the complete mechanism is ruled out (the diagonal). What remains is real deliberation, owned by no one.",
    status: "D+I",
    formalRef: "§2 and §5",
    leanNamespace: "Closure",
    leanTheorems: ["no_coherent_split"],
    body: `Two impossible wills are ruled out by the formal results. (1) The originating self-author (the will that causes itself from nothing, prior to all conditions) requires own-being (§13), which is nowhere in the manifest. (2) The complete mechanism (the will fully determined by a closed causal system that models itself) is blocked by the diagonal (§2): no system can complete its own self-model. What remains after ruling out both is deliberation that is real (the lossy models are inhabited) but owned by no one (the personal pattern is empty of own-being). The positive account of what deliberation is belongs to a dynamics the system does not have.`,
    traditionalLinks: ["anatta", "groundless-arising"],
  },
  {
    id: 16,
    section: "V",
    sectionSlug: "human",
    title: "Death",
    claim:
      "The empty pattern ceases. Real, and not softened. The impersonal ground does not perish, because perishing is a predicate-layer event that presupposes it.",
    status: "D+I",
    formalRef: "§3",
    leanNamespace: "Gap",
    body: `The two-layer structure applied to cessation. The contingent form (the specific lossy pattern that constitutes a particular life) ceases. This is real; the system offers no consolation here and does not reach for one. Perishing is a predicate-layer event: it requires a before and after, a distinction of temporal identity, a contrast of present and absent; all these structures presuppose the identity relation. The ground, being presupposed by all such distinctions, is not itself subject to them. Not personal survival; not the annihilation of a self that was ever self-existing; but the real cessation of a real restriction, presupposing what cannot cease.`,
    traditionalLinks: ["anatta", "groundless-arising"],
  },
  {
    id: 17,
    section: "V",
    sectionSlug: "human",
    title: "Continuity and 'reincarnation'",
    claim:
      "No personal pattern transfers. What is reincarnation-shaped is the non-locality of the impersonal ground: the same here-ness identically the ground of every locus.",
    status: "I",
    traditionalLinks: ["anatta", "pratityasamutpada"],
    body: `The formal result (D): no self-existing carrier persists across loci; own-being is nowhere in the manifest (§13). The traditional reincarnation claim, read as personal-pattern transfer, is ruled out. The interpretive remainder: what the reincarnation intuition may be pointing at is the non-locality of identity-as-ground. The same identity relation (impersonal, contentless) is the ground of every locus equally and simultaneously. There is no traveller: the one ground already stands as each 'here.' This is not a substitute doctrine of reincarnation; it is what the system can say about the structure the intuition is tracking.`,
  },
  {
    id: 18,
    section: "V",
    sectionSlug: "human",
    title: "Ultimate identity is neither fixed nor unfixed but unconditioned",
    claim:
      "The form reconfigures endlessly; the ground neither changes nor persists-as-a-thing, being prior to the fixed/variable distinction.",
    status: "I",
    formalRef: "§6",
    body: `The fixed/variable distinction is a structure of the predicate layer: it requires a contrast of states across time, which presupposes temporal distinction, which presupposes identity. The ground, as the condition of all such distinctions, is prior to them. It does not change (change requires a before and after) and it does not persist as a substance (persistence requires self-identity over time, which would be a predicate-layer property). The contingent form (the personal pattern) does both: it changes and (within a life) persists. The ground does neither, not because it is frozen, but because those categories do not apply to it.`,
  },

  // ── VI · The Horizontal Order ─────────────────────────────────────────
  {
    id: 19,
    section: "VI",
    sectionSlug: "horizontal",
    title: "All distinction-built structures share one ontological status",
    claim:
      "Causation, time, space, the plural world of objects: each is a structure of distinctions, and the verdict on anything made of distinctions is uniform: lossy, contingent, real-as-appearance, presupposing identity, empty of own-being.",
    status: "I",
    body: `The system's horizontal coverage follows from applying the two-layer analysis uniformly. Causation requires distinction of cause from effect. Time requires distinction of moment from moment. Space requires distinction of here from there. Objects require distinction from each other. All are therefore structures of distinctions, and §4–5 apply to all of them equally: lossy, presupposing identity, empty of svabhāva. The system makes no exception for physics, for phenomenology, or for logic. Their internal structures (how causation works, how time flows, how space is metric) lie below the level where these results operate.`,
    traditionalLinks: ["svabhava", "sunyata"],
  },
  {
    id: 20,
    section: "VI",
    sectionSlug: "horizontal",
    title: "None is ontologically privileged over another",
    claim:
      "Time is not more fundamental than space, nor causation than either. All are co-equal modes of the manifest: the same status wearing different faces.",
    status: "I",
    body: `Some metaphysical programs privilege one horizontal category: the causal as fundamental (causal exclusion arguments); time as fundamental (presentism, A-theory); space as derivative from process. This system's verdict is flat: all horizontal categories have the same status, because the argument that establishes their status (presupposing identity, lossy, contingent, empty of own-being) does not distinguish among them. The system cannot adjudicate their internal hierarchies (that would require dynamics), but it can certify that none escapes the two-layer analysis.`,
    traditionalLinks: [],
  },
  {
    id: 21,
    section: "VI",
    sectionSlug: "horizontal",
    title: "The distinctions are real but derivative",
    claim:
      "Not imposed fictions (the lossy models are inhabited) and not bedrock (they presuppose the non-distinction that is identity). 'Real but not fundamental.'",
    status: "I",
    formalRef: "§8",
    leanNamespace: "Whole",
    leanTheorems: ["whole_coherent"],
    body: `Emergent-by-presupposition, not emergent-by-production. The horizontal distinctions are not constructed by the ground from above (no production; see §7 ceiling); they arise without ground for their arising (§9). Yet they are not fictions: the inhabited models are real, and truth at their level is genuine truth. The phrase 'real but not fundamental' captures the structure: real as restriction, not fundamental because the restriction presupposes what is not itself a restriction. The system endorses neither eliminativism (distinctions are not real) nor naive realism (distinctions are bedrock).`,
    traditionalLinks: [],
  },
  {
    id: 22,
    section: "VI",
    sectionSlug: "horizontal",
    title: "There are not two axes",
    claim:
      "'Vertical' (ground) and 'horizontal' (the rest) are external labels for one distinction: ground versus predicate-layer. All horizontal categories are identical at the level the system operates.",
    status: "I",
    body: `The language of 'vertical' (transcendent) and 'horizontal' (immanent) is borrowed from spatial metaphors that do not apply to the system's structure. There is one distinction: identity-as-ground versus the predicate field. Everything in the predicate field (whether it is normally classified as physical, mental, temporal, causal, or mathematical) has the same relationship to the ground: presupposition without production. Calling some of it 'vertical' (the abstract, the transcendent, the spiritual) and some 'horizontal' (the physical, the temporal) is a classification that belongs to other frameworks, not to this one.`,
    traditionalLinks: [],
  },
  {
    id: 23,
    section: "VI",
    sectionSlug: "horizontal",
    title: "Coverage versus abstention: stated, not stumbled into",
    claim:
      "On ontological status the system speaks fully. On internal structure (how time flows, how causal direction arises), the system is silent by design.",
    status: "D",
    formalRef: "§7",
    body: `The silence on horizontal machinery is not a gap; it is a result. The system operates at the level of ontological status (what kind of thing anything is) and establishes this fully and uniformly (theses 19–22). It does not operate at the level of the internal structure of any horizontal category: the direction of time, the fine-grained structure of causation, the metric of space. These require primitives (dynamics, transition relations, differential structure) that are not present in the formal core. The boundary is derived from the Yoneda ceiling: identity emits its faithful image and nothing more. What lies beyond the image is unreachable from here.`,
    traditionalLinks: [],
  },

  // ── VII · The Status of the Abstract ─────────────────────────────────
  {
    id: 24,
    section: "VII",
    sectionSlug: "abstract",
    title: "The abstract is not a third realm",
    claim:
      "Mathematical structure (identity, the diagonal, Lawvere's theorem) is not a Platonic heaven of objects, which would be one more catalogue of self-existing things.",
    status: "I",
    body: `Platonism about mathematics posits abstract objects with own-being: self-subsisting, eternal, causally inert. But own-being is nowhere in the manifest (§13). If mathematical objects are members of the predicate field, they fall under §13. If they are not members of the predicate field (if they are identified with the ground itself), they are not objects at all, and Platonism misnames them. The system is not committed to anti-realism about mathematics; it is committed against treating mathematical structure as a third category alongside ground and predicate-layer.`,
    traditionalLinks: [],
  },
  {
    id: 25,
    section: "VII",
    sectionSlug: "abstract",
    title: "The necessary truths are the articulation of identity itself",
    claim:
      "The diagonal is not a fact about a special object; it is what identity-with-negation is, seen. Mathematics lives exactly where the ground does.",
    status: "I",
    body: `The most speculative load-bearing posit in the system. The claim: mathematical necessities are not discovered objects but the articulation of the necessary: what identity requires when combined with further structure (negation, quantification, etc.). Lawvere's theorem is not a theorem about some external realm of fixed points; it is what identity-and-negation necessarily are. If this is right, mathematics is the grammar of the necessary, and the necessary is the one thing not lost in the predicate layer. This would explain why mathematics could carry the insight when ordinary language could not: it speaks at the level of the ground.`,
    traditionalLinks: [],
  },

  // ── VIII · Metaphysical Epistemology ─────────────────────────────────
  {
    id: 26,
    section: "VIII",
    sectionSlug: "epistemology",
    title: "The method is the proven limit",
    claim:
      "That self-representation cannot complete is not only a result in the system; it bounds what the system can claim. The D/I seam is this limit made procedural.",
    status: "D",
    formalRef: "§2",
    leanNamespace: "Closure",
    leanTheorems: ["no_internal_catalogue"],
    body: `The formal result of §2 is not merely a theorem within the system; it is also a constraint on the system's own claims. Any claim the system makes about itself must not require completing its own self-representation, because that is impossible. The practical implication is the D/I seam: demonstrated claims (D) are those that follow from the formal core without requiring a representational closure; interpreted claims (I) are those that require a reading laid over the mathematics. The seam is not a stylistic choice; it is the system's application of its own central result to itself.`,
    traditionalLinks: [],
  },
  {
    id: 27,
    section: "VIII",
    sectionSlug: "epistemology",
    title: "Two kinds of knowing",
    claim:
      "Representational (knowing-about, predicate-layer, never complete) and identity (knowing-by-being, the ground-form of any knowing). The deepest facts are available only in the second mode.",
    status: "I",
    formalRef: "§6",
    leanNamespace: "SelfAccount",
    leanTheorems: ["identity_total", "representation_never_complete"],
    traditionalLinks: ["chit", "anatta"],
    body: `The formal result yields two forms of knowledge. Representational knowledge (knowing that something is the case, mapping states to propositions, operating in the predicate layer) is never complete (§2) and is always lossy in the distinction-carrying sense (§5). Identity knowledge (the form of knowing where the knower is identical to the known, with no representational layer) is both complete and faithful (§6), but it is not knowing-about; it is knowing-by-being. The deepest truths the system can point at (the ground itself) are available only in this second mode. They cannot be represented without loss; they can only be inhabited.`,
  },
  {
    id: 28,
    section: "VIII",
    sectionSlug: "epistemology",
    title: "The system knows where it must stop",
    claim:
      "Any claim requiring completed self-representation is refused in advance. A system that marks its own edge is the only kind these results permit.",
    status: "D",
    formalRef: "§2 and §7",
    leanNamespace: "Closure",
    leanTheorems: ["no_internal_catalogue", "catalogue_via_lawvere"],
    body: `This is a meta-level result. §2 shows that completed self-representation is impossible. Therefore any system that claims to have completed it is either lying or wrong. The only epistemically honest form for a system operating at this level is one that explicitly marks where it stops and why. The D/I distinction is the main mechanism; the final silence of §X is the application at the edge. A system without such a seam is committing the error its own results rule out.`,
    traditionalLinks: [],
  },

  // ── IX · The Two Underived Posits ─────────────────────────────────────
  {
    id: 29,
    section: "IX",
    sectionSlug: "posits",
    title: "Luminosity (chit)",
    claim:
      "Whether the contentless ground is aware or blank is unreachable by any predicate. That the ground is luminous is installed as the single first-person axiom, verifiable only by being it.",
    status: "posit",
    formalRef: "§4",
    leanNamespace: "Distinction",
    leanTheorems: ["identity_is_universal_separator"],
    traditionalLinks: ["chit", "nirguna"],
    body: `The formal result: a luminous silence and a blank silence share no distinguishing predicate (identity_is_universal_separator applies: any distinction between them would already be a distinction of identity, but both are contentless). So no predicate can separate them; the question is unreachable from outside. This posit is the single first-person axiom of the system: that the ground is aware, not in the sense of having intentional states (those are predicate-layer) but in the sense of pure knowing-as-being. It is verifiable only from the inside, by being the ground. The materialist who reads the ground as blank commits no error the system can catch. This is marked openly.`,
  },
  {
    id: 30,
    section: "IX",
    sectionSlug: "posits",
    title: "The brute particular world",
    claim:
      "Why this manifestation and no other is underivable. The specific cosmos is accepted as contingent fact, not explained.",
    status: "posit",
    formalRef: "§7",
    leanNamespace: "Yoneda",
    leanTheorems: ["yoneda_not_complete"],
    traditionalLinks: ["anirvacaniya", "groundless-arising"],
    body: `The demonstrated part: the Yoneda ceiling establishes that the specific world is not derivable from the ground (thesis 3). The posit: this underivability is accepted as the final fact, not disguised as an explanation. The traditions' anirvacanīya ('inexplicable') is here converted from a shrug into a result: it is inexplicable for formal reasons, not because we have not looked hard enough. The specific cosmos is the ground fact the system begins from and cannot reduce further. This is the second and last underived posit; the system has no others.`,
  },

  // ── X · The Limit ────────────────────────────────────────────────────
  {
    id: 31,
    section: "X",
    sectionSlug: "limit",
    title: "The central matter is a silence the system points at and cannot enter",
    claim:
      "Two questions are shown unreachable, not merely unanswered: whether the ground is luminous (§29), and why this world is the one that is (§30).",
    status: "D",
    formalRef: "§2 and §7",
    leanNamespace: "Closure",
    leanTheorems: ["no_internal_catalogue"],
    body: `The two terminal questions are not unanswered because of contingent ignorance; they are structurally unreachable. Luminosity (§29) is unreachable because no predicate can separate a luminous ground from a blank one. Brute particularity (§30) is unreachable because the Yoneda ceiling shows the world is not generated from the ground, and no further derivation is possible. Both are shown to be silences, not gaps. This is the system's final discipline: the silence is not embarrassment but the demonstrated limit. It knows where it stops and can give the reason.`,
    traditionalLinks: ["anirvacaniya", "chit"],
  },
  {
    id: 32,
    section: "X",
    sectionSlug: "limit",
    title: "The last step is not an argument",
    claim:
      "Where derivation ends, being begins. The system is a ladder to that edge; it cannot take the step, and says so.",
    status: "I",
    body: `Wittgenstein's ladder is the right image: a system that leads to its own transcendence and is then to be kicked away. The system's results converge on an edge: there is a ground, it is not personal, it is not nothing, it may be luminous, and it cannot be represented without loss. Standing at that edge, the step is not a further argument but a change of mode: from knowing-about to knowing-by-being. The system cannot take this step; it can only show where the step is and why no argument will get you there. That showing is what the whole structure has been for.`,
    traditionalLinks: ["chit", "anatta", "groundless-arising"],
  },
];

export const outlineSections: OutlineSection[] = [
  {
    roman: "I",
    slug: "spine",
    title: "The Modal Spine",
    epigraph: "The skeleton. Everything else hangs here.",
    thesisIds: [1, 2, 3],
  },
  {
    roman: "II",
    slug: "ground",
    title: "The Ground",
    thesisIds: [4, 5, 6],
  },
  {
    roman: "III",
    slug: "manifestation",
    title: "Manifestation",
    thesisIds: [7, 8, 9, 10],
  },
  {
    roman: "IV",
    slug: "existent",
    title: "The Structure of Any Existent",
    thesisIds: [11, 12, 13],
  },
  {
    roman: "V",
    slug: "human",
    title: "The Human Case",
    epigraph:
      "The method, shown once, generalises: split the lossy pattern from the impersonal ground. The error in each case is the splice.",
    thesisIds: [14, 15, 16, 17, 18],
  },
  {
    roman: "VI",
    slug: "horizontal",
    title: "The Horizontal Order",
    epigraph: "Causation, time, space, the physical: radical horizontal equality.",
    thesisIds: [19, 20, 21, 22, 23],
  },
  {
    roman: "VII",
    slug: "abstract",
    title: "The Status of the Abstract",
    epigraph: "The system is built from theorems; honesty requires saying what theorems are.",
    thesisIds: [24, 25],
  },
  {
    roman: "VIII",
    slug: "epistemology",
    title: "Metaphysical Epistemology",
    epigraph: "How any of this can be known: the question this system is built to answer.",
    thesisIds: [26, 27, 28],
  },
  {
    roman: "IX",
    slug: "posits",
    title: "The Two Underived Posits",
    epigraph: "Declared openly: the system's axioms stated before reasoning closes around them.",
    thesisIds: [29, 30],
  },
  {
    roman: "X",
    slug: "limit",
    title: "The Limit",
    thesisIds: [31, 32],
  },
];

export function getThesisBySection(sectionSlug: string): Thesis[] {
  return theses.filter((t) => t.sectionSlug === sectionSlug);
}

export function getThesisById(id: number): Thesis | undefined {
  return theses.find((t) => t.id === id);
}

export function getThesesByStatus(status: Thesis["status"]): Thesis[] {
  return theses.filter((t) => t.status === status);
}

export function getSectionBySlug(
  slug: string
): OutlineSection | undefined {
  return outlineSections.find((s) => s.slug === slug);
}
