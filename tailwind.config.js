/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'headerShadow': '0 1px 2px rgba(0, 0, 0, 0.13), 0 0px 2px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        'bodyBackground': 'rgb(247,247,248)'
      }
    },
  },
  plugins: [],
}

