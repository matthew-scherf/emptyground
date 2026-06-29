import type { DIStatus } from "@/lib/types";

const config: Record<
  DIStatus,
  { label: string; title: string; className: string }
> = {
  D: {
    label: "D",
    title: "Demonstrated: follows from the formal core",
    className:
      "bg-[var(--color-D-bg)] border-[var(--color-D-border)] text-[var(--color-D-text)]",
  },
  I: {
    label: "I",
    title: "Interpreted: a reading laid over the mathematics",
    className:
      "bg-[var(--color-I-bg)] border-[var(--color-I-border)] text-[var(--color-I-text)]",
  },
  "D+I": {
    label: "D+I",
    title: "Demonstrated foundation, interpreted extension",
    className:
      "bg-gradient-to-r from-[var(--color-D-bg)] to-[var(--color-I-bg)] border-[var(--color-D-border)] text-[var(--color-text-primary)]",
  },
  posit: {
    label: "posit",
    title: "Underived axiom: explicitly undemonstrated",
    className:
      "bg-[var(--color-posit-bg)] border-[var(--color-posit-border)] text-[var(--color-posit-text)]",
  },
};

export function DIBadge({
  status,
  size = "sm",
}: {
  status: DIStatus;
  size?: "xs" | "sm" | "md";
}) {
  const { label, title, className } = config[status];
  const sizeClass =
    size === "xs"
      ? "text-[10px] px-1.5 py-0.5"
      : size === "md"
      ? "text-sm px-2.5 py-1"
      : "text-xs px-2 py-0.5";

  return (
    <span
      title={title}
      aria-label={title}
      className={`inline-flex items-center rounded-full border font-mono font-medium leading-none select-none ${sizeClass} ${className}`}
    >
      {label}
    </span>
  );
}

export function DILegend() {
  return (
    <dl className="flex flex-wrap gap-4 text-sm">
      {(Object.keys(config) as DIStatus[]).map((status) => (
        <div key={status} className="flex items-center gap-2">
          <DIBadge status={status} />
          <span className="text-[var(--color-text-secondary)]">
            {config[status].title}
          </span>
        </div>
      ))}
    </dl>
  );
}
