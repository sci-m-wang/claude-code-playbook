'use client'

import { architectureLayers } from '@/content/site'
import { pickText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export function ArchitectureMap() {
  const { locale } = usePreferences()
  return (
    <div className="architecture-map">
      {architectureLayers.map((layer, index) => (
        <div className="architecture-card card" key={layer.title.en}>
          <div className="architecture-index">0{index + 1}</div>
          <div>
            <h3>{pickText(layer.title, locale)}</h3>
            <p>{pickText(layer.summary, locale)}</p>
            <div className="chip-row">
              {layer.files.map(file => (
                <span className="chip" key={file}>
                  {file}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
