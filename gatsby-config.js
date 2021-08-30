module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bradleystaples.com',
    title: 'Bradley Staples',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '284362829',
        head: true
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet'
  ],
};
