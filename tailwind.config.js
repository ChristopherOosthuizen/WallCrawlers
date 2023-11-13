/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'uh-red': '#eb3b5c',
        'uh-white': '#ffffff',
        'rock-wrangler-suble': '#d4bbbe',
      },
    },
  },
  plugins: [],
}