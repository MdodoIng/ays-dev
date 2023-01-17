/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'luxiaDisplay': 'Luxia-Display',
         'luxiaRegular': 'Luxia-Regular',
         'quasimodaLight': 'Quasimoda-Light',
         'quasimodaRegular': 'Quasimoda-Regular',

      },
      colors : {
      'primary': '#06231A',
      }
    },
  },
  plugins: [],
}