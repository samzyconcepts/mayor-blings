/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                grey: {
                    50: "#e3e3e3",
                    100: "#656266",
                    200: "#616161",
                    300: "#303030",
                    400: "#1a1a1a",
                },
            },
        },
    },
    plugins: [],
};
