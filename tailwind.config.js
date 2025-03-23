/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        peach:'#f5e0d5',
        beige:'#e8c8b8',
        charcoal: '#2b2b2b',
        warmWhite: '#faf8f6',
        rose: '#d48b82',
        olive: '#9aaf9e',
      },
      textColor: {
        charcoal:'#2b2b2b',
        rose: '#d48b82',
        olive: '#9aaf9e',
        warmWhite: '#faf8f6',
      },
      backgroundImage: {
        'peach-gradient': 'linear-gradient(to bottom, #f5e0d5, #e8c8b8)',
        'new-gradient': 'linear-gradient(to top, #e8c8b8, #f5e0d5, rgba(245, 224, 213, 0.3), transparent)',
        'movie-poster': "url('/popcorn_bg.jpg')",
        'wave' : "url('/rose_wave.png')"
      },
      borderColor:{
        charcoal:'#2b2b2b',
        rose: '#d48b82',
        olive: '#9aaf9e',
        warmWhite: '#faf8f6',
        'peach-gradient': 'linear-gradient(to bottom, #f5e0d5, #e8c8b8)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

