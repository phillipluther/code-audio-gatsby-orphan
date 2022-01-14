module.exports = {
  siteMetadata: {
    url: 'https://code.audio',
    name: 'Code/Audio',
    description: 'Code/Audio',
    author: 'Phillip Luther',
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
        icon: 'src/code-audio-badge.png',
      },
    },
  ],
};
