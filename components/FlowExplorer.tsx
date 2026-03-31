'use client'

import { useState } from 'react'
import type { FlowCard } from '@/content/types'
import { FileList } from '@/components/FileList'

export function FlowExplorer({ flows }: { flows: FlowCard[] }) {
  const [active, setActive] = useState(flows[0]?.slug)
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
            {flow.title}
          </button>
        ))}
      </div>

      <div className="card flow-detail">
        <p className="eyebrow">Why this flow matters</p>
        <h3>{current.title}</h3>
        <p>{current.summary}</p>
        <p className="flow-why">{current.whyItMatters}</p>
        <div className="flow-steps">
          {current.steps.map((step, index) => (
            <article className="flow-step" key={step.title}>
              <div className="flow-step-index">{index + 1}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.summary}</p>
                <FileList items={step.files} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
