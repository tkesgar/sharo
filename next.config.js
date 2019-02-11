const withSharo = require('sharo-scripts/next')

module.exports = withSharo({
  webpack(config) {
    // Add MDX and SCSS file extensions for Webpack auto-resolve.
    config.resolve.extensions.push('.md', '.mdx', '.sass', '.scss')

    return config
  }
})
