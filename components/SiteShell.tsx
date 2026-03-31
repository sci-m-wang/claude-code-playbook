'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { primaryNav, siteMeta } from '@/content/site'
import { SearchPanel } from '@/components/SearchPanel'

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">Claude Code Source Study</p>
          <Link href="/" className="brand-link">
            {siteMeta.title}
          </Link>
          <p className="brand-copy">{siteMeta.tagline}</p>
        </div>

        <nav className="nav-block" aria-label="Primary">
          {primaryNav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-note card">
          <p className="card-kicker">How to use this site</p>
          <p>
            Start with Architecture, then Modules, then follow one Reading Path.
            Use search to jump straight to a subsystem or concept.
          </p>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div>
            <p className="eyebrow">Interactive Playbook</p>
            <h1 className="topbar-title">Understand Claude Code from real code paths</h1>
          </div>
          <SearchPanel />
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
