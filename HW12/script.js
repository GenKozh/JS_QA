//Task 1
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}


upperCase('regexp');
upperCase('RegExp');

//Task 2

function checkEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Example of usage
console.log(checkEmail("Qmail2@gmail.com")); // Output: true
console.log(checkEmail("notAnEmail.com"));   // Output: false


//Task 3
const text = "cdbBdbsbz";
const matches = text.match(/d+b+d?/gi);
console.log(matches); // Output: [ 'dbBd', 'bB', 'd' ]

//Task 4
const text2 = "Java Script";
const swappedText = text2.replace(/(\w+)\s+(\w+)/, "$2, $1");
console.log(swappedText); // Output: "Script, Java"

//Task 5

function validateCardNumber(cardNumber) {
  const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return cardPattern.test(cardNumber);
}

console.log(validateCardNumber("1234-5678-1234-5678")); // Output: true
console.log(validateCardNumber("1234-5678-12345-678")); // Output: false

//Task 6

function checkEmail(email) {
  const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email) && !/--/.test(email)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}

checkEmail('my_mail@gmail.com');       // Output: Email is correct!
checkEmail('#my_mail@gmail.com');      // Output: Email is not correct!
checkEmail('my_ma--il@gmail.com');     // Output: Email is not correct!
checkEmail('my-mail@gmail.com');       // Output: Email is correct!

//Task 7

function checkLogin(login) {

  const loginPattern = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
  const isValid = loginPattern.test(login);

  const numbers = login.match(/\d+(\.\d+)?/g) || [];

  console.log(isValid);
  console.log(numbers.join(", "));
}

checkLogin('ee 1.1 ret 3');  // Output: true \n 1.1, 3
checkLogin('ee 1*1 ret 3');   // Output: false \n 1, 1, 3
