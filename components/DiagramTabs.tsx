'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { DiagramView } from '@/content/types'
import { pickText, uiText } from '@/content/site'
import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'

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
              {pickText(view.title, locale)}
            </button>
          ))}
        </div>
      </div>
      <div className="diagram-card card">
        <h3>{pickText(current.title, locale)}</h3>
        <p>{pickText(current.description, locale)}</p>
        <div className="graphviz-frame">
          <Image
            src={current.imageSrc}
            alt={pickText(current.title, locale)}
            width={1400}
            height={900}
            className="graphviz-image"
          />
        </div>
        <div>
          <p className="eyebrow">{pickText(uiText.sourceAnchors, locale)}</p>
          <div className="anchor-grid">
            {current.anchors.map(anchor => (
              <article className="anchor-card" key={anchor.title.en}>
                <h4>{pickText(anchor.title, locale)}</h4>
                <p>{pickText(anchor.summary, locale)}</p>
                <FileList items={anchor.files} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
