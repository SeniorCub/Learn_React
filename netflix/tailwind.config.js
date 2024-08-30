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
                    padding: '8vw',
               },
               colors: {
                    'pry': 'black'
               }
          },
     },
     plugins: [],
}