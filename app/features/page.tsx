import { FileList } from '@/components/FileList'
import { SectionHeader } from '@/components/SectionHeader'
import { featureCards } from '@/content/site'

export default function FeaturesPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Notable Features"
        title="What stands out compared with typical AI coding tools"
        intro="These are the design choices most worth studying because they reveal how Claude Code solves problems that simpler coding assistants often leave unsolved."
      />
      <div className="accordion-list">
        {featureCards.map(feature => (
          <article className="feature-card" key={feature.title}>
            <p className="card-kicker">Learning signal</p>
            <h3>{feature.title}</h3>
            <p>{feature.summary}</p>
            <p>
              <strong>Why it matters:</strong> {feature.whyDifferent}
            </p>
            <div>
              <h4>Engineering tradeoffs</h4>
              <ul>
                {feature.tradeoffs.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Evidence</h4>
              <FileList items={feature.evidence} />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
