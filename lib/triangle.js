const Shape = require('./shape');

class Triangle extends Shape {
  constructor(data) {
    super(data);
    this.points = '150, 18 244, 182 56, 182';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.bgColour}" />`;
  }
}

module.exports = Triangle;