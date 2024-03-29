import fs from "fs";
const input = "../userinput.json";

const generateText = () =>
  fs.readFile(input, "utf8", (err, data) => {
    const userData = JSON.parse(data);
    //   console.log(userData);
    //   console.log(userData.answers.textColor);
    if (userData.answers.backgroundShape === "triangle") {
      const userFont = userData.answers.textFont;
      const svgText = `<style>
            .logo {
                font: 100px "${userFont}"
            }
            </style>
            <text class="logo" x="150" y="230" text-anchor="middle" fill="${userData.answers.textColor}">${userData.answers.textContent}</text>`;
      console.log(svgText);
    } else if (userData.answers.textFont === "Arial") {
      const svgText = `<style>
        .logo {
            font: 100px "${userData.answers.textFont}"
        }
        </style>
        <text class="logo" x="150" y="190" text-anchor="middle" fill="${userData.answers.textColor}">${userData.answers.textContent}</text>`;
      console.log(svgText);
    } else if (
      userData.answers.textFont === "Brush Script MT" ||
      userData.answers.textFont === "Courier New" ||
      userData.answers.textFont === "Garamond" ||
      userData.answers.textFont === "Georgia"
    ) {
      const svgText = `<style>
        .logo {
            font: 100px "${userData.answers.textFont}"
        }
        </style>
        <text class="logo" x="150" y="180" text-anchor="middle" fill="${userData.answers.textColor}">${userData.answers.textContent}</text>`;
      return svgText;
    } else if (
      userData.answers.textFont === "Tahoma" ||
      userData.answers.textFont === "Times New Roman" ||
      userData.answers.textFont === "Trebuchet MS" ||
      userData.answers.textFont === "Verdana"
    ) {
      const svgText = `<style>
        .logo {
            font: 100px "${userData.answers.textFont}"
        }
        </style>
        <text class="logo" x="150" y="185" text-anchor="middle" fill="${userData.answers.textColor}">${userData.answers.textContent}</text>`;
      return svgText;
    }
  });
generateText();
// module.exports = generateText;
