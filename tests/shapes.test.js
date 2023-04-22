const Shape = require('../lib/shape');

const testCases = [
  {
    desc: 'should throw an error if input is empty',
    input: {},
    expected: { err: new Error('Input cannot be empty') },
  },
  {
    desc: 'should throw error if logo text is longer than 3y',
    input: { logoName: 'john' },
    expected: { err: new Error('Logo text cannot be more than 3 characters') },
  },
  {
    desc: 'should throw error if input is not a valid css colour',
    input: { logoName: 'Ted', textColour: 'NotColour' },
    expected: { err: new Error('Please enter a valid css color keyword or hex code Text color') },
  },
  {
    desc: 'should throw an error if render() is called',
    input: { logoName: 'Ted', textColour: 'green', bgColour: 'purple' },
    expected: { err: new Error('Child shapes must implement a render() method'), shouldRender: true },
  },
  {
    desc: 'should add background colour if it is a valid color',
    input: { logoName: 'Ted', textColour: 'green', bgColour: 'purple' },
    expected: { key: 'bgColour', value: 'purple' },
  },
  {
    desc: 'should add text colour if it is a valid color',
    input: { logoName: 'Ted', textColour: 'red', bgColour: 'purple' },
    expected: { key: 'textColour', value: 'red' },
  },
];

function runTestCase(testCase) {
  const { input, expected } = testCase;
  const shape = new Shape(input);

  if (expected.err) {
    expect(() => shape).toThrow(expected.err);
  } else if (expected.shouldRender) {
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
