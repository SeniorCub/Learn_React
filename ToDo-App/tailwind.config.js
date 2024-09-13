/** @type {import('tailwindcss').Config} */
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
                    'primary': '#0582FF',
                    'dark': '#121212',
                    'gray': '#f6f5f4',
                    'gray2': "#F0EEED",                                                   
               }
          },
     },
     plugins: [],
}