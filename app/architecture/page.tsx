import { ArchitectureMap } from '@/components/ArchitectureMap'
import { SectionHeader } from '@/components/SectionHeader'

export default function ArchitecturePage() {
  return (
    <>
      <SectionHeader
        eyebrow="Project Architecture"
        title="Claude Code is structured like a runtime platform"
        intro="The most useful mental model is layered: bootstrap, interactive surface, query runtime, extension surface, policy state, and remote capabilities."
      />

      <div className="card">
        <p>
          The source snapshot shows a platform-style application rather than a small chat CLI. The
          key architectural move is separation of concerns: bootstrap and mode routing live in one
          layer, the REPL and app state in another, query and tool orchestration in another, and
          permissions/auth/extensibility as cross-cutting layers.
        </p>
      </div>

      <ArchitectureMap />

      <div className="three-up">
        <article className="card">
          <p className="card-kicker">System boundary</p>
          <h3>Local runtime first</h3>
          <p>
            Claude Code starts as a local process, but the architecture leaves room for remote
            control, bridge mode, and MCP exposure.
          </p>
        </article>
        <article className="card">
          <p className="card-kicker">Design principle</p>
          <h3>Composition over one giant loop</h3>
          <p>
            Commands, skills, plugins, tools, MCP resources, and settings are composed into the
            active runtime rather than hard-coded into one mode.
          </p>
        </article>
        <article className="card">
          <p className="card-kicker">Reading hint</p>
          <h3>Trace one request across layers</h3>
          <p>
            The architecture becomes much easier once you track a single user turn across UI,
            query, permissions, tools, and persistence.
          </p>
        </article>
      </div>
    </>
  )
}
