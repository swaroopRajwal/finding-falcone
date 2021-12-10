const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        amber: colors.teal,
        gray: colors.trueGray,
        darkTeal: '#1B4641',
        yellow: '#FFAB4C',
        dark: '#142F43',
        pink: '#FF5F7E',
        tailwindpink: colors.pink,
        violet: '#B000B9'
      },
      screens: {
        'sm': '730px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
}
