/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "md": "1rem",
        "lg": "1.25rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "3.5rem",
        "5xl": "4rem",
      },
    }
  },
  plugins: [],
};


