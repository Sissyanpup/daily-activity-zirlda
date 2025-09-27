/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home/index.html",
    "./Jadwal-harian/jadwal.html",
    "./sosmed/sosmed.html",
    "./gallery/gallery.html",
    "./blog/blog.html",
    "./blog/articles/playing-game.html",
    "./blog/articles/jalan-jalan.html",
    "./blog/articles/latihan-piano.html",
    "./blog/articles/sarapan-fav.html",
    "./blog/articles/menikmati-kampung.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },

    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },

      colors: {
      primary: '#881337',
      secondary: '#a1a1aa',
      dark: '#be185d',
      light: '#d4d4d8',
    },
    },
  },
  plugins: [],
}

