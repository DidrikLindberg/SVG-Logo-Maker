
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

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}

module.exports = Shape;