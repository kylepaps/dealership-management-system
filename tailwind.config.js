module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vehicle-form': '1300px'
    },
    extend: {
      width: {
        navbar: 'calc(100vw - 224px)'
      }
    },
    fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      }
  },
  plugins: [],
  darkMode: 'class',
}
