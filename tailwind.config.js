/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1C60FF',
          dark: '#0D1EB8',
          darkest: '#021338',
          light: '#3C8AFF',
        },
        peach: {
          light: '#D0BBEB',
          DEFAULT: '#EAB27A',
        },
        white: '#FFFFFF',
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(90deg, #1C60FF 0%, #0D1EB8 50%, #021338 100%)',
        'peach-gradient': 'linear-gradient(90deg, #3C8AFF 0%, #D0BBEB 50%, #EAB27A 100%)',
      },
      fontFamily: {
        zagma: ['var(--font-f37-zagma)'],
        mono: ['var(--font-dm-mono)'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        extrabold: '800',
      },
    },
  },
  plugins: [],
} 