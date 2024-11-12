test('adds 0.1 and 0.2 to equal 0.3', () => {
  const result = 0.1 + 0.2;
  expect(result).toBeCloseTo(0.3, 5); // 5 digits of precision
});
