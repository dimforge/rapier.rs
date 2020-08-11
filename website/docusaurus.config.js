const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Rapier',
  tagline: 'Fast and cross-platform physics engine for the Rust programming language.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'error', // 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    prism: {
        theme: require('prism-react-renderer/themes/github'),
        additionalLanguages: ['toml', 'rust'],
    },
//    announcementBar: {
//      id: 'supportus',
//      content:
//        '⭐️ If you like Rapier, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/dimforge/rapier">GitHub</a>! ⭐️',
//    },
    navbar: {
      title: 'Rapier',
      logo: {
        alt: 'Rapier Logo',
        src: 'img/rapier_logo_color_small.svg',
      },
      hideOnScroll: true,
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://rapier.rs/demos2d/index.html', // FIXME: should depend on the base url.
          label: 'Demos 2D ↪',
          position: 'left',
        },
        {
          href: 'https://rapier.rs/demos3d/index.html', // FIXME: should depend on the base url.
          label: 'Demos 3D ↪',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/dimforge/rapier',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'Demos 2D ↪',
              href: 'https://rapier.rs/demos2d/index.html',
            },
            {
              label: 'Demos 3D ↪',
              href: 'https://rapier.rs/demos3d/index.html',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/rapier',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/G7JtTX',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/dimforge',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/dimforge/rapier',
            // },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Dimforge EURL. Website built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'user_guides/about_rapier',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dimforge/rapier.rs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
      'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css'
  ]
};
