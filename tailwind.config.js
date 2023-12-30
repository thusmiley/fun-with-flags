/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightModeText: "#111517",
        lightModeInput: "#848484",
        lightModeBg: "#FAFAFA",
        darkModeInputBg: "#2B3844",
        darkModeBg: "#202C36",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
