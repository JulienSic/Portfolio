/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        // Custom colors
        darker: '#21113C',
        darker2: '#110920',
        main: '#4142B1',
        main2: '#6062E3',
        light: '#D4D4EB',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
