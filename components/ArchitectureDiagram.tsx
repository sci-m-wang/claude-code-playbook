'use client'

import { pickText, t } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

const labels = {
  input: t('CLI / SDK / Remote Input', 'CLI / SDK / 远程输入'),
  bootstrap: t('Bootstrap & Mode Routing', '启动与模式路由'),
  ui: t('REPL / UI State', 'REPL / UI 状态'),
  query: t('Query Runtime', 'Query 运行时'),
  tools: t('Tool Runtime', '工具运行时'),
  policy: t('Policy / Auth / Config', '策略 / 鉴权 / 配置'),
  ext: t('Skills / Plugins / MCP / LSP', 'Skills / Plugins / MCP / LSP'),
  remote: t('Remote / Bridge / Team Memory', '远程 / Bridge / 团队记忆'),
}

export function ArchitectureDiagram() {
  const { locale } = usePreferences()

  return (
    <div className="card diagram-card">
      <svg viewBox="0 0 980 430" className="diagram-svg" role="img" aria-label="Architecture diagram">
        <defs>
          <linearGradient id="diagA" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect x="30" y="160" width="180" height="90" rx="18" className="diagram-node" />
        <text x="120" y="202" textAnchor="middle" className="diagram-text">{pickText(labels.input, locale)}</text>

        <rect x="250" y="70" width="200" height="90" rx="18" className="diagram-node" />
        <text x="350" y="112" textAnchor="middle" className="diagram-text">{pickText(labels.bootstrap, locale)}</text>

        <rect x="250" y="250" width="200" height="90" rx="18" className="diagram-node" />
        <text x="350" y="292" textAnchor="middle" className="diagram-text">{pickText(labels.ui, locale)}</text>

        <rect x="500" y="160" width="180" height="90" rx="18" className="diagram-node strong" />
        <text x="590" y="202" textAnchor="middle" className="diagram-text">{pickText(labels.query, locale)}</text>

        <rect x="730" y="70" width="200" height="90" rx="18" className="diagram-node" />
        <text x="830" y="112" textAnchor="middle" className="diagram-text">{pickText(labels.tools, locale)}</text>

        <rect x="730" y="180" width="200" height="90" rx="18" className="diagram-node" />
        <text x="830" y="222" textAnchor="middle" className="diagram-text">{pickText(labels.policy, locale)}</text>

        <rect x="730" y="290" width="200" height="90" rx="18" className="diagram-node" />
        <text x="830" y="332" textAnchor="middle" className="diagram-text">{pickText(labels.ext, locale)}</text>

        <rect x="500" y="300" width="180" height="90" rx="18" className="diagram-node" />
        <text x="590" y="342" textAnchor="middle" className="diagram-text">{pickText(labels.remote, locale)}</text>

        <path d="M210 205 L250 115" className="diagram-line" />
        <path d="M210 205 L250 295" className="diagram-line" />
        <path d="M450 115 L500 205" className="diagram-line" />
        <path d="M450 295 L500 205" className="diagram-line" />
        <path d="M680 205 L730 115" className="diagram-line" />
        <path d="M680 205 L730 225" className="diagram-line" />
        <path d="M680 205 L730 335" className="diagram-line" />
        <path d="M590 250 L590 300" className="diagram-line" />
      </svg>
    </div>
  )
}
