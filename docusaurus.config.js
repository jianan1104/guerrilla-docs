// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guerrilla Docs',
  tagline: 'Explore and learn how to use Guerrilla',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://guerrilla-docs.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Moxa', // Usually your GitHub org/user name.
  projectName: 'guerrilla-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  stylesheets: [
    "https://doc.gendocu.com/widget/documentation.css"
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jianan1104/guerrilla-docs',
          showLastUpdateAuthor: true,
          routeBasePath: '/', // Serve the docs at the site's root
          // breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Guerrilla',
        hideOnScroll: false,
        logo: {
          alt: 'Logo',
          src: 'img/favicon.ico',
          srcDark: 'img/logo-dark.png',
          style: {
            objectFit: "contain"
          }
        },
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
      },
    }),
};

module.exports = config;
