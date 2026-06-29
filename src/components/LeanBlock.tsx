import Link from "next/link";

interface LeanBlockProps {
  name: string;
  lean: string;
  note?: string;
  namespace?: string;
}

export function LeanBlock({ name, lean, note, namespace }: LeanBlockProps) {
  const anchor = `lean-${name}`;
  return (
    <div id={anchor} className="my-6 scroll-mt-24">
      <div className="flex items-center gap-2 mb-2">
        <code className="text-sm font-mono font-semibold text-[var(--color-ground-700)] dark:text-[var(--color-ground-200)]">
          {namespace ? `${namespace}.` : ""}
          {name}
        </code>
        <a
          href={`#${anchor}`}
          className="text-[var(--color-text-faint)] hover:text-[var(--color-ground-500)] text-sm"
          aria-label="permalink"
        >
          #
        </a>
        <a
          href={`https://live.lean-lang.org/#code=${encodeURIComponent(lean)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs text-[var(--color-text-faint)] hover:text-[var(--color-ground-500)] transition-colors"
          title="Run in Lean 4 web"
        >
          run ↗
        </a>
      </div>
      <pre className="lean-block whitespace-pre-wrap break-words">
        <code>{lean}</code>
      </pre>
      {note && (
        <p className="mt-2 text-xs text-[var(--color-text-secondary)] italic pl-2 border-l-2 border-[var(--color-border)]">
          {note}
        </p>
      )}
    </div>
  );
}

export function LeanInline({ children }: { children: string }) {
  return (
    <code className="font-mono text-sm text-[var(--color-ground-700)] dark:text-[var(--color-ground-200)] bg-[var(--color-surface-alt)] px-1 py-0.5 rounded">
      {children}
    </code>
  );
}
