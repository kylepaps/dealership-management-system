module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vehicle-form': '1300px',
      'client-form': '988px'
    },
    extend: {
      width: {
        navbar: 'calc(100vw - 224px)'
      },
      height: {
        body: 'calc(100vh - 96px)'
      }
    },
    fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      }
  },
  plugins: [],
  darkMode: 'class',
}
