//Task 1
function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Example usage
getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

//Task 2

function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every(item => typeof item === 'number')) {
      const product = arr.reduce((acc, num) => acc * num, 1);
      resolve(product);
    } else {
      reject("Error! Incorrect array!");
    }
  });
}

// Example usage
calcArrProduct([3, 4, 5])
  .then(result => console.log(result))
  .catch(error => console.log(error));

calcArrProduct([5, "user2", 7, 12])
  .then(result => console.log(result))
  .catch(error => console.log(error));


//Task 3

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
  let promise = Promise.resolve();

  for (let i = 0; i <= 10; i++) {
    const randomTime = Math.floor(Math.random() * 3000);

    promise = promise.then(() => delay(i, randomTime))
      .then(result => console.log(result));
  }
}

showNumbers();


//Task 4
const delay2 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers2() {
  for (let i = 0; i <= 10; i++) {
    const randomTime = Math.floor(Math.random() * 3000);
    const result = await delay2(i, randomTime);
    console.log(result);
  }
}

showNumbers2();
