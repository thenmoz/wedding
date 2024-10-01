/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '13': '13px'
      },
      fontWeight: {
        normal: 400,
      },
      fontFamily: {
        libreCaslon: ['"Libre Caslon Display"', 'Kanit'],
        lustria: ['"Lustria"', 'Kanit'],
        libreBodoni: ['"Libre Bodoni"', 'Kanit'],
      },
    },
  },
  plugins: [],
};
