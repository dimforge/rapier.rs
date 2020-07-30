module.exports = {
  title: 'Rapier',
  tagline: 'Fast and cross-platform physics engine for the Rust programming language.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Rapier',
      logo: {
        alt: 'Rapier Logo',
        src: 'img/rapier_logo_color_small.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/dimforge/rapier',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
            {
              label: 'Twitter',
              href: 'https://twitter.com/dimforge',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/dimforge/rapier',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dimforge EURL. Website built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js')
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/dimforge/rapier.rs/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
