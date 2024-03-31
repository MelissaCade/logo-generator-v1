const fs = require("fs");
const inquirer = require("inquirer");
const createSVG = require("./library/createSVG");

const questions = [
  {
    type: "input",
    message: "Please enter up to three letters for your logo.",
    name: "textContent",
  },
  {
    type: "input",
    message: "Please enter a color name or hexadecimal code for your text.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose a font for your text.",
    name: "textFont",
    choices: [
      "Arial",
      "Brush Script MT",
      "Courier New",
      "Garamond",
      "Georgia",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
    ],
  },
  {
    type: "list",
    message: "Please choose a background shape.",
    name: "backgroundShape",
    choices: ["square", "circle", "ellipse", "triangle", "hexagon"],
  },
  {
    type: "input",
    message:
      "Please enter a color name or hexadecimal code for your background shape.",
    name: "backgroundColor",
  },
  {
    type: "input",
    message: "Please enter a file name for your new svg logo.",
    name: "fileName",
  },
];

function start() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const fileName = answers.fileName;
    fs.writeFile(`./examples/${fileName}.svg`, createSVG(answers), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Your svg logo has been created.");
      }
    });
  });
}

start();
