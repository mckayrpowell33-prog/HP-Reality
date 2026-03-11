/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#234b3a',
        stone: '#f7f5f1',
        taupe: '#8a8378',
        muted: '#5f6465',
        navy: '#1f2f45',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -20px rgba(20, 20, 20, 0.35)',
      },
    },
  },
  plugins: [],
};
