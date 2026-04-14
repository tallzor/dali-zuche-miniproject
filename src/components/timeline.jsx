function getTimelineItemText(item) {
  if (typeof item === "string") {
    return item;
  }

  return item.text ?? item.label ?? item.content ?? item.name ?? "";
}

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline__item" key={typeof item === "string" ? item : item.id ?? index}>
          <div className="timeline__dot">{index + 1}</div>
          <div className="timeline__content">{getTimelineItemText(item)}</div>
        </div>
      ))}
    </div>
  );
}
