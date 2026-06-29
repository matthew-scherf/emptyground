import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  // ── System terms ─────────────────────────────────────────────────────
  {
    slug: "predicate-layer",
    term: "Predicate layer",
    kind: "system",
    definition:
      "The domain of all predicates (properties, relations, distinctions) that can be made about a carrier set. Formally: Predicate(W) = W → Prop.",
    systemUse:
      "Used throughout to name the field of representation: anything that can be said or thought about something. Opposed to the ground, which conditions the predicate layer without being a member of it.",
    thesisIds: [1, 2, 4, 5, 11, 13, 19, 22, 25],
    formalRef: "§1 (Predicate definition), §2 (Closure)",
    seeAlso: ["ground-identity", "lossy-map", "trace-image"],
  },
  {
    slug: "ground-identity",
    term: "Ground (identity-as-such)",
    kind: "system",
    definition:
      "Identity-as-such: the impersonal, contentless relation that obtains wherever anything is itself. Not a thing; the condition under which things are distinguishable at all.",
    systemUse:
      "The ontological reading of the formal result that identity is the universal separator (§4). Used as the primary name for what the system calls 'the ground', displacing substance, Subject, and Brahman as names.",
    thesisIds: [2, 4, 5, 6, 11, 13, 17, 25, 29],
    formalRef: "§4 (Distinction)",
    traditionalParallels: [
      {
        tradition: "Advaita Vedanta",
        term: "Nirguna Brahman",
        approximation: "close",
        divergence:
          "Nirguna Brahman is typically still an absolute being or consciousness. This system's ground is not a being at all; it has no properties, including the property of being.",
      },
      {
        tradition: "Madhyamaka Buddhism",
        term: "Śūnyatā (as the nature of dharmas)",
        approximation: "partial",
        divergence:
          "Śūnyatā denotes the absence of svabhāva. The system's ground is not itself empty (it is not a thing that could have or lack own-being); the emptiness result applies to members of the predicate field, not to the ground.",
      },
      {
        tradition: "Taoism",
        term: "Tao (unnamed)",
        approximation: "close",
        divergence:
          "The Tao that can be named is not the eternal Tao: this matches the apophatic structure. But the Tao has a cosmogonic role (the Tao generates the one, the one generates the two...) that this system explicitly lacks: the ground does not produce the many.",
      },
    ],
    seeAlso: ["predicate-layer", "sunyata", "nirguna", "tao"],
  },
  {
    slug: "lossy-map",
    term: "Lossy map",
    kind: "system",
    definition:
      "A map that is not injective: it collapses at least one distinction, identifying two elements that are genuinely different. Formally: ¬Faithful(know) = ∃ x y, know x = know y ∧ x ≠ y.",
    systemUse:
      "Any representation or self-account that carries genuine distinctions must be lossy (§5). To be a determinate particular (this rather than that) is to be a lossy restriction of the ground (§7).",
    thesisIds: [7, 10, 11, 15],
    formalRef: "§5 (Identification)",
    seeAlso: ["trace-image", "contingent-form", "predicate-layer"],
  },
  {
    slug: "trace-image",
    term: "Trace-image",
    kind: "coined",
    definition:
      "The Yoneda image of an element: the predicate 'being me' (a ↦ (· = a)). The faithful, lossless part of any existent's two-layer structure: its bare is-ness as it appears in predicate-space.",
    systemUse:
      "Coined because no traditional term captures exactly this: the lossless image that identity casts of each element into the predicate field. The ground contributes this image without loss; everything else in predicate-space is the contingent form.",
    thesisIds: [11, 12, 17, 25],
    formalRef: "§7 (Yoneda), Yoneda.yoneda_faithful",
    seeAlso: ["contingent-form", "ground-identity", "lossy-map"],
  },
  {
    slug: "contingent-form",
    term: "Contingent form",
    kind: "coined",
    definition:
      "The lossy excess: all the predicates beyond the trace-image that constitute a thing's determinate character. What makes this particular thing this rather than that.",
    systemUse:
      "The second layer in the two-layer structure of any existent (§11). Real as restriction; not derivable from the ground; empty of own-being.",
    thesisIds: [7, 11, 12, 13, 16],
    formalRef: "§7 (Yoneda), §5 (Identification)",
    seeAlso: ["trace-image", "lossy-map", "maya"],
  },
  {
    slug: "groundless-arising",
    term: "Groundless arising",
    kind: "system",
    definition:
      "The arising of the manifest world: real, consistent, presupposing identity, but uncaused by it. Neither produced by the ground (the Yoneda ceiling blocks this) nor self-caused (own-being is nowhere in the manifest).",
    systemUse:
      "The system's name for manifestation. Used to distinguish the system's position from both emanationism (ground produces the many) and brute contingency (the world just is, with no structural story). The structural story is that production is ruled out; what's left is arising without cause.",
    thesisIds: [3, 9, 15, 16, 30],
    traditionalParallels: [
      {
        tradition: "Buddhism",
        term: "Pratītyasamutpāda",
        approximation: "close",
        divergence:
          "Dependent origination says things arise in dependence on conditions, with no uncaused first cause. This system agrees. But dependent origination is typically cashed out in terms of causal chains; this system has no dynamics to specify the chains.",
      },
      {
        tradition: "Taoism",
        term: "Ziran (自然, self-so)",
        approximation: "analogical",
        divergence:
          "Ziran denotes the spontaneous self-arising of things according to their own nature. This system's groundless arising is not 'according to nature': there is no specifiable nature doing the arising.",
      },
    ],
    seeAlso: ["ground-identity", "predicate-layer", "pratityasamutpada", "ziran"],
  },
  {
    slug: "the-seam",
    term: "The seam (D/I seam)",
    kind: "system",
    definition:
      "The boundary between demonstrated claims (following from the formal core) and interpreted claims (readings laid over the mathematics). Marked at every step.",
    systemUse:
      "The system's primary discipline. The seam is load-bearing: the system's claim to honesty rests on never letting an (I) pass as a (D). See the Conventions (§0 of the outline).",
    thesisIds: [26, 28, 31],
    formalRef: "§2 (Closure): the seam is the method made procedural from this result",
    seeAlso: ["predicate-layer", "ground-identity"],
  },

  // ── Traditional terms ─────────────────────────────────────────────────
  {
    slug: "sunyata",
    term: "Śūnyatā",
    pronunciation: "shoon-ya-taa",
    kind: "traditional",
    definition:
      "Sanskrit: emptiness. In Madhyamaka Buddhism, the absence of svabhāva (own-being) in all dharmas (phenomena). Not nihilism; phenomena are empty of own-being but not empty of existence.",
    systemUse:
      "Used apophatically as a name for the ground (§6), and technically for the result that no phenomenon has own-being (§13). The technical use is close to Madhyamaka; the apophatic use strains it.",
    thesisIds: [3, 4, 5, 6, 13, 19],
    traditionalParallels: [
      {
        tradition: "Madhyamaka Buddhism",
        term: "Śūnyatā",
        approximation: "close",
        divergence:
          "Madhyamaka śūnyatā is established by Nāgārjuna's reductio arguments (prasaṅga). This system establishes the same conclusion (no svabhāva) by diagonal proof. The derivation differs; the target is comparable.",
      },
    ],
    seeAlso: ["svabhava", "anatta", "ground-identity"],
  },
  {
    slug: "svabhava",
    term: "Svabhāva",
    pronunciation: "sva-bha-va",
    kind: "traditional",
    definition:
      "Sanskrit: own-being, self-nature, intrinsic existence. The property of existing from one's own side, independently, without dependence on conditions or a ground.",
    systemUse:
      "The target of the denial in §13: no phenomenon has svabhāva, because self-grounding is identity-as-ground, which is not a member of the predicate field. The system provides a formal derivation of what the Buddhist traditions established dialectically.",
    thesisIds: [12, 13, 14, 19],
    seeAlso: ["sunyata", "anatta", "ground-identity"],
  },
  {
    slug: "anatta",
    term: "Anattā",
    pronunciation: "an-at-taa",
    kind: "traditional",
    definition:
      "Pali: non-self. The Buddhist doctrine that there is no fixed, independent, self-existing self underlying experience. Not a claim that persons don't exist, but that they lack svabhāva.",
    systemUse:
      "Applied in §5 (the ground is not a cosmic Subject) and §14 (personal identity). The system provides formal grounding for the anattā result: the personal pattern is real-as-restriction but empty of own-being.",
    thesisIds: [5, 14, 15, 17],
    traditionalParallels: [
      {
        tradition: "Theravada Buddhism",
        term: "Anattā",
        approximation: "close",
        divergence:
          "Theravada anattā is primarily about the five aggregates (skandhas): there is no self underlying them. This system's result is more general: the impersonal ground is not a self at any level.",
      },
    ],
    seeAlso: ["svabhava", "sunyata", "ground-identity"],
  },
  {
    slug: "pratityasamutpada",
    term: "Pratītyasamutpāda",
    pronunciation: "pra-teet-ya-sa-mut-paa-da",
    kind: "traditional",
    definition:
      "Sanskrit: dependent origination. Things arise in dependence on conditions; nothing arises from itself alone; there is no unconditioned first cause for any particular arising.",
    systemUse:
      "A close parallel to groundless arising (§9). The system agrees with the no-first-cause result. It does not reproduce the causal-chain analysis of dependent origination (which would require dynamics).",
    thesisIds: [9, 17],
    seeAlso: ["groundless-arising", "ziran", "ground-identity"],
  },
  {
    slug: "maya",
    term: "Māyā",
    pronunciation: "maa-yaa",
    kind: "traditional",
    definition:
      "Sanskrit: in Advaita Vedanta, the power by which Brahman appears as the world of multiplicity. Popularly (mis)translated as 'illusion.' Technically: the appearance is real at its own level but is mistaken for ultimate reality.",
    systemUse:
      "Used in the disciplined technical sense in §10: the manifest world is real as restriction, and mistaking the restriction for the whole (taking contingent form for own-being) is the māyā-error. The system rejects the popular reading that the world is illusory.",
    thesisIds: [7, 10, 12],
    traditionalParallels: [
      {
        tradition: "Advaita Vedanta",
        term: "Māyā",
        approximation: "partial",
        divergence:
          "Advaita māyā is often personified as a cosmic power or identified with avidyā (ignorance). This system uses 'māyā' as a label for a formal relation: real-as-restriction mistaken for the whole. No personification and no ignorance-substance.",
      },
    ],
    seeAlso: ["svabhava", "sunyata", "contingent-form", "trace-image"],
  },
  {
    slug: "nirguna",
    term: "Nirguna",
    pronunciation: "nir-gu-na",
    kind: "traditional",
    definition:
      "Sanskrit: without qualities (guṇas). In Advaita Vedanta, nirguna Brahman is Brahman in its ultimate nature, prior to all predication, beyond all description.",
    systemUse:
      "The closest Vedantic pointer to the system's ground (§6). Used apophatically: the ground has no attributes because attributes are predicate-layer and the ground conditions the predicate layer without being in it.",
    thesisIds: [6, 29],
    traditionalParallels: [
      {
        tradition: "Advaita Vedanta",
        term: "Nirguna Brahman",
        approximation: "close",
        divergence:
          "Nirguna Brahman is still Being (sat) and Consciousness (chit), two positive attributes. This system's ground has neither as established results; chit is an explicit posit (§29), and sat (being) would be a predicate the ground cannot have without being a member of the predicate field.",
      },
    ],
    seeAlso: ["sunyata", "ground-identity", "chit", "tao"],
  },
  {
    slug: "chit",
    term: "Chit",
    pronunciation: "chit",
    kind: "traditional",
    definition:
      "Sanskrit: consciousness, pure knowing-awareness. In Advaita, one of the three aspects of Brahman (sat-chit-ānanda: being-consciousness-bliss). The self-luminous awareness that underlies all experience.",
    systemUse:
      "The single first-person posit of the system (§29). That the ground is aware (luminous, self-knowing) is installed as the one axiom verifiable only by being the ground. It is not demonstrated; it is marked as posit.",
    thesisIds: [27, 29, 31],
    traditionalParallels: [
      {
        tradition: "Advaita Vedanta",
        term: "Chit (as aspect of Brahman)",
        approximation: "partial",
        divergence:
          "In Advaita, chit is an established property of Brahman. In this system, luminosity is an explicit, unverifiable-from-outside posit. The materialist who denies it commits no error the system can catch.",
      },
    ],
    seeAlso: ["nirguna", "ground-identity", "anatta"],
  },
  {
    slug: "tao",
    term: "Tao (道)",
    pronunciation: "dao",
    kind: "traditional",
    definition:
      "Chinese: the Way. In Taoism, the source and principle underlying all things: nameless, prior to all distinctions, spontaneous. 'The Tao that can be told is not the eternal Tao.'",
    systemUse:
      "Used apophatically as a name for the ground (§6). The no-naming structure matches precisely. The cosmogonic role (Tao generates the ten thousand things) is explicitly rejected by the system.",
    thesisIds: [4, 6, 9],
    seeAlso: ["ground-identity", "ziran", "nirguna"],
  },
  {
    slug: "ziran",
    term: "Ziran (自然)",
    pronunciation: "dzuh-ran",
    kind: "traditional",
    definition:
      "Chinese: self-so, spontaneity, naturalness. Things being what they are of themselves, without external compulsion. A key virtue in Taoism: acting in accordance with nature's self-arising.",
    systemUse:
      "An analogical parallel to groundless arising (§9): the world is self-so in the sense that it arises without an external cause or production from the ground. The analogy is loose; ziran in Taoism carries a normative dimension (acting naturally is virtuous) absent from the system.",
    thesisIds: [9],
    seeAlso: ["groundless-arising", "pratityasamutpada", "tao"],
  },
  {
    slug: "anirvacaniya",
    term: "Anirvacanīya",
    pronunciation: "an-ir-va-ca-nee-ya",
    kind: "traditional",
    definition:
      "Sanskrit: inexplicable, indeterminate, neither real nor unreal nor both. Used in Advaita Vedanta for the status of māyā: it cannot be classified within the available categories.",
    systemUse:
      "Applied in §30 to brute particularity: why this world and not another is inexplicable, but the system converts the traditional shrug into a formal result. The world's inexplicability is demonstrated (Yoneda ceiling) rather than merely admitted.",
    thesisIds: [3, 30, 31],
    seeAlso: ["groundless-arising", "maya", "ground-identity"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByKind(kind: GlossaryTerm["kind"]): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.kind === kind);
}

export function getTermsForThesis(thesisId: number): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.thesisIds.includes(thesisId));
}
