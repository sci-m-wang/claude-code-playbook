'use client'

import { pickText, uiText } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

export function ThemeLanguageControls() {
  const { locale, setLocale, themeMode, setThemeMode } = usePreferences()

  return (
    <div className="controls-bar card">
      <div className="control-group">
        <span className="control-label">{pickText(uiText.langLabel, locale)}</span>
        <div className="segmented">
          <button className={locale === 'en' ? 'segmented-btn active' : 'segmented-btn'} onClick={() => setLocale('en')}>
            EN
          </button>
          <button className={locale === 'zh' ? 'segmented-btn active' : 'segmented-btn'} onClick={() => setLocale('zh')}>
            中文
          </button>
        </div>
      </div>
      <div className="control-group">
        <span className="control-label">{pickText(uiText.themeLabel, locale)}</span>
        <div className="segmented">
          <button className={themeMode === 'auto' ? 'segmented-btn active' : 'segmented-btn'} onClick={() => setThemeMode('auto')}>
            {pickText(uiText.themeAuto, locale)}
          </button>
          <button className={themeMode === 'light' ? 'segmented-btn active' : 'segmented-btn'} onClick={() => setThemeMode('light')}>
            {pickText(uiText.themeLight, locale)}
          </button>
          <button className={themeMode === 'dark' ? 'segmented-btn active' : 'segmented-btn'} onClick={() => setThemeMode('dark')}>
            {pickText(uiText.themeDark, locale)}
          </button>
        </div>
      </div>
    </div>
  )
}
