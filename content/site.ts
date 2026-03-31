import type {
  DiagramView,
  FeatureCard,
  FlowCard,
  GlossaryTerm,
  Locale,
  LocalizedText,
  ModuleCard,
  ReadingTrack,
  TopFile,
} from '@/content/types'

export function t(en: string, zh: string): LocalizedText {
  return { en, zh }
}

export function pickText(value: LocalizedText, locale: Locale): string {
  return value[locale]
}

export const siteMeta = {
  title: t('Claude Code Playbook', 'Claude Code 学习手册'),
  tagline: t(
    'An interactive learning site built from real Claude Code source analysis.',
    '一个基于 Claude Code 真实源码分析构建的交互式学习站。',
  ),
  description: t(
    'Study Claude Code through architecture maps, module breakdowns, execution flows, source reading paths, and feature analysis grounded in real code.',
    '通过架构图、模块拆解、执行链路、阅读路径与特性分析，系统学习 Claude Code。',
  ),
}

export const primaryNav = [
  { href: '/', label: t('Home', '首页') },
  { href: '/architecture', label: t('Architecture', '架构总览') },
  { href: '/modules', label: t('Modules', '核心模块') },
  { href: '/flows', label: t('Execution Flows', '执行链路') },
  { href: '/features', label: t('Notable Features', '亮点特性') },
  { href: '/reading-paths', label: t('Reading Paths', '阅读路径') },
  { href: '/top-files', label: t('Top 20 Files', 'Top 20 文件') },
  { href: '/glossary', label: t('Glossary', '术语解释') },
  { href: '/about', label: t('Analysis Basis', '分析依据') },
]

export const uiText = {
  sidebarEyebrow: t('Claude Code Source Study', 'Claude Code 源码导读'),
  sidebarHintTitle: t('How to use this site', '如何使用本站'),
  sidebarHintBody: t(
    'Start with Architecture, then Modules, then follow one Reading Path. Use search to jump straight to a subsystem or concept.',
    '建议先看架构总览，再看核心模块，然后按阅读路径深入。搜索可以直接定位到子系统或概念。',
  ),
  topbarEyebrow: t('Interactive Playbook', '交互式导读'),
  topbarTitle: t(
    'Understand Claude Code from real code paths',
    '从真实代码路径理解 Claude Code',
  ),
  searchLabel: t('Search modules, flows, concepts', '搜索模块、流程与概念'),
  searchPlaceholder: t('Try: query, MCP, permissions, REPL', '试试：query、MCP、权限、REPL'),
  searchButton: t('Quick Search', '快速搜索'),
  themeAuto: t('Auto', '自动'),
  themeLight: t('Light', '浅色'),
  themeDark: t('Dark', '深色'),
  langLabel: t('Language', '语言'),
  themeLabel: t('Theme', '主题'),
  whyItMatters: t('Why it matters', '为什么重要'),
  engineeringTradeoffs: t('Engineering tradeoffs', '工程取舍'),
  evidence: t('Evidence', '源码依据'),
  inputs: t('Inputs', '输入'),
  outputs: t('Outputs', '输出'),
  whyStudyIt: t('Why study it', '学习价值'),
  readFirst: t('Read first', '建议先读'),
  keyFiles: t('Key files', '关键文件'),
  audience: t('Audience', '适合人群'),
  goal: t('Goal', '目标'),
  learningSignal: t('Learning signal', '学习信号'),
  diagramViews: t('Diagram views', '图示视图'),
  allFiles: t('All files', '全部文件'),
  starterFiles: t('Starter picks', '新手优先'),
  runtimeFiles: t('Runtime picks', '运行时优先'),
  platformFiles: t('Platform picks', '平台方向'),
  sourceAnchors: t('Source anchors', '源码锚点'),
}

export const architectureLayers = [
  {
    title: t('Bootstrap & Runtime Modes', '启动与运行模式'),
    summary: t(
      'Fast-path entrypoints decide whether Claude Code behaves like a full interactive CLI, a headless engine, a bridge process, or an MCP server.',
      '快速入口决定 Claude Code 此次运行是完整交互式 CLI、无头引擎、桥接进程，还是 MCP 服务器。',
    ),
    files: ['src/entrypoints/cli.tsx', 'src/main.tsx', 'src/entrypoints/init.ts'],
  },
  {
    title: t('Interactive Surface', '交互界面层'),
    summary: t(
      'The REPL and supporting UI state render conversation history, task status, tool output, permissions, and remote controls.',
      'REPL 与相关 UI 状态负责渲染对话历史、任务状态、工具输出、权限提示以及远程控制信息。',
    ),
    files: ['src/replLauncher.tsx', 'src/screens/REPL.tsx', 'src/state/AppStateStore.ts'],
  },
  {
    title: t('Query & Tool Runtime', 'Query 与工具运行时'),
    summary: t(
      'User input is normalized, streamed through query orchestration, and converted into ordered, concurrency-aware tool execution.',
      '用户输入会先被标准化，再进入 query 编排，最终转化为有序且具备并发控制的工具执行。',
    ),
    files: ['src/query.ts', 'src/QueryEngine.ts', 'src/services/tools/toolOrchestration.ts'],
  },
  {
    title: t('Extensibility Layer', '扩展能力层'),
    summary: t(
      'Commands, skills, plugins, MCP servers, and LSP integrations are all loaded into the same runtime surface and filtered by policy.',
      'commands、skills、plugins、MCP servers 与 LSP 集成都被加载到同一运行时能力面，并受策略控制。',
    ),
    files: ['src/commands.ts', 'src/tools.ts', 'src/utils/plugins/pluginLoader.ts', 'src/services/mcp/client.ts'],
  },
  {
    title: t('Policy, Auth & Persistence', '策略、鉴权与持久化'),
    summary: t(
      'A deep settings and permission system governs what the runtime is allowed to do, how it authenticates, and how sessions resume safely.',
      '深度的设置与权限系统决定运行时能做什么、如何鉴权，以及如何安全地恢复会话。',
    ),
    files: ['src/utils/permissions/permissions.ts', 'src/utils/auth.ts', 'src/utils/config.ts', 'src/utils/sessionStorage.ts'],
  },
  {
    title: t('Remote & Team Capabilities', '远程与团队能力'),
    summary: t(
      'Claude Code can act as a remote-control target, manage remote sessions, sync team memory, and expose itself over MCP.',
      'Claude Code 可以作为远程控制目标、管理远程会话、同步团队记忆，并通过 MCP 暴露自身能力。',
    ),
    files: ['src/bridge/bridgeMain.ts', 'src/remote/RemoteSessionManager.ts', 'src/services/teamMemorySync/index.ts', 'src/entrypoints/mcp.ts'],
  },
]

