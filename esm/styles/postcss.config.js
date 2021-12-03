/* eslint-disable global-require */
var tailwindConfig = require('./tailwind.config');

module.exports = {
  plugins: [require('postcss-easy-import'), require('tailwindcss')(tailwindConfig), require('autoprefixer')]
};