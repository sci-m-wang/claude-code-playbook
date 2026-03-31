'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { pickText, searchIndex, uiText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export function SearchPanel() {
  const { locale } = usePreferences()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(value => !value)
      }
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const resolved = searchIndex.map(item => ({
      href: item.href,
      title: pickText(item.title, locale),
      summary: pickText(item.summary, locale),
      tags: item.tags,
    }))
    if (!normalized) return resolved.slice(0, 8)
    return resolved
      .filter(item => `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(normalized))
      .slice(0, 10)
  }, [locale, query])

  return (
    <>
      <button className="search-launcher" onClick={() => setOpen(true)}>
        <span>{pickText(uiText.searchButton, locale)}</span>
        <span className="search-shortcut">Ctrl K</span>
      </button>

      {open ? (
        <div className="search-overlay" onClick={() => setOpen(false)}>
          <div className="search-modal card" onClick={event => event.stopPropagation()}>
            <label className="search-label" htmlFor="search-input">
              {pickText(uiText.searchLabel, locale)}
            </label>
            <input
              autoFocus
              id="search-input"
              className="search-input"
              placeholder={pickText(uiText.searchPlaceholder, locale)}
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <div className="search-results overlay-results">
              {results.map(item => (
                <Link
                  key={`${item.href}-${item.title}`}
                  href={item.href}
                  className="search-result"
                  onClick={() => setOpen(false)}
                >
                  <span className="search-result-title">{item.title}</span>
                  <span className="search-result-copy">{item.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
