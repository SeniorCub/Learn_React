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
                    'pry': '#111827',
                    'sec': '#F42C37',                                                                                                                                     
               }
          },
     },
     plugins: [],
}