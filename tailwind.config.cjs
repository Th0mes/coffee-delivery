const theme = {
  'purple-dark': '#4B2995',
  purple: '#8047F8',
  'purple-light': '#EBE5F9',
  'yellow-dark': '#C47F17',
  yellow: '#DBAC2C',
  'yellow-light': '#F1E9C9',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: theme,
      backgroundColor: theme,
      borderColor: theme,
      borderRadius: {
        '4xl': '36px',
      },
    },
  },
  plugins: [],
}
