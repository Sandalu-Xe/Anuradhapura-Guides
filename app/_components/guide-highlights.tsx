import styles from "./guide-highlights.module.css";

type Highlight = { title: string; copy: string };

export function GuideHighlights({ items }: { items: readonly Highlight[] }) {
  return (
    <div className="shell guide-highlights-grid">
      {items.map((item, index) => (
        <article
          className={`guide-highlight-card ${styles.card}`}
          key={item.title}
        >
          <span className="highlight-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}
