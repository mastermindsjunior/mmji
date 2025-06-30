/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        'bp-500': '500px',
        'bp-900': '900px',
        'xlg': '1152px',
        '1440': '1440px',
        '3xl': '1745px',
        '4xl': '1920px',
        '5xl': '2304px',
      },
       colors: {
        'primary': '#0e96cc',
      },

    },
  },
  plugins: [],
}
// #0e96cc