// the file being tested is referenced into this testing file
const Shape = require("../library/shapes");

// A testing suite for Shape is created.
describe("Shape", () => {
  // A test is created to check that when a shape and color are passed by the user, the correct shape/color is returned. I wrote one test for each shape, and included a variety of named colors.
  describe("renderShape", () => {
    it("should be a blue square", () => {
      const shapeCode = `<rect width="300" height="300" fill="blue" />`;
      const shapeTest = new Shape("square", "blue");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
  describe("renderShape", () => {
    it("should be a yellow circle", () => {
      const shapeCode = `<circle r="150" cx="150" cy="150" fill="yellow" />`;
      const shapeTest = new Shape("circle", "yellow");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
  describe("renderShape", () => {
    it("should be a green ellipse", () => {
      const shapeCode = `<ellipse rx="150" ry="100" cx="150" cy="150" fill="green" />`;
      const shapeTest = new Shape("ellipse", "green");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
  describe("renderShape", () => {
    it("should be a red triangle", () => {
      const shapeCode = `<polygon points="150 20.1 300 279.9 0 279.9" fill="red" />`;
      const shapeTest = new Shape("triangle", "red");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
  describe("renderShape", () => {
    it("should be a purple hexagon", () => {
      const shapeCode = `<polygon points="75 20.1 225 20.1 300 150 225 279.9 75 279.9 0 150" fill="purple" />`;
      const shapeTest = new Shape("hexagon", "purple");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
});
