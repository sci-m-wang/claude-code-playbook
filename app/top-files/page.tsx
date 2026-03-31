'use client'

import { FileList } from '@/components/FileList'
import { SectionHeader } from '@/components/SectionHeader'
import { usePreferences } from '@/components/PreferencesProvider'
import { pickText, t, topFiles } from '@/content/site'

export default function TopFilesPage() {
  const { locale } = usePreferences()

  return (
    <>
      <SectionHeader
        eyebrow={t('Top 20 Source Files', 'Top 20 源码文件')}
        title={t('The fastest way to enter the codebase', '进入代码库最快的 20 个入口')}
        intro={t(
          'If you only have a few hours, these files give you the highest learning return. They cover bootstrap, UI, query runtime, tools, policy, persistence, and extensibility.',
          '如果你只有几个小时，这 20 个文件能提供最高的学习收益。它们覆盖启动、界面、query 运行时、工具、策略、持久化与扩展能力。',
        )}
      />

      <div className="accordion-list">
        {topFiles.map((file, index) => (
          <article className="feature-card" key={file.path}>
            <p className="card-kicker">#{index + 1}</p>
            <h3>
              <code>{file.path}</code>
            </h3>
            <p>
              <strong>{pickText(file.title, locale)}</strong>
            </p>
            <p>{pickText(file.why, locale)}</p>
            <p>
              <strong>{locale === 'en' ? 'Layer' : '所在层'}:</strong> {pickText(file.layer, locale)}
            </p>
            <FileList items={[{ path: file.path }]} />
          </article>
        ))}
      </div>
    </>
  )
}
