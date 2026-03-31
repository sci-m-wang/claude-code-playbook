'use client'

import { useState } from 'react'
import { pickText } from '@/content/site'
import type { FlowCard } from '@/content/types'
import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'

export function FlowExplorer({ flows }: { flows: FlowCard[] }) {
  const [active, setActive] = useState(flows[0]?.slug)
  const { locale } = usePreferences()
  const current = flows.find(flow => flow.slug === active) ?? flows[0]

  return (
    <div className="flow-explorer">
      <div className="flow-tabs">
        {flows.map(flow => (
          <button
            key={flow.slug}
            className={flow.slug === active ? 'flow-tab active' : 'flow-tab'}
            onClick={() => setActive(flow.slug)}
          >
            {pickText(flow.title, locale)}
          </button>
        ))}
      </div>

      <div className="card flow-detail">
        <p className="eyebrow">{locale === 'en' ? 'Why this flow matters' : '这条链路为什么重要'}</p>
        <h3>{pickText(current.title, locale)}</h3>
        <p>{pickText(current.summary, locale)}</p>
        <p className="flow-why">{pickText(current.whyItMatters, locale)}</p>
        <div className="flow-steps">
          {current.steps.map((step, index) => (
            <article className="flow-step" key={`${current.slug}-${step.title.en}`}>
              <div className="flow-step-index">{index + 1}</div>
              <div>
                <h4>{pickText(step.title, locale)}</h4>
                <p>{pickText(step.summary, locale)}</p>
                <FileList items={step.files} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
