'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { pickText, primaryNav, siteMeta, uiText } from '@/content/site'
import { PreferencesProvider, usePreferences } from '@/components/PreferencesProvider'
import { SearchPanel } from '@/components/SearchPanel'
import { ThemeLanguageControls } from '@/components/ThemeLanguageControls'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <PreferencesProvider>
      <ShellInner>{children}</ShellInner>
    </PreferencesProvider>
  )
}

function ShellInner({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { locale } = usePreferences()

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">{pickText(uiText.sidebarEyebrow, locale)}</p>
          <Link href="/" className="brand-link">
            {pickText(siteMeta.title, locale)}
          </Link>
          <p className="brand-copy">{pickText(siteMeta.tagline, locale)}</p>
        </div>

        <nav className="nav-block" aria-label="Primary">
          {primaryNav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'nav-link active' : 'nav-link'}
            >
              {pickText(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="sidebar-note card">
          <p className="card-kicker">{pickText(uiText.sidebarHintTitle, locale)}</p>
          <p>{pickText(uiText.sidebarHintBody, locale)}</p>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="topbar-copy">
            <p className="eyebrow">{pickText(uiText.topbarEyebrow, locale)}</p>
            <h1 className="topbar-title">{pickText(uiText.topbarTitle, locale)}</h1>
          </div>
          <div className="topbar-actions">
            <ThemeLanguageControls />
            <SearchPanel />
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
