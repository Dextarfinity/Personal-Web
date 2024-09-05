// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Inter: ["Inter"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        heroLight:
          "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark:
          "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },
      colors: {
        primary: "#b033fd",
        "primary-light": "#e0aaff", // Add a lighter variant for dark mode
        "gray-200": "#f0f0f0", // Example gray for dark mode
        "gray-800": "#1a1a1a", // Example dark gray for dark mode
      },
    },
  },
  plugins: [],
};
