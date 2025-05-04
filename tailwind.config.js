// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        golden: "#ffb100",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  plugins: [],
};
