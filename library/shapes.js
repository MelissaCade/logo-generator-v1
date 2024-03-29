import fs from "fs";
const input = "../userinput.json";

const generateShape = () =>
  fs.readFile(input, "utf8", (err, data) => {
    const userData = JSON.parse(data);
    const shape = userData.answers.backgroundShape;
    if (shape === "square") {
      const svgShape = `<rect width="300" height="300" fill="${userData.answers.backgroundColor}" />`;
      return svgShape;
    } else if (shape === "circle") {
      const svgShape = `<circle r="150" cx="150" cy="150" fill="${userData.answers.backgroundColor}" />`;
      return svgShape;
    } else if (shape === "ellipse") {
      const svgShape = `<ellipse rx="150" ry="100" cx="150" cy="150" fill="${userData.answers.backgroundColor}" />`;
      return svgShape;
    } else if (shape === "triangle") {
      const svgShape = `<polygon points="150 20.1 300 279.9 0 279.9" fill="${userData.answers.backgroundColor}" />`;
      return svgShape;
    } else if (shape === "hexagon") {
      const svgShape = `<polygon points="75 20.1 225 20.1 300 150 225 279.9 75 279.9 0 150" fill="${userData.answers.backgroundColor}" />`;
      return svgShape;
    }
  });
generateShape();
// module.exports = generateShape;
