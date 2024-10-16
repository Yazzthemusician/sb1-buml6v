/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-dark': 'var(--primary-color-dark)',
        secondary: 'var(--secondary-color)',
        'secondary-dark': 'var(--secondary-color-dark)',
        accent: 'var(--accent-color)',
        'accent-dark': 'var(--accent-color-dark)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};