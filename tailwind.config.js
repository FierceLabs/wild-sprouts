/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'PerfectlyVintages'"],
        body: ["Inter"],
      },
      colors: {
        beige: { b1: "#F5F3E7" },
        green: { g1: "#8C943E" },
        gray: { g1: "#46594D" },
        orange: { o1: "#F0AB6F" },
        blue: { b1: "#98BFD0" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
