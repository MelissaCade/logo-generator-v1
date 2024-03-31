# logo-generator-v1

Automatically create an svg logo from shapes and letters.

## Description

This application takes in user data in regards to text, font, shape, and color, and creates a custom svg logo.

## Demonstrations

(assets/video/sample-runthrough-01.mp4)

(assets/video/sample-runthrough-02.mp4)

## Examples of Output

![svg logo](examples/msc-logo.svg)
![svg logo](examples/msl-logo.svg)

## Installation

Navigate to the product directory and use "npm i" in your terminal to install all necessary node packages.

## Usage

User should navigate to index.js, then type "node index.js" in their terminal.
User should then answer all prompts as they appear. Please note that for best results, the user must limit themselves to three characters for their logo.
When prompted for text or shape colors, the user can either use a common color name (blue, red, green, white, etc) or a hexadecimal color code (#ffffff). Please note that hexadecimal color codes must start with a "#" symbol.
Once the prompts are complete, an SVG logo will automatically be generated in the "examples" folder.

## Tests

Testing suites were created using Jest to test the following:

1. Correct shape and shape color are added to the SVG.
2. Correct font and text color are added to the SVG.

## Links

GitHub repository: https://github.com/MelissaCade/logo-generator-v1

## Credits

This page uses the materials and resources provided in the University of Denver Coding Bootcamp. I also used the following websites as reference to figure out how to do everything:

stack overflow - https://stackoverflow.com/  
free code camp - https://www.freecodecamp.org/  
geeks for geeks - https://www.geeksforgeeks.org/  
mdn web docs - https://developer.mozilla.org/en-US/  
w3schools - https://www.w3schools.com/
