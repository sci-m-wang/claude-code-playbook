import { FlowExplorer } from '@/components/FlowExplorer'
import { SectionHeader } from '@/components/SectionHeader'
import { flowCards } from '@/content/site'

export default function FlowsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Execution Flows"
        title="Trace the important chains"
        intro="These flow maps help you understand Claude Code as a running system rather than a pile of files."
      />
      <FlowExplorer flows={flowCards} />
    </>
  )
}
