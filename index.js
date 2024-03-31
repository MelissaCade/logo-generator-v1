const fs = require("fs");
const inquirer = require("inquirer");
const createSVG = require("./library/createSVG");

//questions that require user input
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
  //these are some of the most universal font choices, to give our logo a bit more versatility
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
  //I added an option for the user to name their own file, to avoid writing over previous designs.
  {
    type: "input",
    message: "Please enter a file name for your new svg logo.",
    name: "fileName",
  },
];
//the "start" function is what makes everything happen. It asks our questions in a series of prompts, names and creates our svg file.
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
