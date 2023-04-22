//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require('is-css3-color');

class Shape {
  constructor({ logoName, textColour, logoColour, logoShape }) {
    this.logoShape = logoShape;

    this.validateInput(logoName, 'Logo text', 3);
    this.logoName = logoName;

    this.validateInput(textColour, 'Text color');
    this.textColour = textColour;

    this.validateInput(logoColour, 'Logo color');
    this.logoColour = logoColour;
  }

  validateInput(input, name, maxLength = Infinity) {
    if (!input) throw new Error(`${name} cannot be empty`);

    if (input.length > maxLength) {
      throw new Error(`${name} cannot be more than ${maxLength} characters`);
    }

    input = input.toLowerCase();

    const validColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-z]+$/
  if (!validColorRegex.test(input)) {
      throw new Error(`Please enter a valid css color keyword or hex code for ${name}`);
    }
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

module.exports = Shape;