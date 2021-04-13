const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `That Mexican Place`,
    description: `That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido`,
    author: `@salemaziel`,
    siteUrl: `https://thatmexicanplace.net`,
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
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: 'That Mexican Place',
        titleTemplate: 'That Mexican Place | %s ',
        description: 'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
        canonical: 'https://thatmexicanplace.net/',
        defaultOpenGraphImageHeight: 1200,
        defaultOpenGraphImageWidth: 1200,
//        mobileAlternate: {
//          media: 'only screen and (max-width: 640px)',
//          href: 'https://m.canonical.ie',
//        },
//        languageAlternates: [
//          {
//            hrefLang: 'de-AT',
//            href: 'https://www.canonical.ie/de',
//          },
//        ],
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://thatmexicanplace.net',
          title: 'That Mexican Place',
          description: 'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
          images: [
            {
              url: 'https://thatmexicanplace.net/logo/logo.png',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thatmexicanplace.net',
        sitemap: 'https://thatmexicanplace.net/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `That Mexican Place`,
        short_name: `That Mexican Place`,
        start_url: `/`,
        background_color: `#e53e3e`,
        theme_color: `#2f855a`,
        display: `minimal-ui`,
        icon: `src/images/logo-that-mexican-place-old.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    }
  ]
};
