/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        body: "var(--body)",
        bg: "var(--bg)",
        rainbow: "var(--rainbow)",
        "alpha-900": "var(--alpha-900)",
        "alpha-800": "var(--alpha-800)",
        "alpha-700": "var(--alpha-700)",
        "alpha-invert-100": "var(--alpha-invert-100)",
      },
    },
  },
  plugins: [],
}
