const fs = require("fs");
//declare a new class called "Text" that takes in user data. This is complicated by the fact that when the user picks a triangle, the text needs to move further down on the shape than otherwise. Also, the different fonts center differently vertically, so I needed to shift things up or down for best appearance based on the user's font choice.
class Text {
  constructor(textContent, textColor, textFont, backgroundShape) {
    this.textContent = textContent;
    this.textColor = textColor;
    this.textFont = textFont;
    this.backgroundShape = backgroundShape;
  }
  renderText() {
    //if the user picks a triangle background shape, the y-coordinate of the center of the text needs to move down so that the text remains within the triangle. The other shapes are more centered.
    if (this.backgroundShape === "triangle") {
      const svgText = `<style>
      .logo {
          font: 100px "${this.textFont}"
      }
      </style>
      <text class="logo" x="150" y="230" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
    //Arial font needs to have a y-coordinate of 190 to be centered vertically in any other shape besides triangle
    } else if (this.textFont === "Arial") {
      const svgText = `<style>
      .logo {
          font: 100px "Arial"
      }
      </style>
      <text class="logo" x="150" y="190" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
    //these four fonts need a y-coordinate of 180 to look best
    } else if (
      this.textFont === "Brush Script MT" ||
      this.textFont === "Courier New" ||
      this.textFont === "Garamond" ||
      this.textFont === "Georgia"
    ) {
      const svgText = `<style>
      .logo {
          font: 100px "${this.textFont}"
      }
      </style>
      <text class="logo" x="150" y="180" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
    //and these four fonts need a y-coordinate of 185 to appear centered vertically in the non-triangle shapes.
    } else if (
      this.textFont === "Tahoma" ||
      this.textFont === "Times New Roman" ||
      this.textFont === "Trebuchet MS" ||
      this.textFont === "Verdana"
    ) {
      const svgText = `<style>
      .logo {
          font: 100px "${this.textFont}"
      }
      </style>
      <text class="logo" x="150" y="185" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
    }
  }
}

module.exports = Text;
