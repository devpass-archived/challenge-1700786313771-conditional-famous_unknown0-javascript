const { getMax, getGrade } = require('./conditionalUtils');

test('Get max of two numbers', () => {
  expect(getMax(5, 10)).toBe(10);
});

test('Get grade based on score', () => {
  expect(getGrade(85)).toBe('B');
  expect(getGrade(95)).toBe('A');
  expect(getGrade(75)).toBe('C');
});