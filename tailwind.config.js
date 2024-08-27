/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Playwrite NG Modern"],
        belleza: ["Belleza", "sans-serif"],
      },
      boxShadow: {
        custom:
          "14px 17px 17px -9px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
      },
      colors: {
        gray: {
          regular: "#e8e8e8",
          dark: "#3b3b3b",
        },
        beige: { btn: "#d0925b" },
      },
    },
  },
  plugins: [],
};
