type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  italic?: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, italic, copy, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <div>
        <p className="eyebrow"><span />{eyebrow}</p>
        <h2>{title}{italic && <><br /><em>{italic}</em></>}</h2>
      </div>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
