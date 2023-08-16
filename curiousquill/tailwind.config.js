/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
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


