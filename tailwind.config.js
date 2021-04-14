module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
  },
  plugins: []
}
