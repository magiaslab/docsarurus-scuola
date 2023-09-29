// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guide Istituto Marconi',
  tagline: 'Guide per alunne e alunni, famiglie e personale scolastico',
  favicon: 'img/a-emblema.jpg',

  // Set the production url of your site here
  url: 'https://guide.istituto-marconi.edu.it',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      
    ],
  ],

  blog: {
    path: 'blog',
    // Simple use-case: string editUrl
    // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
    // Advanced use-case: functional editUrl
    editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
      `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
    editLocalizedFiles: false,
    blogTitle: 'Blog title',
    blogDescription: 'Blog',
    blogSidebarCount: 5,
    blogSidebarTitle: 'All our posts',
    routeBasePath: 'blog',
    include: ['**/*.{md,mdx}'],
    exclude: [
      '**/_*.{js,jsx,ts,tsx,md,mdx}',
      '**/_*/**',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/__tests__/**',
    ],
    postsPerPage: 10,
    blogListComponent: '@theme/BlogListPage',
    blogPostComponent: '@theme/BlogPostPage',
    blogTagsListComponent: '@theme/BlogTagsListPage',
    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
    remarkPlugins: [require('remark-math')],
    rehypePlugins: [],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
    truncateMarker: /<!--\s*(truncate)\s*-->/,
    showReadingTime: true,
    feedOptions: {
      type: '',
      title: '',
      description: '',
      copyright: '',
      language: undefined,
      createFeedItems: async (params) => {
        const {blogPosts, defaultCreateFeedItems, ...rest} = params;
        return defaultCreateFeedItems({
          // keep only the 10 most recent blog posts in the feed
          blogPosts: blogPosts.filter((item, index) => index < 10),
          ...rest,
        });
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Guide Istituto "G Marconi"',
        logo: {
          alt: 'My Site Logo',
          src: 'img/a-emblema.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
            title: 'Guide',
            items: [
              {
                label: 'Guide per tutti',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Link Utili',
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
            title: 'Altri link',
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
        copyright: `Copyright © ${new Date().getFullYear()} Team Digitale Istituto "G. Marconi" Campiglia Marittima (Li)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
