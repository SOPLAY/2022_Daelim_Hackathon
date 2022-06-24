/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./core/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kakao-yellow": "#FEE500",
      },
    },
  },
  plugins: [],
};
