/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Young Serif' : ['Young Serif']
    },
    extend: {
      colors:{
        'whiteTail' : 'hsl(330, 100%, 98%)',
        'marrom' : 'hsl(24, 5%, 18%)'
      }
    },
  },
  plugins: [],
}