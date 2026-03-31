'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from '@/content/types'

type ThemeMode = 'auto' | 'light' | 'dark'

type PreferencesContextValue = {
  locale: Locale
  setLocale: (value: Locale) => void
  themeMode: ThemeMode
  setThemeMode: (value: ThemeMode) => void
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  if (mode === 'auto') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.dataset.theme = isDark ? 'dark' : 'light'
  } else {
    root.dataset.theme = mode
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto')

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('playbook-locale') as Locale | null
    const savedTheme = window.localStorage.getItem('playbook-theme') as ThemeMode | null
    if (savedLocale === 'en' || savedLocale === 'zh') {
      setLocale(savedLocale)
      document.documentElement.lang = savedLocale
    }
    if (savedTheme === 'auto' || savedTheme === 'light' || savedTheme === 'dark') {
      setThemeMode(savedTheme)
      applyTheme(savedTheme)
    } else {
      applyTheme('auto')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem('playbook-locale', locale)
  }, [locale])

  useEffect(() => {
    applyTheme(themeMode)
    window.localStorage.setItem('playbook-theme', themeMode)
    if (themeMode !== 'auto') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('auto')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [themeMode])

  const value = useMemo(
    () => ({ locale, setLocale, themeMode, setThemeMode }),
    [locale, themeMode],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider')
  }
  return context
}
