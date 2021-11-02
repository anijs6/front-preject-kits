'use strict'

module.exports = {
  plugins: ['jsdoc', 'prettier'],
  extends: [
    'airbnb',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
