// Lists every [PLACEHOLDER] still present in src/content. Run: pnpm check:placeholders
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = new URL('../src/content/', import.meta.url).pathname
const pattern = /\[[A-Z][^[\]]*\]/g
let total = 0

for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'types.ts')) {
  const lines = readFileSync(join(dir, file), 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return
    for (const match of line.match(pattern) ?? []) {
      console.log(`${file}:${i + 1}  ${match}`)
      total++
    }
  })
}

console.log(`\n${total} placeholder${total === 1 ? '' : 's'} remaining.`)
process.exit(total ? 1 : 0)
