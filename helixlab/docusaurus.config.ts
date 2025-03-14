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
          admonitions: {
            keywords: [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
                'security',
                'discord',
                'feature',
            ],
            extendDefaults: true,
        },
        },
        blog: {
          showReadingTime: false,
          path: 'blog',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
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
        id: 'docs-ankh-r2',
        path: 'docs-ankh-r2',
        routeBasePath: 'docs-ankh-r2',
        sidebarPath: './sidebars-ankh-r2.ts',
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
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'confidential-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'confidential',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './confidential',
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
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-helixlab.svg',
      },
      hideOnScroll: false,
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: '文档',
        // },
        {
          label: '全部',
          to: 'docs-products/keyboards',
          position: 'left',
          docsPluginId: 'docs-products',
          activeBasePath: 'docs-products',
        },
        { href: 'https://via.helix.site', label: 'VIA', position: 'left'},
        {
          label: 'Ankh R2',
          to: 'docs-ankh-r2/intro',
          position: 'left',
          docsPluginId: 'docs-ankh-r2',
          activeBasePath: 'docs-ankh-r2',
          className: 'ankh-with-badge',
        },
        {
          label: 'Elysium',
          to: 'docs-elysium/intro',
          position: 'left',
          docsPluginId: 'docs-elysium',
          activeBasePath: 'docs-elysium',
          className: 'elysium-with-badge',
        },
        // { to: 'https://www.helix.site/blogs/resources', label: '下载', position: 'left' },
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

    algolia: {
      // Algolia 提供的应用 ID
      appId: 'MVJL0VX104',

      //  公开 API 密钥：提交它没有危险
      apiKey: '25780f962fa1cddb31075cb80797aebb',

      indexName: 'helix',

      // 可选：见下文
      contextualSearch: true,
    },

    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: '#1b1b1d'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
