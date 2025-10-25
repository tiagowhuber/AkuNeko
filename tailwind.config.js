/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'clay-warm': '#D4A574',
        'clay-dark': '#8B6F47',
        'terracotta': '#C9704F',
        'earth-brown': '#5D4E37',
        'cream': '#F5F1E8',
        'white-clay': '#FDFAF5',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
