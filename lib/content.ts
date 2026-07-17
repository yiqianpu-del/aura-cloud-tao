import fs from 'fs';
import path from 'path';

// ── Robust YAML/Frontmatter parser ──

function parseSimpleYaml(yaml: string): Record<string, any> {
  // Handle "faqs:" followed by list items
  // Strategy: convert to a line-based approach with indent tracking
  const lines = yaml.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
  const result: Record<string, any> = {};
  const stack: { indent: number; key: string; obj: any; isArray: boolean }[] = [
    { indent: -1, key: '', obj: result, isArray: false }
  ];
  
  // Track the current array being built
  let currentArray: any[] | null = null;
  let currentArrayParent: any = null;
  let currentArrayKey = '';
  let currentArrayIndent = 0;
  let lastArrayItem: any = null;

  for (const line of lines) {
    const indent = line.search(/\S/);
    const trimmed = line.trim();
    
    // Array item: - value or - key: value
    if (trimmed.startsWith('- ')) {
      const rest = trimmed.slice(2).trim();
      const colonIdx = rest.indexOf(':');
      
      if (colonIdx > 0) {
        // Object-like: - key: value
        const key = rest.slice(0, colonIdx).trim();
        let value = rest.slice(colonIdx + 1).trim();
        
        // New array item
        if (!currentArray || indent !== currentArrayIndent) {
          // Start new array
          currentArray = [];
          currentArrayIndent = indent;
          // Find parent object for this array
          while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
            stack.pop();
          }
          currentArrayParent = stack[stack.length - 1].obj;
          // The array key is the key that had "faqs:" on the previous line
          // We need to find the parent key
          lastArrayItem = {};
          currentArray.push(lastArrayItem);
          // Set the array on the parent
          // But we don't know the key yet! Store and assign later
          currentArrayKey = '';
        } else {
          // Same array
          if (value === '') {
            lastArrayItem = {};
            currentArray.push(lastArrayItem);
          } else {
            lastArrayItem = {};
            currentArray.push(lastArrayItem);
            lastArrayItem[key] = parseScalar(value);
          }
        }
        
        if (value === '') {
          lastArrayItem[key] = '';
        } else {
          lastArrayItem[key] = parseScalar(value);
        }
      } else {
        // Simple array: - value
        if (!currentArray || indent !== currentArrayIndent) {
          currentArray = [];
          currentArrayIndent = indent;
          while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
          currentArrayParent = stack[stack.length - 1].obj;
          currentArrayKey = '';
        }
        currentArray.push(parseScalar(rest));
      }
      continue;
    }
    
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx < 0) continue;
    
    const key = trimmed.slice(0, colonIdx).trim();
    let value = trimmed.slice(colonIdx + 1).trim();
    
    // Pop stack to correct level
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }
    
    const parent = stack[stack.length - 1].obj;
    
    // If we were building an array, assign it to the parent
    if (currentArray && (indent <= currentArrayIndent || key !== '')) {
      // Find the key that this array belongs to
      if (currentArrayKey && currentArrayParent) {
        currentArrayParent[currentArrayKey] = currentArray;
      }
      currentArray = null;
      currentArrayParent = null;
      currentArrayKey = '';
    }
    
    if (value === '') {
      const newObj: Record<string, any> = {};
      parent[key] = newObj;
      stack.push({ indent, key, obj: newObj, isArray: false });
    } else {
      parent[key] = parseScalar(value);
      // If this key looks like it's followed by an array, track it
      // Check next line to see if it has list items...
    }
  }
  
  // Finalize any remaining array
  if (currentArray && currentArrayParent && currentArrayKey) {
    currentArrayParent[currentArrayKey] = currentArray;
  }
  
  // Post-process: check for lines where value was empty and next indent+2 lines have "- "
  // Actually do a second pass for the common case
  
  return result;
}

function parseScalar(value: string): any {
  value = value.trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) return value.slice(1, -1);
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null' || value === '~') return null;
  const num = Number(value);
  if (!isNaN(num) && value !== '') return num;
  return value;
}

