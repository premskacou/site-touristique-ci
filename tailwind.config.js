/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'akwaba-gold': {
          DEFAULT: '#F7931E',
          50: '#FDF6EB',
          100: '#FBECD6',
          400: '#FAAC4D',
          500: '#F7931E',
          600: '#D97706',
          700: '#B45309',
        },
        'akwaba-green': {
          DEFAULT: '#00A859',
          400: '#10B981',
          500: '#00A859',
          600: '#059669',
          700: '#047857',
        },
        'akwaba-dark': {
          900: '#0A0E17',
          800: '#121826',
          700: '#1F293D',
          600: '#2A3752',
        },
        'akwaba-coral': '#FF5A5F',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
