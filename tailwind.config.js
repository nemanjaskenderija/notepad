/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      minWidth: {
        '100': '25rem',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
