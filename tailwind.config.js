/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
   

    extend: {
      colors:{
        mainColor:"#2C3E50",
        footerColor:"#1A252F",
        wiredGreen:"#1ABC9C",
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}

