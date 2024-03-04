/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        circulaLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) 100px);"
      }
    },
  },
  plugins: [],
};
