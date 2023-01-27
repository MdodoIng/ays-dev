/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AYS`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-offline' , {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images` ,
    },
  },]
};