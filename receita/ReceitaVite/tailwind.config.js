/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Young Serif' : ['Young Serif'],
      
    },
    extend: {
      colors:{
        'whiteTail' : 'hsl(330, 100%, 98%)',
        'marron' : 'hsl(24, 5%, 18%)',
        'MarronClaro' : 'hsl(30, 10%, 34%)',
        'rosa' : 'hsl(332, 51%, 32%)',
        'rose' : 'hsl(330, 100%, 96%)',
        'ingredients' : 'hsl(14, 45%, 36%)'
      }
    },
  },
  plugins: [],
}