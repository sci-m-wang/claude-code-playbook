'use client'

import { useMemo, useState } from 'react'
import { FileList } from '@/components/FileList'
import { SectionHeader } from '@/components/SectionHeader'
import { usePreferences } from '@/components/PreferencesProvider'
import { pickText, t, topFiles, uiText } from '@/content/site'

type FilterKey = 'all' | 'starter' | 'runtime' | 'platform'

export default function TopFilesPage() {
  const { locale } = usePreferences()
  const [filter, setFilter] = useState<FilterKey>('all')

  const filteredFiles = useMemo(() => {
    if (filter === 'all') return topFiles
    return topFiles.filter(file => file.tracks.includes(filter))
  }, [filter])

  const filterItems = [
    { key: 'all' as const, label: pickText(uiText.allFiles, locale) },
    { key: 'starter' as const, label: pickText(uiText.starterFiles, locale) },
    { key: 'runtime' as const, label: pickText(uiText.runtimeFiles, locale) },
    { key: 'platform' as const, label: pickText(uiText.platformFiles, locale) },
  ]

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

      <div className="card">
        <p className="card-kicker">{locale === 'en' ? 'Filter by learning route' : '按学习路线筛选'}</p>
        <div className="flow-tabs">
          {filterItems.map(item => (
            <button
              key={item.key}
              className={filter === item.key ? 'flow-tab active' : 'flow-tab'}
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="accordion-list">
        {filteredFiles.map((file, index) => (
          <article className="feature-card" key={file.path}>
            <p className="card-kicker">#{index + 1}</p>
            <h3>
              <code>{file.path}</code>
            </h3>
            <p>
              <strong>{locale === 'en' ? 'Suggested order' : '建议顺序'}:</strong> {file.order}
            </p>
            <p>
              <strong>{pickText(file.title, locale)}</strong>
            </p>
            <p>{pickText(file.why, locale)}</p>
            <p>
              <strong>{locale === 'en' ? 'Layer' : '所在层'}:</strong> {pickText(file.layer, locale)}
            </p>
            <p>
              <strong>{locale === 'en' ? 'Reading time' : '预计时长'}:</strong> {pickText(file.readingTime, locale)}
            </p>
            <p>
              <strong>{locale === 'en' ? 'Track fit' : '适合路径'}:</strong>{' '}
              {file.tracks
                .map(track => filterItems.find(item => item.key === track)?.label)
                .filter(Boolean)
                .join(' / ')}
            </p>
            <FileList items={[{ path: file.path }]} />
          </article>
        ))}
      </div>
    </>
  )
}
