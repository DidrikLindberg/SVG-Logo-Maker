const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { makeShape } = require('./lib/makeShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, 3 letters or less',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter text colour keyword or a hexadecimal number for the logo's test color`,
    },
    {
      type: 'input',
      name: 'bgColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
  .then((data) => {
    const svgPath = './Dist/logo.svg';
    const finalLogo = makeShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
  .catch((err) => console.error(err));