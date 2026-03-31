'use client'

import { useState } from 'react'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { pickText, uiText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

type DiagramView = {
  slug: string
  title: string
  description: string
  code: string
}

export function DiagramTabs({ views }: { views: DiagramView[] }) {
  const [active, setActive] = useState(views[0]?.slug)
  const { locale } = usePreferences()
  const current = views.find(view => view.slug === active) ?? views[0]

  return (
    <div className="reading-tracks">
      <div className="diagram-tabs-header">
        <p className="eyebrow">{pickText(uiText.diagramViews, locale)}</p>
        <div className="flow-tabs">
          {views.map(view => (
            <button
              key={view.slug}
              className={view.slug === active ? 'flow-tab active' : 'flow-tab'}
              onClick={() => setActive(view.slug)}
            >
              {view.title}
            </button>
          ))}
        </div>
      </div>
      <div className="diagram-card card">
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <MermaidDiagram code={current.code} />
      </div>
    </div>
  )
}
