const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const makeShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case 'circle':
      return new Circle(data);
      
    case 'triangle':
      return new Triangle(data);
      
    case 'square':
      return new Square(data);
      
    default:
      throw new Error('Invalid logo shape');
  }
};

module.exports = { makeShape };
