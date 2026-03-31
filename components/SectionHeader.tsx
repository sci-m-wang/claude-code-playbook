export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-intro">{intro}</p>
    </div>
  )
}
