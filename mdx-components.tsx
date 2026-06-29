import type { MDXComponents } from "mdx/types";
import { DIBadge } from "@/components/DIBadge";
import { SeamCallout } from "@/components/SeamCallout";
import { LeanBlock, LeanInline } from "@/components/LeanBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-semibold mt-12 mb-4 text-[var(--color-text-primary)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-serif font-semibold mt-10 mb-3 text-[var(--color-text-primary)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold mt-8 mb-2 text-[var(--color-text-primary)]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-[var(--color-text-secondary)]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-ground-500)] pl-4 my-6 italic text-[var(--color-text-secondary)]">
        {children}
      </blockquote>
    ),
    code: ({ children }) => <LeanInline>{String(children)}</LeanInline>,
    pre: ({ children }) => (
      <pre className="lean-block my-6 whitespace-pre-wrap break-words">
        {children}
      </pre>
    ),
    DIBadge,
    SeamCallout,
    LeanBlock,
    LeanInline,
    ...components,
  };
}
