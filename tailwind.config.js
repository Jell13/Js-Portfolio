/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b  5px, #1b1b1b 100px);",
        circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5  8px, #f5f5f5 40px);",
        circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b  8px, #1b1b1b 40px);"
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5"
      }
    },
  },
  plugins: [],
};