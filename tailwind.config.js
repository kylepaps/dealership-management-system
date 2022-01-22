module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        navbar: 'calc(100vw - 224px)'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
