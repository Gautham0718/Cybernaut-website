/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      'StudentsClubBG' : "url('../public/ClubBg.png')",
      'ReadyBg' : "url('../public/background.jpeg')",
      'LogoVideo' : "url('../public/Logo_Reveal.gif')",}
    },
  },
  plugins: [],
}
