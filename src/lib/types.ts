export type DIStatus = "D" | "I" | "D+I" | "posit";

export type RomanSection =
  | "I" | "II" | "III" | "IV" | "V"
  | "VI" | "VII" | "VIII" | "IX" | "X";

export type OutlineSectionSlug =
  | "spine" | "ground" | "manifestation" | "existent"
  | "human" | "horizontal" | "abstract" | "epistemology"
  | "posits" | "limit";

export type FormalSectionSlug =
  | "diagonal" | "closure" | "gap" | "distinction"
  | "identification" | "self-account" | "yoneda" | "whole" | "capstone";

export interface Thesis {
  id: number;
  section: RomanSection;
  sectionSlug: OutlineSectionSlug;
  title: string;
  claim: string;
  status: DIStatus;
  formalRef?: string;
  leanNamespace?: string;
  leanTheorems?: string[];
  traditionalLinks?: string[];
  body: string;
}

export interface OutlineSection {
  roman: RomanSection;
  slug: OutlineSectionSlug;
  title: string;
  epigraph?: string;
  thesisIds: number[];
}

export interface FormalSection {
  number: number;
  slug: FormalSectionSlug;
  namespace: string;
  title: string;
  summary: string;
  theorems: FormalTheorem[];
  thesisIds: number[];
}

export interface FormalTheorem {
  name: string;
  statement: string;
  lean: string;
  note?: string;
}

export type GlossaryTermKind = "system" | "traditional" | "coined";

export interface TraditionalParallel {
  tradition: string;
  term: string;
  approximation: "close" | "partial" | "analogical";
  divergence: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  kind: GlossaryTermKind;
  pronunciation?: string;
  definition: string;
  systemUse: string;
  thesisIds: number[];
  traditionalParallels?: TraditionalParallel[];
  formalRef?: string;
  seeAlso?: string[];
}
