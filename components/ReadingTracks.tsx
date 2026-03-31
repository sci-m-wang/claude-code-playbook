'use client'

import { useState } from 'react'
import type { ReadingTrack } from '@/content/types'
import { FileList } from '@/components/FileList'

export function ReadingTracks({ tracks }: { tracks: ReadingTrack[] }) {
  const [active, setActive] = useState(tracks[0]?.slug)
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
            {track.title}
          </button>
        ))}
      </div>

      <div className="card flow-detail">
        <p className="eyebrow">Recommended route</p>
        <h3>{current.title}</h3>
        <p>
          <strong>Audience:</strong> {current.audience}
        </p>
        <p>
          <strong>Goal:</strong> {current.goal}
        </p>
        <div className="flow-steps">
          {current.steps.map((step, index) => (
            <article className="flow-step" key={step.title}>
              <div className="flow-step-index">{index + 1}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.reason}</p>
                <FileList items={step.files} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
