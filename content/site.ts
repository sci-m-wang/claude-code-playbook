import type {
  FeatureCard,
  FlowCard,
  GlossaryTerm,
  ModuleCard,
  ReadingTrack,
} from '@/content/types'

export const siteMeta = {
  title: 'Claude Code Playbook',
  tagline:
    'An interactive learning site built from real Claude Code source analysis.',
  description:
    'Study Claude Code through architecture maps, module breakdowns, execution flows, source reading paths, and feature analysis grounded in real code.',
}

export const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/modules', label: 'Modules' },
  { href: '/flows', label: 'Execution Flows' },
  { href: '/features', label: 'Notable Features' },
  { href: '/reading-paths', label: 'Reading Paths' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/about', label: 'Analysis Basis' },
]

export const architectureLayers = [
  {
    title: 'Bootstrap & Runtime Modes',
    summary:
      'Fast-path entrypoints decide whether Claude Code behaves like a full interactive CLI, a headless engine, a bridge process, or an MCP server.',
    files: ['src/entrypoints/cli.tsx', 'src/main.tsx', 'src/entrypoints/init.ts'],
  },
  {
    title: 'Interactive Surface',
    summary:
      'The REPL and supporting UI state render conversation history, task status, tool output, permissions, and remote controls.',
    files: ['src/replLauncher.tsx', 'src/screens/REPL.tsx', 'src/state/AppStateStore.ts'],
  },
  {
    title: 'Query & Tool Runtime',
    summary:
      'User input is normalized, streamed through query orchestration, and converted into ordered, concurrency-aware tool execution.',
    files: ['src/query.ts', 'src/QueryEngine.ts', 'src/services/tools/toolOrchestration.ts'],
  },
  {
    title: 'Extensibility Layer',
    summary:
      'Commands, skills, plugins, MCP servers, and LSP integrations are all loaded into the same runtime surface and filtered by policy.',
    files: ['src/commands.ts', 'src/tools.ts', 'src/utils/plugins/pluginLoader.ts', 'src/services/mcp/client.ts'],
  },
  {
    title: 'Policy, Auth & Persistence',
    summary:
      'A deep settings and permission system governs what the runtime is allowed to do, how it authenticates, and how sessions resume safely.',
    files: ['src/utils/permissions/permissions.ts', 'src/utils/auth.ts', 'src/utils/config.ts', 'src/utils/sessionStorage.ts'],
  },
  {
    title: 'Remote & Team Capabilities',
    summary:
      'Claude Code can act as a remote-control target, manage remote sessions, sync team memory, and expose itself over MCP.',
    files: ['src/bridge/bridgeMain.ts', 'src/remote/RemoteSessionManager.ts', 'src/services/teamMemorySync/index.ts', 'src/entrypoints/mcp.ts'],
  },
]

