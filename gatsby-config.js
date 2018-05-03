module.exports = {
  siteMetadata: {
    title: 'Shelby Herndon',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://www.houseofherons.comg`,
        },
      },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'tcag1fmku1kj',
        accessToken: '800645f70d35685ffcd4a4b3512b4f56a4b2687a0d1907c5143b0b8a94a1b40f'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-netlify'
],
}
