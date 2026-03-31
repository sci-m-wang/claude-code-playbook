import fs from 'node:fs/promises'
import path from 'node:path'

const args = Object.fromEntries(
  process.argv.slice(2).map(argument => {
    const [key, value] = argument.replace(/^--/, '').split('=')
    return [key, value]
  }),
)

const sourceRoot = args['source-root'] || process.env.SOURCE_ROOT
if (!sourceRoot) {
  console.error('Missing --source-root=/absolute/path/to/src or SOURCE_ROOT env var')
  process.exit(1)
}

const trackedFiles = [
  'main.tsx',
  'services/api/claude.ts',
  'services/mcp/client.ts',
  'utils/auth.ts',
  'utils/config.ts',
  'utils/plugins/pluginLoader.ts',
]

const metadataPath = path.resolve('content/generated/source-metadata.json')
const existing = JSON.parse(await fs.readFile(metadataPath, 'utf8'))

const updatedFiles = []
for (const relativeFile of trackedFiles) {
  const absolutePath = path.join(sourceRoot, relativeFile)
  const content = await fs.readFile(absolutePath, 'utf8')
  updatedFiles.push({
    path: `src/${relativeFile}`,
    lines: content.split(/\r?\n/).length,
  })
}

const next = {
  ...existing,
  generatedAt: new Date().toISOString(),
  snapshotRoot: sourceRoot,
  trackedFiles: updatedFiles,
}

await fs.writeFile(metadataPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8')
console.log(`Updated ${metadataPath}`)
