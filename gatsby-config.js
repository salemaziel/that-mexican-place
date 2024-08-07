const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `That Mexican Place`,
    description: `That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido`,
    author: `@salemaziel`,
    siteUrl: `https://www.thatmexicanplace.net`,
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
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-5XJ1KGDT8Y",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: 'That Mexican Place',
        titleTemplate: 'That Mexican Place | %s ',
        description: 'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
        canonical: 'https://www.thatmexicanplace.net/',
        defaultOpenGraphImageHeight: 1200,
        defaultOpenGraphImageWidth: 1200,
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.thatmexicanplace.net',
          title: 'That Mexican Place',
          description: 'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
          images: [
            {
              url: 'https://www.thatmexicanplace.net/logo/logo.png',
              width: 800,
              height: 600,
              alt: 'That Mexican Place Logo',
            },
          ],
          site_name: 'That Mexican Place',
        },
        twitter: {
          handle: '@thatmexicanplace',
          site: '@thatmexicanplace',
          cardType: 'summary_large_image',
        },
//        facebook: {
//          appId: '1234567890',
//        },
      },
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
      resolve: `gatsby-plugin-sitemap`,
    },
/*    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.thatmexicanplace.net',
        sitemap: 'https://www.thatmexicanplace.net/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }, */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `That Mexican Place`,
        short_name: `That Mexican Place`,
        description: `That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido`,
        start_url: `/`,
        lang: `en`,
        background_color: `#e53e3e`,
        theme_color: `#2f855a`,
        display: `minimal-ui`,
        icon: `src/images/logo-that-mexican-place-old.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
    }
  ]
};
