module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    animation: {
      blink: "blink 1s step-end infinite",
    },
    keyframes: {
      blink: {
        "from, to": { "border-color": "transparent" },
        "50%": { "border-color": "white" },
      },
    },
    extend: {},
  },
  plugins: [],
};
