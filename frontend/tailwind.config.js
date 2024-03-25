/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1C1A19',
        orange: '#CD773A',
        pink:'#F87171',
        white: '#ffffff',
        contrast: '#24201D',
      },
    
    },
  },
  plugins: [],
}
