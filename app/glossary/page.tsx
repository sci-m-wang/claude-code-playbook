import { FileList } from '@/components/FileList'
import { SectionHeader } from '@/components/SectionHeader'
import { glossary } from '@/content/site'

export default function GlossaryPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Glossary"
        title="Key concepts and terms"
        intro="Use this page when a file or flow mentions concepts like query loop, MCP, or permission mode before you have the full context."
      />
      <div className="glossary-grid">
        {glossary.map(item => (
          <article className="glossary-item" key={item.term}>
            <h3>{item.term}</h3>
            <p>{item.definition}</p>
            <p>
              <strong>Why it matters:</strong> {item.whyItMatters}
            </p>
            <FileList items={item.files} />
          </article>
        ))}
      </div>
    </>
  )
}
