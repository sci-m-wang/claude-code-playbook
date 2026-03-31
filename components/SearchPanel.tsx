'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { searchIndex } from '@/content/site'

export function SearchPanel() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return searchIndex.slice(0, 6)
    return searchIndex
      .filter(item => {
        const haystack = `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase()
        return haystack.includes(normalized)
      })
      .slice(0, 8)
  }, [query])

  return (
    <div className="search-panel card">
      <label className="search-label" htmlFor="search-input">
        Search modules, flows, concepts
      </label>
      <input
        id="search-input"
        className="search-input"
        placeholder="Try: query, MCP, permissions, REPL"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="search-results">
        {results.map(item => (
          <Link key={`${item.href}-${item.title}`} href={item.href} className="search-result">
            <span className="search-result-title">{item.title}</span>
            <span className="search-result-copy">{item.summary}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
