module.exports = {
  plugins: {
    // https://github.com/evrone/postcss-px-to-viewport
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 3,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [".ignore"],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
