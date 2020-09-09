// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Eric Fortney|Developer|Photographer',
  siteDescription: 'Photographer and web developer based in the greater Houston, Texas area.',
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/photography/**/*.md',
        typeName: 'PhotoEntry'
      }

    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/dev/**/*.md',
        typeName: 'DevEntry'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
  ]
}
