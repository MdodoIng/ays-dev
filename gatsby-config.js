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
      icon: "src/assets/images/icon.png",
      name: `AYS JEWELS`,
      short_name: `AYS JEWELS`,
      description: `A wide range of jewelry that can elevate every occasion to grandeur, which is the embodiment of purity and elegance. Not only your jewelry will speak to your beauty, but it will be mirrored in the radiance of your eyes.`,
      lang: `en`,
      display: `standalone`,
      start_url: `/`,
      background_color: `#06231A`,
      theme_color: `#fff`,
      icon_options: {
        purpose: `any maskable`,
      },
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-offline' , {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images` ,
    },
  },]
};