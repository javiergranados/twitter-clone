module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        twitterBlue: '#1DA1F2',
        twitterDarkBlue: '#15212b',
        twitterGray: '#3d5466',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
