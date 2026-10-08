import fs from 'node:fs/promises';

const README_URL = 'https://raw.githubusercontent.com/hjkl01/dotfiles/master/readme.md';
const GITHUB_BASE_URL = 'https://github.com/hjkl01/dotfiles/blob/master/';
const OUTPUT_FILE = 'notes/linux/index.md';

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

const content = `---
sidebar_position: 0
---

<!-- 此文件由 scripts/fetch-linux-readme.mjs 在构建时自动生成，请勿手动修改。 -->

${readme}
`;

await fs.writeFile(OUTPUT_FILE, content);

console.log(`已同步 dotfiles README -> ${OUTPUT_FILE}`);
