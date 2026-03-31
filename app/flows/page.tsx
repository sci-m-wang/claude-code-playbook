'use client'

import { FlowExplorer } from '@/components/FlowExplorer'
import { DiagramTabs } from '@/components/DiagramTabs'
import { RuntimeSequenceDiagram } from '@/components/RuntimeSequenceDiagram'
import { SectionHeader } from '@/components/SectionHeader'
import { flowCards, getFlowDiagramViews, t } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export default function FlowsPage() {
  const { locale } = usePreferences()
  const diagramViews = getFlowDiagramViews()

  return (
    <>
      <SectionHeader
        eyebrow={t('Execution Flows', '执行链路')}
        title={t('Trace the important chains', '跟踪最关键的执行链路')}
        intro={t(
          'These flow maps help you understand Claude Code as a running system rather than a pile of files.',
          '这些流程图能帮助你把 Claude Code 当作“运行中的系统”来理解，而不是一堆分散文件。',
        )}
      />
      <RuntimeSequenceDiagram />
      <DiagramTabs views={diagramViews} />
      <FlowExplorer flows={flowCards} />
    </>
  )
}
