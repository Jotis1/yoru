const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
