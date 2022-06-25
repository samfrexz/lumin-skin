/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        navWidth: '93%',
        bestWidth: '90%',
        cardWidth: '85%',
        over: '1200px'
      },
      colors: {
        bestBg: '#DFE2E0',
        btnBg: '#4B5548',
        rate: '#FFA501',
        bodybg: '#F5F5F4',
        mob: '#4D5249'
      },
      fontSize: {
        small: '14px'
      },
    },
  },
  plugins: [],
}
