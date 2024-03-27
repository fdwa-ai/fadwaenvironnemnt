/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./pulic/**/*.{html,js,html}"],
  theme: {
    light: {
      mediaQuery: prefersLight /* "@media (prefers-color-scheme: light)" */,
    },
    dark: {
      mediaQuery: prefersDark /* "@media (prefers-color-scheme: dark)" */,
    },
  },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'gris': '#3b4252',
        '--clr-accent-600': '#71C9CE',
        sky: {
          DEFAULT: '#87CEEB', // Adjust the hex code to the color you desire
          // You can define additional shades if needed
          400: '#6BB6E0',
          darker: '#4682B4',
          lighter: '#ADD8E6',
          500:'#71C9CE'
        },
        
      },
     
      },
    }
  
    

    



  
  
 


