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
    extend: {
      colors: {
        primary: "#C4A484",
        "primary-dark": "#944C04",
        facebook: "#3B5998",
      },
      borderRadius: {
        pill: "100vw",
        circle: "50%",
      },
      maxWidth: {
        "6xl": "80rem",
      },
      letterSpacing: {
        insane: "0.3em",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
