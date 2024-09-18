/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': '"Roboto", system-ui',
        'Ser': '"Playfair Display", serif',
      }
    },
  },
  plugins: [],
}

