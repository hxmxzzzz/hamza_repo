/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050a08',
        panel: '#0a1210',
        edge: '#0e1a17',
        neon: {
          400: '#4ade9a',
          DEFAULT: '#2ECC71',
          600: '#1fa85a',
        },
        cyan: {
          DEFAULT: '#00E5FF',
          600: '#00b8cc',
        },
        mist: '#a9c2ba',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'linear-gradient(rgba(46,204,113,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.06) 1px, transparent 1px)',
        'aurora':
          'radial-gradient(60% 50% at 20% 20%, rgba(46,204,113,0.20) 0%, transparent 60%), radial-gradient(50% 40% at 80% 10%, rgba(0,229,255,0.16) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(46,204,113,0.10) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(46,204,113,0.25)',
        'glow-cyan': '0 0 40px rgba(0,229,255,0.22)',
        'glow-sm': '0 0 18px rgba(46,204,113,0.35)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        driftX: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: 0.7 },
          '100%': { transform: 'scale(1.9)', opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gridPan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '80px 80px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        driftX: 'driftX 8s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        marquee: 'marquee 28s linear infinite',
        gridPan: 'gridPan 6s linear infinite',
      },
    },
  },
  plugins: [],
}
