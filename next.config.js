const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript(withSass({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}))