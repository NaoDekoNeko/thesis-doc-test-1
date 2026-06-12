import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Platform Engineering Docs',
  tagline: 'CI/CD · Docker · IaC · Observability',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://platform-eng.naodeko.site',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'NaoDekoNeko',
  projectName: 'thesis-doc-test-1',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  customFields: {
    apiBaseUrl: 'https://api.naodeko.site',
    docFolder: 'thesis-doc-test-1',
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/NaoDekoNeko/thesis-doc-test-1/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Platform Engineering',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://software-arch.naodeko.site/',
          label: 'Software Architecture →',
          position: 'left',
        },
        {
          href: 'https://github.com/NaoDekoNeko/thesis-doc-test-1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plataforma',
          items: [
            { label: 'CI/CD', to: '/docs/cicd/github-actions' },
            { label: 'Containers', to: '/docs/containers/docker-fundamentals' },
            { label: 'IaC', to: '/docs/iac/terraform-basics' },
            { label: 'Observability', to: '/docs/observability/logging' },
          ],
        },
        {
          title: 'Otros portales',
          items: [
            {
              label: 'Software Architecture Docs',
              href: 'https://software-arch.naodeko.site/',
            },
          ],
        },
        {
          title: 'Repositorio',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NaoDekoNeko/thesis-doc-test-1',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Thesis RAG PoC · NaoDekoNeko`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'hcl', 'docker', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
