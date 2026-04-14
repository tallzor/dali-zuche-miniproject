export default function StatusPill({ tone = "default", children }) {
  const resolvedTone = ["default", "brand", "safe", "warn", "danger"].includes(tone) ? tone : "default";

  return <span className={`status-pill status-pill--${resolvedTone}`}>{children}</span>;
}
