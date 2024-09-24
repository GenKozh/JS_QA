console.log("Task1")
{
  let arr = [2, 3, 4, 5];
  let productFor = 1;

  for (let i = 0; i < arr.length; i++) {
    productFor *= arr[i];
  }

  console.log("Product using for loop:", productFor);

  let productWhile = 1;
  let index = 0;

  while (index < arr.length) {
    productWhile *= arr[index];
    index++;
  }

  console.log("Product using while loop:", productWhile);
}

console.log("Task2")

{
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

console.log("Task3")

{
  function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
      let randomNum = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNum);
    }
    return arr;
  }

  console.log(randArray(5));

}

console.log("Task4")

{

  function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return Math.pow(a, b);
    } else {
      return "Error: Both a and b must be integers.";
    }
  }

  let a = parseInt(prompt("Enter an integer for 'a':"), 10);
  let b = parseInt(prompt("Enter an integer for 'b':"), 10);

  let result = raiseToDegree(a, b);

}

console.log("Task5")

{
  function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }


  console.log(findMin(12, 14, 4, -4, 0.2));

}

console.log("Task6")
{
  function findUnique(arr) {
    let uniqueElements = new Set(arr);
    return uniqueElements.size === arr.length;
  }

  console.log(findUnique([1, 2, 3, 5, 3]));  // => false
  console.log(findUnique([1, 2, 3, 5, 11])); // => true
}

console.log("Task7")
{
  function lastElem(arr, num) {
    if (num === undefined) {
      return arr[arr.length - 1];
    }

    if (num > arr.length) {
      return arr;
    }

    return arr.slice(-num);
  }

  console.log(lastElem([3, 4, 10, -5]));       // => -5
  console.log(lastElem([3, 4, 10, -5], 2));    // => [10, -5]
  console.log(lastElem([3, 4, 10, -5], 8));    // => [3, 4, 10, -5]

}

console.log("Task8")
{
  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


  let input = 'i love java script';
  let output = capitalizeWords(input);
  console.log(output);

}