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
        'brutal-black': '#000000',
        'brutal-white': '#FFFFFF',
      },
      fontFamily: {
        'elms': ['"Elms Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'brutal-xl': ['clamp(3rem, 12vw, 9rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'brutal-lg': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'brutal-md': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
      },
      borderWidth: {
        'brutal': '4px',
        'brutal-lg': '6px',
      },
      boxShadow: {
        'brutal-sm': '6px 6px 0 #000000',
        'brutal': '12px 12px 0 #000000',
        'brutal-lg': '16px 16px 0 #C9704F',
        'brutal-xl': '20px 20px 0 #C9704F',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
