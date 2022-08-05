module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bradleystaples.com',
    title: 'Bradley Staples'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-X8Z8MJL795'
        ],
        pluginConfig: {
          head: false,
          respectDNT: true
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet'
  ],
};
