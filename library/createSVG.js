const Text = require("./text");
const Shape = require("./shapes");

function createSVG(data) {
  const svgText = new Text(
    data.textContent,
    data.textColor,
    data.textFont,
    data.backgroundShape
  );
  const svgShape = new Shape(data.backgroundShape, data.backgroundColor);
  return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">${svgShape.renderShape()}${svgText.renderText()}</svg>`;
}

module.exports = createSVG;
