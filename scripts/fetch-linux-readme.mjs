import fs from 'node:fs/promises';

const README_URL = 'https://gd.hjkl01.cn/https://raw.githubusercontent.com/hjkl01/dotfiles/master/readme.md';
const GITHUB_BASE_URL = 'https://github.com/hjkl01/dotfiles/blob/master/';
const OUTPUT_FILE = 'notes/linux/index.md';

// 把一段文本切成用于锚点匹配的 token（只保留字母数字与 CJK）
function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9_\u4e00-\u9fff]+/g) ?? []).filter((t) => t.length > 0);
}

// 近似 GitHub/Docusaurus 风格的标题 slug（我们会显式写入，所以不必完全一致）
function slugify(text) {
  return tokenize(text.replace(/\[([^\]]*)]\(([^)]*)\)/g, '$1')).join('-') || 'section';
}

// 去掉 markdown / HTML 行内格式，便于取标题纯文本
function plainText(text) {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/!?\[([^\]]*)]\(([^)]*)\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();
}

const FENCE_RE = /^\s*(```|~~~)/;
const HEADING_RE = /^(#{1,6})\s+(.+?)\s*(?:\{#[^}]*\})?\s*$/;

// 逐行遍历，跳过围栏代码块
function eachLine(markdown, fn) {
  let inFence = false;
  const out = markdown.split('\n').map((line) => {
    if (FENCE_RE.test(line)) {
      inFence = !inFence;
      return line;
    }
    return inFence ? line : fn(line);
  });
  return out.join('\n');
}

/**
 * README 里的目录使用 GitHub 风格锚点（`#-快速开始` 等），
 * 和 Docusaurus 生成的标题 id 不一定一致，构建时会报 broken anchors。
 * 这里给每个标题写入显式 id，并把文内锚点重映射到这些 id，匹配不到则退化成纯文本。
 */
function normalizeAnchors(markdown) {
  // 1. 收集标题，计算显式 id（重复的加数字后缀）
  const headings = [];
  const usedIds = new Map();

  eachLine(markdown, (line) => {
    const match = line.match(HEADING_RE);
    if (!match) return line;
    const text = plainText(match[2]);
    let id = slugify(text);
    const seen = usedIds.get(id) ?? 0;
    usedIds.set(id, seen + 1);
    if (seen > 0) id = `${id}-${seen}`;
    headings.push({ id, tokens: tokenize(text), raw: match[2] });
    return line;
  });

  // 2. 给标题追加 {#id}
  let index = 0;
  let result = eachLine(markdown, (line) => {
    const match = line.match(HEADING_RE);
    if (!match) return line;
    const heading = headings[index++];
    return heading ? `${match[1]} ${match[2].trim()} {#${heading.id}}` : line;
  });

  // 3. 重映射文内锚点链接
  const lcsLen = (a, b) => {
    let best = 0;
    const dp = new Array(b.length + 1).fill(0);
    for (let i = 1; i <= a.length; i += 1) {
      let prev = 0;
      for (let j = 1; j <= b.length; j += 1) {
        const tmp = dp[j];
        dp[j] = a[i - 1] === b[j - 1] ? prev + 1 : 0;
        best = Math.max(best, dp[j]);
        prev = tmp;
      }
    }
    return best;
  };

  const charSim = (a, b) => lcsLen(a, b) / Math.max(a.length, b.length);

  const bestMatch = (tokens) => {
    let best = { score: 0, id: null };
    for (const heading of headings) {
      let s = 0;
      for (const t of tokens) {
        if (heading.tokens.includes(t)) {
          s += 2;
          continue;
        }
        if (heading.tokens.some((h) => h.includes(t) || t.includes(h))) s += 0.5;
        s += 0.9 * Math.max(...heading.tokens.map((h) => charSim(t, h)), 0);
      }
      if (s > best.score) best = { score: s, id: heading.id };
    }
    return best;
  };

  result = eachLine(result, (line) =>
    line.replace(/(!?\[[^\]]*])\((#[^)]*)\)/g, (match, label, anchor) => {
      const tokens = tokenize(anchor.slice(1));
      const { score: s, id } = bestMatch(tokens);
      return s > 0 ? `${label}(#${id})` : label;
    }),
  );

  return result;
}

const response = await fetch(README_URL);

if (!response.ok) {
  throw new Error(`获取 dotfiles README 失败: ${response.status} ${response.statusText}`);
}

let readme = await response.text();

// 将 README 中指向仓库内部文件的相对链接转换为 GitHub 页面链接。
// 锚点、绝对 URL、mailto 等外部链接保持不变。
readme = readme.replace(
  /\]\((?!https?:\/\/|mailto:|#)([^)]+)\)/g,
  (_, target) => `](${GITHUB_BASE_URL}${target})`,
);

readme = normalizeAnchors(readme);

const content = `---
sidebar_position: 0
---

<!-- 此文件由 scripts/fetch-linux-readme.mjs 在构建时自动生成，请勿手动修改。 -->

${readme}
`;

await fs.writeFile(OUTPUT_FILE, content);

console.log(`已同步 dotfiles README -> ${OUTPUT_FILE}`);
