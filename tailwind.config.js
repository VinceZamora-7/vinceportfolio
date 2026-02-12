/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eaf0fa',
          100: '#c8daf2',
          200: '#a3c1ea',
          300: '#6b98db',
          400: '#3c6fc7',
          500: '#1e4fa3',
          600: '#153a7a', // much darker
          700: '#102b5a',
          800: '#0b1d3a',
          900: '#071127',
        },
        cyan: colors.cyan,
      },
    },
  },
}

