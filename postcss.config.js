const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer({}),
    cssnano({}),
    purgecss({
      content: ['./**/*.html', './**/*.js'],
      whitelistPatterns: [/^has-text-/]
    })
  ]
}
