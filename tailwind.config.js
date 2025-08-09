/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Sky-500
          600: '#0284c7', // Sky-600
        },
        secondary: {
          400: '#a78bfa', // Violet-400
          500: '#8b5cf6', // Violet-500
        },
        dark: {
          800: '#1e293b', // Slate-800
          900: '#0f172a', // Slate-900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography
        'fluid-sm': ['0.875rem', '1.25rem'], // 14px
        'fluid-base': ['1rem', '1.5rem'], // 16px
        'fluid-lg': ['1.125rem', '1.75rem'], // 18px
        'fluid-xl': ['1.25rem', '1.75rem'], // 20px
        'fluid-2xl': ['1.5rem', '2rem'], // 24px
        'fluid-3xl': ['clamp(1.75rem, 5vw, 2.5rem)', '1.1'], // Fluid heading
        'fluid-4xl': ['clamp(2rem, 6vw, 3rem)', '1.1'], // Fluid heading
        'fluid-5xl': ['clamp(2.5rem, 7vw, 3.5rem)', '1.1'], // Fluid heading
      },
      spacing: {
        'section': '5rem', // 80px
        'section-lg': '7rem', // 112px
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom right, #ffffff, #f0f9ff)',
        'gradient-dark': 'linear-gradient(to bottom right, #030712, #111827)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}