export const moduleCards: ModuleCard[] = [
  {
    slug: 'bootstrap-runtime',
    title: 'Bootstrap & Runtime Routing',
    summary:
      'Claude Code starts as a mode router, not a single-path CLI. It selects between fast command paths, full REPL startup, bridge mode, daemon mode, and MCP mode.',
    role:
      'Keeps startup responsive while supporting many execution personalities inside one product.',
    inputs: ['CLI args', 'Environment variables', 'Settings', 'Trust and policy state'],
    outputs: ['Selected runtime path', 'Initialized global state', 'Rendered REPL or headless loop'],
    learningValue: [
      'Shows how a mature CLI avoids paying full startup cost for every invocation.',
      'Demonstrates layered bootstrap design with trust-safe env handling.',
    ],
    firstRead: [
      { path: 'src/entrypoints/cli.tsx' },
      { path: 'src/main.tsx' },
    ],
    keyFiles: [
      { path: 'src/entrypoints/init.ts', note: 'Central initialization and shutdown wiring.' },
      { path: 'src/setup.ts', note: 'Startup setup, prewarming, and session-specific wiring.' },
    ],
  },
  {
    slug: 'repl-ui',
    title: 'REPL & App State',
    summary:
      'The interactive surface is a stateful terminal app that merges messages, task updates, MCP status, permissions, and tool progress into one operator console.',
    role: 'Presents Claude Code as a controllable workstation rather than a plain prompt box.',
    inputs: ['User keystrokes', 'Queued commands', 'Tool events', 'Remote events', 'Task notifications'],
    outputs: ['Rendered transcript', 'Interactive prompts', 'Permission dialogs', 'Task progress UI'],
    learningValue: [
      'Shows how UI state and agent runtime state are separated but coordinated.',
      'Good case study in terminal-first product design.',
    ],
    firstRead: [
      { path: 'src/replLauncher.tsx' },
      { path: 'src/screens/REPL.tsx' },
    ],
    keyFiles: [
      { path: 'src/state/AppStateStore.ts', note: 'Interactive runtime state container.' },
      { path: 'src/components/' , note: 'Permission prompts, messages, and tool result presentation.' },
    ],
  },
  {
    slug: 'query-engine',
    title: 'Query Engine & Turn Processing',
    summary:
      'A user turn becomes normalized input, model calls, streamed events, tool dispatch, compaction decisions, and persisted transcript updates.',
    role: 'Owns the core conversational execution loop.',
    inputs: ['Prompt text', 'Attachments', 'Slash commands', 'Conversation state', 'Tool registry'],
    outputs: ['Assistant stream', 'Tool calls', 'Updated transcript', 'Retry and compaction decisions'],
    learningValue: [
      'Shows the actual center of gravity in an agentic coding tool.',
      'Highlights separation between headless orchestration and UI rendering.',
    ],
    firstRead: [
      { path: 'src/utils/processUserInput/processUserInput.ts' },
      { path: 'src/query.ts' },
    ],
    keyFiles: [
      { path: 'src/QueryEngine.ts', note: 'Headless and SDK-friendly wrapper around query().' },
      { path: 'src/query/config.ts', note: 'Snapshots immutable per-turn config.' },
    ],
  },
  {
    slug: 'tool-runtime',
    title: 'Tool Runtime',
    summary:
      'Tools are first-class runtime actors with rich execution context, hooks, telemetry, concurrency control, and permission mediation.',
    role: 'Turns model intent into safe, ordered side effects.',
    inputs: ['Tool use blocks', 'Permission context', 'App state', 'MCP clients', 'Session metadata'],
    outputs: ['Tool results', 'Notifications', 'Persisted artifacts', 'Follow-up messages'],
    learningValue: [
      'Illustrates a more advanced tool runtime than the typical sequential tool-call loop.',
      'Useful for understanding how to design concurrency without losing determinism.',
    ],
    firstRead: [
      { path: 'src/Tool.ts' },
      { path: 'src/tools.ts' },
    ],
    keyFiles: [
      { path: 'src/services/tools/toolOrchestration.ts', note: 'Concurrency-safe scheduling.' },
      { path: 'src/services/tools/StreamingToolExecutor.ts', note: 'Streaming execution and sibling aborts.' },
      { path: 'src/services/tools/toolExecution.ts', note: 'Hooks, telemetry, result shaping.' },
    ],
  },
  {
    slug: 'permissions-policy',
    title: 'Permissions, Settings & Policy',
    summary:
      'Claude Code applies layered policy from settings, CLI flags, project config, managed policy, and runtime mode to decide what is allowed.',
    role: 'Defines the safety boundary around autonomous behavior.',
    inputs: ['User settings', 'Managed settings', 'CLI flags', 'Session mode', 'Tool request metadata'],
    outputs: ['Permission mode', 'Ask/allow/deny decisions', 'Tool-specific constraints'],
    learningValue: [
      'Strong example of policy composition instead of scattered conditionals.',
      'Important for understanding enterprise-ready AI tooling.',
    ],
    firstRead: [
      { path: 'src/utils/permissions/permissionSetup.ts' },
      { path: 'src/utils/permissions/permissions.ts' },
    ],
    keyFiles: [
      { path: 'src/utils/settings/settings.ts', note: 'Layered settings loading and validation.' },
      { path: 'src/types/permissions.ts', note: 'Permission modes and shared types.' },
    ],
  },
  {
    slug: 'auth-config',
    title: 'Auth & Configuration Persistence',
    summary:
      'Authentication spans API key, Claude.ai OAuth, helper-based auth, cloud-provider auth, and remote-managed contexts; config persists both global and project state.',
    role: 'Makes the product usable across local, enterprise, and cloud-provider environments.',
    inputs: ['OAuth tokens', 'API keys', 'Helpers', 'Project trust state', 'Provider-specific env vars'],
    outputs: ['Provider-ready credentials', 'Config state', 'Project trust and cache state'],
    learningValue: [
      'Good case study in supporting many auth paths without collapsing everything into env vars.',
      'Shows how persistence and auth often co-evolve in real products.',
    ],
    firstRead: [
      { path: 'src/utils/auth.ts' },
      { path: 'src/utils/config.ts' },
    ],
    keyFiles: [
      { path: 'src/bootstrap/state.ts', note: 'Global process/session state.' },
      { path: 'src/utils/sessionStorage.ts', note: 'Transcript persistence and resume safety.' },
    ],
  },
  {
    slug: 'skills-plugins-mcp',
    title: 'Skills, Plugins & MCP',
    summary:
      'Extensibility is not bolted on. Built-in commands, skills, plugins, MCP servers, and even MCP-provided skills are merged into the active runtime.',
    role: 'Expands Claude Code from a fixed product into a programmable platform.',
    inputs: ['Bundled skills', 'Filesystem skill dirs', 'Plugin manifests', 'MCP configs', 'Marketplace state'],
    outputs: ['Effective command set', 'Effective tool pool', 'Loaded MCP resources', 'Plugin-provided capabilities'],
    learningValue: [
      'Demonstrates how multiple extension mechanisms can share one runtime.',
      'Explains why Claude Code feels broader than a single-agent CLI.',
    ],
    firstRead: [
      { path: 'src/commands.ts' },
      { path: 'src/skills/loadSkillsDir.ts' },
    ],
    keyFiles: [
      { path: 'src/utils/plugins/pluginLoader.ts', note: 'Plugin loading, validation, and installation paths.' },
      { path: 'src/services/mcp/client.ts', note: 'MCP client implementation and auth/session handling.' },
      { path: 'src/services/mcp/config.ts', note: 'MCP config loading and deduplication.' },
    ],
  },
  {
    slug: 'remote-bridge',
    title: 'Remote, Bridge & Direct Connect',
    summary:
      'Claude Code can manage remote sessions, publish local environments for remote control, and create direct-connect sessions rather than staying local-only.',
    role: 'Extends the coding assistant beyond the single terminal that launched it.',
    inputs: ['Remote session identifiers', 'WebSocket events', 'Direct connect config', 'Remote permission responses'],
    outputs: ['Remote UI updates', 'Permission bridge responses', 'Bridge lifecycle events'],
    learningValue: [
      'This is one of the clearest differentiators from basic AI coding tools.',
      'Shows how local-first tooling can evolve into a distributed system.',
    ],
    firstRead: [
      { path: 'src/remote/RemoteSessionManager.ts' },
      { path: 'src/bridge/bridgeMain.ts' },
    ],
    keyFiles: [
      { path: 'src/remote/SessionsWebSocket.ts', note: 'Remote session event transport.' },
      { path: 'src/server/createDirectConnectSession.ts', note: 'Direct-connect session creation path.' },
    ],
  },
]

