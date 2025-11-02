module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0ea5e9" },
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          700: "#3f3f46",
          900: "#111827"
        }
      }
    }
  },
  plugins: []
};
