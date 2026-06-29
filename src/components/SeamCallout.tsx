import { DIBadge } from "./DIBadge";

interface SeamCalloutProps {
  demonstrated: string;
  interpreted: string;
}

export function SeamCallout({ demonstrated, interpreted }: SeamCalloutProps) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-border)] overflow-hidden text-sm">
      <div className="flex items-start gap-3 p-4 bg-[var(--color-D-bg)] border-b border-[var(--color-D-border)]/30">
        <DIBadge status="D" size="xs" />
        <p className="text-[var(--color-D-text)] leading-relaxed">
          {demonstrated}
        </p>
      </div>
      <div className="flex items-start gap-3 p-4 bg-[var(--color-I-bg)]">
        <DIBadge status="I" size="xs" />
        <p className="text-[var(--color-I-text)] leading-relaxed">
          {interpreted}
        </p>
      </div>
    </div>
  );
}
