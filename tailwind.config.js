/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", // Scans for Tailwind classes in all HTML files in the root directory
    "./**/*.html", // Scans for Tailwind classes in all HTML files in any subdirectory
    "./**/*.js", // If you have Tailwind classes inside JavaScript files (e.g., dynamic class generation)
    "./images/**/*.{html,js}", // Scans images folder (in case you have HTML or JS files inside)
    "./css/**/*.{html,js}" // Scans for HTML or JS inside the css folder, if needed
  ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  