'use client'

import sourceMetadata from '@/content/generated/source-metadata.json'
import { ArchitectureMap } from '@/components/ArchitectureMap'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { SectionHeader } from '@/components/SectionHeader'
import { usePreferences } from '@/components/PreferencesProvider'
import { t } from '@/content/site'

export default function HomePage() {
  const { locale } = usePreferences()

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{locale === 'en' ? 'Execution Plan' : '执行计划'}</p>
        <h2>{locale === 'en' ? 'Analyze first, then teach, then ship' : '先分析，再教学，再交付'}</h2>
        <p className="section-intro">
          {locale === 'en'
            ? 'This site is built around real Claude Code source analysis, not generic product copy. The current study uses a local app-source snapshot for internals and the public GitHub repository for plugin and ecosystem context.'
            : '这个站点不是宣传页，而是基于 Claude Code 真实源码分析构建的学习产品。当前版本同时参考本地 app-source snapshot 与公开 GitHub 仓库的生态信息。'}
        </p>
        <div className="hero-grid">
          <article className="card">
            <p className="card-kicker">Step 1</p>
            <h3>{locale === 'en' ? 'Source analysis' : '源码分析'}</h3>
            <p>
              {locale === 'en'
                ? 'Map entrypoints, runtime boundaries, tools, permissions, MCP, remote capabilities, and standout implementations.'
                : '先建立入口、运行时边界、工具体系、权限系统、MCP 与远程能力的认知地图。'}
            </p>
          </article>
          <article className="card">
            <p className="card-kicker">Step 2</p>
            <h3>{locale === 'en' ? 'Learning structure' : '学习结构'}</h3>
            <p>
              {locale === 'en'
                ? 'Translate the analysis into architecture maps, module explainers, execution flows, reading tracks, and concept pages.'
                : '把分析结果转成架构图、模块拆解、执行链路、阅读路径和术语页面。'}
            </p>
          </article>
          <article className="card">
            <p className="card-kicker">Step 3</p>
            <h3>{locale === 'en' ? 'Automated delivery' : '自动交付'}</h3>
            <p>
              {locale === 'en'
                ? 'Export a static Next.js site and deploy it automatically to GitHub Pages from the repository workflow.'
                : '导出静态 Next.js 站点，并通过仓库工作流自动部署到 GitHub Pages。'}
            </p>
          </article>
        </div>
      </section>

      <section className="stat-grid">
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Why this project matters' : '为什么值得学'}</p>
          <h3>{locale === 'en' ? 'Not just chat plus tools' : '不只是聊天加工具'}</h3>
          <p>
            {locale === 'en'
              ? 'Claude Code behaves like a platformized terminal product with a query runtime, concurrency-aware tool execution, policy layers, plugins, skills, MCP, and remote modes.'
              : 'Claude Code 更像是一个平台化的终端产品：它拥有 query 运行时、并发感知的工具执行、策略层、plugins、skills、MCP 与 remote 模式。'}
          </p>
        </article>
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Source basis' : '分析依据'}</p>
          <h3>{sourceMetadata.snapshotLabel}</h3>
          <p>
            {locale === 'en' ? 'Snapshot date' : '快照日期'}: {sourceMetadata.snapshotDate}.{' '}
            {locale === 'en' ? 'Public ecosystem repo commit' : '公开生态仓库提交'}:{' '}
            <code>{sourceMetadata.publicRepo.commit.slice(0, 7)}</code>.
          </p>
        </article>
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Recommended entry' : '推荐入口'}</p>
          <h3>{locale === 'en' ? 'Architecture → Modules → Runtime Track' : '架构总览 → 核心模块 → 运行时路径'}</h3>
          <p>
            {locale === 'en'
              ? 'That route gives the fastest path from product shape to concrete execution logic.'
              : '这条路线能最快把产品形态映射到具体执行逻辑。'}
          </p>
        </article>
      </section>

      <ArchitectureDiagram />

      <section className="visual-grid">
        <article className="card zoom-card">
          <p className="card-kicker">{locale === 'en' ? 'How to read the panorama' : '如何阅读总图'}</p>
          <h3>{locale === 'en' ? 'Read left to right, then top to bottom' : '先横向看主链，再纵向看控制面'}</h3>
          <p>
            {locale === 'en'
              ? 'The top horizontal path shows the main execution spine. The right side explains control planes. The lower band shows durable capabilities and platform extensions.'
              : '顶部横向链路展示主执行脊柱；右侧是控制面；下方则是耐久能力与平台扩展层。'}
          </p>
        </article>
        <article className="card zoom-card">
          <p className="card-kicker">{locale === 'en' ? 'Legend' : '图例'}</p>
          <h3>{locale === 'en' ? 'What visual emphasis means' : '不同视觉强调代表什么'}</h3>
          <p>
            {locale === 'en'
              ? 'Highlighted boxes mark the execution center of gravity. Dashed groups show system boundaries. The inspector panel turns the overview into source-level navigation.'
              : '高亮盒子表示执行重心；虚线分组表示系统边界；右侧 inspector 则把总图直接变成源码导航入口。'}
          </p>
          <div className="chip-row">
            <span className="chip">{locale === 'en' ? 'Highlighted = critical runtime' : '高亮 = 关键运行时'}</span>
            <span className="chip">{locale === 'en' ? 'Dashed = boundary group' : '虚线 = 边界分组'}</span>
            <span className="chip">{locale === 'en' ? 'Inspector = source jump' : 'Inspector = 源码跳转'}</span>
          </div>
        </article>
      </section>

      <section>
        <SectionHeader
          eyebrow={t('Analysis Focus', '分析重点')}
          title={t('What to pay attention to while reading Claude Code', '阅读 Claude Code 时最该关注什么')}
          intro={t(
            'The main learning payoff is not one file. It is the relationship between runtime routing, the query loop, the tool runtime, the permission system, and the extensibility model.',
            '真正的学习收益不在某一个文件，而在运行时路由、query 循环、工具运行时、权限系统和扩展体系之间的关系。',
          )}
        />
        <div className="signal-grid">
          <article>
            <h3>{locale === 'en' ? 'Runtime shape' : '运行时形态'}</h3>
            <p>
              {locale === 'en'
                ? 'Start with how many personalities the product has: interactive CLI, headless engine, bridge process, remote path, and MCP server.'
                : '先理解这个产品到底有多少种“人格”：交互式 CLI、无头引擎、bridge 进程、remote 路径和 MCP server。'}
            </p>
          </article>
          <article>
            <h3>{locale === 'en' ? 'Execution chain' : '执行链路'}</h3>
            <p>
              {locale === 'en'
                ? 'Follow one turn from prompt input to tool execution and transcript persistence.'
                : '跟踪一次用户回合，从 prompt 输入一直走到工具执行与转录持久化。'}
            </p>
          </article>
          <article>
            <h3>{locale === 'en' ? 'Policy boundaries' : '策略边界'}</h3>
            <p>
              {locale === 'en'
                ? 'Pay attention to permission modes, settings layers, and auth paths. They explain how autonomy stays governable.'
                : '重点看权限模式、设置分层与鉴权路径，它们决定了自动化能力如何保持可治理。'}
            </p>
          </article>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow={t('Architecture at a glance', '架构一览')}
          title={t('System map', '系统地图')}
          intro={t(
            'This map mirrors the actual code structure and becomes the backbone of the rest of the learning site.',
            '这张图对应的是真实代码结构，也是整站后续内容的骨架。',
          )}
        />
        <ArchitectureMap />
      </section>

      <section className="timeline">
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Read this next' : '下一步'}</p>
          <h3>{locale === 'en' ? 'Project architecture' : '项目架构'}</h3>
          <p>{locale === 'en' ? 'Get the boundaries right before diving into subsystems.' : '进入子系统之前，先把边界感建立起来。'}</p>
        </article>
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Then explore' : '然后继续'}</p>
          <h3>{locale === 'en' ? 'Core modules' : '核心模块'}</h3>
          <p>{locale === 'en' ? 'Study role, key files, inputs, outputs, and learning value.' : '按模块看职责、关键文件、输入输出与学习价值。'}</p>
        </article>
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Then simulate' : '再模拟'}</p>
          <h3>{locale === 'en' ? 'Execution flows' : '执行链路'}</h3>
          <p>{locale === 'en' ? 'Trace runtime chains step by step and connect them to source files.' : '一步步跟踪运行时链路，并把它们对应回源码文件。'}</p>
        </article>
        <article>
          <p className="card-kicker">{locale === 'en' ? 'Finish with' : '最后进入'}</p>
          <h3>{locale === 'en' ? 'Reading paths' : '阅读路径'}</h3>
          <p>{locale === 'en' ? 'Choose a route by experience level or technical interest.' : '按经验层级或技术兴趣选择阅读路线。'}</p>
        </article>
      </section>

      <section className="three-up">
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? '30-minute route' : '30 分钟速读路线'}</p>
          <h3>{locale === 'en' ? 'Build the mental model fast' : '先建立整体心智模型'}</h3>
          <p>{locale === 'en' ? 'Read `cli.tsx` → `main.tsx` → `commands.ts` → `tools.ts` → Architecture page diagrams.' : '建议阅读 `cli.tsx` → `main.tsx` → `commands.ts` → `tools.ts`，再配合架构页图示建立整体认知。'}</p>
          <p>{locale === 'en' ? 'Outcome: you understand the runtime shape, capability surface, and why Claude Code is more platform than chat CLI.' : '收获：你会理解它的运行时形态、能力面，以及为什么它更像平台而不是聊天 CLI。'}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? '2-hour route' : '2 小时深入路线'}</p>
          <h3>{locale === 'en' ? 'Understand execution deeply' : '深入理解执行系统'}</h3>
          <p>{locale === 'en' ? 'Follow `processUserInput.ts` → `query.ts` → `QueryEngine.ts` → tool orchestration files → session storage.' : '建议顺着 `processUserInput.ts` → `query.ts` → `QueryEngine.ts` → 工具调度相关文件 → session storage 深入。'}</p>
          <p>{locale === 'en' ? 'Outcome: you can explain how a prompt becomes streamed output, tool effects, and durable transcript state.' : '收获：你将能解释一条 prompt 如何变成流式输出、工具副作用以及耐久化会话状态。'}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Platform route' : '平台路线'}</p>
          <h3>{locale === 'en' ? 'Study extensibility and governance' : '研究扩展与治理能力'}</h3>
          <p>{locale === 'en' ? 'Focus on permissions, auth, config, plugin loading, and MCP client logic.' : '重点看 permissions、auth、config、plugin loading 和 MCP client 逻辑。'}</p>
          <p>{locale === 'en' ? 'Outcome: you will see how Claude Code grows from product into platform and how safety is layered into that growth.' : '收获：你会看见 Claude Code 如何从产品演进为平台，以及安全治理如何嵌入其中。'}</p>
        </article>
      </section>
    </>
  )
}