// Second parser approach - simpler, line-by-line state machine
function parseYamlToDict(yaml: string): Record<string, any> {
  const result: Record<string, any> = {};
  const lines = yaml.split('\n');
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    
    // Check for key: value or key:
    const trimmed = line.trim();
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx < 0) { i++; continue; }
    
    const key = trimmed.slice(0, colonIdx).trim();
    const value = trimmed.slice(colonIdx + 1).trim();
    
    if (value === '') {
      // Could be an object or a list
      // Look ahead to see next non-empty line
      let nextLine = '';
      let nextIdx = i + 1;
      while (nextIdx < lines.length) {
        if (lines[nextIdx].trim() && !lines[nextIdx].trim().startsWith('#')) {
          nextLine = lines[nextIdx];
          break;
        }
        nextIdx++;
      }
      
      if (nextLine.trim().startsWith('- ')) {
        // It's a list
        result[key] = parseYamlList(lines, i + 1, line.search(/\S/) + 2);
      } else {
        // It's an object
        const [obj, consumed] = parseYamlObject(lines, i + 1, line.search(/\S/) + 2);
        result[key] = obj;
        i += consumed;
      }
    } else {
      result[key] = parseScalar(value);
    }
    i++;
  }
  
  return result;
}

function parseYamlList(lines: string[], startIdx: number, baseIndent: number): any[] {
  const result: any[] = [];
  let i = startIdx;
  
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    
    const indent = line.search(/\S/);
    if (indent < baseIndent) break;
    
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      const rest = trimmed.slice(2).trim();
      const colonIdx = rest.indexOf(':');
      
      if (colonIdx > 0 && rest.slice(colonIdx + 1).trim() === '') {
        // Object item
        const itemKey = rest.slice(0, colonIdx).trim();
        const item: Record<string, any> = {};
        
        // Read the rest of this object's properties
        let j = i + 1;
        while (j < lines.length) {
          const nextLine = lines[j];
          if (!nextLine.trim() || nextLine.trim().startsWith('#')) { j++; continue; }
          const nextIndent = nextLine.search(/\S/);
          if (nextIndent <= indent) break;
          
          const nTrimmed = nextLine.trim();
          const nColon = nTrimmed.indexOf(':');
          if (nColon < 0) { j++; continue; }
          
          const nKey = nTrimmed.slice(0, nColon).trim();
          let nValue = nTrimmed.slice(nColon + 1).trim();
          
          // Check for nested object
          if (nValue === '') {
            // Check if next lines are a list or object
            let nextLine2 = '';
            let k = j + 1;
            while (k < lines.length) {
              if (lines[k].trim() && !lines[k].trim().startsWith('#')) {
                nextLine2 = lines[k];
                break;
              }
              k++;
            }
            if (nextLine2.trim().startsWith('- ')) {
              item[nKey] = parseYamlList(lines, j + 1, nextIndent + 2);
              // Skip past parsed lines
              let scan = j + 1;
              while (scan < lines.length) {
                const sLine = lines[scan];
                if (!sLine.trim() || sLine.trim().startsWith('#')) { scan++; continue; }
                const sIndent = sLine.search(/\S/);
                if (sIndent < nextIndent + 2) break;
                scan++;
              }
              j = scan;
              continue;
            } else {
              const [nestedObj, consumed] = parseYamlObject(lines, j + 1, nextIndent + 2);
              item[nKey] = nestedObj;
              j += consumed;
            }
          } else {
            item[nKey] = parseScalar(nValue);
          }
          j++;
        }
        result.push(item);
        i = j;
        continue;
        
      } else if (colonIdx > 0) {
        // Single key-value pair: - key: value
        const itemKey = rest.slice(0, colonIdx).trim();
        const itemValue = rest.slice(colonIdx + 1).trim();
        const item: Record<string, any> = {};
        item[itemKey] = parseScalar(itemValue);
        result.push(item);
      } else {
        // Simple value: - value
        result.push(parseScalar(rest));
      }
    } else {
      // Continuation of previous object? 
      const nColon = trimmed.indexOf(':');
      if (nColon > 0 && result.length > 0) {
        const nKey = trimmed.slice(0, nColon).trim();
        let nValue = trimmed.slice(nColon + 1).trim();
        const lastItem = result[result.length - 1];
        if (typeof lastItem === 'object' && !Array.isArray(lastItem)) {
          if (nValue === '') {
            // Check if next lines have list
            let nextLine2 = '';
            let k = i + 1;
            while (k < lines.length) {
              if (lines[k].trim() && !lines[k].trim().startsWith('#')) {
                nextLine2 = lines[k];
                break;
              }
              k++;
            }
            if (nextLine2.trim().startsWith('- ')) {
              lastItem[nKey] = parseYamlList(lines, i + 1, indent + 2);
              let scan = i + 1;
              while (scan < lines.length) {
                const sLine = lines[scan];
                if (!sLine.trim()) { scan++; continue; }
                const sIndent = sLine.search(/\S/);
                if (sIndent < indent + 2) break;
                scan++;
              }
              i = scan;
              continue;
            } else {
              const [nestedObj2, consumed2] = parseYamlObject(lines, i + 1, indent + 2);
              lastItem[nKey] = nestedObj2;
              i += consumed2;
            }
          } else {
            lastItem[nKey] = parseScalar(nValue);
          }
        }
      }
    }
    i++;
  }
  
  return result;
}

