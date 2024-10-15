const path = require('path')
const fs = require('fs')

// Change this value to update what the un-versioned docs url should be
const unreleasedTauriVersion = ''
var lastestReleasedVersion

// Checks if Docusaurus has been versioned before and sets versions accordingly
try {
  lastestReleasedVersion = JSON.parse(
    fs.readFileSync('versions.json', 'utf-8')
  )[0]
} catch {
  console.error()
}



const navbarItems = [
  {
    label: 'FFmpeg',
    type: 'docSidebar',
    sidebarId: 'ffmpeg',
  },

  {
    label: 'Git',
    type: 'docSidebar',
    sidebarId: 'git',
  },

  {
    label: 'Docker',
    type: 'docSidebar',
    sidebarId: 'docker',
  },

  {
    label: 'Network',
    type: 'docSidebar',
    sidebarId: 'network',
  },

  {
    type: 'localeDropdown',
    position: 'right',

  },

]

const footerLinks = [
  {
    title: 'Navigation',
    items: [
      {
        label: 'FFmpeg',
        to: 'ffmpeg',
      },
      {
        label: 'Git',
        to: 'git',
      },
      {
        label: 'Docker',
        to: 'docker',
      },
      {
        label: 'Network',
        to: 'network',
      },
    ],
  },
  {
    title: 'Reference Docs',
    items: [
      {
        label: 'FFmpeg',
        href: 'https://ffmpeg.org/ffmpeg.html',
        target: '_self',
      },
      {
        label: 'Git',
        href: 'https://git-scm.com/doc',
        target: '_self',
      },
      {
        label: 'Docker',
        href: 'https://docs.docker.com/',
        target: '_self',
      },
      {
        label: 'Xiu',
        href: 'https://www.rustxiu.com/',
        target: '_self',
      },
    ]

  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Mail',
        href: 'mailto:harlanc@foxmail.com',
        target: '_self',
      },

    ],
  },
  {
    title: 'Network',
    items: [
      {
        label: 'GitHub',
        href: "https://github.com/LiveMediaTools/LiveMediaTools.github.io",
        target: '_self',
      },
    ],
  },

]

async function siteConfig() {
  const mdxMermaid = await import('mdx-mermaid')
  return {
    title: 'YCMDs',
    tagline:
      'Building a Stable, Secure, and Efficient Live Streaming Media Service',
    organizationName: 'LiveMediaTools',
    projectName: 'LiveMediaTools.github.io',
    baseUrl: '/',
    favicon: '/meta/yourcmds.png',
    url: 'https://ycmds.cc/',
    i18n: {
      defaultLocale: 'zh-cn',
      locales: ['en', 'zh-cn',],
    },
    themeConfig: {
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/oceanicNext'),
        additionalLanguages: ['rust', 'powershell', 'bash', 'toml', 'json5'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'YCMDs Logo',
          src: 'meta/yourcmds.svg',
          srcDark: 'meta/yourcmds.svg',
        },
        items: navbarItems,
      },

      footer: {
        style: 'dark',
        links: footerLinks,
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} YCMDs. CC-BY / MIT`,
      },
       algolia: {
         apiKey: '6c2af84be0fab2c04c4c7a5a309e4539',
         indexName: 'ycmds',
         appId: 'ZXQF8SEKQU',
         placeholder: 'Search...'
       },
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            routeBasePath: '/',
            path: './docs/',
            exclude: ['api/rust/**', 'api/js/js-api.json', '**/_*.{md,mdx}'],
            sidebarPath: require.resolve('./sidebars.js'),
            showLastUpdateTime: true,
            editUrl: ({ docPath, versionDocsDirPath }) => {
              if (docPath === 'api/cli.md') {
                return 'https://github.com/LiveMediaTools/LiveMediaTools.github.io/tree/main/tooling/cli/src'
              } else if (docPath === 'api/config.md') {
                return 'https://github.com/LiveMediaTools/LiveMediaTools.github.io/edit/main/core/tauri-utils/src/config.rs'
              } else if (docPath.startsWith('api/js')) {
                const mod = docPath.split('/').at(-1).split('.')[0]
                return `https://github.com/LiveMediaTools/LiveMediaTools.github.io/edit/main/tooling/api/src/${mod}.ts`
              } else {
                return `https://github.com/LiveMediaTools/LiveMediaTools.github.io/edit/main/${versionDocsDirPath}/${docPath}`
              }
            },
            sidebarCollapsible: true,
            versions: {
              // Maps the working "current" version to a custom url instead of `next`
              //current: {
              //  label: unreleasedTauriVersion,
              //  path: unreleasedTauriVersion,
              //},
              // If there is a "latest" version, map url to version number
              ...(lastestReleasedVersion && {
                [lastestReleasedVersion]: {
                  label: lastestReleasedVersion,
                  path: lastestReleasedVersion,
                },
              }),
            },
            remarkPlugins: [
              [
                mdxMermaid.default,
                {
                  mermaid: {
                    theme: 'default',
                    themeCSS: fs.readFileSync('./src/css/mermaid.css', 'utf-8'),
                  },
                },
              ],
            ],
            async sidebarItemsGenerator({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              const sidebarItems = await defaultSidebarItemsGenerator(args)
              return sidebarItems.filter(
                (item) =>
                  // This makes sure that the landing pages are not duplicated in the sidebars
                  item.id !== 'ffmpeg/readme' && item.id !== 'git/readme' && item.id !== 'docker/readme' && item.id !== 'network/readme'
              )
            },
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
           gtag: {
             //trackingID: 'G-2H6DLY9T0Y',
             trackingID: 'G-XXR2RYVJB8',
             anonymizeIP: true,
           },
        },
      ],
    ],
    plugins: [
      path.resolve('./plugins/external-assets'),
      [
        '@docusaurus/plugin-pwa',
        {
          debug: process.env.NODE_ENV === 'development',
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'saveData',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/meta/favicon-96x96.png',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: '/meta/favicon-apple-touch-icon.png',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: '/meta/favicon-144x144.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/meta/manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#0F0F0F',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#0F0F0F',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#0F0F0F',
            },
          ],
        },
      ],
    ],

    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('esbuild-loader'),
        options: {
          loader: 'tsx',
          format: isServer ? 'cjs' : undefined,
          target: isServer ? 'node12' : 'es2017',
        },
      }),
    },
  }
}

module.exports = siteConfig
