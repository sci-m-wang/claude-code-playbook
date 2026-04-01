'use client'

import { FlowExplorer } from '@/components/FlowExplorer'
import { DiagramTabs } from '@/components/DiagramTabs'
import { FlowPanorama } from '@/components/FlowPanorama'
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
      <FlowPanorama />
      <RuntimeSequenceDiagram />
      <DiagramTabs views={diagramViews} />
      <section className="visual-grid">
        <article className="card zoom-card">
          <p className="card-kicker">{locale === 'en' ? 'Focused reading' : '聚焦阅读'}</p>
          <h3>{locale === 'en' ? 'If you care about turn mechanics' : '如果你关注回合执行机制'}</h3>
          <p>
            {locale === 'en'
              ? 'Read the prompt intake, query loop, and persistence panels in order. That gives you the cleanest model of a Claude Code turn.'
              : '按“提示词进入 -> query 循环 -> 持久化”顺序阅读，是理解 Claude Code 回合机制最清晰的路径。'}
          </p>
        </article>
        <article className="card zoom-card">
          <p className="card-kicker">{locale === 'en' ? 'Focused reading' : '聚焦阅读'}</p>
          <h3>{locale === 'en' ? 'If you care about control and safety' : '如果你关注控制与安全'}</h3>
          <p>
            {locale === 'en'
              ? 'Read tool scheduling and permission resolution together. Those two panels explain most of the engineering discipline in the runtime.'
              : '把“工具调度图”和“权限决策图”配套阅读，这两块最能解释运行时的工程纪律。'}
          </p>
        </article>
      </section>
      <FlowExplorer flows={flowCards} />
    </>
  )
}
