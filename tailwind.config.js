/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,ts,js,jsx}', './app/*.{tsx, ts, js, jsx}'],
  presets: [[require('nativewind/preset')]],
  theme: {
    extend: {},
  },
  plugins: [],
}
