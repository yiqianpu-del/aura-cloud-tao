import fs from 'fs';
import path from 'path';

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: content };
  const yaml = match[1];
  const body = content.slice(match[0].length);
  const data: Record<string, any> = {};
  for (const line of yaml.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      let key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
      data[key] = value;
    }
  }
  return { data, body };
}

export function readContentFile(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    if (!fs.existsSync(fullPath)) return null;
    return fs.readFileSync(fullPath, 'utf-8');
  } catch { return null; }
}

export function getSettings() {
  const raw = readContentFile('settings/general.md');
  if (!raw) return null;
  return parseFrontmatter(raw).data;
}

export function getHomeHero() {
  const raw = readContentFile('homepage/hero.md');
  if (!raw) return null;
  return parseFrontmatter(raw).data;
}
