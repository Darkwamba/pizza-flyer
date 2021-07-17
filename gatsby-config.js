require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Pizzart Smart Flyer',
    description: 'A flyer with enhanched functions!',
    address:{street:'via Pincopallo 10',city:'Castello D\'argile'},
    coordinates:[44.6803392, 11.2927718],
    aperture:['Mar-sab 12-14 18-22:30','Dom 18-22:30','Chiusi lunedì e festivi a pranzo'],
    phone:'051-00001111',
    author: '@Darkwamba',
    social_instagram: 'pizz.art',
    siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-theme-material-ui',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATOCMS_API,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
   
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: process.env.INSTA_ACCOUNT,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
