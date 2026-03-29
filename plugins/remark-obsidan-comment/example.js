import fs from 'node:fs/promises'
import { remark } from 'remark'
import remarkIconize from './index.js'

console.log('Reading input.md...')
const document = await fs.readFile('input.md', 'utf8')

console.log('Processing with remark-iconize...')
const file = await remark().use(remarkIconize).process(document)

console.log('Writing to output.md...')
await fs.writeFile('output.md', String(file))
console.log('Done!')