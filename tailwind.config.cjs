/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "8rem",
      },
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};