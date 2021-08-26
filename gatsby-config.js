module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bradleystaples.com',
    title: 'Bradley Staples',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-N63SDG0RPC',
        head: true
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet'
  ],
};
