const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.spec).{ts,tsx,html,mdx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      boxShadow: ['disabled'],
    },
  },
  plugins: [],
};
