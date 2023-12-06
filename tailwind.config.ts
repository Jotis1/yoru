import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        20: '20px',
      },
      fontSize: {
        96: '96px',
        20: '20px',
        10: '10px',
      },
      keyframes: {
        spin_slow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin_slow 2000s linear infinite',
      },
      width: {
        500: '500px',
        250: '250px',
      },
    },
    fontFamily: {
      "sans": "Ubuntu"
    }
  },
  plugins: [],
};
export default config;
