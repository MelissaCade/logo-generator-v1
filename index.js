import inquirer from "inquirer";
import jest from "jest";
import fs from "fs";
// import { userInput as userData } from "./userInput.js";

let userInput = {};

inquirer
  .prompt([
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
    // {
    //   type: "list",
    //   message: "Please choose a font for your text.",
    //   name: "textFont",
    //   choices: [
    //     "Arial",
    //     "Brush Script MT",
    //     "Courier New",
    //     "Garamond",
    //     "Georgia",
    //     "Tahoma",
    //     "Times New Roman",
    //     "Trebuchet MS",
    //     "Verdana",
    //   ],
    // },
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
  ])
  .then((answers) => {
    userInput = answers;
    fs.writeFile(
      "userInput.json",
      JSON.stringify({ userInput }, null, "\t"),
      (err) => {
        err
          ? console.log(err)
          : console.log("User Data succesfully saved to file.");
      }
    );
  });
