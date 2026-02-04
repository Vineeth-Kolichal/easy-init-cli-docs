// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Easy Init CLI',
  tagline: 'The ultimate tool for setting up Flutter projects instantly. Automate boilerplate generation and start coding features immediately.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://easy-init-cli.web.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vineeth-Kolichal', // Usually your GitHub org/user name.
  projectName: 'easy_init_cli', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Vineeth-Kolichal/easy_init_cli/tree/main/',
          routeBasePath: '/', // Serve docs at root like bloclibrary.dev? No, bloclibrary has /getting-started/ etc.
          // Let's keep /docs for now or maybe better to just use /docs
        },
        blog: false, // Disable blog for now as it's not requested
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'flutter, cli, easy-init, clean-architecture, scaffolding, dart, clean-code, tdd, solid-principles' },
        { name: 'description', content: 'Easy Init CLI: The ultimate tool for setting up Flutter projects with Clean Architecture instantly. Automate boilerplate generation and start coding features immediately.' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      // Replace with your project's social card
      image: 'img/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Easy Init CLI',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://pub.dev/packages/easy_init_cli',
            label: 'Pub.dev',
            position: 'right',
          },
          {
            href: 'https://github.com/Vineeth-Kolichal/easy_init_cli',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Flutter Logo',
          src: 'img/flutter_logo.png',
          href: 'https://flutter.dev',
          width: 50,
          height: 50,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/intro',
              },
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Report Issues',
                href: 'https://github.com/Vineeth-Kolichal/easy_init_cli/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Vineeth-Kolichal/easy_init_cli',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Easy Init CLI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['dart', 'yaml', 'bash'],
      },
    }),
};

export default config;
