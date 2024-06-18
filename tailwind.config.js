/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary-yellow": "#ffb400",
            "background": '#111111',
            "background-heading": "#222222" ,
            "secondary-color": "rgba(255, 165, 0, 0.4)",
            "light-heading": "#666666"
        },
        fontFamily: {
          "poppins": 'poppins'
        }
    },
  },
  plugins: [],
  darkMode: "selector"
}

