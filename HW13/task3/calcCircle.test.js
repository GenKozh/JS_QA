const { getCircleLength, getCircleArea } = require('./calcCircle');

describe('Circle calculations', () => {
  test('getCircleLength(22) should return approximately 138.2', () => {
    expect(getCircleLength(22)).toBeCloseTo(138.2, 1); // 1 decimal place precision
  });

  test('getCircleArea(9) should return approximately 254.47', () => {
    expect(getCircleArea(9)).toBeCloseTo(254.47, 2); // 2 decimal place precision
  });

  test('getCircleLength() should return NaN if no arguments are passed', () => {
    expect(getCircleLength()).toBeNaN();
  });

  test('getCircleArea() should return NaN if no arguments are passed', () => {
    expect(getCircleArea()).toBeNaN();
  });
});
