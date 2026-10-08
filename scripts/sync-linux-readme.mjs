import fs from 'node:fs/promises';

const README_URL = 'https://raw.githubusercontent.com/hjkl01/dotfiles/master/readme.md';
const REPOSITORY_URL = 'https://github.com/hjkl01/dotfiles/blob/master';
const OUTPUT_FILE = 'notes/linux/index.md';

function resolveLink(target) {
  if (!target || target.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(target)) {
    return target;
  }

  const [path, suffix = ''] = target.split(/([?#].*)/, 2);
  return `${REPOSITORY_URL}/${path.replace(/^\.\//, '')}${suffix}`;
}

function convertRelativeLinks(markdown) {
  return markdown
    .replace(/(!?\\[[^\\]]*\\])\\(([^)]+)\\)/g, (match, label, target) => {
      const trimmed = target.trim();
      const matchTarget = trimmed.match(/^<([^>]+)>(.*)$/);
      const url = matchTarget ? matchTarget[1] : trimmed;
      const suffix = matchTarget ? matchTarget[2] : '';
      return `${label}(${resolveLink(url)}${suffix})`;
    })
    .replace(/(<(?:img|a)\\b[^>]*?(?:src|href)=["'])([^"'#][^"']*)(["'])/gi, (match, prefix, target, suffix) => {
      if (/^(?:[a-z][a-z0-9+.-]*:|\\/\\/)/i.test(target)) {
        return match;
      }
      return `${prefix}${resolveLink(target)}${suffix}`;
    });
}

async function main() {
  const response = await fetch(README_URL);

  if (!response.ok) {
    throw new Error(`获取 dotfiles README 失败: HTTP ${response.status}`);
  }

  const readme = await response.text();
  const content = `---
sidebar_position: 0
---

${convertRelativeLinks(readme).trim()}
`;

  await fs.writeFile(OUTPUT_FILE, content + '\\n');
  console.log(`已同步 hjkl01/dotfiles README -> ${OUTPUT_FILE}`);
}

await main();
