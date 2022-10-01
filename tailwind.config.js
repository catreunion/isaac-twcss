/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Inter', ...defaultTheme.fontFamily.sans],
    display: ['Lexend', ...defaultTheme.fontFamily.sans],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
