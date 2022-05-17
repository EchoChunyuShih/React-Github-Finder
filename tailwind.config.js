const autoprefixer = require('autoprefixer')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#56FFE8',
        gray: '#94a3b8', //slate-400
        'dark-gray': '#6b7280',
        dark: '#1e293b', //slate-700
        light: '#f8fafc', //slate-50
      },
      spacing: {
        9.1: '2.1rem',
        45: '11.5rem',
      },
      fontFamily: {
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
        'hover-action': {
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
        'hover-action': 'hover-action 1s linear 0s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: ['cyberpunk', 'garden'],
  },
}
