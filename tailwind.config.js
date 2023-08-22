const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.js', './src/app/*.js'],
  theme: {  
    extend: {
      screens: {
        'sm':'375px',
        'md':'620px',
        'lg':'910px',
        'xl':'1440px'
      },
      colors: {
        /*darkBlue: 'hsl(209, 23%, 22%)',*/
        /*veryDarkBlue: 'hsl(207, 26%, 17%)',*/
        veryDarkBlue: 'hsl(200, 15%, 8%)', /*(Light Mode Text)*/
        darkGray: 'hsl(0, 0%, 52%)', /*(Light Mode Input) */
        veryLightGray: 'hsl(0, 0%, 98%)', /*(Light Mode Background)*/
        white: 'hsl(0, 0%, 100%)' /*(Light Mode Elements)*/
      },
      fontFamily: {
        primary: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}

