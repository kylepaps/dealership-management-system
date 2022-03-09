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
        navbar: 'calc(100vw - 224px)',
        closedsidebar: 'calc(100% - 48px)'
      },
      height: {
        body: 'calc(100vh - 96px)',
        activity: 'calc(100% - 224px)'
      }
    },
    fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Lobster: ['Lobster', 'cursive']
      }
  },
  plugins: [],
  darkMode: 'class',
}