export const moduleCards: ModuleCard[] = [
  {
    slug: 'bootstrap-runtime',
    title: t('Bootstrap & Runtime Routing', '启动与运行时路由'),
    summary: t(
      'Claude Code starts as a mode router, not a single-path CLI.',
      'Claude Code 首先是一个运行模式路由器，而不是单一路径的 CLI。',
    ),
    role: t(
      'Keeps startup responsive while supporting many execution personalities inside one product.',
      '在支持多种运行人格的同时，保持启动速度和产品一致性。',
    ),
    inputs: [t('CLI args', 'CLI 参数'), t('Environment variables', '环境变量'), t('Settings', '设置'), t('Trust and policy state', '信任与策略状态')],
    outputs: [t('Selected runtime path', '选中的运行路径'), t('Initialized global state', '初始化后的全局状态'), t('Rendered REPL or headless loop', 'REPL 或无头循环')],
    learningValue: [t('Shows startup optimization patterns.', '展示了成熟 CLI 的启动优化模式。'), t('Shows trust-safe initialization sequencing.', '展示了带信任约束的初始化顺序。')],
    firstRead: [{ path: 'src/entrypoints/cli.tsx' }, { path: 'src/main.tsx' }],
    keyFiles: [
      { path: 'src/entrypoints/init.ts', note: t('Central initialization and shutdown wiring.', '核心初始化与关闭流程。') },
      { path: 'src/setup.ts', note: t('Startup setup and prewarming.', '启动期设置与预热逻辑。') },
    ],
  },
  {
    slug: 'repl-ui',
    title: t('REPL & App State', 'REPL 与应用状态'),
    summary: t('The interactive surface is a stateful terminal workstation.', '交互界面不是简单聊天框，而是一个带状态的终端工作台。'),
    role: t('Presents Claude Code as an operator console.', '把 Claude Code 呈现为可操作的控制台。'),
    inputs: [t('User keystrokes', '用户输入'), t('Queued commands', '排队命令'), t('Tool events', '工具事件'), t('Remote events', '远程事件')],
    outputs: [t('Rendered transcript', '渲染后的对话'), t('Permission dialogs', '权限弹窗'), t('Task progress UI', '任务进度界面')],
    learningValue: [t('Shows terminal-first UX design.', '展示终端优先的产品设计。'), t('Shows state separation between UI and runtime.', '展示 UI 状态与运行时状态的拆分。')],
    firstRead: [{ path: 'src/replLauncher.tsx' }, { path: 'src/screens/REPL.tsx' }],
    keyFiles: [
      { path: 'src/state/AppStateStore.ts', note: t('Interactive runtime state container.', '交互运行时状态容器。') },
      { path: 'src/components/', note: t('UI components for messages, prompts, and permissions.', '消息、输入与权限提示组件。') },
    ],
  },
  {
    slug: 'query-engine',
    title: t('Query Engine & Turn Processing', 'Query 引擎与回合处理'),
    summary: t('A user turn becomes model calls, streams, tool dispatch, and persistence.', '一次用户回合会被转化为模型调用、流式输出、工具分发与持久化。'),
    role: t('Owns the core conversational execution loop.', '负责最核心的对话执行循环。'),
    inputs: [t('Prompt text', '提示词'), t('Attachments', '附件'), t('Slash commands', '斜杠命令'), t('Conversation state', '会话状态')],
    outputs: [t('Assistant stream', '助手输出流'), t('Tool calls', '工具调用'), t('Retry and compaction decisions', '重试与压缩决策')],
    learningValue: [t('Shows the center of gravity in an agent runtime.', '展示 agent 运行时的重心。'), t('Highlights headless reuse via QueryEngine.', '展示 QueryEngine 的无头复用方式。')],
    firstRead: [{ path: 'src/utils/processUserInput/processUserInput.ts' }, { path: 'src/query.ts' }],
    keyFiles: [
      { path: 'src/QueryEngine.ts', note: t('Headless and SDK-friendly wrapper.', '无头模式与 SDK 友好的封装层。') },
      { path: 'src/query/config.ts', note: t('Immutable per-turn config snapshot.', '每回合不可变配置快照。') },
    ],
  },
  {
    slug: 'tool-runtime',
    title: t('Tool Runtime', '工具运行时'),
    summary: t('Tools are first-class runtime actors with hooks, permissions, and concurrency control.', '工具是运行时的一等公民，拥有 hooks、权限与并发控制。'),
    role: t('Turns model intent into safe, ordered side effects.', '将模型意图转化为安全、可控且有序的副作用。'),
    inputs: [t('Tool use blocks', '工具调用块'), t('Permission context', '权限上下文'), t('App state', '应用状态'), t('MCP clients', 'MCP 客户端')],
    outputs: [t('Tool results', '工具结果'), t('Notifications', '通知'), t('Persisted artifacts', '持久化产物')],
    learningValue: [t('A stronger model than a trivial sequential tool loop.', '比简单串行工具循环更成熟。'), t('Useful for studying concurrency with determinism.', '适合研究有确定性的并发设计。')],
    firstRead: [{ path: 'src/Tool.ts' }, { path: 'src/tools.ts' }],
    keyFiles: [
      { path: 'src/services/tools/toolOrchestration.ts', note: t('Concurrency-safe scheduling.', '具备并发安全的调度。') },
      { path: 'src/services/tools/StreamingToolExecutor.ts', note: t('Streaming execution and sibling aborts.', '流式执行与并行取消。') },
      { path: 'src/services/tools/toolExecution.ts', note: t('Hooks, telemetry, and result shaping.', 'hooks、遥测与结果整理。') },
    ],
  },
  {
    slug: 'permissions-policy',
    title: t('Permissions, Settings & Policy', '权限、设置与策略'),
    summary: t('Permission behavior emerges from layered configuration and runtime mode.', '权限行为来源于分层配置与运行模式，而非单一开关。'),
    role: t('Defines the safety boundary around autonomy.', '定义自动化行为的安全边界。'),
    inputs: [t('User settings', '用户设置'), t('Managed settings', '托管设置'), t('CLI flags', 'CLI 标志'), t('Tool request metadata', '工具请求元数据')],
    outputs: [t('Permission mode', '权限模式'), t('Ask/allow/deny decisions', '询问/允许/拒绝决策'), t('Tool-specific constraints', '工具级约束')],
    learningValue: [t('Strong example of policy composition.', '是策略组合设计的强案例。'), t('Shows enterprise-grade AI governance concerns.', '体现了企业级 AI 治理需求。')],
    firstRead: [{ path: 'src/utils/permissions/permissionSetup.ts' }, { path: 'src/utils/permissions/permissions.ts' }],
    keyFiles: [
      { path: 'src/utils/settings/settings.ts', note: t('Layered settings loading and validation.', '分层设置加载与校验。') },
      { path: 'src/types/permissions.ts', note: t('Permission modes and shared types.', '权限模式与共享类型。') },
    ],
  },
  {
    slug: 'auth-config',
    title: t('Auth & Configuration Persistence', '鉴权与配置持久化'),
    summary: t('Authentication spans OAuth, API keys, helpers, cloud providers, and remote contexts.', '鉴权同时覆盖 OAuth、API Key、helper、云厂商鉴权与远程上下文。'),
    role: t('Makes the product usable across local, enterprise, and cloud contexts.', '支撑本地、企业与云环境的统一使用体验。'),
    inputs: [t('OAuth tokens', 'OAuth 令牌'), t('API keys', 'API Key'), t('Helpers', '外部 helper'), t('Project trust state', '项目信任状态')],
    outputs: [t('Provider-ready credentials', '可供 provider 使用的凭据'), t('Config state', '配置状态'), t('Project cache and trust state', '项目缓存与信任状态')],
    learningValue: [t('Shows how auth grows in a real product.', '展示真实产品中的鉴权演进。'), t('Shows persistence as part of runtime design.', '展示持久化如何成为运行时设计的一部分。')],
    firstRead: [{ path: 'src/utils/auth.ts' }, { path: 'src/utils/config.ts' }],
    keyFiles: [
      { path: 'src/bootstrap/state.ts', note: t('Global process/session state.', '进程级与会话级全局状态。') },
      { path: 'src/utils/sessionStorage.ts', note: t('Transcript persistence and resume safety.', '对话持久化与恢复安全。') },
    ],
  },
  {
    slug: 'skills-plugins-mcp',
    title: t('Skills, Plugins & MCP', 'Skills、Plugins 与 MCP'),
    summary: t('Claude Code merges many extension mechanisms into one runtime.', 'Claude Code 将多种扩展机制收束到同一个运行时能力面中。'),
    role: t('Expands Claude Code from app to platform.', '把 Claude Code 从应用扩展为平台。'),
    inputs: [t('Bundled skills', '内置 skills'), t('Filesystem skill dirs', '文件系统 skills'), t('Plugin manifests', '插件清单'), t('MCP configs', 'MCP 配置')],
    outputs: [t('Effective command set', '有效命令集合'), t('Effective tool pool', '有效工具池'), t('Loaded MCP resources', '已加载 MCP 资源')],
    learningValue: [t('Shows unified extensibility.', '展示统一的扩展体系。'), t('Explains why Claude Code feels ecosystem-like.', '解释其生态化产品形态。')],
    firstRead: [{ path: 'src/commands.ts' }, { path: 'src/skills/loadSkillsDir.ts' }],
    keyFiles: [
      { path: 'src/utils/plugins/pluginLoader.ts', note: t('Plugin loading and validation.', '插件加载与校验。') },
      { path: 'src/services/mcp/client.ts', note: t('MCP client implementation.', 'MCP 客户端实现。') },
      { path: 'src/services/mcp/config.ts', note: t('MCP config loading and deduplication.', 'MCP 配置加载与去重。') },
    ],
  },
  {
    slug: 'remote-bridge',
    title: t('Remote, Bridge & Direct Connect', 'Remote、Bridge 与 Direct Connect'),
    summary: t('Claude Code is not limited to the terminal that launched it.', 'Claude Code 并不局限于启动它的那个本地终端。'),
    role: t('Extends the coding assistant into a distributed execution surface.', '把编码助手扩展为分布式执行面。'),
    inputs: [t('Remote session identifiers', '远程会话标识'), t('WebSocket events', 'WebSocket 事件'), t('Direct connect config', '直连配置')],
    outputs: [t('Remote UI updates', '远程 UI 更新'), t('Permission bridge responses', '权限桥接响应'), t('Bridge lifecycle events', '桥接生命周期事件')],
    learningValue: [t('One of the clearest differentiators.', '这是最明显的差异化能力之一。'), t('Shows how local-first tools evolve into distributed systems.', '展示本地优先工具如何演进为分布式系统。')],
    firstRead: [{ path: 'src/remote/RemoteSessionManager.ts' }, { path: 'src/bridge/bridgeMain.ts' }],
    keyFiles: [
      { path: 'src/remote/SessionsWebSocket.ts', note: t('Remote session transport.', '远程会话传输层。') },
      { path: 'src/server/createDirectConnectSession.ts', note: t('Direct-connect session creation.', '直连会话创建逻辑。') },
    ],
  },
]

