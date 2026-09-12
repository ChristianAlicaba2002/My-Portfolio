export function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
      <span className="h-px w-6 bg-border" />
      {children}
    </span>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 transition-colors duration-300 lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
