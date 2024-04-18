// Question 144: Explain the use of the Promise.all() method with an example.

// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single
// Promise that resolves when all of the Promises in the iterable have resolved
//or when the iterable contains no Promises. It is rejected if any of the passed
// Promises are rejected. This method is useful for aggregating the results of
//multiple promises.

// Create the first promise that resolves with "value1"
let promises1 = new Promise((resolve) => {
  resolve("value1");
});

// Create the second promise that resolves with "value2"
let promises2 = new Promise((resolve) => {
  resolve("value2");
});

// Create the third promise that resolves with "value2"
let promises3 = new Promise((resolve) => {
  resolve("value2");
});

// Use Promise.all() to wait for all promises to resolve
Promise.all([promises1, promises2, promises3]).then((message) => {
  console.log(message); // output [ 'value1', 'value2', 'value2' ]
});
