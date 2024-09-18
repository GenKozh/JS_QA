console.log("Task1")
{
  let x = 1;
  let y = 2;

  let res1 = x.toString() + y.toString();
  console.log(res1); // "12"
  console.log(typeof res1); // "string"

  let res2 = (x < y) + y.toString();
  console.log(res2); // "true2"
  console.log(typeof res2); // "string"

  let res3 = x < y;
  console.log(res3); // true
  console.log(typeof res3); // "boolean"

  let res4 = x / "a";
  console.log(res4); // NaN
  console.log(typeof res4); // "number"
}

console.log("Task2")

{
  let userInput = prompt("Enter a number:");
  let number = Number(userInput);

  if (!isNaN(number)) {
    let isEvenPositive = number > 0 && number % 2 === 0;
    let isMultipleOfSeven = number % 7 === 0;

    console.log(`The number is even and positive: ${isEvenPositive}`);
    console.log(`The number is a multiple of 7: ${isMultipleOfSeven}`);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
}

console.log("Task3")

{
  let arr = [];

  arr[0] = 42;

  arr[1] = "Hello, world!";

  arr[2] = true;

  arr[3] = null;

  console.log("Number of elements in the array:", arr.length);

  arr[4] = prompt("Enter any value for the fifth element:");

  console.log("Fifth element of the array:", arr[4]);

  arr.shift();

  console.log("Array after deleting the first element:", arr);

}

console.log("Task4")

{

  let cities = [" Rome ", " Lviv ", " Warsaw ", "New York"];

  let result = cities.join('*');

  console.log(result);

}

console.log("Task5")

{
  let age = prompt("Have you reached the age of majority? (yes or no)");
  let isAdult = (age.toLowerCase() === 'yes');
  console.log(isAdult);
}

console.log("Task6")
{
  // Prompt the user to enter the lengths of the sides
  let a = parseFloat(prompt("Enter the length of the first side of the triangle:"));
  let b = parseFloat(prompt("Enter the length of the second side of the triangle:"));
  let c = parseFloat(prompt("Enter the length of the third side of the triangle:"));

  // Check if the entered values are valid
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log('Incorrect data');
  } else {
    if (a + b > c && a + c > b && b + c > a) {
      let s = (a + b + c) / 2; // Semi-perimeter
      let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

      console.log(`The area of the triangle is: ${area.toFixed(3)}`);

      let isRightTriangle =
        (a * a + b * b === c * c) ||
        (a * a + c * c === b * b) ||
        (b * b + c * c === a * a);

      console.log(`Is the triangle a right triangle? ${isRightTriangle}`);
    } else {
      console.log('Incorrect data');
    }
  }
}

console.log("Task7")
{
  let currentHour = new Date().getHours();

  if (currentHour >= 23 || currentHour < 5) {
    console.log("Good night");
  } else if (currentHour >= 5 && currentHour < 11) {
    console.log("Good morning");
  } else if (currentHour >= 11 && currentHour < 17) {
    console.log("Good day");
  } else if (currentHour >= 17 && currentHour < 23) {
    console.log("Good evening");
  }

}