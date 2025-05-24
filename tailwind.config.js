/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mersin: ['"Mersin"']
      },
      screens: {
        'half': '1000px'
      },
    },
  },
  plugins: [],
}

