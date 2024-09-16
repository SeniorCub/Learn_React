/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               container: {
                    center: true,
                    padding: '4rem',
               },
               colors: {
                    'color1': '#878AF5',
                    'color2': '#666AF6',
                    'color3': '#31446c',
                    'color4': "#F5A921",                                                   
                    'color5': "#F4863C",                                                   
               },
          },
     },
     plugins: [
          daisyui,
     ],
}