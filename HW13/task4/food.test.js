const { filterFoodPrice, food } = require('./food');

describe('filterFoodPrice function tests', () => {
  const min = 12;
  const max = 40;
  const filteredFood = filterFoodPrice(food, min, max);

  test('filtered array length should be 3', () => {
    expect(filteredFood.length).toBe(3);
  });

  test('filtered array contains { kind: "pepper", price: 27 }', () => {
    expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
  });

  test('filtered array contains 2nd, 3rd, and 4th elements of the original array', () => {
    expect(filteredFood).toEqual(expect.arrayContaining([food[1], food[2], food[3]]));
  });

  test('price of the 1st element is greater than min', () => {
    expect(filteredFood[0].price).toBeGreaterThan(min);
  });

  test('price of the 3rd element is less than max', () => {
    expect(filteredFood[2].price).toBeLessThan(max);
  });

  test('filtered array does not contain { kind: "lemon", price: 50 }', () => {
    expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
  });

  test('all elements in the filtered array have a price within min and max', () => {
    filteredFood.forEach(item => {
      expect(item.price).toBeGreaterThanOrEqual(min);
      expect(item.price).toBeLessThanOrEqual(max);
    });
  });

  test('filtered array does not contain elements with a price below min', () => {
    expect(filteredFood.some(item => item.price < min)).toBe(false);
  });

  test('filtered array does not contain elements with a price above max', () => {
    expect(filteredFood.some(item => item.price > max)).toBe(false);
  });
});
