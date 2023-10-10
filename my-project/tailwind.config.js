/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx"
  ],
  theme: {
    extend: {
      screens: {
        "xs" : "325px"
      },
      colors: {
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue' : 'hsl(213, 19%, 18%)',
        'vdark-blue': 'hsl(216, 12%, 8%)',
        'orange': 'hsl(25, 97%, 53%)'
      }
    },
  },
  plugins: [],
}

