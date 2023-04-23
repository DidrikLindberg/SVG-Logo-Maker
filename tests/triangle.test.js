
const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Render Method', () => {
    it('should return triangle string', () => {
      const triangle = new Triangle({
        logoName: 'Mel',
        textColor: 'purple',
        bgColour: '#000',
        logoShape: 'triangle',
      });
      expect(triangle.render()).toBe(
        `<polygon points="150, 18 244, 182 56, 182" fill="#000" />`
      );
    });
  });
});