/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['NotoSans-Regular'],
      },
    },
  },
  plugins: [],
}
