// the file being tested is referenced into this testing file
const Text = require("../library/text");

// A testing suite for Text is created.
describe("Text", () => {
  // A test is created to check that when a string of text, a color, a font, and a shape are input by the user, it returns the correct svg code
  describe("renderText", () => {
    it("should return a text string of 'ABC' in red with Arial font", () => {
      const textCode = `<style>
      .logo {
          font: 100px "Arial"
      }
      </style>
      <text class="logo" x="150" y="230" text-anchor="middle" fill="red">ABC</text>`;
      const textTest = new Text("ABC", "red", "Arial", "triangle");
      expect(textTest.renderText()).toEqual(textCode);
    });
  });
  describe("renderText", () => {
    it("should return a text string of 'DEF' in blue with Georgia font", () => {
      const textCode = `<style>
      .logo {
          font: 100px "Georgia"
      }
      </style>
      <text class="logo" x="150" y="180" text-anchor="middle" fill="blue">DEF</text>`;
      const textTest = new Text("DEF", "blue", "Georgia", "circle");
      expect(textTest.renderText()).toEqual(textCode);
    });
  });
  describe("renderText", () => {
    it("should return a text string of 'GHI' in green with Verdana font", () => {
      const textCode = `<style>
      .logo {
          font: 100px "Verdana"
      }
      </style>
      <text class="logo" x="150" y="185" text-anchor="middle" fill="green">GHI</text>`;
      const textTest = new Text("GHI", "green", "Verdana", "square");
      expect(textTest.renderText()).toEqual(textCode);
    });
  });
});
