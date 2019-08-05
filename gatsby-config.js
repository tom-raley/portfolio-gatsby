module.exports = {
  siteMetadata: {
    title: `Tom Raley`,
    description: `Tom Raley's Portfolio Website`,
    author: `Tom Raley`,
    siteUrl: `https://tomraley.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126572629-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/dist/images`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        whitelist: ['nav', 'nav-item', 'navbar-brand', 'home-button', 'hamburger-box', 'hamburger-inner', 'navbarSupportedContent', 'navbar-collapse', 'collapse', 'navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'sticky-top', 'mobile-nav-button', 'hamburger--spin', 'navbar-toggler', 'mr-auto', 'navbar-nav', 'nav-link', 'show', 'is-active', 'collapsed']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

