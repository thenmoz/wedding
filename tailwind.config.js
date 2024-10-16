/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                'opacity': 'opacity',
            },
            rotate: {
                '20': '20deg',
            },
            maxHeight: {
                '112': '29rem',
                '128': '32rem',
            },
            fontSize: {
                46: "46px",
                32: "32px",
                24: "24px",
                20: "20px",
                16: "16px",
                14: "14px",
                13: "13px",
            },
            fontWeight: {
                normal: 400,
            },
            fontFamily: {
                libreCaslon: ['"Libre Caslon Display"', "Kanit"],
                lustria: ['"Lustria"', "Kanit"],
                libreBodoni: ['"Libre Bodoni"', "Kanit"],
                monteCarlo: ['"MonteCarlo"', "Kanit"],

            },
            height: {
                '1/10': '10%',
            },
            boxShadow: {
                'custom-shadow': '2px 4px 4.3px 1px #00000040', // Add your custom shadow here
            },
        },
    },
    plugins: [],
};
