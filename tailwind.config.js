/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          primary: {
            50: '#EEEEEE',   // Light grey
            100: '#E5E5E5',
            200: '#CCCCCC',
            300: '#B3B3B3',
            400: '#999999',
            500: '#808080',
            600: '#666666',
            700: '#4D4D4D',
            800: '#31363F',   // Dark charcoal
            900: '#222831',   // Very dark blue-grey
          },
          accent: {
            50: '#F0F7F8',
            100: '#E1EFF0',
            200: '#C3DFE1',
            300: '#A5CFD2',
            400: '#87BFC3',
            500: '#76ABAE',   // Muted teal
            600: '#6A9BA0',
            700: '#5E8B92',
            800: '#527B84',
            900: '#466B76',
          }
        },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}