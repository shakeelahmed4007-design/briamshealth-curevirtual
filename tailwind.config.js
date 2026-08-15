/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#01375B',
          50: '#E6EEF3',
          100: '#CCDCE7',
          600: '#023E66',
          700: '#012C4C',
          800: '#012340',
        },
        teal: {
          DEFAULT: '#00A896',
          50: '#E6F8F6',
          100: '#CCF1EC',
          600: '#00907F',
          700: '#007A6B',
        },
        deepbg: {
          DEFAULT: '#0B1B3D',
          800: '#0F2249',
          900: '#081530',
        },
        sky: {
          DEFAULT: '#48CAE4',
          100: '#DBF5FA',
        },
        lightbg: '#F4F7FB',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(1, 55, 91, 0.08)',
        card: '0 10px 40px rgba(1, 55, 91, 0.10)',
        glow: '0 0 0 1px rgba(72, 202, 228, 0.15), 0 20px 60px rgba(0, 168, 150, 0.20)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 0.6s ease-out both',
        'fade-slide-up': 'fadeSlideUp 0.6s ease-out both',
        'fade-slide-right': 'fadeSlideRight 0.6s ease-out both',
        'fade-scale': 'fadeScale 0.8s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'float-1': 'float 4s ease-in-out infinite',
        'float-2': 'float 4.5s ease-in-out infinite 0.5s',
        'float-3': 'float 3.5s ease-in-out infinite 1s',
      },
    },
  },
  plugins: [],
}
