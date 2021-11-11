module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgray: '#282c34'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
