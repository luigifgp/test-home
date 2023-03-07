/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //Background
        default: '#F0F0F1',
        box: '#000000',
        primary: '#FBAC00',
        secondary: '#F5F4F5',
      },
    },
  },
  plugins: [],
};
