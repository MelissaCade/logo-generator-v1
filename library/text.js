const fs = require("fs");

class Text {
  constructor(textContent, textColor, textFont, backgroundShape) {
    this.textContent = textContent;
    this.textColor = textColor;
    this.textFont = textFont;
    this.backgroundShape = backgroundShape;
  }
  renderText() {
    if (this.backgroundShape === "triangle") {
      const svgText = `<style>
      .logo {
          font: 100px "${this.textFont}"
      }
      </style>
      <text class="logo" x="150" y="230" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
    } else if (this.textFont === "Arial") {
      const svgText = `<style>
      .logo {
          font: 100px "Arial"
      }
      </style>
      <text class="logo" x="150" y="190" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
      return svgText;
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
