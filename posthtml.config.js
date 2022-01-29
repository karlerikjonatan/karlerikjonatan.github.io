const path = require("path");

module.exports = {
  plugins: {
    "posthtml-doctype": {
      doctype: "HTML 5",
    },
    "posthtml-include": {
      root: path.resolve(__dirname, "./src/includes"),
    },
    "posthtml-modules": {
      root: path.resolve(__dirname, "./src/modules"),
    },
  },
};
