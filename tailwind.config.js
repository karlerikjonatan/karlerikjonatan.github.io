module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    animation: {
      blink: "blink 1s step-end infinite",
    },
    extend: {},
    fontFamily: {
      mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    keyframes: {
      blink: {
        "from, to": { "border-color": "transparent" },
        "50%": { "border-color": "rgb(59, 130, 246)" },
      },
    },
  },
  plugins: [],
};
