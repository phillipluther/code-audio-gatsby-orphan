module.exports = {
  siteMetadata: {
    url: 'https://oneoh.one',
    title: '[That] 101',
    description: 'Complicated things explained simply',
    author: 'Phillip Luther',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
