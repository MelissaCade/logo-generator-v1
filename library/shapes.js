const fs = require("fs");
//declare a new class called "Shape" that takes in the user-specified shape and color
class Shape {
  constructor(backgroundShape, backgroundColor) {
    this.backgroundShape = backgroundShape;
    this.backgroundColor = backgroundColor;
  }
  //I wanted a few more shape options, so instead of creating separate classes for each shape, I have the specifications for each choice here
  renderShape() {
    if (this.backgroundShape === "square") {
      const svgShape = `<rect width="300" height="300" fill="${this.backgroundColor}" />`;
      return svgShape;
    } else if (this.backgroundShape === "circle") {
      const svgShape = `<circle r="150" cx="150" cy="150" fill="${this.backgroundColor}" />`;
      return svgShape;
    } else if (this.backgroundShape === "ellipse") {
      const svgShape = `<ellipse rx="150" ry="100" cx="150" cy="150" fill="${this.backgroundColor}" />`;
      return svgShape;
    } else if (this.backgroundShape === "triangle") {
      const svgShape = `<polygon points="150 20.1 300 279.9 0 279.9" fill="${this.backgroundColor}" />`;
      return svgShape;
    } else if (this.backgroundShape === "hexagon") {
      const svgShape = `<polygon points="75 20.1 225 20.1 300 150 225 279.9 75 279.9 0 150" fill="${this.backgroundColor}" />`;
      return svgShape;
    }
  }
}

module.exports = Shape;
