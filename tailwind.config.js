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
    'banner01': "url('../coffee-bg/banner01-ezgif.com-webp-to-jpg-converter.jpg')",
    'footer-texture': "url('/img/footer-texture.png')",
  },
},
plugins: [],
}
}
