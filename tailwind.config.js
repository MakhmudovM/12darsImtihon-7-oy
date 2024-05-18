/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      'regal-blue': '#191919',
      'orange-bg': '#D87D4A',
    },
  },
  plugins: [require('daisyui'),],
}

