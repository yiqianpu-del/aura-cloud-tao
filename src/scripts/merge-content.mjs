import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '..', 'data', 'content');
const outputPath = join(__dirname, '..', 'data', 'siteContent.json');

const files = readdirSync(contentDir).filter(f => f.endsWith('.json'));
const merged = {};

for (const file of files) {
  const data = JSON.parse(readFileSync(join(contentDir, file), 'utf-8'));
  Object.assign(merged, data);
}

writeFileSync(outputPath, JSON.stringify(merged, null, 2));
console.log(`Merged ${files.length} files -> siteContent.json (${Object.keys(merged).length} top keys)`);