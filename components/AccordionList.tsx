'use client'

import { useState } from 'react'
import type { ModuleCard } from '@/content/types'
import { FileList } from '@/components/FileList'

export function AccordionList({ items }: { items: ModuleCard[] }) {
  const [openSlug, setOpenSlug] = useState(items[0]?.slug)

  return (
    <div className="accordion-list">
      {items.map(item => {
        const open = item.slug === openSlug
        return (
          <section className={open ? 'accordion-item open' : 'accordion-item'} key={item.slug}>
            <button className="accordion-trigger" onClick={() => setOpenSlug(open ? '' : item.slug)}>
              <span>
                <span className="eyebrow">Module</span>
                <strong>{item.title}</strong>
              </span>
              <span className="accordion-summary">{item.summary}</span>
            </button>
            {open ? (
              <div className="accordion-body card">
                <p>{item.role}</p>
                <div className="detail-grid">
                  <div>
                    <h4>Inputs</h4>
                    <ul>
                      {item.inputs.map(value => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Outputs</h4>
                    <ul>
                      {item.outputs.map(value => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="detail-grid">
                  <div>
                    <h4>Why study it</h4>
                    <ul>
                      {item.learningValue.map(value => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Read first</h4>
                    <FileList items={item.firstRead} />
                  </div>
                </div>
                <div>
                  <h4>Key files</h4>
                  <FileList items={item.keyFiles} />
                </div>
              </div>
            ) : null}
          </section>
        )
      })}
    </div>
  )
}
