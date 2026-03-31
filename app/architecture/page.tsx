'use client'

import { ArchitectureMap } from '@/components/ArchitectureMap'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { DiagramTabs } from '@/components/DiagramTabs'
import { SectionHeader } from '@/components/SectionHeader'
import { usePreferences } from '@/components/PreferencesProvider'
import { getArchitectureDiagramViews, t } from '@/content/site'

export default function ArchitecturePage() {
  const { locale } = usePreferences()
  const diagramViews = getArchitectureDiagramViews()

  return (
    <>
      <SectionHeader
        eyebrow={t('Project Architecture', '项目架构')}
        title={t('Claude Code is structured like a runtime platform', 'Claude Code 的结构更像一个运行时平台')}
        intro={t(
          'The most useful mental model is layered: bootstrap, interactive surface, query runtime, extension surface, policy state, and remote capabilities.',
          '最有用的理解方式是分层：启动层、交互层、query 运行时、扩展层、策略状态层与远程能力层。',
        )}
      />

      <div className="card">
        <p>
          {locale === 'en'
            ? 'The source snapshot shows a platform-style application rather than a small chat CLI. The key architectural move is separation of concerns: bootstrap and mode routing live in one layer, the REPL and app state in another, query and tool orchestration in another, and permissions/auth/extensibility as cross-cutting layers.'
            : '源码快照显示，这并不是一个小型聊天 CLI，而是一个平台化应用。最关键的架构动作是关注点拆分：启动与模式路由是一层，REPL 与应用状态是一层，query 与工具编排是一层，而权限、鉴权、扩展能力又作为横切关注点存在。'}
        </p>
      </div>

      <ArchitectureDiagram />

      <DiagramTabs views={diagramViews} />

      <ArchitectureMap />

      <div className="three-up">
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'System boundary' : '系统边界'}</p>
          <h3>{locale === 'en' ? 'Local runtime first' : '以本地运行时为起点'}</h3>
          <p>
            {locale === 'en'
              ? 'Claude Code starts as a local process, but the architecture leaves room for remote control, bridge mode, and MCP exposure.'
              : 'Claude Code 从本地进程起步，但架构上预留了 remote control、bridge 模式与 MCP 对外暴露的空间。'}
          </p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Design principle' : '设计原则'}</p>
          <h3>{locale === 'en' ? 'Composition over one giant loop' : '组合优于单一巨型循环'}</h3>
          <p>
            {locale === 'en'
              ? 'Commands, skills, plugins, tools, MCP resources, and settings are composed into the active runtime rather than hard-coded into one mode.'
              : 'commands、skills、plugins、tools、MCP resources 与 settings 都是组合进运行时的，而不是硬编码进单一模式。'}
          </p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Reading hint' : '阅读建议'}</p>
          <h3>{locale === 'en' ? 'Trace one request across layers' : '追踪一次请求穿过多层'}</h3>
          <p>
            {locale === 'en'
              ? 'The architecture becomes much easier once you track a single user turn across UI, query, permissions, tools, and persistence.'
              : '只要你跟着一次用户回合，穿过 UI、query、权限、工具与持久化，整个架构会立刻清晰很多。'}
          </p>
        </article>
      </div>
    </>
  )
}
