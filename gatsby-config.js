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
      name: `AYS Jewels | Premium Antique Galleria | Kondotty`,
      short_name: `AYS Jewels | Premium Antique Galleria | Kondotty`,
      description: `Discover the beauty and elegance of antique jewelry at AYS Jewels Kondotty, a premium shop where you can find unique and timeless pieces to add to your collection.`,
      lang: `en`,
      display: `standalone`,
      start_url: `/`,
      background_color: `#06231A`,
      theme_color: `#fff`
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-offline' , {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images` ,
    },
  },]
};