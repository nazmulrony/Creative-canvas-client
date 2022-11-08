/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#81B441",
        dim: "#6f9c33",
        dark: "#252422",
        mid: "#555555",
        light: "#F5F5F5"
      },
      fontFamily: {
        lato: "'Lato', 'sans-serif'",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}