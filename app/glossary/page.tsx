'use client'

import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'
import { SectionHeader } from '@/components/SectionHeader'
import { glossary, pickText, t } from '@/content/site'

export default function GlossaryPage() {
  const { locale } = usePreferences()

  return (
    <>
      <SectionHeader
        eyebrow={t('Glossary', '术语解释')}
        title={t('Key concepts and terms', '关键概念与术语')}
        intro={t(
          'Use this page when a file or flow mentions concepts like query loop, MCP, or permission mode before you have the full context.',
          '当你在文件或流程图里遇到 query loop、MCP、permission mode 等概念却还没建立上下文时，可以先看这里。',
        )}
      />
      <div className="glossary-grid">
        {glossary.map(item => (
          <article className="glossary-item" key={item.term.en}>
            <h3>{pickText(item.term, locale)}</h3>
            <p>{pickText(item.definition, locale)}</p>
            <p>
              <strong>{locale === 'en' ? 'Why it matters' : '为什么重要'}:</strong> {pickText(item.whyItMatters, locale)}
            </p>
            <FileList items={item.files} />
          </article>
        ))}
      </div>
    </>
  )
}
