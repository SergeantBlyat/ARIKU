/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './node_modules/preline/dist/*.js',
  './node_modules/flowbite/**/*.js',
  '*.html', 
  './src/**/*.{html, js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('preline/plugin',
    'flowbite/plugin'
    )
  ],
}