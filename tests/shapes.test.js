const Shape = require('../lib/shape');

const testCases = [
  {
    desc: 'should throw an error if input is empty',
    input: {},
    expected: { err: new Error(`Logo text cannot be empty`) },
  },
  {
    desc: 'should throw error if logo text is longer than 3y',
    input: { logoName: 'john' },
    expected: { err: new Error('Logo text cannot be more than 3 characters') },
  },
  {
    desc: 'should throw error if input is not a valid css colour',
    input: { logoName: 'Ted', textColor: 'NotaColor' },
    expected: { err: new Error('Please enter a valid css color keyword or hex code for Text color') },
  },
  {
    desc: 'should throw an error if render() is called',
    input: { logoName: 'Ted', textColor: 'green', bgColour: 'purple' },
    expected: { err: new Error('Child shapes must implement a render() method'), shouldRender: true },
  },
  {
    desc: 'should add background colour if it is a valid color',
    input: { logoName: 'Ted', textColor: 'green', bgColour: 'purple' },
    expected: { key: 'bgColour', value: 'purple' },
  },
  {
    desc: 'should add text colour if it is a valid color',
    input: { logoName: 'Ted', textColor: 'red', bgColour: 'purple' },
    expected: { key: 'textColor', value: 'red' },
  },
];

function runTestCase(testCase) {
    const { input, expected } = testCase;
    let shape;
  
    try {
      shape = new Shape(input);
    } catch (err) {
      expect(err.message).toBe(expected.err.message);
      return;
    }
  
    if (expected.shouldRender) {
      expect(() => shape.render()).toThrow(expected.err);
    } else {
      expect(shape[expected.key]).toBe(expected.value);
    }
  }

describe('Shape test suite', () => {
  testCases.forEach((testCase) => {
    it(testCase.desc, () => {
      runTestCase(testCase);
    });
  });
});
