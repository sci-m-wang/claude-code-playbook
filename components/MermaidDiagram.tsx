'use client'

import { useEffect, useId, useState } from 'react'
import { usePreferences } from '@/components/PreferencesProvider'

export function MermaidDiagram({ code }: { code: string }) {
  const [svg, setSvg] = useState('')
  const elementId = useId().replace(/:/g, '-')
  const { themeMode } = usePreferences()

  useEffect(() => {
    let active = true

    async function render() {
      const mermaid = (await import('mermaid')).default
      const isDark = document.documentElement.dataset.theme !== 'light'

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: isDark ? 'dark' : 'default',
        themeVariables: {
          primaryColor: isDark ? '#10233b' : '#ffffff',
          primaryBorderColor: isDark ? '#4fc3ff' : '#0b84ff',
          primaryTextColor: isDark ? '#e7eefb' : '#0a1730',
          lineColor: isDark ? '#7bbcff' : '#2669d9',
          secondaryColor: isDark ? '#14344f' : '#edf5ff',
          tertiaryColor: isDark ? '#0d1729' : '#f7fbff',
          background: 'transparent',
          fontFamily: 'IBM Plex Sans, sans-serif',
        },
      })

      const { svg } = await mermaid.render(`mermaid-${elementId}`, code)
      if (active) setSvg(svg)
    }

    void render()
    return () => {
      active = false
    }
  }, [code, elementId, themeMode])

  return <div className="mermaid-wrap" dangerouslySetInnerHTML={{ __html: svg }} />
}
