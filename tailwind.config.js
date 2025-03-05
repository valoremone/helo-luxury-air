/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    'bg-gunmetal',
    'bg-gold',
    'text-gunmetal',
    'text-gold',
    'dark:bg-jet-300',
    'dark:text-platinum-500',
    'font-display'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New color palette
        jet: {
          DEFAULT: '#363636',
          100: '#0b0b0b',
          200: '#151515',
          300: '#202020',
          400: '#2b2b2b',
          500: '#363636',
          600: '#5e5e5e',
          700: '#868686',
          800: '#aeaeae',
          900: '#d7d7d7'
        },
        gunmetal: {
          DEFAULT: '#242f40',
          100: '#070a0d',
          200: '#0f131a',
          300: '#161d27',
          400: '#1d2734',
          500: '#242f40',
          600: '#425776',
          700: '#627ea7',
          800: '#97a9c4',
          900: '#cbd4e2'
        },
        gold: {
          DEFAULT: '#cca43b',
          100: '#2a210b',
          200: '#544316',
          300: '#7f6421',
          400: '#a9852b',
          500: '#cca43b',
          600: '#d7b663',
          700: '#e1c88a',
          800: '#ebdbb1',
          900: '#f5edd8'
        },
        platinum: {
          DEFAULT: '#e5e5e5',
          100: '#2e2e2e',
          200: '#5c5c5c',
          300: '#8a8a8a',
          400: '#b8b8b8',
          500: '#e5e5e5',
          600: '#ebebeb',
          700: '#f0f0f0',
          800: '#f5f5f5',
          900: '#fafafa'
        },
        
        // Map the semantic color names to our new palette
        primary: '#242f40', // gunmetal
        secondary: '#363636', // jet
        tertiary: '#cca43b', // gold
        accent: '#cca43b', // gold
        light: '#ffffff',
        dark: '#0b0b0b', // jet-100
        
        // Status colors
        success: '#34D399',
        warning: '#FBBF24',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Elegant font for headings
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

