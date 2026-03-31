import sourceMetadata from '@/content/generated/source-metadata.json'
import { FileList } from '@/components/FileList'
import { SectionHeader } from '@/components/SectionHeader'

const keyFiles = sourceMetadata.trackedFiles.map(item => ({
  path: item.path,
  note: `${item.lines} lines in the analyzed snapshot`,
}))

export default function AboutPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Analysis Basis"
        title="What this learning site is based on"
        intro="This site intentionally separates source basis from presentation. That makes it easier to update the learning content when the source snapshot changes."
      />

      <div className="three-up">
        <article className="card">
          <p className="card-kicker">Primary basis</p>
          <h3>{sourceMetadata.snapshotLabel}</h3>
          <p>
            Root: <code>{sourceMetadata.snapshotRoot}</code>
          </p>
          <p>Snapshot date: {sourceMetadata.snapshotDate}</p>
        </article>
        <article className="card">
          <p className="card-kicker">Public repo context</p>
          <h3>anthropics/claude-code</h3>
          <p>
            Commit: <code>{sourceMetadata.publicRepo.commit}</code>
          </p>
          <p>{sourceMetadata.publicRepo.note}</p>
        </article>
        <article className="card">
          <p className="card-kicker">Known limitation</p>
          <h3>No build manifests in snapshot</h3>
          <p>
            The provided app-source snapshot does not include package manifests or git metadata, so
            this site records snapshot date and file-level metadata instead of a full commit hash.
          </p>
        </article>
      </div>

      <div className="card">
        <p className="card-kicker">Tracked large files</p>
        <h3>Files worth revisiting on every update</h3>
        <FileList items={keyFiles} />
      </div>

      <div className="card footer-note">
        <p>
          To refresh the metadata after pulling a newer snapshot, run{' '}
          <code>npm run update:metadata -- --source-root /path/to/Claude\ Code/src</code> and
          commit the updated JSON file along with any revised content pages.
        </p>
      </div>
    </>
  )
}
