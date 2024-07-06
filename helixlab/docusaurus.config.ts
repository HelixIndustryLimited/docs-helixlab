import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';

const config: Config = {
  title: 'Helix Lab Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          // sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-products',
        path: 'docs-products',
        routeBasePath: 'docs-products',
        sidebarPath: './sidebars-products.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-elysium',
        path: 'docs-elysium',
        routeBasePath: 'docs-elysium',
        sidebarPath: './sidebars-elysium.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-test',
        path: 'docs-test',
        routeBasePath: 'docs-test',
        sidebarPath: './sidebars-test.ts',
      },
    ],
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Helix Lab',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-helixlab.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: '文档',
        // },
        {
          label: '产品',
          to: 'docs-products/aaru-65',
          position: 'left',
          docsPluginId: 'docs-products',
          activeBasePath: 'docs-products',
        },
        {
          label: 'Elysium™',
          to: 'docs-elysium/intro',
          position: 'left',
          docsPluginId: 'docs-elysium',
          activeBasePath: 'docs-elysium',
        },
        // { to: 'https://www.helix.site/blogs/resources', label: '下载', position: 'left' },
        { href: 'https://helix.site', label: '商店', position: 'left' },
        {
          type: "localeDropdown",
          position: "right",
          queryString: '?persistLocale=true'
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/jRutFfBruz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Helix Lab.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
