module.exports = {
  siteMetadata: {
    url: 'https://oneoh.one',
    name: '[That] 101',
    description: 'Complicated things explained simply',
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
  ],
};
