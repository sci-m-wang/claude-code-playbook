'use client'

import { useState } from 'react'
import { pickText, uiText } from '@/content/site'
import type { ReadingTrack } from '@/content/types'
import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'

export function ReadingTracks({ tracks }: { tracks: ReadingTrack[] }) {
  const [active, setActive] = useState(tracks[0]?.slug)
  const { locale } = usePreferences()
  const current = tracks.find(track => track.slug === active) ?? tracks[0]

  return (
    <div className="reading-tracks">
      <div className="flow-tabs">
        {tracks.map(track => (
          <button
            key={track.slug}
            className={track.slug === active ? 'flow-tab active' : 'flow-tab'}
            onClick={() => setActive(track.slug)}
          >
            {pickText(track.title, locale)}
          </button>
        ))}
      </div>

      <div className="card flow-detail">
        <p className="eyebrow">{locale === 'en' ? 'Recommended route' : '推荐阅读路线'}</p>
        <h3>{pickText(current.title, locale)}</h3>
        <p>
          <strong>{pickText(uiText.audience, locale)}:</strong> {pickText(current.audience, locale)}
        </p>
        <p>
          <strong>{pickText(uiText.goal, locale)}:</strong> {pickText(current.goal, locale)}
        </p>
        <div className="flow-steps">
          {current.steps.map((step, index) => (
            <article className="flow-step" key={`${current.slug}-${step.title.en}`}>
              <div className="flow-step-index">{index + 1}</div>
              <div>
                <h4>{pickText(step.title, locale)}</h4>
                <p>{pickText(step.reason, locale)}</p>
                <FileList items={step.files} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
