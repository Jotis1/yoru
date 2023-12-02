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
      },
      width: {
        500: '500px',
      },
    },
  },
  plugins: [],
};
export default config;
