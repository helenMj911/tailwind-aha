/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      // display: {
      //   'group': ['group-focus'],
      // }
    }
  },
  // variants: {
  //   extends: {
  //     display: ['group-focus']
  //   },
  // },
  plugins: [],
}