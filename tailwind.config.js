/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('D:\Projects\portfolio\public\hero-min-min.jpg')"
      }
    },
  },
  plugins: [],
}