function parseYamlObject(lines: string[], startIdx: number, baseIndent: number): [Record<string, any>, number] {
  const obj: Record<string, any> = {};
  let i = startIdx;
  
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    
    const indent = line.search(/\S/);
    if (indent < baseIndent) break;
    
    const trimmed = line.trim();
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx < 0) { i++; continue; }
    
    const key = trimmed.slice(0, colonIdx).trim();
    let value = trimmed.slice(colonIdx + 1).trim();
    
    if (value === '') {
      // Check next line
      let nextLine = '';
      let j = i + 1;
      while (j < lines.length) {
        if (lines[j].trim() && !lines[j].trim().startsWith('#')) {
          nextLine = lines[j];
          break;
        }
        j++;
      }
      if (nextLine.trim().startsWith('- ')) {
        obj[key] = parseYamlList(lines, i + 1, indent + 2);
        let scan = i + 1;
        while (scan < lines.length) {
          const sLine = lines[scan];
          if (!sLine.trim()) { scan++; continue; }
          const sIndent = sLine.search(/\S/);
          if (sIndent < indent + 2) break;
          scan++;
        }
        i = scan;
        continue;
      } else {
        const [nested, consumed] = parseYamlObject(lines, i + 1, indent + 2);
        obj[key] = nested;
        i += consumed;
      }
    } else {
      obj[key] = parseScalar(value);
    }
    i++;
  }
  
  return [obj, i - startIdx];
}

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: content };
  const yaml = match[1];
  const body = content.slice(match[0].length);
  const data = parseYamlToDict(yaml);
  return { data, body };
}

function parseYamlFile(content: string): any {
  return parseYamlToDict(content);
}

// ── File readers ──

export function readContentFile(filePath: string): string | null {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    if (!fs.existsSync(fullPath)) return null;
    return fs.readFileSync(fullPath, 'utf-8');
  } catch { return null; }
}

// ── Getters ──

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

export function getHomeFeatures() {
  const raw = readContentFile('homepage/features.md');
  if (!raw) return null;
  const d = parseFrontmatter(raw).data;
  return [
    { title: d.section1Title || 'Ritual Services', titleCn: d.section1Cn || '法事服务', desc: d.section1Desc, href: d.section1Href || '/services' },
    { title: d.section2Title || 'Qi Men Divination', titleCn: d.section2Cn || '奇门问卦', desc: d.section2Desc, href: d.section2Href || '/divination' },
    { title: d.section3Title || 'Feng Shui', titleCn: d.section3Cn || '风水堪舆', desc: d.section3Desc, href: d.section3Href || '/feng-shui' },
    { title: d.section4Title || 'Spiritual Shop', titleCn: d.section4Cn || '文创商城', desc: d.section4Desc, href: d.section4Href || '/shop' },
  ];
}

export function getHowItWorks() {
  const raw = readContentFile('homepage/how-it-works.md');
  if (!raw) return null;
  const d = parseFrontmatter(raw).data;
  return {
    sectionTitle: d.sectionTitle || 'How Your Ritual Is Performed',
    sectionSubtitle: d.sectionSubtitle || '',
    steps: [
      { num: 1, title: d.step1Title || 'Preparation of the altar', zh: d.step1Cn || '布置道坛' },
      { num: 2, title: d.step2Title || 'Lighting incense and prayer', zh: d.step2Cn || '点香祈愿' },
      { num: 3, title: d.step3Title || 'Hand-writing your talisman', zh: d.step3Cn || '书写符箓' },
      { num: 4, title: d.step4Title || 'Consecration ceremony', zh: d.step4Cn || '开光仪式' },
    ],
    ctaText: d.ctaText || 'Reserve Your Ritual',
  };
}

export function getHomeFAQ() {
  const raw = readContentFile('homepage/faq.md');
  if (!raw) return null;
  const d = parseFrontmatter(raw).data;
  return d;
}

// ── Data file readers (YAML) ──

export function getAllServices() {
  const raw = readContentFile('services/services.yaml');
  if (!raw) return null;
  return parseYamlFile(raw);
}

export function getAllProducts() {
  const raw = readContentFile('products/products.yaml');
  if (!raw) return null;
  return parseYamlFile(raw);
}

export function getAllTalismans() {
  const raw = readContentFile('talismans/talismans.yaml');
  if (!raw) return null;
  return parseYamlFile(raw);
}
