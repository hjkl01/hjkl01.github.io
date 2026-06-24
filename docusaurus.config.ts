import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const base_dir = "notes/";
const dirs = [
  "docker",
  "linux",
  "mac",
  "others",
  "windows",
  "github",
];

const plugins = [
  require.resolve('docusaurus-lunr-search'),
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "python",
      path: "notes/python",
      routeBasePath: "notes/python",
      sidebarPath: "./sidebars.ts",
    },
  ],
];

for (const d of dirs) {
  plugins.push([
    "@docusaurus/plugin-content-docs",
    {
      id: d,
      path: base_dir + d,
      routeBasePath: base_dir + d,
      sidebarPath: "./sidebars.ts",
    },
  ]);
}


const config: Config = {
  title: "hjkl01's Notes",
  tagline: "个人笔记 & 工具集",
  url: "https://hjkl01.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon-16x16.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hjkl01", // Usually your GitHub org/user name.
  projectName: "hjkl01.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  plugins: plugins,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hjkl01/hjkl01.github.io/tree/master/',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/tailwind.css'
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: "img/apple-touch-icon.png",
      },
      hideOnScroll: false,

      items: [
        { to: "nav/", label: "Nav", position: "left" },
        { to: "rss/", label: "RSS", position: "left" },
        { to: "notes/github", label: "Github Trending", position: "left" },

        {
          type: "dropdown",
          label: "Notes",
          position: "left",
          items: [
            { to: "/notes/python", label: "Python" },
            { to: "/notes/linux", label: "Linux" },
            { to: "/notes/docker", label: "Docker" },
          ],
        },
        {
          type: "dropdown",
          label: "Others",
          position: "left",
          items: [
            { to: "/notes/mac", label: "Mac" },
            { to: "/notes/windows", label: "Windows" },
            { to: "/notes/others", label: "Others" },
          ],
        },

        {
          type: "dropdown",
          label: "Tools",
          position: "left",
          items: [
            { to: "calculator/", label: "Calculator" },
            { to: "regex/", label: "regex" },
          ],
        },

        {
          type: 'search',
          position: 'right',
        },
        {
          href: "https://github.com/hjkl01/hjkl01.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hjkl01. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'python',
      // defaultLanguage: 'javascript',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
