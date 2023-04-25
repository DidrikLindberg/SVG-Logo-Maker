# Readme-Generator

## Description
This command-line application allows users to create an svg logo by answering a series of questions (text, text color, shape color, shape). Users can initiate the user prompt in the root directory by typing "npm start" or "node index.js". If the svg logo does not meet the necessary requirements, an appropriate error message will be displayed. Upon completing all the questions, a file named logo.svg will be generated in the dist folder.

## Walkthorugh video of running app
[Walkthorugh](https://drive.google.com/file/d/1Cu4YoN5TOkh2AHgeFIBeypncwvuh5g4t/view)

## User Story
As a freelance web developer, I want to generate a simple logo for my projects, so that I dont have to pay a graphic designer.

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [Dependancies](#Dependancies)

  * [License](#license)

  * [Code Highlights](#code-highlights)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Learning Points](#learning-points)

  * [Questions](#questions)

  ## Installation
  To install this project, clone the repository and run npm install in the root directory.

  ## Usage
  To initiate the user prompt, run npm start or node index.js in the root directory. Answer all questions, and upon completion, a file named logo.svg will be created in the dist folder.
  
  ## Dependancies
  This project uses the following dependencies:

  * npm inquirer
  * jest (for testing)
  * svgdom

  ## License
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  This project is licensed under the MIT License

<a name="code-highlights"></a>

  ## Code Highlights
  ## Inheritance
The code defines a constructor for the Shape class that takes an object with logoName, textColor, bgColour, and logoShape properties as its argument. Inside the constructor, logoShape is assigned to the logoShape property of the new Shape instance. The Shape class will serve as a parent class for all three shapes.

  ```java
  class Shape {
    constructor({ logoName, textColor, bgColour, logoShape }) {
        this.logoShape = logoShape;
      
        if (logoName) {
          this.validateInput(logoName, 'Logo text', 3);
          this.logoName = logoName;
        }
      
        if (textColor) {
          this.validateInput(textColor, 'Text color');
          this.textColor = textColor;
        }
      
        if (bgColour) {
          this.validateInput(bgColour, 'Background color');
          this.bgColour = bgColour;
        }
      }
```
In this child class, 'Circle', the 'Shape' class is being extended through class 'Circle extends Shape'. By extending the 'Shape' class, the 'Circle' class has access to the 'logoName', 'textColor', and 'bgColour' properties defined in the 'Shape' constructor, which can be used in the 'render()' method to create a custom SVG element.
```java
const Shape = require('./shape');

class Circle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.bgColour}" />`;
  }
}

module.exports = Circle;
 ```

 The 'validateInput()' method is used to validate the input for logo text, text color, and background color. It checks that the input is not empty and does not exceed the maximum length specified. It also checks whether the input is a valid CSS color keyword, hex code or RGB value using a regular expression.
```java

  validateInput(input, name, maxLength = Infinity) {
    if (!input) throw new Error(`${name} cannot be empty`);

    if (input.length > maxLength) {
      throw new Error(`${name} cannot be more than ${maxLength} characters`);
    }

    input = input.toLowerCase();

    const validColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-z]+$|^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/;

     if (!validColorRegex.test(input)) {
      throw new Error(`Please enter a valid css color keyword or hex code for ${name}`);
    }
    return input;
  }
  ```

  This code exports a function called generateSvg that takes a shape object as input and returns an SVG string with the rendered shape and logo text. The generateSvg function is using template literals to generate an SVG string. The string is built using backticks ( ) and variables are interpolated using ${} syntax.

  ```java
  
const generateSvg = (shape) => `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text
      x="50%"
      y="${shape.logoShape !== 'triangle' ? '50%' : '40%'}"
      text-anchor="middle"
      fill="${shape.textColor}"
      font-size="2.3rem"
      letter-spacing="2"
      dy=".3em"
      font-family="monospace">
        ${shape.logoName}
    </text>
  </svg>
`;

module.exports = { generateSvg };

  ```
Generated example logo.svg
``` java

  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="50" cy="50" r="50" fill="blue" />
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      fill="white"
      font-size="2.3rem"
      letter-spacing="2"
      dy=".3em"
      font-family="monospace">
        SVG
    </text>
  </svg>
```
![img](/assets/imgs/example%20svg.jpg)


  ## Contributing
  I welcome contributions of all kinds, including bug fixes, feature additions, documentation improvements, and more. To get started, please follow these steps:
 1. Fork this repository and clone it to your local machine.
 2. Make your changes on a new branch, with a descriptive name that summarizes the purpose of your changes
 3. Test your changes thoroughly, to ensure that they don't introduce new bugs or break existing functionality.
 4. Submit a pull request to this repository's main branch. Be sure to provide a clear and detailed description of your changes, along with any necessary documentation updates or other relevant information.
 
 I will review your pull request as soon as possible, and we may provide feedback or ask for additional changes before merging it. Thank you again for your contribution!

  ## Tests
This project includes a suite of automated tests, which can be run using the npm test command. These tests are implemented using the Jest testing framework, and cover a range of functional and unit tests to ensure that the project is working as expected.

To run the tests, simply navigate to the project's root directory in your terminal and run the following command:

        npm test

This will run all of the tests in the test/ directory and display the results in your terminal. If any tests fail, you can use the error messages and stack traces to diagnose and fix the issues.

<a name="Learning-Points"></a>

## Learning Points
This was my first experience working with classes and test-driven development in a project. I also had to deal with multiple files, which was a learning opportunity for me to understand how they all interconnect and contribute to the final application. Additionally, I gained experience working with SVG and incorporating validation into Inquirer.
Using Jest for the first time was a learning point for me. It was interesting to learn how to write test cases and how they can be used to catch bugs and improve code quality. I also learned about the importance of writing testable code and designing with testing in mind.

## Questions
If you have any questions about the repo, open an issue or [contact me directly](mailto:lindberg.didrik@gmail.com). You can find more of my work at https://github.com/DidrikLindberg
  
