/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Electric Blue
          foreground: "#FFFFFF",
        },
        background: {
          DEFAULT: "#0F172A", // Slate 900 for dark theme
          light: "#F8FAFC", // Slate 50 for light theme
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Body font
        heading: ["Poppins", "sans-serif"], // Heading font
      },
    },
  },
  plugins: [],
};
