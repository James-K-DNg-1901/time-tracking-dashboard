/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        22: '7.5rem',
        37: '10rem',
        81: '22rem',
        100: '27.8rem'
      },
      color: {
        workBox: 'hsl(15, 100%, 70%)',
        playBox: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        care: 'hsl(43, 84%, 65%)'
      }
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    },
  },
  plugins: [],
}

