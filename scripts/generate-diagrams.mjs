import { readdir } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'

const srcDir = path.resolve('diagrams-src')
const outDir = path.resolve('public/diagrams')
const entries = (await readdir(srcDir)).filter(file => file.endsWith('.dot'))

for (const file of entries) {
  const input = path.join(srcDir, file)
  const output = path.join(outDir, file.replace(/\.dot$/, '.svg'))
  await new Promise((resolve, reject) => {
    const child = spawn('dot', ['-Tsvg', input, '-o', output], { stdio: 'inherit' })
    child.on('exit', code => (code === 0 ? resolve(undefined) : reject(new Error(`dot exited ${code}`))))
  })
}

console.log(`Generated ${entries.length} SVG diagrams in ${outDir}`)
