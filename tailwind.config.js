/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // borderWidth: {
    //   line : '1px',
    // },
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
        bodybg: '#F5F5F4'
      }
    },
  },
  plugins: [],
}
