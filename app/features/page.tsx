'use client'

import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'
import { SectionHeader } from '@/components/SectionHeader'
import { featureCards, pickText, t, uiText } from '@/content/site'

export default function FeaturesPage() {
  const { locale } = usePreferences()

  return (
    <>
      <SectionHeader
        eyebrow={t('Notable Features', '亮点特性')}
        title={t('What stands out compared with typical AI coding tools', '相比一般 AI coding 工具，Claude Code 最值得学什么')}
        intro={t(
          'These are the design choices most worth studying because they reveal how Claude Code solves problems that simpler coding assistants often leave unsolved.',
          '这些设计最值得学习，因为它们揭示了 Claude Code 如何解决许多简单 coding assistant 尚未认真解决的问题。',
        )}
      />
      <div className="accordion-list">
        {featureCards.map(feature => (
          <article className="feature-card" key={feature.title.en}>
            <p className="card-kicker">{pickText(uiText.learningSignal, locale)}</p>
            <h3>{pickText(feature.title, locale)}</h3>
            <p>{pickText(feature.summary, locale)}</p>
            <p>
              <strong>{pickText(uiText.whyItMatters, locale)}:</strong> {pickText(feature.whyDifferent, locale)}
            </p>
            <div>
              <h4>{pickText(uiText.engineeringTradeoffs, locale)}</h4>
              <ul>
                {feature.tradeoffs.map(item => (
                  <li key={item.en}>{pickText(item, locale)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{pickText(uiText.evidence, locale)}</h4>
              <FileList items={feature.evidence} />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
