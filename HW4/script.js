console.log("Task1")
{
  function calcRectangleArea(width, height) {

    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Both width and height must be numeric values.');
    }

    return width * height;
  }

  try {

    let width = 5;
    let height = 10;

    let area = calcRectangleArea(width, height);
    console.log(`The area of the rectangle is: ${area}`);

    let invalidArea = calcRectangleArea("5", height);
    console.log(`The area of the rectangle is: ${invalidArea}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }

}

console.log("Task2")

{
  function checkAge() {
    try {
      let age = prompt("Please enter your age:");

      if (age === "") {
        throw new Error("The field is empty! Please enter your age.");
      }

      age = Number(age);

      if (isNaN(age)) {
        throw new Error("You entered a non-numeric value. Please enter a valid age.");
      }

      if (age < 14) {
        throw new Error("You are too young to watch this movie. You must be at least 14 years old.");
      }

      alert("You can watch the movie.");

    } catch (error) {

      alert(`Error: ${error.name}\nDescription: ${error.message}`);
    }
  }

  checkAge();

}

console.log("Task3")

{

  class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }

  function showMonthName(month) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (month < 1 || month > 12 || typeof month !== 'number') {
      throw new MonthException('Incorrect month number');
    }

    return months[month - 1];
  }

  try {
    console.log(showMonthName(5)); // Output: May
    console.log(showMonthName(14)); // This will throw an exception
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(`${error.name}: ${error.message}`);
    } else {
      console.log('An unknown error occurred.');
    }
  }
}

console.log("Task4")

{

  function showUser(id) {
    if (id < 0) {
      throw new Error(`ID must not be negative: ${id}`);
    }
    return { id: id };
  }

  function showUsers(ids) {
    const validUsers = [];

    for (let i = 0; i < ids.length; i++) {
      try {
        let user = showUser(ids[i]);
        validUsers.push(user);
      } catch (error) {
        console.log(error.message);
      }
    }

    return validUsers;
  }

  console.log(showUsers([7, -12, 44, 22]));

}
