/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Playwrite NG Modern"],
        belleza: ["Belleza", "sans-serif"],
        title: ["Qwitcher Grypen"],
      },
      boxShadow: {
        custom:
          "14px 17px 17px -9px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
      },
      colors: {
        pink: {
          regular: "#d05b5b",
          light: "#f6e7e7",
        },
        gray: {
          regular: "#e8e8e8",
          dark: "#3b3b3b",
        },
        beige: {
          regular: "#d0925b",
          light: "#fff3e6",
        },
      },
    },
  },
  plugins: [],
};
