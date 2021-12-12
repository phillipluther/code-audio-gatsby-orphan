module.exports = {
  siteMetadata: {
    siteUrl: 'https://oneoh.one',
    title: '[That] 101',
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
