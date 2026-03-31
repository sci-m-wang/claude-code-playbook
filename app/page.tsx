import sourceMetadata from '@/content/generated/source-metadata.json'
import { ArchitectureMap } from '@/components/ArchitectureMap'
import { SectionHeader } from '@/components/SectionHeader'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Execution Plan</p>
        <h2>Analyze first, then teach, then ship</h2>
        <p className="section-intro">
          This site is built around real Claude Code source analysis, not generic product copy.
          The current study uses a local app-source snapshot for internals and the public GitHub
          repository for plugin and ecosystem context.
        </p>
        <div className="hero-grid">
          <article className="card">
            <p className="card-kicker">Step 1</p>
            <h3>Source analysis</h3>
            <p>
              Map entrypoints, runtime boundaries, tools, permissions, MCP, remote capabilities,
              and standout implementations.
            </p>
          </article>
          <article className="card">
            <p className="card-kicker">Step 2</p>
            <h3>Learning structure</h3>
            <p>
              Translate the analysis into architecture maps, module explainers, execution flows,
              reading tracks, and concept pages.
            </p>
          </article>
          <article className="card">
            <p className="card-kicker">Step 3</p>
            <h3>Automated delivery</h3>
            <p>
              Export a static Next.js site and deploy to Cloudflare Pages from GitHub with an
              idempotent project-creation step.
            </p>
          </article>
        </div>
      </section>

      <section className="stat-grid">
        <article>
          <p className="card-kicker">Why this project matters</p>
          <h3>Not just chat plus tools</h3>
          <p>
            Claude Code behaves like a platformized terminal product with a query runtime,
            concurrency-aware tool execution, policy layers, plugins, skills, MCP, and remote modes.
          </p>
        </article>
        <article>
          <p className="card-kicker">Source basis</p>
          <h3>{sourceMetadata.snapshotLabel}</h3>
          <p>
            Snapshot date: {sourceMetadata.snapshotDate}. Public ecosystem repo commit:{' '}
            <code>{sourceMetadata.publicRepo.commit.slice(0, 7)}</code>.
          </p>
        </article>
        <article>
          <p className="card-kicker">Recommended entry</p>
          <h3>Architecture → Modules → Runtime Track</h3>
          <p>
            That route gives the fastest path from product shape to concrete execution logic.
          </p>
        </article>
      </section>

      <section>
        <SectionHeader
          eyebrow="Analysis Focus"
          title="What to pay attention to while reading Claude Code"
          intro="The most important learning payoff is not one file. It is the relationship between runtime routing, the query loop, the tool runtime, the permission system, and the extensibility model."
        />
        <div className="signal-grid">
          <article>
            <h3>Runtime shape</h3>
            <p>
              Start with how many personalities the product has: interactive CLI, headless engine,
              bridge process, remote path, and MCP server.
            </p>
          </article>
          <article>
            <h3>Execution chain</h3>
            <p>
              Follow one turn from prompt input to tool execution and transcript persistence.
            </p>
          </article>
          <article>
            <h3>Policy boundaries</h3>
            <p>
              Pay attention to permission modes, settings layers, and auth paths. They explain how
              autonomy stays governable.
            </p>
          </article>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Architecture at a glance"
          title="System map"
          intro="This map mirrors the actual code structure and becomes the backbone of the rest of the learning site."
        />
        <ArchitectureMap />
      </section>

      <section className="timeline">
        <article>
          <p className="card-kicker">Read this next</p>
          <h3>Project architecture</h3>
          <p>Get the boundaries right before diving into individual subsystems.</p>
        </article>
        <article>
          <p className="card-kicker">Then explore</p>
          <h3>Core modules</h3>
          <p>See responsibilities, key files, inputs, outputs, and learning value per module.</p>
        </article>
        <article>
          <p className="card-kicker">Then simulate</p>
          <h3>Execution flows</h3>
          <p>Watch the main runtime chains step by step and tie them back to source files.</p>
        </article>
        <article>
          <p className="card-kicker">Finish with</p>
          <h3>Reading paths</h3>
          <p>Pick a path by experience level or technical interest and keep reading with intent.</p>
        </article>
      </section>
    </>
  )
}
