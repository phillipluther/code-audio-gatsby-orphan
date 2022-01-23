module.exports = {
  siteMetadata: {
    url: 'https://code.audio',
    name: 'Code/Audio',
    description: 'Audio and Software Engineering on the Web',
    author: 'Phillip Luther',
    social: [
      {
        name: 'twitter',
        contact: '@phillipluther',
        label: '@phillipluther on Twitter',
        link: 'https://twitter.com/phillipluther',
      },
      {
        name: 'youtube',
        label: 'Code/Audio YouTube Channel',
        link: 'https://youtube.com/phillipluther',
      },
      {
        name: 'github',
        label: 'Code/Audio repos on GitHub',
        link: 'https://github.com/phillipluther',
      },
      {
        name: 'email',
        contact: 'hello@code.audio',
        label: 'Email hello@code.audio',
        link: 'mailto:hello@code.audio',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 760,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Code/Audio',
        short_name: 'Code/Audio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#011223',
        display: 'standalone',
        icon: 'src/images/code-audio-badge.png',
      },
    },
  ],
};
