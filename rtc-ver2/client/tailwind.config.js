module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rh: ['"Red Hat Text"', 'sans-serif'],
        ks: ['"Kumbh Sans"', 'sans-serif']
      },
      colors: {
        primary: '#01101B',
        grey: '#2D3944',
        accent: '#27B281',
        cultured: '#F5F5F5'
      },
      minWidth: {
        '1/3': '33%'
      },
      minHeight: {
        'modal': '450px'
      }
    },
  },
  plugins: [],
}
