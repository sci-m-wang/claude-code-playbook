'use client'

import type { LocalizedText } from '@/content/types'
import { pickText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: LocalizedText
  title: LocalizedText
  intro: LocalizedText
}) {
  const { locale } = usePreferences()
  return (
    <div className="section-header">
      <p className="eyebrow">{pickText(eyebrow, locale)}</p>
      <h2>{pickText(title, locale)}</h2>
      <p className="section-intro">{pickText(intro, locale)}</p>
    </div>
  )
}
