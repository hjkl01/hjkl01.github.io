import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


var base_dir = "notes/";
var dirs = [
  "docker",
  "linux",
  "mac",
  "nodejs",
  "others",
  "python",
  "windows",
];

var plugins = [
  require.resolve('docusaurus-lunr-search'),
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "github",
      path: "notes/github",
      routeBasePath: "github",
      sidebarPath: "./sidebars.ts",
    },
  ],
];

for (var d of dirs) {
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
  title: "My Notes Site",
  tagline: "Dinosaurs are cool",
  url: "https://hjkl01.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
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

        {
          type: "dropdown",
          label: "Languages",
          position: "left",
          items: [
            { to: "/notes/python", label: "Python" },
            { to: "/notes/nodejs", label: "Nodejs" },
          ],
        },

        {
          type: "dropdown",
          label: "System",
          position: "left",
          items: [
            { to: "/notes/linux", label: "Linux" },
            { to: "/notes/mac", label: "Mac" },
            { to: "/notes/windows", label: "Windows" },
          ],
        },

        {
          type: "dropdown",
          label: "Others",
          position: "left",
          items: [
            { to: "/notes/docker", label: "Docker" },
            { to: "/notes/others", label: "Others" }],
        },
        {
          type: "dropdown",
          label: "Tools Online",
          position: "left",
          items: [{ to: "regex/", label: "Simple Regex Online" }],
        },
        { to: "github", label: "Awesome Github", position: "left" },

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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
