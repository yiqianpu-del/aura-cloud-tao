import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '..', 'data', 'content');
const outputPath = join(__dirname, '..', 'src', 'data', 'siteContent.json');

if (!existsSync(contentDir)) {
  console.log('Content directory not found, using existing siteContent.json');
  process.exit(0);
}

const files = readdirSync(contentDir).filter(f => f.endsWith('.json'));
const merged = {};

for (const file of files) {
  const data = JSON.parse(readFileSync(join(contentDir, file), 'utf-8'));
  Object.assign(merged, data);
}

writeFileSync(outputPath, JSON.stringify(merged, null, 2));
console.log(`Merged ${files.length} files -> src/data/siteContent.json`);
