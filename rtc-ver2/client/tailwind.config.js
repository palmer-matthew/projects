module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "red-hat": ['"Red Hat Text"', 'sans-serif']
      },
      color:{
        primary: '#01101B',
        grey: '#2D3944',
        accent: '#27B281'
      }
    },
  },
  plugins: [],
}