export const flowCards: FlowCard[] = [
  {
    slug: 'interactive-turn',
    title: t('Interactive Turn: input to streamed answer', '交互回合：从输入到流式回答'),
    summary: t('The standard path for understanding how Claude Code works at runtime.', '这是理解 Claude Code 运行时行为的标准入口。'),
    whyItMatters: t('This flow connects REPL, input normalization, query orchestration, persistence, and rendering.', '这条链路把 REPL、输入标准化、query 编排、持久化和渲染串在了一起。'),
    steps: [
      { title: t('REPL captures prompt and queued commands', 'REPL 接收提示词与队列命令'), summary: t('The UI gathers prompt text, attachments, and queued command metadata.', 'UI 会收集提示词、附件与命令元数据。'), files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/components/PromptInput/' }] },
      { title: t('Input is normalized and hook-aware', '输入被标准化并经过 hook 感知'), summary: t('Plain text, slash commands, and attachments go through one normalization layer.', '普通文本、斜杠命令与附件都会经过统一标准化层。'), files: [{ path: 'src/utils/processUserInput/processUserInput.ts' }] },
      { title: t('Query loop drives model and tool phases', 'Query 循环驱动模型与工具阶段'), summary: t('The runtime streams model output, reacts to tool blocks, and manages retries or compaction.', '运行时会流式处理模型输出，响应工具块，并决定是否重试或压缩。'), files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }] },
      { title: t('Messages are persisted before and after execution', '执行前后消息都会持久化'), summary: t('Session storage keeps transcript durability and resume compatibility.', '会话存储负责转录持久化与恢复兼容性。'), files: [{ path: 'src/utils/sessionStorage.ts' }] },
      { title: t('REPL renders stream, tools, and notifications', 'REPL 渲染流式输出、工具与通知'), summary: t('The UI updates incrementally instead of waiting for the whole turn.', 'UI 以增量方式更新，而不是等待整轮结束。'), files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/cli/print.ts' }] },
    ],
  },
  {
    slug: 'tool-execution',
    title: t('Tool execution: model intent to side effect', '工具执行：从模型意图到真实副作用'),
    summary: t('Tool execution is a runtime of its own, not a tiny helper.', '工具执行本身就是一个独立运行时，而不是小辅助函数。'),
    whyItMatters: t('This is where order, streaming, permissions, hooks, and concurrency come together.', '顺序、流式处理、权限、hooks 与并发都在这里汇合。'),
    steps: [
      { title: t('Tool pool is assembled', '构建工具池'), summary: t('Built-in tools, MCP tools, and plugin capabilities are merged.', '内置工具、MCP 工具与插件能力会被合并。'), files: [{ path: 'src/tools.ts' }, { path: 'src/commands.ts' }] },
      { title: t('Calls are grouped by execution constraints', '按执行约束分组调用'), summary: t('The runtime decides what may run concurrently and what must stay serial.', '运行时会判断哪些可并发，哪些必须串行。'), files: [{ path: 'src/services/tools/toolOrchestration.ts' }] },
      { title: t('Permissions and hooks wrap execution', '权限与 hooks 包裹执行'), summary: t('Permission context and hook pipelines can allow, deny, or reshape execution.', '权限上下文与 hook 流水线可以允许、拒绝或改写执行。'), files: [{ path: 'src/utils/permissions/permissions.ts' }, { path: 'src/services/tools/toolExecution.ts' }] },
      { title: t('Streaming executor preserves order', '流式执行器保持顺序性'), summary: t('Tool progress can stream early while final ordering remains stable.', '工具进度可以提前流出，但最终顺序仍保持稳定。'), files: [{ path: 'src/services/tools/StreamingToolExecutor.ts' }] },
      { title: t('Results are normalized for transcript and UI', '结果会为转录与 UI 做标准化'), summary: t('Outputs are shaped for transcript storage and runtime notifications.', '输出会被整理为适合转录与通知系统消费的格式。'), files: [{ path: 'src/services/tools/toolExecution.ts' }, { path: 'src/utils/messages.ts' }] },
    ],
  },
  {
    slug: 'permission-resolution',
    title: t('Permission resolution: settings to runtime decision', '权限解析：从设置到运行时决策'),
    summary: t('Permission behavior emerges from many layers.', '权限行为来自多层配置与运行态共同作用。'),
    whyItMatters: t('This explains how Claude Code supports multiple autonomy levels while staying governable.', '这能解释 Claude Code 如何在支持多种自动化级别的同时保持可治理。'),
    steps: [
      { title: t('Settings layers are loaded', '加载多层设置'), summary: t('Managed, user, project, and local settings are validated and merged.', '托管设置、用户设置、项目设置与本地设置会被校验并合并。'), files: [{ path: 'src/utils/settings/settings.ts' }, { path: 'src/utils/settings/types.ts' }] },
      { title: t('CLI flags and runtime mode are applied', '应用 CLI 标志与运行模式'), summary: t('Startup mode affects what permission paths are available or blocked.', '启动模式会影响哪些权限路径可用或被禁用。'), files: [{ path: 'src/main.tsx' }, { path: 'src/utils/permissions/permissionSetup.ts' }] },
      { title: t('Tool request is classified', '工具请求被分类'), summary: t('The runtime reasons about path scope, shell danger, mode, and prompt availability.', '运行时会综合考虑路径范围、shell 风险、模式与是否可弹窗。'), files: [{ path: 'src/utils/permissions/permissions.ts' }, { path: 'src/tools/BashTool/bashPermissions.ts' }] },
      { title: t('Decision is surfaced to UI or async agents', '决策被反馈给 UI 或异步 agent'), summary: t('Interactive sessions prompt users, while async contexts use fallback behavior.', '交互式会话会弹窗，而异步场景使用专门回退逻辑。'), files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/tasks/' }] },
    ],
  },
  {
    slug: 'extension-load',
    title: t('Extension load chain: commands, skills, plugins, MCP', '扩展加载链：commands、skills、plugins、MCP'),
    summary: t('Claude Code composes many extension layers into one effective runtime.', 'Claude Code 会把多条扩展链组合为一个有效运行时。'),
    whyItMatters: t('This explains why the product supports local customization, marketplaces, and external tools in one place.', '这解释了为什么它能同时支持本地定制、市场化扩展与外部工具集成。'),
    steps: [
      { title: t('Bundled and filesystem skills are discovered', '发现内置与文件系统 skills'), summary: t('Skill loaders scan multiple roots and parse frontmatter metadata.', 'skill loader 会扫描多个根目录并解析 frontmatter 元数据。'), files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/skills/bundled/index.ts' }] },
      { title: t('Plugins are loaded and validated', '加载并校验插件'), summary: t('Plugin loader resolves built-in, marketplace, and session-level plugin capabilities.', '插件加载器会解析内置、市场与会话级插件能力。'), files: [{ path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/plugins/builtinPlugins.ts' }] },
      { title: t('MCP servers are configured and connected', '配置并连接 MCP 服务器'), summary: t('MCP configs are deduplicated, authenticated, and converted into tools and resources.', 'MCP 配置会被去重、鉴权，并转化为工具与资源。'), files: [{ path: 'src/services/mcp/config.ts' }, { path: 'src/services/mcp/client.ts' }] },
      { title: t('Commands and tools are merged', '合并命令与工具'), summary: t('Built-in and extension-provided capabilities become the live command and tool surface.', '内置能力与扩展能力会合并为最终的命令与工具面。'), files: [{ path: 'src/commands.ts' }, { path: 'src/tools.ts' }] },
    ],
  },
]

export const featureCards: FeatureCard[] = [
  {
    title: t('Claude Code is both an MCP client and an MCP server', 'Claude Code 同时是 MCP 客户端与 MCP 服务器'),
    summary: t('Claude Code consumes external MCP tools and can expose its own capabilities over MCP.', 'Claude Code 既能消费外部 MCP 工具，也能通过 MCP 对外暴露自身能力。'),
    whyDifferent: t('This moves the product from assistant-with-tools to platform-in-an-ecosystem.', '这让产品从“带工具的助手”升级为“处在生态中的平台”。'),
    tradeoffs: [t('More auth and transport complexity.', '鉴权与传输复杂度更高。'), t('Prompt-budget control becomes more important.', '对 prompt 预算控制要求更高。')],
    evidence: [{ path: 'src/services/mcp/client.ts' }, { path: 'src/entrypoints/mcp.ts' }],
  },
  {
    title: t('Remote and bridge modes go beyond a local-only CLI', 'Remote 与 bridge 模式突破了本地 CLI 边界'),
    summary: t('Remote sessions, bridge mode, and direct connect show distributed execution intent.', '远程会话、bridge 模式和直连能力说明它的设计目标并不只是本地执行。'),
    whyDifferent: t('Most coding agents assume user, model, and machine all live in one place.', '多数 coding agent 默认用户、模型与机器都在同一个会话里。'),
    tradeoffs: [t('Permission handling becomes networked.', '权限处理变成了网络化问题。'), t('State synchronization becomes harder.', '状态同步会更复杂。')],
    evidence: [{ path: 'src/bridge/bridgeMain.ts' }, { path: 'src/remote/RemoteSessionManager.ts' }, { path: 'src/server/createDirectConnectSession.ts' }],
  },
  {
    title: t('Tools run inside a dedicated orchestration layer', '工具运行在独立的编排层中'),
    summary: t('Claude Code schedules, streams, wraps, and orders tool execution deliberately.', 'Claude Code 会有意识地对工具执行进行调度、流式处理、封装与排序。'),
    whyDifferent: t('This is much stronger than a trivial sequential function-call loop.', '这明显强于简单串行函数调用循环。'),
    tradeoffs: [t('Implementation is more complex.', '实现复杂度更高。'), t('It demands richer contracts and more testing.', '需要更丰富的接口契约与测试。')],
    evidence: [{ path: 'src/services/tools/toolOrchestration.ts' }, { path: 'src/services/tools/StreamingToolExecutor.ts' }, { path: 'src/services/tools/toolExecution.ts' }],
  },
  {
    title: t('Permissions are layered and policy-aware', '权限体系是分层且策略感知的'),
    summary: t('Claude Code combines permission modes, managed settings, and tool-specific risk logic.', 'Claude Code 会结合权限模式、托管设置与工具级风险逻辑做判断。'),
    whyDifferent: t('It avoids reducing safety to one auto-approve toggle.', '它没有把安全简化为一个 auto-approve 开关。'),
    tradeoffs: [t('Contributors face more cognitive load.', '贡献者需要承担更高的理解成本。'), t('UX must explain decisions clearly.', 'UX 必须清晰解释决策差异。')],
    evidence: [{ path: 'src/utils/permissions/permissionSetup.ts' }, { path: 'src/utils/permissions/permissions.ts' }, { path: 'src/types/permissions.ts' }],
  },
  {
    title: t('Skills, plugins, MCP, and LSP form one extensibility story', 'Skills、plugins、MCP 与 LSP 构成统一扩展故事'),
    summary: t('Claude Code does not force one extension mechanism to rule them all.', 'Claude Code 并没有只押注一种扩展机制。'),
    whyDifferent: t('This creates a composable developer platform.', '这构成了一个可组合的开发者平台。'),
    tradeoffs: [t('Composition is harder to reason about.', '组合后的运行时更难推理。'), t('Loader and validation paths grow in complexity.', '加载与校验路径会更复杂。')],
    evidence: [{ path: 'src/commands.ts' }, { path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/services/mcp/config.ts' }, { path: 'src/services/lsp/' }],
  },
  {
    title: t('Session persistence is treated as a durability problem', '会话持久化被当作“耐久性问题”来设计'),
    summary: t('Transcript storage includes resume safety, subagent support, compatibility repair, and large-history handling.', '会话存储同时考虑恢复安全、subagent 支持、兼容性修复与大历史处理。'),
    whyDifferent: t('This is production engineering, not just chat logging.', '这已经是产品级工程，而不是简单聊天记录。'),
    tradeoffs: [t('Persistence rules leak into many layers.', '持久化规则会影响许多层。'), t('Backward compatibility becomes a long-term burden.', '向后兼容会成为长期负担。')],
    evidence: [{ path: 'src/utils/sessionStorage.ts' }, { path: 'src/bootstrap/state.ts' }],
  },
]

export const readingTracks: ReadingTrack[] = [
  {
    slug: 'starter',
    title: t('Starter Track', '新手路径'),
    audience: t('Developers who want the big picture first', '想先建立整体认知的开发者'),
    goal: t('Understand what launches, what renders, and where commands and tools come from.', '先搞清楚什么在启动、什么在渲染，以及命令和工具从哪里来。'),
    steps: [
      { title: t('Start at the bootstrap edge', '从启动边界开始'), files: [{ path: 'src/entrypoints/cli.tsx' }, { path: 'src/main.tsx' }], reason: t('These files explain runtime routing.', '这两份文件能解释运行时路由。') },
      { title: t('See how the app becomes visible', '看应用如何呈现'), files: [{ path: 'src/replLauncher.tsx' }, { path: 'src/screens/REPL.tsx' }], reason: t('This shows how the interactive surface is assembled.', '这能看出交互界面是如何被组装出来的。') },
      { title: t('Map commands and tools', '建立命令与工具地图'), files: [{ path: 'src/commands.ts' }, { path: 'src/tools.ts' }], reason: t('This quickly reveals the capability surface.', '这能快速看清能力面。') },
    ],
  },
  {
    slug: 'runtime',
    title: t('Runtime Track', '运行时路径'),
    audience: t('Developers who want the agentic execution chain', '想理解 agent 执行链路的开发者'),
    goal: t('Follow one prompt from input through model interaction and tool execution.', '跟着一次提示词，穿过模型交互与工具执行的全过程。'),
    steps: [
      { title: t('Normalize the turn', '先看输入标准化'), files: [{ path: 'src/utils/processUserInput/processUserInput.ts' }], reason: t('This is the bridge from UI to runtime work.', '这是从 UI 到运行时工作的桥。') },
      { title: t('Read the query loop', '再读 query 循环'), files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }], reason: t('These files explain the core conversation engine.', '这两份文件解释核心对话引擎。') },
      { title: t('Finish with tools', '最后读工具层'), files: [{ path: 'src/Tool.ts' }, { path: 'src/services/tools/toolOrchestration.ts' }, { path: 'src/services/tools/toolExecution.ts' }], reason: t('This is where model intent becomes real work.', '模型意图会在这里变成真实工作。') },
    ],
  },
  {
    slug: 'platform',
    title: t('Platform Track', '平台路径'),
    audience: t('Developers interested in extensibility, policy, and distributed capabilities', '关注扩展性、治理策略与分布式能力的开发者'),
    goal: t('Understand why Claude Code behaves like a platform instead of a narrow CLI.', '理解为什么 Claude Code 更像一个平台，而不是狭义 CLI。'),
    steps: [
      { title: t('Study permission and settings layering', '先读权限与设置分层'), files: [{ path: 'src/utils/permissions/permissionSetup.ts' }, { path: 'src/utils/permissions/permissions.ts' }, { path: 'src/utils/settings/settings.ts' }], reason: t('This explains the safety and governance story.', '这能解释其安全与治理故事。') },
      { title: t('Study skills, plugins, and MCP', '再读 skills、plugins 与 MCP'), files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/services/mcp/client.ts' }], reason: t('This shows how extensibility becomes unified.', '这能展示扩展能力如何被统一。') },
      { title: t('Study remote and bridge capabilities', '最后读 remote 与 bridge'), files: [{ path: 'src/bridge/bridgeMain.ts' }, { path: 'src/remote/RemoteSessionManager.ts' }], reason: t('These files reveal a major differentiator.', '这两份文件揭示了最强差异化能力之一。') },
    ],
  },
]

export const glossary: GlossaryTerm[] = [
  { term: t('Query loop', 'Query 循环'), definition: t('The runtime cycle that drives model requests, streamed output, tool calls, retries, and compaction.', '驱动模型请求、流式输出、工具调用、重试与压缩的运行时循环。'), whyItMatters: t('It is the true execution core.', '它是真正的执行核心。'), files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }] },
  { term: t('ToolUseContext', 'ToolUseContext'), definition: t('The rich execution context passed into tools.', '传给工具的富上下文对象。'), whyItMatters: t('It proves tools are runtime citizens.', '它证明了工具是运行时的一等公民。'), files: [{ path: 'src/Tool.ts' }] },
  { term: t('Permission mode', '权限模式'), definition: t('A runtime autonomy profile such as default, plan, acceptEdits, or bypassPermissions.', '如 default、plan、acceptEdits、bypassPermissions 等运行时自主性配置。'), whyItMatters: t('It shapes how Claude Code balances autonomy and safety.', '它决定 Claude Code 如何平衡自主性与安全。'), files: [{ path: 'src/types/permissions.ts' }, { path: 'src/utils/permissions/permissionSetup.ts' }] },
  { term: t('Skill', 'Skill'), definition: t('A packaged capability or workflow description loaded by Claude Code.', '由 Claude Code 加载的能力包或工作流描述。'), whyItMatters: t('Skills let knowledge ship alongside code.', 'skill 让知识也可以作为产品能力被交付。'), files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/skills/bundled/index.ts' }] },
  { term: t('Plugin', 'Plugin'), definition: t('A higher-level extension package that can contribute commands, skills, hooks, MCP servers, and more.', '可提供 commands、skills、hooks、MCP servers 等能力的高层扩展包。'), whyItMatters: t('Plugins widen the ecosystem surface.', 'plugin 扩大了整个生态面。'), files: [{ path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/types/plugin.ts' }] },
  { term: t('MCP', 'MCP'), definition: t('Model Context Protocol for tool/resource interoperability.', '用于工具与资源互操作的 Model Context Protocol。'), whyItMatters: t('It is a central interoperability layer in Claude Code.', '它是 Claude Code 的核心互操作层之一。'), files: [{ path: 'src/services/mcp/client.ts' }, { path: 'src/entrypoints/mcp.ts' }] },
  { term: t('Bridge mode', 'Bridge 模式'), definition: t('A remote-control mode that lets a local environment become an execution target.', '让本地环境成为远程控制执行目标的模式。'), whyItMatters: t('It shows Claude Code is more than a local prompt tool.', '它说明 Claude Code 并不只是本地提示词工具。'), files: [{ path: 'src/bridge/bridgeMain.ts' }] },
  { term: t('Session storage', '会话存储'), definition: t('The persistence layer for transcript durability, resume support, and compatibility handling.', '负责对话耐久性、恢复支持与兼容性处理的持久化层。'), whyItMatters: t('It turns short chats into durable workspaces.', '它把短聊天变成可持续工作空间。'), files: [{ path: 'src/utils/sessionStorage.ts' }] },
]

export const topFiles: TopFile[] = [
  { order: 1, path: 'src/entrypoints/cli.tsx', title: t('True bootstrap edge', '真正的启动边界'), why: t('Best first file for seeing runtime routing and fast paths.', '理解运行时路由与快速路径的最佳起点。'), layer: t('Bootstrap', '启动层'), tracks: ['starter'], readingTime: t('8-10 min', '8-10 分钟') },
  { order: 2, path: 'src/main.tsx', title: t('Main runtime entry', '主运行时入口'), why: t('Shows how full CLI mode is assembled.', '展示完整 CLI 模式如何被拼装出来。'), layer: t('Bootstrap', '启动层'), tracks: ['starter', 'runtime'], readingTime: t('15-20 min', '15-20 分钟') },
  { order: 3, path: 'src/entrypoints/init.ts', title: t('Initialization hub', '初始化枢纽'), why: t('Trust-safe env setup, telemetry, network prewarm, and shutdown logic live here.', '信任安全的环境处理、遥测、网络预热和关闭逻辑都在这里。'), layer: t('Bootstrap', '启动层'), tracks: ['starter', 'platform'], readingTime: t('12-15 min', '12-15 分钟') },
  { order: 4, path: 'src/replLauncher.tsx', title: t('Interactive handoff', '交互式启动交接'), why: t('Bridges runtime setup into the UI app.', '把运行时启动交接给 UI 应用。'), layer: t('UI', '界面层'), tracks: ['starter'], readingTime: t('5-8 min', '5-8 分钟') },
  { order: 5, path: 'src/screens/REPL.tsx', title: t('Main interactive surface', '主交互界面'), why: t('The center of the live user experience.', '这是实时用户体验的中心。'), layer: t('UI', '界面层'), tracks: ['starter', 'runtime'], readingTime: t('20-30 min', '20-30 分钟') },
  { order: 6, path: 'src/commands.ts', title: t('Command composition', '命令合成层'), why: t('Explains where slash commands really come from.', '解释斜杠命令究竟从哪里来。'), layer: t('Extensibility', '扩展层'), tracks: ['starter', 'platform'], readingTime: t('10-12 min', '10-12 分钟') },
  { order: 7, path: 'src/tools.ts', title: t('Tool registry', '工具注册表'), why: t('Maps the default tool surface and MCP merging.', '展示默认工具面与 MCP 合并方式。'), layer: t('Tool runtime', '工具运行时'), tracks: ['starter', 'runtime'], readingTime: t('10-12 min', '10-12 分钟') },
  { order: 8, path: 'src/Tool.ts', title: t('Core tool contract', '核心工具契约'), why: t('Defines the shape of tool execution context.', '定义工具执行上下文的结构。'), layer: t('Tool runtime', '工具运行时'), tracks: ['runtime'], readingTime: t('8-10 min', '8-10 分钟') },
  { order: 9, path: 'src/QueryEngine.ts', title: t('Headless engine wrapper', '无头引擎封装'), why: t('Best bridge between product usage and runtime internals.', '连接产品用法与运行时内部机制的最佳桥梁。'), layer: t('Query runtime', 'Query 运行时'), tracks: ['runtime'], readingTime: t('15-18 min', '15-18 分钟') },
  { order: 10, path: 'src/query.ts', title: t('Core query loop', '核心 query 循环'), why: t('The most important execution file in the whole app.', '全项目最重要的执行文件之一。'), layer: t('Query runtime', 'Query 运行时'), tracks: ['runtime'], readingTime: t('25-35 min', '25-35 分钟') },
  { order: 11, path: 'src/utils/processUserInput/processUserInput.ts', title: t('Input normalization', '输入标准化'), why: t('Shows how prompts, slash commands, and attachments unify.', '展示提示词、斜杠命令与附件如何统一进入运行时。'), layer: t('Input', '输入层'), tracks: ['runtime', 'starter'], readingTime: t('10-12 min', '10-12 分钟') },
  { order: 12, path: 'src/services/tools/toolOrchestration.ts', title: t('Concurrency-aware scheduling', '并发感知调度'), why: t('Key to understanding safe parallel tool execution.', '理解安全并行工具执行的关键文件。'), layer: t('Tool runtime', '工具运行时'), tracks: ['runtime'], readingTime: t('12-15 min', '12-15 分钟') },
  { order: 13, path: 'src/services/tools/StreamingToolExecutor.ts', title: t('Streaming tool executor', '流式工具执行器'), why: t('Shows how order and progress coexist.', '展示顺序性与进度流如何共存。'), layer: t('Tool runtime', '工具运行时'), tracks: ['runtime'], readingTime: t('10-12 min', '10-12 分钟') },
  { order: 14, path: 'src/services/tools/toolExecution.ts', title: t('Execution wrapper', '执行封装层'), why: t('Hooks, telemetry, and result shaping meet here.', 'hooks、遥测与结果整形都在这里汇合。'), layer: t('Tool runtime', '工具运行时'), tracks: ['runtime'], readingTime: t('12-16 min', '12-16 分钟') },
  { order: 15, path: 'src/utils/permissions/permissionSetup.ts', title: t('Permission context builder', '权限上下文构建器'), why: t('Shows how settings and flags become runtime permission state.', '展示设置与 CLI 标志如何变成运行时权限状态。'), layer: t('Policy', '策略层'), tracks: ['platform', 'runtime'], readingTime: t('15-20 min', '15-20 分钟') },
  { order: 16, path: 'src/utils/permissions/permissions.ts', title: t('Permission decision engine', '权限决策引擎'), why: t('Best file for understanding safety behavior.', '理解安全决策逻辑的最佳文件。'), layer: t('Policy', '策略层'), tracks: ['platform', 'runtime'], readingTime: t('20-25 min', '20-25 分钟') },
  { order: 17, path: 'src/utils/auth.ts', title: t('Multi-mode auth layer', '多模式鉴权层'), why: t('Shows how many auth paths Claude Code actually supports.', '展示 Claude Code 实际支持的鉴权路径之多。'), layer: t('Auth', '鉴权层'), tracks: ['platform'], readingTime: t('20-25 min', '20-25 分钟') },
  { order: 18, path: 'src/utils/config.ts', title: t('Config persistence core', '配置持久化核心'), why: t('Global and project config meet here.', '全局配置与项目配置在这里汇合。'), layer: t('Config', '配置层'), tracks: ['platform'], readingTime: t('18-22 min', '18-22 分钟') },
  { order: 19, path: 'src/utils/sessionStorage.ts', title: t('Durable transcript storage', '耐久会话存储'), why: t('Excellent case study in transcript durability.', '是学习对话耐久化设计的优秀案例。'), layer: t('Persistence', '持久化层'), tracks: ['runtime', 'platform'], readingTime: t('18-24 min', '18-24 分钟') },
  { order: 20, path: 'src/services/mcp/client.ts', title: t('MCP client implementation', 'MCP 客户端实现'), why: t('One of the most important files for extensibility and interoperability.', '研究扩展性与互操作性的关键文件。'), layer: t('MCP', 'MCP 层'), tracks: ['platform'], readingTime: t('30-40 min', '30-40 分钟') },
]

export function getArchitectureDiagramViews(): DiagramView[] {
  return [
    {
      slug: 'runtime-map',
      title: t('Runtime map', '运行时总图'),
      description: t('The primary runtime stack from bootstrap through query and tools.', '从启动到 query 再到工具层的主结构。'),
      imageSrc: '/diagrams/architecture-runtime.svg',
      anchors: [
        { title: t('Bootstrap edge', '启动边界'), summary: t('Start with the CLI bootstrap to understand mode routing and fast paths.', '从 CLI 启动边界入手，理解模式路由与快速路径。'), files: [{ path: 'src/entrypoints/cli.tsx' }, { path: 'src/main.tsx' }] },
        { title: t('Turn entry', '回合入口'), summary: t('Input normalization is the transition from user intent to runtime work.', '输入标准化是从用户意图进入运行时工作的关键过渡。'), files: [{ path: 'src/utils/processUserInput/processUserInput.ts' }] },
        { title: t('Core runtime', '核心运行时'), summary: t('The query loop and tool runtime are the system center of gravity.', 'query 循环与工具运行时是整个系统的重心。'), files: [{ path: 'src/query.ts' }, { path: 'src/services/tools/toolOrchestration.ts' }] },
      ],
    },
    {
      slug: 'extension-map',
      title: t('Extension map', '扩展能力图'),
      description: t('How commands, skills, plugins, MCP, and LSP converge into one runtime.', 'commands、skills、plugins、MCP、LSP 如何汇入同一运行时。'),
      imageSrc: '/diagrams/architecture-extension.svg',
      anchors: [
        { title: t('Command composition', '命令合成'), summary: t('Commands are not only built-ins; they are assembled from multiple extension channels.', '命令并不只有内置来源，而是由多条扩展链共同组装。'), files: [{ path: 'src/commands.ts' }] },
        { title: t('Plugin loading', '插件加载'), summary: t('Plugins widen the runtime by contributing commands, skills, hooks, MCP, and more.', '插件通过 commands、skills、hooks、MCP 等方式扩展运行时。'), files: [{ path: 'src/utils/plugins/pluginLoader.ts' }] },
        { title: t('MCP bridge', 'MCP 桥接层'), summary: t('MCP config and client logic translate external tool ecosystems into native runtime capabilities.', 'MCP 配置与客户端逻辑把外部工具生态翻译成运行时能力。'), files: [{ path: 'src/services/mcp/config.ts' }, { path: 'src/services/mcp/client.ts' }] },
      ],
    },
    {
      slug: 'safety-map',
      title: t('Safety & governance', '安全与治理图'),
      description: t('How settings, policy, permissions, and auth wrap autonomous behavior.', '设置、策略、权限与鉴权如何包裹自动化能力。'),
      imageSrc: '/diagrams/architecture-safety.svg',
      anchors: [
        { title: t('Settings layering', '设置分层'), summary: t('Managed policy, project config, and CLI flags are merged before decisions are made.', '托管策略、项目配置与 CLI 标志会在决策前被统一合并。'), files: [{ path: 'src/utils/settings/settings.ts' }, { path: 'src/utils/permissions/permissionSetup.ts' }] },
        { title: t('Decision engine', '决策引擎'), summary: t('Permission behavior is determined by a dedicated engine rather than scattered checks.', '权限行为由专门引擎决定，而不是分散的 if 判断。'), files: [{ path: 'src/utils/permissions/permissions.ts' }] },
        { title: t('Auth influence', '鉴权影响面'), summary: t('Auth mode and provider state influence what operations are viable at runtime.', '鉴权模式与 provider 状态会影响运行时可执行的能力。'), files: [{ path: 'src/utils/auth.ts' }] },
      ],
    },
    {
      slug: 'remote-map',
      title: t('Remote & bridge', '远程与桥接图'),
      description: t('The relationship between local runtime, remote sessions, and bridge control paths.', '本地运行时、远程会话和 bridge 控制链的关系。'),
      imageSrc: '/diagrams/architecture-remote.svg',
      anchors: [
        { title: t('Session manager', '会话管理器'), summary: t('Remote session state is coordinated through a dedicated manager and transport layer.', '远程会话状态通过专门的管理器与传输层协调。'), files: [{ path: 'src/remote/RemoteSessionManager.ts' }, { path: 'src/remote/SessionsWebSocket.ts' }] },
        { title: t('Bridge control path', '桥接控制链'), summary: t('Bridge mode exposes the local environment as a remotely controlled execution target.', 'bridge 模式把本地环境暴露为一个可远程控制的执行目标。'), files: [{ path: 'src/bridge/bridgeMain.ts' }, { path: 'src/server/createDirectConnectSession.ts' }] },
        { title: t('Team-state side channel', '团队状态旁路'), summary: t('Team memory sync shows that remote collaboration is a first-class concern.', 'team memory sync 说明团队协作状态也是一等关注点。'), files: [{ path: 'src/services/teamMemorySync/index.ts' }] },
      ],
    },
  ]
}

export function getFlowDiagramViews(): DiagramView[] {
  return [
    {
      slug: 'turn-sequence',
      title: t('Interactive turn sequence', '交互回合时序图'),
      description: t('How one user turn moves through REPL, query, tools, and storage.', '一次用户输入如何穿过 REPL、query、tool、storage。'),
      imageSrc: '/diagrams/flow-turn.svg',
      anchors: [
        { title: t('Prompt ingestion', '提示词进入系统'), summary: t('The REPL and input processor turn free-form user actions into structured runtime work.', 'REPL 与输入处理层会把自由形式的用户动作变成结构化运行时任务。'), files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/utils/processUserInput/processUserInput.ts' }] },
        { title: t('Query phase', 'Query 阶段'), summary: t('The query loop coordinates model streaming, tool emission, and transcript updates.', 'query 循环统一协调模型流式输出、工具产生与转录更新。'), files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }] },
        { title: t('Persistence handoff', '持久化交接'), summary: t('Transcript durability is a visible part of the normal turn lifecycle.', '转录持久化是一次正常回合生命周期中的显式组成部分。'), files: [{ path: 'src/utils/sessionStorage.ts' }] },
      ],
    },
    {
      slug: 'tool-scheduling',
      title: t('Tool scheduling', '工具调度图'),
      description: t('How tool calls are partitioned into concurrency-safe and serial batches.', '工具调用如何被分成可并发与必须串行的批次。'),
      imageSrc: '/diagrams/flow-tools.svg',
      anchors: [
        { title: t('Scheduling gate', '调度门'), summary: t('Claude Code reasons explicitly about whether tools can run together.', 'Claude Code 会显式判断工具是否可以并行运行。'), files: [{ path: 'src/services/tools/toolOrchestration.ts' }] },
        { title: t('Streaming executor', '流式执行器'), summary: t('Streaming execution keeps progress responsive without losing order.', '流式执行器在保持响应性的同时避免顺序失控。'), files: [{ path: 'src/services/tools/StreamingToolExecutor.ts' }] },
        { title: t('Execution wrapper', '执行封装'), summary: t('Hooks, telemetry, and result shaping are all part of the final tool boundary.', 'hooks、遥测与结果整理都属于最终的工具边界。'), files: [{ path: 'src/services/tools/toolExecution.ts' }] },
      ],
    },
    {
      slug: 'permission-resolution',
      title: t('Permission resolution', '权限决策图'),
      description: t('How settings, mode, and tool requests converge into a permission decision.', '设置、模式和工具请求如何汇合成最终权限决策。'),
      imageSrc: '/diagrams/flow-permissions.svg',
      anchors: [
        { title: t('Settings merge', '设置合并'), summary: t('Managed, project, and local settings are merged before runtime behavior is chosen.', '托管、项目与本地设置会先合并，再决定运行时行为。'), files: [{ path: 'src/utils/settings/settings.ts' }, { path: 'src/utils/permissions/permissionSetup.ts' }] },
        { title: t('Tool-risk classification', '工具风险分类'), summary: t('Permissions depend not only on mode, but also on what kind of tool operation is being attempted.', '权限不仅取决于模式，也取决于工具操作本身的风险类型。'), files: [{ path: 'src/utils/permissions/permissions.ts' }, { path: 'src/tools/BashTool/bashPermissions.ts' }] },
      ],
    },
    {
      slug: 'remote-session',
      title: t('Remote session path', '远程会话链路图'),
      description: t('How remote control requests enter the local execution environment.', '远程控制请求如何进入本地执行环境。'),
      imageSrc: '/diagrams/flow-remote.svg',
      anchors: [
        { title: t('Session transport', '会话传输层'), summary: t('Remote session state travels through a dedicated session manager and websocket transport.', '远程会话状态通过专门的 session manager 与 websocket transport 传输。'), files: [{ path: 'src/remote/RemoteSessionManager.ts' }, { path: 'src/remote/SessionsWebSocket.ts' }] },
        { title: t('Execution bridge', '执行桥'), summary: t('Bridge mode turns a local environment into something a remote surface can control.', 'bridge 模式把本地环境变成可被远程界面控制的对象。'), files: [{ path: 'src/bridge/bridgeMain.ts' }] },
      ],
    },
  ]
}

export const searchIndex = [
  ...moduleCards.map(item => ({ title: item.title, href: '/modules', summary: item.summary, tags: ['module', item.slug] })),
  ...flowCards.map(item => ({ title: item.title, href: '/flows', summary: item.summary, tags: ['flow', item.slug] })),
  ...featureCards.map(item => ({ title: item.title, href: '/features', summary: item.summary, tags: ['feature'] })),
  ...readingTracks.map(item => ({ title: item.title, href: '/reading-paths', summary: item.goal, tags: ['path', item.slug] })),
  ...glossary.map(item => ({ title: item.term, href: '/glossary', summary: item.definition, tags: ['glossary'] })),
  ...topFiles.map(item => ({ title: item.title, href: '/top-files', summary: item.why, tags: ['file'] })),
]
