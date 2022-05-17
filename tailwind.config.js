const autoprefixer = require('autoprefixer')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#56FFE8',
        'light-gray': '#cbd5e1',
        gray: '#94a3b8', //slate-400
        'dark-gray': '#6b7280',
        dark: '#374151', //slate-700
        light: '#f8fafc', //slate-50
      },
      spacing: {
        9.1: '2.1rem',
        45: '11.5rem',
      },
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Share Tech Mono',
          'Noto Sans Mono',
          'Cutive Mono',
        ],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },

      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
        'arrow-point-left': {
          '0%': {
            '-webkit-transform': 'translatex(0px)',
            transform: 'translatex(0px)',
          },
          '100%': {
            '-webkit-transform': 'translatex(-10px)',
            transform: 'translatex(-10px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        'arrow-point-left': 'arrow-point-left 1s linear 0s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: ['cyberpunk', 'garden'],
  },
}
