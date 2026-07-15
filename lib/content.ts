import fs from 'fs';
import path from 'path';

// Parse YAML frontmatter manually (no deps needed)
function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: content };
  
  const yaml = match[1];
  const body = content.slice(match[0].length);
  
  // Simple YAML parser - only handles flat key: value
  const data: Record<string, any> = {};
  for (const line of yaml.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  }
  return { data, body };
}

// Read a content file, returning parsed data or null
export function readContentFile(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    if (!fs.existsSync(fullPath)) return null;
    const content = fs.readFileSync(fullPath, 'utf-8');
    return content;
  } catch {
    return null;
  }
}

// Read settings from content file, with defaults
export function getSettings() {
  const raw = readContentFile('settings/general.md');
  if (!raw) return null;
  return parseFrontmatter(raw).data;
}

// Read homepage hero from content file
export function getHomeHero() {
  const raw = readContentFile('homepage/hero.md');
  if (!raw) return null;
  return parseFrontmatter(raw).data;
}
