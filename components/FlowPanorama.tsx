'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { pickText, t } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

const text = {
  title: t('Execution Panorama', '执行全景图'),
  prompt: t('Prompt intake', '提示词进入'),
  promptDesc: t('REPL, queued commands, attachments', 'REPL、排队命令、附件'),
  normalize: t('Input normalization', '输入标准化'),
  normalizeDesc: t('slash commands, hooks, pasted content', '斜杠命令、hooks、粘贴内容'),
  query: t('Query loop', 'Query 循环'),
  queryDesc: t('model stream, retries, compaction, turn control', '模型流、重试、压缩、回合控制'),
  tools: t('Tool scheduling', '工具调度'),
  toolsDesc: t('parallel-safe batches, serial batches, streaming execution', '并行安全批次、串行批次、流式执行'),
  permissions: t('Permission gate', '权限闸门'),
  permissionsDesc: t('mode, policy, auth state, risk classification', '模式、策略、鉴权状态、风险分类'),
  persistence: t('Persistence', '持久化'),
  persistenceDesc: t('transcript durability, resume state, artifacts', '转录耐久化、恢复状态、产物'),
  output: t('Rendered output', '最终输出'),
  outputDesc: t('incremental UI, notifications, next-turn context', '增量 UI、通知、下一轮上下文'),
}

const flowNodes = [
  {
    id: 'prompt',
    x: 58,
    y: 168,
    w: 178,
    h: 104,
    title: text.prompt,
    desc: text.promptDesc,
    href: '/modules#repl-ui',
    files: ['src/screens/REPL.tsx', 'src/replLauncher.tsx'],
  },
  {
    id: 'normalize',
    x: 274,
    y: 168,
    w: 192,
    h: 104,
    title: text.normalize,
    desc: text.normalizeDesc,
    href: '/flows',
    files: ['src/utils/processUserInput/processUserInput.ts'],
  },
  {
    id: 'query',
    x: 508,
    y: 148,
    w: 224,
    h: 144,
    title: text.query,
    desc: text.queryDesc,
    href: '/modules#query-engine',
    files: ['src/query.ts', 'src/QueryEngine.ts'],
    strong: true,
  },
  {
    id: 'permissions',
    x: 780,
    y: 62,
    w: 224,
    h: 104,
    title: text.permissions,
    desc: text.permissionsDesc,
    href: '/modules#permissions-policy',
    files: ['src/utils/permissions/permissionSetup.ts', 'src/utils/permissions/permissions.ts'],
  },
  {
    id: 'tools',
    x: 780,
    y: 188,
    w: 224,
    h: 104,
    title: text.tools,
    desc: text.toolsDesc,
    href: '/modules#tool-runtime',
    files: ['src/services/tools/toolOrchestration.ts', 'src/services/tools/StreamingToolExecutor.ts'],
  },
  {
    id: 'persistence',
    x: 1048,
    y: 96,
    w: 204,
    h: 104,
    title: text.persistence,
    desc: text.persistenceDesc,
    href: '/modules#auth-config',
    files: ['src/utils/sessionStorage.ts'],
  },
  {
    id: 'output',
    x: 1048,
    y: 224,
    w: 204,
    h: 104,
    title: text.output,
    desc: text.outputDesc,
    href: '/modules#repl-ui',
    files: ['src/screens/REPL.tsx', 'src/cli/print.ts'],
  },
]

function Box({ x, y, w, h, title, desc, strong = false, active = false, onClick }: { x: number; y: number; w: number; h: number; title: string; desc: string; strong?: boolean; active?: boolean; onClick?: () => void }) {
  return (
    <g className={onClick ? 'diagram-hotspot' : undefined} onClick={onClick}>
      <rect x={x} y={y} width={w} height={h} rx="18" className={active ? 'drawio-box active' : strong ? 'drawio-box strong' : 'drawio-box'} />
      <text x={x + 16} y={y + 28} className="drawio-title">
        {title}
      </text>
      <text x={x + 16} y={y + 54} className="drawio-copy">
        <tspan x={x + 16} dy="0">{desc}</tspan>
      </text>
    </g>
  )
}

export function FlowPanorama() {
  const { locale } = usePreferences()
  const router = useRouter()
  const [selectedId, setSelectedId] = useState('query')
  const selected = useMemo(() => flowNodes.find(item => item.id === selectedId) ?? flowNodes[0], [selectedId])

  return (
    <div className="card diagram-card large-diagram-card">
      <div className="diagram-header-copy">
        <p className="eyebrow">{locale === 'en' ? 'Flow control board' : '流程控制总图'}</p>
        <h3>{pickText(text.title, locale)}</h3>
      </div>
      <div className="system-panorama">
        <svg viewBox="0 0 1320 420" className="diagram-svg" role="img" aria-label="Execution panorama">
          <defs>
            <marker id="flowArrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--line)" />
            </marker>
          </defs>

          {flowNodes.map(node => (
            <Box
              key={node.id}
              x={node.x}
              y={node.y}
              w={node.w}
              h={node.h}
              title={pickText(node.title, locale)}
              desc={pickText(node.desc, locale)}
              strong={node.strong}
              active={selectedId === node.id}
              onClick={() => setSelectedId(node.id)}
            />
          ))}

          <path d="M236 220 L274 220" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M466 220 L508 220" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M732 220 L780 220" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M1004 220 L1048 220" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M620 148 L620 90 L780 90" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M1004 114 L1048 148" className="diagram-line" markerEnd="url(#flowArrowHead)" />
          <path d="M1148 200 L1148 224" className="diagram-line" markerEnd="url(#flowArrowHead)" />
        </svg>

        <aside className="panorama-inspector">
          <p className="eyebrow">{locale === 'en' ? 'Selected phase' : '当前阶段'}</p>
          <h4>{pickText(selected.title, locale)}</h4>
          <p>{pickText(selected.desc, locale)}</p>
          <div className="chip-row">
            {selected.files.map(file => (
              <span className="chip" key={file}>{file}</span>
            ))}
          </div>
          <button className="inspector-cta" onClick={() => router.push(selected.href)}>
            {locale === 'en' ? 'Jump to related source area' : '跳到相关源码区域'}
          </button>
          <p className="inspector-note">
            {locale === 'en'
              ? 'Use this board to orient yourself before switching to the zoom-in panels below.'
              : '先用这张总图建立方向感，再看下方的局部放大图。'}
          </p>
        </aside>
      </div>
    </div>
  )
}
