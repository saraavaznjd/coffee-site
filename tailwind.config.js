/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      "IranSans": "IRANSans",
      "IranSans-Black": "IRANSans Black"
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1396px',
      },
    },
    
extend: {
  colors:{
    'coffee': '#C19A6B',
  },
  boxShadow: {
    'primary': '0 0 30px 0px rgba(0, 0, 0, 0.1)',
  },
  backgroundImage: {
    'turkish-coffee': "url('../coffee-bg/turkish-coffee.jpg')",
    'espresso': "url('../coffee-bg/espresso.jpg')",
    'cup-rio': "url('../coffee-bg/coffee-bag.jpg')",
    'coffee-tools': "url('../coffee-bg/coffee-tools.jpg')",
    'chocolate': "url('../coffee-bg/coffee-chocolate.jpg')",
    'horeka': "url('../coffee-bg/IMG_6995.jpg')",
    'coffee-tools-2': "url('../coffee-bg/coffee-tools2.jpg')",
    'coffee-pwder': "url('../coffee-bg/coffee-powder-2.jpg')",
    'hot-chocolate': "url('../coffee-bg/hot-chocolate.jpg')",
    'masala': "url('../coffee-bg/masala-tea.jpg')",
    'mocapot': "url('../coffee-bg/mocapat.jpg')",
    'french-press': "url('../coffee-bg/frenchpress-2.jpg')",
  },
},
plugins: [],
}
}
