'use client'

import sourceMetadata from '@/content/generated/source-metadata.json'
import { FileList } from '@/components/FileList'
import { usePreferences } from '@/components/PreferencesProvider'
import { SectionHeader } from '@/components/SectionHeader'
import { t } from '@/content/site'

const keyFiles = sourceMetadata.trackedFiles.map(item => ({
  path: item.path,
  note: t(`${item.lines} lines in the analyzed snapshot`, `分析快照中共 ${item.lines} 行`),
}))

export default function AboutPage() {
  const { locale } = usePreferences()

  return (
    <>
      <SectionHeader
        eyebrow={t('Analysis Basis', '分析依据')}
        title={t('What this learning site is based on', '这个学习站建立在什么基础上')}
        intro={t(
          'This site intentionally separates source basis from presentation. That makes it easier to update the learning content when the source snapshot changes.',
          '这个站点有意把“分析依据”和“展示层”分开，这样在源码快照变化时更容易更新学习内容。',
        )}
      />

      <div className="three-up">
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Primary basis' : '主要依据'}</p>
          <h3>{sourceMetadata.snapshotLabel}</h3>
          <p>
            {locale === 'en' ? 'Root' : '根目录'}:{' '}
            <a href={sourceMetadata.snapshotRoot} target="_blank" rel="noreferrer">
              <code>{sourceMetadata.snapshotRoot}</code>
            </a>
          </p>
          <p>{locale === 'en' ? 'Snapshot date' : '快照日期'}: {sourceMetadata.snapshotDate}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Public repo context' : '公开仓库上下文'}</p>
          <h3>anthropics/claude-code</h3>
          <p>
            Commit: <code>{sourceMetadata.publicRepo.commit}</code>
          </p>
          <p>{sourceMetadata.publicRepo.note}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Known limitation' : '已知限制'}</p>
          <h3>{locale === 'en' ? 'No build manifests in snapshot' : '快照中缺少构建清单'}</h3>
          <p>
            {locale === 'en'
              ? 'The provided app-source snapshot does not include package manifests or git metadata, so this site records snapshot date and file-level metadata instead of a full commit hash.'
              : '当前提供的 app-source snapshot 不包含 package manifest 或 git 元数据，所以本站记录的是快照日期与文件级元数据，而不是完整 commit hash。'}
          </p>
        </article>
      </div>

      <div className="card">
        <p className="card-kicker">{locale === 'en' ? 'Tracked large files' : '重点跟踪的大文件'}</p>
        <h3>{locale === 'en' ? 'Files worth revisiting on every update' : '每次更新都值得回看的文件'}</h3>
        <FileList items={keyFiles} />
      </div>

      <div className="card footer-note">
        <p>
          {locale === 'en'
            ? 'To refresh the metadata after pulling a newer snapshot, run '
            : '当你拉取了更新的源码快照后，可以运行 '}
          <code>npm run update:metadata -- --source-root /path/to/Claude\ Code/src</code>
          {locale === 'en'
            ? ' and commit the updated JSON file along with any revised content pages.'
            : '，然后把更新后的 JSON 文件与相关内容页面一起提交。'}
        </p>
      </div>
    </>
  )
}
