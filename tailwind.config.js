/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'header-navbar': '#ffba00',
        'primary': '#003a7c'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}

