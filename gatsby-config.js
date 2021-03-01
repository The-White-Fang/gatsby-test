module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
	{
        resolve: `gatsby-source-wordpress`,
        options: {
            // Your WordPress source.
			url: 'https://www.registerpartnership.in/graphql',
            // Only fetches posts, tags and categories from the baseUrl.
            includedRoutes: ['**/posts', '**/tags', '**/categories'],
            // Not using ACF so putting it off.
            useACF: false
        }
    },
	{
		resolve: 'gatsby-source-gravityforms',
		options: {
            baseUrl: `https://www.registerpartnership.in`,
			allowSelfSigned: false,
			api: {
				key: 'ck_3f41b25468335a28c3346b013d73c4937474eb77',
				secret: 'cs_ef3b40d7125af61b87ebe128e8284b8a8a222185'
			},
			basicAuth: {
				username: 'himanshujain1987@gmail.com',
				password: '0rb1 h2Yy pvYJ PlDK nx69 xQIv',
			},
		}
	}
  ],
}