export const flowCards: FlowCard[] = [
  {
    slug: 'interactive-turn',
    title: 'Interactive Turn: input to streamed answer',
    summary:
      'The standard learning path for understanding Claude Code: how a prompt becomes a live conversation turn.',
    whyItMatters:
      'This flow ties together REPL state, user input processing, query orchestration, transcript persistence, and rendering.',
    steps: [
      {
        title: 'REPL captures prompt and queued commands',
        summary:
          'The UI collects prompt text, attachments, and queued command metadata before starting a turn.',
        files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/components/PromptInput/' }],
      },
      {
        title: 'Input is normalized and hook-aware',
        summary:
          'Plain text, slash commands, attachments, and remotely-originated commands all go through one normalization layer.',
        files: [{ path: 'src/utils/processUserInput/processUserInput.ts' }],
      },
      {
        title: 'Query loop drives model and tool phases',
        summary:
          'The runtime streams model output, reacts to tool_use blocks, manages retries, and decides when compaction is needed.',
        files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }],
      },
      {
        title: 'Messages are persisted before and after execution',
        summary:
          'Session storage keeps durable transcript state and handles resume compatibility.',
        files: [{ path: 'src/utils/sessionStorage.ts' }],
      },
      {
        title: 'REPL renders stream, tools, and notifications',
        summary:
          'The UI updates incrementally instead of waiting for a full turn to finish.',
        files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/cli/print.ts' }],
      },
    ],
  },
  {
    slug: 'tool-execution',
    title: 'Tool execution: model intent to side effect',
    summary:
      'Claude Code treats tool execution as a runtime of its own, with hooks, permissions, concurrency, and output shaping.',
    whyItMatters:
      'This is where many coding assistants become fragile. Claude Code invests heavily in order, streaming, and safety.',
    steps: [
      {
        title: 'Tool pool is assembled',
        summary:
          'Built-in tools, MCP tools, plugin capabilities, and availability rules are merged into the active pool.',
        files: [{ path: 'src/tools.ts' }, { path: 'src/commands.ts' }],
      },
      {
        title: 'Tool calls are grouped by execution constraints',
        summary:
          'The runtime decides which calls may run concurrently and which must remain serial.',
        files: [{ path: 'src/services/tools/toolOrchestration.ts' }],
      },
      {
        title: 'Permissions and hooks wrap execution',
        summary:
          'Permission context and hook pipelines can allow, deny, or reshape execution.',
        files: [{ path: 'src/utils/permissions/permissions.ts' }, { path: 'src/services/tools/toolExecution.ts' }],
      },
      {
        title: 'Streaming executor preserves order',
        summary:
          'Streaming tool execution enables early progress while keeping final event ordering stable.',
        files: [{ path: 'src/services/tools/StreamingToolExecutor.ts' }],
      },
      {
        title: 'Results are normalized for transcript and UI',
        summary:
          'Tool output is shaped for persistence, task notifications, and the conversation stream.',
        files: [{ path: 'src/services/tools/toolExecution.ts' }, { path: 'src/utils/messages.ts' }],
      },
    ],
  },
  {
    slug: 'permission-resolution',
    title: 'Permission resolution: settings to runtime decision',
    summary:
      'Permission behavior emerges from layered config, not from one global flag.',
    whyItMatters:
      'This flow explains why Claude Code can support default, plan, accept-edits, bypass, and auto-like behaviors while remaining policy-aware.',
    steps: [
      {
        title: 'Settings layers are loaded',
        summary:
          'Managed, user, project, and local settings are validated and merged.',
        files: [{ path: 'src/utils/settings/settings.ts' }, { path: 'src/utils/settings/types.ts' }],
      },
      {
        title: 'CLI flags and runtime mode are applied',
        summary:
          'Startup mode affects what permission paths are available or blocked.',
        files: [{ path: 'src/main.tsx' }, { path: 'src/utils/permissions/permissionSetup.ts' }],
      },
      {
        title: 'Tool request is classified',
        summary:
          'The runtime reasons about path scope, shell danger, mode, and prompt availability.',
        files: [{ path: 'src/utils/permissions/permissions.ts' }, { path: 'src/tools/BashTool/bashPermissions.ts' }],
      },
      {
        title: 'Decision is surfaced to UI or async agents',
        summary:
          'Interactive sessions may prompt, while headless or async-agent contexts have specialized fallback behavior.',
        files: [{ path: 'src/screens/REPL.tsx' }, { path: 'src/tasks/' }],
      },
    ],
  },
  {
    slug: 'extension-load',
    title: 'Extension load chain: commands, skills, plugins, MCP',
    summary:
      'Claude Code composes many extension layers into one effective runtime.',
    whyItMatters:
      'Understanding this flow helps explain why the product supports local customization, marketplaces, external tools, and MCP-backed skill expansion.',
    steps: [
      {
        title: 'Bundled and filesystem skills are discovered',
        summary:
          'Skill loaders scan multiple roots and parse frontmatter-driven metadata.',
        files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/skills/bundled/index.ts' }],
      },
      {
        title: 'Plugins are loaded and validated',
        summary:
          'Plugin loader resolves built-in, marketplace, and session-level plugin capabilities.',
        files: [{ path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/plugins/builtinPlugins.ts' }],
      },
      {
        title: 'MCP servers are configured and connected',
        summary:
          'MCP configs are deduplicated, authenticated, and converted into tools/resources.',
        files: [{ path: 'src/services/mcp/config.ts' }, { path: 'src/services/mcp/client.ts' }],
      },
      {
        title: 'Commands and tools are merged',
        summary:
          'Built-in and extension-provided capabilities are assembled into the live command and tool surface.',
        files: [{ path: 'src/commands.ts' }, { path: 'src/tools.ts' }],
      },
    ],
  },
]

export const featureCards: FeatureCard[] = [
  {
    title: 'Claude Code is both an MCP client and an MCP server',
    summary:
      'Most AI coding tools integrate external tools only as consumers. Claude Code also exposes itself over MCP, turning the product into an interoperable runtime participant.',
    whyDifferent:
      'This shifts the architecture from “assistant with tools” to “tool platform inside a wider ecosystem.”',
    tradeoffs: [
      'Raises complexity around auth, transport variants, and session lifecycle.',
      'Demands careful prompt-budget control for tool descriptions and resources.',
    ],
    evidence: [{ path: 'src/services/mcp/client.ts' }, { path: 'src/entrypoints/mcp.ts' }],
  },
  {
    title: 'Remote and bridge modes push the product beyond a local-only CLI',
    summary:
      'Remote session management, bridge mode, and direct-connect flows show that Claude Code is designed as a distributed execution surface, not just a local terminal helper.',
    whyDifferent:
      'Typical coding agents assume the user and machine sit in the same session. Claude Code can mediate across boundaries.',
    tradeoffs: [
      'Introduces networked permission flows and state synchronization complexity.',
      'Requires remote-safe command, auth, and transcript handling.',
    ],
    evidence: [{ path: 'src/bridge/bridgeMain.ts' }, { path: 'src/remote/RemoteSessionManager.ts' }, { path: 'src/server/createDirectConnectSession.ts' }],
  },
  {
    title: 'Tools run inside a dedicated orchestration layer, not a trivial loop',
    summary:
      'Claude Code classifies tool calls by concurrency safety, streams tool progress, preserves ordering, and wraps execution with hooks, permissions, and telemetry.',
    whyDifferent:
      'This is a strong example of treating tool execution as a runtime system.',
    tradeoffs: [
      'Increases implementation complexity and testing burden.',
      'Requires richer tool contracts and stronger state management.',
    ],
    evidence: [{ path: 'src/services/tools/toolOrchestration.ts' }, { path: 'src/services/tools/StreamingToolExecutor.ts' }, { path: 'src/services/tools/toolExecution.ts' }],
  },
  {
    title: 'Permissions are mode- and policy-aware',
    summary:
      'Claude Code supports multiple permission modes and combines them with managed settings, project config, and tool-specific risk logic.',
    whyDifferent:
      'Many tools expose a single “auto approve” switch. Claude Code implements a layered safety model instead.',
    tradeoffs: [
      'Adds cognitive complexity for contributors.',
      'Requires consistent UX to explain why decisions differ by mode and context.',
    ],
    evidence: [{ path: 'src/utils/permissions/permissionSetup.ts' }, { path: 'src/utils/permissions/permissions.ts' }, { path: 'src/types/permissions.ts' }],
  },
  {
    title: 'Skills, plugins, MCP, and LSP live in one extensibility story',
    summary:
      'The product supports local skills, plugin-distributed commands and hooks, MCP servers, and language tooling without treating any one of them as the only extension path.',
    whyDifferent:
      'This creates a composable developer platform, not a one-off agent.',
    tradeoffs: [
      'Runtime composition becomes harder to reason about.',
      'Loader and validation code must defend against conflicts and partial failures.',
    ],
    evidence: [{ path: 'src/commands.ts' }, { path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/services/mcp/config.ts' }, { path: 'src/services/lsp/' }],
  },
  {
    title: 'Session persistence is treated as a durability problem',
    summary:
      'Transcript handling includes resume safety, subagent storage, compatibility repair, and large-history management.',
    whyDifferent:
      'This is a production concern often underbuilt in AI coding tools.',
    tradeoffs: [
      'Persistence rules leak into many runtime behaviors.',
      'Backward compatibility becomes a long-lived maintenance burden.',
    ],
    evidence: [{ path: 'src/utils/sessionStorage.ts' }, { path: 'src/bootstrap/state.ts' }],
  },
]

export const readingTracks: ReadingTrack[] = [
  {
    slug: 'starter',
    title: 'Starter Track',
    audience: 'Developers who want the big picture first',
    goal: 'Understand what launches, what renders, and where commands and tools come from.',
    steps: [
      {
        title: 'Start at the bootstrap edge',
        files: [{ path: 'src/entrypoints/cli.tsx' }, { path: 'src/main.tsx' }],
        reason: 'These files explain runtime routing and why Claude Code is more than one execution path.',
      },
      {
        title: 'See how the app becomes visible',
        files: [{ path: 'src/replLauncher.tsx' }, { path: 'src/screens/REPL.tsx' }],
        reason: 'This shows how the interactive surface is assembled and what kinds of state it needs.',
      },
      {
        title: 'Map commands and tools',
        files: [{ path: 'src/commands.ts' }, { path: 'src/tools.ts' }],
        reason: 'You will quickly understand what the product can do and how capabilities are merged.',
      },
    ],
  },
  {
    slug: 'runtime',
    title: 'Runtime Track',
    audience: 'Developers who want to understand the agentic execution chain',
    goal: 'Follow a prompt from user input through model interaction and tool execution.',
    steps: [
      {
        title: 'Normalize the turn',
        files: [{ path: 'src/utils/processUserInput/processUserInput.ts' }],
        reason: 'This is the bridge from UI input to structured runtime work.',
      },
      {
        title: 'Read the query loop',
        files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }],
        reason: 'These files explain the core conversation engine and headless reuse path.',
      },
      {
        title: 'Finish with tools',
        files: [{ path: 'src/Tool.ts' }, { path: 'src/services/tools/toolOrchestration.ts' }, { path: 'src/services/tools/toolExecution.ts' }],
        reason: 'This is where model intent becomes real work.',
      },
    ],
  },
  {
    slug: 'platform',
    title: 'Platform Track',
    audience: 'Developers interested in extensibility, policy, and distributed capabilities',
    goal: 'Understand why Claude Code behaves like a platform rather than a narrow CLI.',
    steps: [
      {
        title: 'Study permission and settings layering',
        files: [{ path: 'src/utils/permissions/permissionSetup.ts' }, { path: 'src/utils/permissions/permissions.ts' }, { path: 'src/utils/settings/settings.ts' }],
        reason: 'This explains the safety model and enterprise readiness story.',
      },
      {
        title: 'Study skills, plugins, and MCP',
        files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/services/mcp/client.ts' }],
        reason: 'This shows how extensibility is unified across many mechanisms.',
      },
      {
        title: 'Study remote and bridge capabilities',
        files: [{ path: 'src/bridge/bridgeMain.ts' }, { path: 'src/remote/RemoteSessionManager.ts' }],
        reason: 'These files reveal one of the product’s biggest differentiators.',
      },
    ],
  },
]

export const glossary: GlossaryTerm[] = [
  {
    term: 'Query loop',
    definition:
      'The runtime cycle that sends model requests, handles streamed output, decides when to run tools, and manages retries or compaction.',
    whyItMatters: 'It is the real execution core of the product.',
    files: [{ path: 'src/query.ts' }, { path: 'src/QueryEngine.ts' }],
  },
  {
    term: 'ToolUseContext',
    definition:
      'The rich execution context passed to tools, including app state, permissions, MCP state, history, notifications, and more.',
    whyItMatters: 'It shows that tools are runtime citizens, not thin wrappers.',
    files: [{ path: 'src/Tool.ts' }],
  },
  {
    term: 'Permission mode',
    definition:
      'A runtime behavior profile such as default, acceptEdits, plan, bypassPermissions, or dontAsk that influences how tool decisions are made.',
    whyItMatters: 'It is central to Claude Code’s autonomy and safety boundary.',
    files: [{ path: 'src/types/permissions.ts' }, { path: 'src/utils/permissions/permissionSetup.ts' }],
  },
  {
    term: 'Skill',
    definition:
      'A packaged capability or workflow description that Claude Code can load from bundled or filesystem sources.',
    whyItMatters: 'Skills let the product ship reusable knowledge alongside code.',
    files: [{ path: 'src/skills/loadSkillsDir.ts' }, { path: 'src/skills/bundled/index.ts' }],
  },
  {
    term: 'Plugin',
    definition:
      'A higher-level extension package that can contribute commands, skills, hooks, MCP servers, and more.',
    whyItMatters: 'Plugins widen the product from app to ecosystem.',
    files: [{ path: 'src/utils/plugins/pluginLoader.ts' }, { path: 'src/types/plugin.ts' }],
  },
  {
    term: 'MCP',
    definition:
      'Model Context Protocol, used here for tool/resource integration and also as a serving surface when Claude Code exposes itself as an MCP server.',
    whyItMatters: 'It is a major interoperability layer inside Claude Code.',
    files: [{ path: 'src/services/mcp/client.ts' }, { path: 'src/entrypoints/mcp.ts' }],
  },
  {
    term: 'Bridge mode',
    definition:
      'A remote-control mode that lets a local Claude Code environment act as an execution target for remote interaction flows.',
    whyItMatters: 'It is one of the clearest signs that Claude Code is more than a local prompt tool.',
    files: [{ path: 'src/bridge/bridgeMain.ts' }],
  },
  {
    term: 'Session storage',
    definition:
      'The persistence layer responsible for transcript durability, resume support, subagent history, and compatibility handling.',
    whyItMatters: 'It turns a short-lived chat into a resumable coding workspace.',
    files: [{ path: 'src/utils/sessionStorage.ts' }],
  },
]

export const searchIndex = [
  ...moduleCards.map(item => ({
    title: item.title,
    href: '/modules',
    summary: item.summary,
    tags: ['module', item.slug],
  })),
  ...flowCards.map(item => ({
    title: item.title,
    href: '/flows',
    summary: item.summary,
    tags: ['flow', item.slug],
  })),
  ...featureCards.map(item => ({
    title: item.title,
    href: '/features',
    summary: item.summary,
    tags: ['feature'],
  })),
  ...readingTracks.map(item => ({
    title: item.title,
    href: '/reading-paths',
    summary: item.goal,
    tags: ['path', item.slug],
  })),
  ...glossary.map(item => ({
    title: item.term,
    href: '/glossary',
    summary: item.definition,
    tags: ['glossary'],
  })),
]
