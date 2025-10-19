/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff0080',
          blue: '#00ffff',
          purple: '#8b5cf6',
          green: '#00ff88',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
            boxShadow: '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080'
          },
          '100%': { 
            textShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080',
            boxShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
