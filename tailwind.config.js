/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', 'sans-serif'],
        'Edu':['Edu VIC WA NT Beginner', 'cursive']
      },
    },
  },
  plugins: [],
}