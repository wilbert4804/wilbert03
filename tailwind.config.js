/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "codystar": ['Codystar', 'cursive']
      },
      colors: {
        colors: {

          "light-red": "hsl(0, 100%, 67%)",
  
          "orangey-yellow": "hsl(39, 100%, 56%)",
  
          "green-teal": "hsl(166, 100%, 37%)",
  
          "cobalt-blue": "hsl(234, 85%, 45%)",
  
   
  
          "light-slate-blue": "hsl(252, 100%, 67%)",
  
          "light-royal-blue": "hsl(241, 81%, 54%)",
  
   
  
          "violet-blue": "hsla(256, 72%, 46%, 1)",
  
          "persian-blue": "hsla(241, 72%, 46%, 1)",
  
        }
      }
    },
  },
  plugins: [],
}

