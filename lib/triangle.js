const Shape = require('./shape');

class Triangle extends Shape {
  constructor(data) {
    super(data);
    this.points = '115 0, -15 ,0 50, 100';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.bgColour}" />`;
  }
}

module.exports = Triangle;