// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stingray In-Car Karaoke',
  tagline: 'Karaoke on the road',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stingray', // Usually your GitHub org/user name.
  projectName: 'in-car-karaoke', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'Documentation',
        logo: {
          alt: 'Stingray Karaoke Logo',
          src: 'img/StingrayKaraokeLogo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {to: '/docs/introduction', label: 'Documentation', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/LG%20Submission',
              },
            ],
          },
          {
            title: 'Stingray',
            items: [
              {
                label: 'Stingray Music',
                href: 'https://music.stingray.com/',
              },
              {
                label: 'Stingray Products & Services',
                href: 'https://www.stingray.com/',
              },
              {
                label: 'Careers',
                href: 'https://jobs.stingray.com/',
              },
            ],
          },
          {
            title: 'Sing with us',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/user/TheKARAOKEChannel',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/stingraykaraoke/',
              },
              {
                label: 'X',
                href: 'https://twitter.com/stingraykaraoke?lang=en',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stingray Digital Media Group. 
        All rights reserved. STINGRAY®, STINGRAY®MUSIC and other related marks and logos are trademarks of 
        Stingray Digital Media Group in Canada, the United States of America and/or other territories. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
