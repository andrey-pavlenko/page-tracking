module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.pug'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['PTRootUI', 'Verdana', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  separator: '_',
};
