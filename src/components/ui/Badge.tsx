export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-base-border bg-base-surface2 px-3 py-1 font-mono text-xs text-ink-muted">
      {children}
    </span>
  );
}
