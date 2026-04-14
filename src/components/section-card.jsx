export function SectionCard({ title, extra, children }) {
  return (
    <section className="section-card">
      {(title || extra) && (
        <div className="section-card__head">
          <h3>{title}</h3>
          {extra}
        </div>
      )}
      {children}
    </section>
  );
}
