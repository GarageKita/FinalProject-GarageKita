module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          '50': '#f3f9f9', 
          '100': '#e6f3f3', 
          '200': '#c2e0e2', 
          '300': '#9dcdd1', 
          '400': '#53a8ae', 
          '500': '#09828b', 
          '600': '#08757d', 
          '700': '#076268', 
          '800': '#054e53', 
          '900': '#044044'
        },
        rust: {
          '50': '#fcf5f4', 
          '100': '#f8ece8', 
          '200': '#eecec6', 
          '300': '#e3b1a4', 
          '400': '#cf7760', 
          '500': '#ba3c1c', 
          '600': '#a73619', 
          '700': '#8c2d15', 
          '800': '#702411', 
          '900': '#5b1d0e'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
