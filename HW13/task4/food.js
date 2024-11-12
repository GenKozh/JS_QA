function filterFoodPrice(food, min, max) {
  return food.filter(element => element.price >= min && element.price <= max);
}

const food = [
  { kind: 'potato', price: 10 },
  { kind: 'bred', price: 16 },
  { kind: 'pepper', price: 27 },
  { kind: 'banana', price: 32 },
  { kind: 'lemon', price: 50 }
];

module.exports = { filterFoodPrice, food };
