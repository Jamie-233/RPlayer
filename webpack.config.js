const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "source", "/src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "build")
  }
};
