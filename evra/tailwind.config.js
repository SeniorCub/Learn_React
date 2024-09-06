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
                    padding: '3rem',
               },
               colors: {
                    'pry': '#111827',
                    'sec': '#F42C37',
                    'ter': '#9CA3AF09',                                                                                                                
               }
          },
     },
     plugins: [],
}