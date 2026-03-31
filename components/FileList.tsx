'use client'

import type { FileRef } from '@/content/types'
import { pickText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export function FileList({ items }: { items: FileRef[] }) {
  const { locale } = usePreferences()
  return (
    <ul className="file-list">
      {items.map(item => (
        <li key={`${item.path}-${item.note ?? ''}`}>
          <code>{item.path}</code>
          {item.note ? <span className="file-note"> — {pickText(item.note, locale)}</span> : null}
        </li>
      ))}
    </ul>
  )
}
