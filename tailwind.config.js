/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": '#1E40AF', // Blue
        "secondary-color": '#FBBF24'// Yellow
    }
  },
  },
  plugins: [],
}

