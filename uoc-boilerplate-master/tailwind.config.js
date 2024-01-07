/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/participants.html"],
  theme: {
    extend: {
      boxShadow: {
        'upper': '0 4px 8px rgba(0, 0, 0, 20%)',
      },
      colors: {
        'gris': '#f7f7f7',
        'blau': '#02055D',
        'salmo': '#FF6752',
        'grisfosc': '#D3D3D3'
      },
      fontFamily: {
        'lucida': ['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
  ],
};
