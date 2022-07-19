// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'My Notes Site',
	tagline: 'Dinosaurs are cool',
	url: 'https://hjkl01.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'hjkl01', // Usually your GitHub org/user name.
	projectName: 'hjkl01.github.io', // Usually your repo name.
	deploymentBranch: 'gh-pages',
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	plugins: [

		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'docker',
				path: 'notes/docker',
				routeBasePath: 'notes/docker',
				sidebarPath: require.resolve('./sidebars.js'),
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'linux',
				path: 'notes/linux',
				routeBasePath: 'notes/linux',
				sidebarPath: require.resolve('./sidebars.js'),
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'python',
				path: 'notes/python',
				routeBasePath: 'notes/python',
				sidebarPath: require.resolve('./sidebars.js'),
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'mac',
				path: 'notes/mac',
				routeBasePath: 'notes/mac',
				sidebarPath: require.resolve('./sidebars.js'),
			},
		],

	],

	themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    	navbar: {
    		title: 'My Notes Site',
    		logo: {
    			alt: 'My Site Logo',
    			src: 'img/logo.svg',
    		},
    		items: [
    			{
    			  type: 'doc',
    			  docId: 'intro',
    			  position: 'right',
    			  label: 'Tutorial',
    			},
    			// {
    			// 	type: 'dropdown',
    			// 	label: 'Notes',
    			// 	position: 'left',
    			// 	items: [
    			// 		{to: '/docs/linux', label: 'Linux'},
    			// 		{to: '/docs/docker', label: 'Docker'},
    			// 		{to: '/docs/python', label: 'Python'},
    			// 		{to: '/docs/mac', label: 'Mac'},
    			// 	],
    			// },
    			{to: '/notes/docker', label: 'Docker', position: 'left'},
    			{to: '/notes/linux', label: 'Linux', position: 'left'},
    			{to: '/notes/python', label: 'Python', position: 'left'},

    			// {to: '/docs/linux', label: 'Linux', position: 'left'},
    			// {to: '/docs/docker', label: 'Docker', position: 'left'},
    			// {to: '/docs/python', label: 'Python', position: 'left'},

    			{to: '/blog', label: 'Blog', position: 'right'},
    			// {to: '/docs/intro', label: 'Tutorial', position: 'left'},
    			{
    				href: 'https://github.com/facebook/docusaurus',
    				label: 'GitHub',
    				position: 'right',
    			},
    		],
    	},
    	footer: {
    		style: 'dark',
    		links: [
    			{
    				title: 'Docs',
    				items: [
    					{
    						label: 'Tutorial',
    						to: '/docs/intro',
    					},
    				],
    			},
    			{
    				title: 'Community',
    				items: [
    					{
    						label: 'Stack Overflow',
    						href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    					},
    					{
    						label: 'Discord',
    						href: 'https://discordapp.com/invite/docusaurus',
    					},
    					{
    						label: 'Twitter',
    						href: 'https://twitter.com/docusaurus',
    					},
    				],
    			},
    			{
    				title: 'More',
    				items: [
    					{
    						label: 'Blog',
    						to: '/blog',
    					},
    					{
    						label: 'GitHub',
    						href: 'https://github.com/facebook/docusaurus',
    					},
    				],
    			},
    		],
    		copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    	},
    	prism: {
    		theme: lightCodeTheme,
    		darkTheme: darkCodeTheme,
    	},
    }),
};

module.exports = config;
