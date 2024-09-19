/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '20': '20px',
        '16': '16px',
        '14': '14px'
      },
      fontWeight: {
        normal: 400,
      },
      fontFamily: {
        libreCaslon: ['"Libre Caslon Display"', 'serif'],
        lustria: ['"Lustria"', 'serif'],
      },
    },
  },
  plugins: [],
};
