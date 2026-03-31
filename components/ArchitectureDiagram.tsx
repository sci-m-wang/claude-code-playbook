'use client'

import { pickText, t } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

const text = {
  title: t('Claude Code System Overview', 'Claude Code 系统总览图'),
  users: t('Entry Surfaces', '入口与接入面'),
  usersDesc: t('CLI, SDK, remote control, MCP server mode', 'CLI、SDK、远程控制、MCP server 模式'),
  bootstrap: t('Bootstrap & Runtime Routing', '启动与运行时路由'),
  bootstrapDesc: t('Fast paths, init, trust-safe setup, startup prewarm', '快速路径、初始化、信任安全设置、启动预热'),
  ui: t('Interactive Workbench', '交互式工作台'),
  uiDesc: t('REPL, app state, prompts, tasks, notifications', 'REPL、应用状态、提示、任务、通知'),
  query: t('Core Execution Engine', '核心执行引擎'),
  queryDesc: t('input normalization -> query loop -> model stream -> tool requests', '输入标准化 -> query 循环 -> 模型流 -> 工具请求'),
  tools: t('Tool Runtime', '工具运行时'),
  toolsDesc: t('tool pool, orchestration, streaming executor, result shaping', '工具池、编排、流式执行器、结果整形'),
  policy: t('Policy & Auth', '策略与鉴权'),
  policyDesc: t('settings, permissions, auth, config persistence', 'settings、permissions、auth、配置持久化'),
  ext: t('Extensibility', '扩展能力'),
  extDesc: t('commands, skills, plugins, MCP, LSP', 'commands、skills、plugins、MCP、LSP'),
  remote: t('Remote & Team Layer', '远程与团队层'),
  remoteDesc: t('bridge, direct connect, remote sessions, team memory', 'bridge、直连、远程会话、team memory'),
  data: t('Persistence & Recovery', '持久化与恢复'),
  dataDesc: t('session storage, transcripts, resume safety', 'session storage、transcripts、恢复安全'),
}

function Box({ x, y, w, h, title, desc, strong = false }: { x: number; y: number; w: number; h: number; title: string; desc: string; strong?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="18" className={strong ? 'drawio-box strong' : 'drawio-box'} />
      <text x={x + 18} y={y + 28} className="drawio-title">
        {title}
      </text>
      <text x={x + 18} y={y + 54} className="drawio-copy">
        <tspan x={x + 18} dy="0">{desc}</tspan>
      </text>
    </g>
  )
}

function Group({ x, y, w, h, title }: { x: number; y: number; w: number; h: number; title: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="24" className="drawio-group" />
      <text x={x + 18} y={y + 28} className="drawio-group-title">
        {title}
      </text>
    </g>
  )
}

export function ArchitectureDiagram() {
  const { locale } = usePreferences()

  return (
    <div className="card diagram-card large-diagram-card">
      <div className="diagram-header-copy">
        <p className="eyebrow">{locale === 'en' ? 'Draw.io-style overview' : 'Draw.io 风格总图'}</p>
        <h3>{pickText(text.title, locale)}</h3>
      </div>
      <svg viewBox="0 0 1320 760" className="diagram-svg large-diagram" role="img" aria-label="Claude Code large system map">
        <defs>
          <linearGradient id="coreGlow" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.24" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.16" />
          </linearGradient>
          <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--line)" />
          </marker>
        </defs>

        <Group x={34} y={40} w={220} h={190} title={locale === 'en' ? 'Client & entry layer' : '客户端与入口层'} />
        <Group x={290} y={40} w={290} h={190} title={locale === 'en' ? 'Bootstrap layer' : '启动层'} />
        <Group x={610} y={40} w={330} h={290} title={locale === 'en' ? 'Execution center' : '执行中心'} />
        <Group x={970} y={40} w={316} h={290} title={locale === 'en' ? 'Control planes' : '控制面'} />
        <Group x={34} y={374} w={1252} h={300} title={locale === 'en' ? 'Platform capabilities and durable state' : '平台能力与耐久状态'} />

        <Box x={56} y={88} w={180} h={98} title={pickText(text.users, locale)} desc={pickText(text.usersDesc, locale)} />

        <Box x={314} y={88} w={240} h={98} title={pickText(text.bootstrap, locale)} desc={pickText(text.bootstrapDesc, locale)} />

        <Box x={634} y={88} w={280} h={104} title={pickText(text.query, locale)} desc={pickText(text.queryDesc, locale)} strong />
        <Box x={634} y={212} w={280} h={92} title={pickText(text.tools, locale)} desc={pickText(text.toolsDesc, locale)} />

        <Box x={994} y={88} w={268} h={94} title={pickText(text.policy, locale)} desc={pickText(text.policyDesc, locale)} />
        <Box x={994} y={202} w={268} h={92} title={pickText(text.remote, locale)} desc={pickText(text.remoteDesc, locale)} />

        <Box x={68} y={428} w={250} h={100} title={pickText(text.ui, locale)} desc={pickText(text.uiDesc, locale)} />
        <Box x={352} y={428} w={250} h={100} title={pickText(text.ext, locale)} desc={pickText(text.extDesc, locale)} />
        <Box x={636} y={428} w={250} h={100} title={pickText(text.data, locale)} desc={pickText(text.dataDesc, locale)} />
        <Box x={920} y={428} w={330} h={100} title={locale === 'en' ? 'Key source landmarks' : '关键源码地标'} desc={locale === 'en' ? 'cli.tsx, main.tsx, query.ts, tools.ts, permissions.ts, mcp/client.ts' : 'cli.tsx、main.tsx、query.ts、tools.ts、permissions.ts、mcp/client.ts'} />

        <path d="M236 136 L314 136" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M554 136 L634 136" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M914 136 L994 136" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M774 192 L774 212" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M774 304 L774 428" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M506 428 L506 372 L774 372 L774 428" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M194 428 L194 372 L634 372 L634 428" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M1128 294 L1128 372 L1040 372 L1040 428" className="diagram-line" markerEnd="url(#arrowHead)" />
        <path d="M1128 182 L1128 212" className="diagram-line" markerEnd="url(#arrowHead)" />
      </svg>
    </div>
  )
}
