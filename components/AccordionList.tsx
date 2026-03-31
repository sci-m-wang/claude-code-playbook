'use client'

import { useState } from 'react'
import { pickText, uiText } from '@/content/site'
import type { ModuleCard } from '@/content/types'
import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'

export function AccordionList({ items }: { items: ModuleCard[] }) {
  const [openSlug, setOpenSlug] = useState(items[0]?.slug)
  const { locale } = usePreferences()

  return (
    <div className="accordion-list">
      {items.map(item => {
        const open = item.slug === openSlug
        return (
          <section className={open ? 'accordion-item open' : 'accordion-item'} key={item.slug}>
            <button className="accordion-trigger" onClick={() => setOpenSlug(open ? '' : item.slug)}>
              <span>
                <span className="eyebrow">{locale === 'en' ? 'Module' : '模块'}</span>
                <strong>{pickText(item.title, locale)}</strong>
              </span>
              <span className="accordion-summary">{pickText(item.summary, locale)}</span>
            </button>
            {open ? (
              <div className="accordion-body card">
                <p>{pickText(item.role, locale)}</p>
                <div className="detail-grid">
                  <div>
                    <h4>{pickText(uiText.inputs, locale)}</h4>
                    <ul>
                      {item.inputs.map(value => (
                        <li key={value.en}>{pickText(value, locale)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>{pickText(uiText.outputs, locale)}</h4>
                    <ul>
                      {item.outputs.map(value => (
                        <li key={value.en}>{pickText(value, locale)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="detail-grid">
                  <div>
                    <h4>{pickText(uiText.whyStudyIt, locale)}</h4>
                    <ul>
                      {item.learningValue.map(value => (
                        <li key={value.en}>{pickText(value, locale)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>{pickText(uiText.readFirst, locale)}</h4>
                    <FileList items={item.firstRead} />
                  </div>
                </div>
                <div>
                  <h4>{pickText(uiText.keyFiles, locale)}</h4>
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
