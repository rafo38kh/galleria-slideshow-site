/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(0, 0%, 100%, 1)",
        nameColor: "hsla(0, 0%, 0%, 1)",
        textColor: "hsla(0, 0%, 49%, 1)",
        darkWhite: "hsla(0, 0%, 90%, 1)",
        lightWhite: "hsla(0, 0%, 95%, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        display: ["100px", { fontWeight: 700, lineHeight: "150px" }],
      },
    },
  },
  plugins: [],
};
