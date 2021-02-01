const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `That Mexican Place`,
    description: `That Mexican Place`,
    author: `@salemaziel`,
    siteUrl: `https://thatmexicanplace.viadelweb.com`,
    ...config
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./site/customization.yml`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Food Demo 02`,
        short_name: `Food 02`,
        start_url: `/`,
        background_color: `#dc3545`,
        theme_color: `#dc3545`,
        display: `minimal-ui`,
        icon: `src/images/logo-that-mexican-place.png`, // This path is relative to the root of the site.
      },
    },
  ]
};
