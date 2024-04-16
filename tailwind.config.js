/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg1: "#F4F4F4",
        darkbg1: "#2A262B",
        darkbg2: "#484148",
        pink1: "#EA2678",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
