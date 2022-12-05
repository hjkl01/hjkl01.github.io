// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        docsRouteBasePath: "/notes",
        blogRouteBasePath: "/blog",
        docsDir: "notes",
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "github",
        path: "notes/github",
        routeBasePath: "github",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docker",
        path: "notes/docker",
        routeBasePath: "notes/docker",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "linux",
        path: "notes/linux",
        routeBasePath: "notes/linux",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "notes/python",
        routeBasePath: "notes/python",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mac",
        path: "notes/mac",
        routeBasePath: "notes/mac",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "windows",
        path: "notes/windows",
        routeBasePath: "notes/windows",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Notes Site",
        logo: {
          alt: "My Site Logo",
          src: "img/apple-touch-icon.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Tutorial",
          },

          { to: "nav", label: "Nav", position: "left" },

          {
            type: "dropdown",
            label: "Notes",
            position: "left",
            items: [
              { to: "/notes/linux", label: "Linux" },
              { to: "/notes/docker", label: "Docker" },
              { to: "/notes/python", label: "Python" },
              { to: "/notes/mac", label: "Mac" },
              { to: "/notes/windows", label: "Windows" },
            ],
          },
          { to: "github", label: "Awesome Github", position: "left" },

          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/hjkl01/hjkl01.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // Links: [
        // 	{
        // 		title: 'Docs',
        // 		items: [
        // 			{
        // 				label: 'Tutorial',
        // 				to: '/docs/intro',
        // 			},
        // 		],
        // 	},
        // 	{
        // 		title: 'Community',
        // 		items: [
        // 			{
        // 				label: 'Stack Overflow',
        // 				href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        // 			},
        // 			{
        // 				label: 'Discord',
        // 				href: 'https://discordapp.com/invite/docusaurus',
        // 			},
        // 			{
        // 				label: 'Twitter',
        // 				href: 'https://twitter.com/docusaurus',
        // 			},
        // 		],
        // 	},
        // 	{
        // 		title: 'More',
        // 		items: [
        // 			{
        // 				label: 'Blog',
        // 				to: '/blog',
        // 			},
        // 			{
        // 				label: 'GitHub',
        // 				href: 'https://github.com/facebook/docusaurus',
        // 			},
        // 		],
        // 	},
        // ],
        copyright: `Copyright © ${
          new Date().getFullYear()
        } My Notes Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
