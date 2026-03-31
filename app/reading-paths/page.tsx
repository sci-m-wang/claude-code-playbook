'use client'

import { ReadingTracks } from '@/components/ReadingTracks'
import { SectionHeader } from '@/components/SectionHeader'
import { readingTracks, t } from '@/content/site'

export default function ReadingPathsPage() {
  return (
    <>
      <SectionHeader
        eyebrow={t('Reading Paths', '阅读路径')}
        title={t('Choose a source-reading route', '选择你的源码阅读路线')}
        intro={t(
          'These tracks are tuned for different goals: orientation, runtime internals, and platform-level extensibility.',
          '这些路径分别面向不同目标：建立整体认知、理解运行时内部机制，以及研究平台级扩展能力。',
        )}
      />
      <ReadingTracks tracks={readingTracks} />
    </>
  )
}
