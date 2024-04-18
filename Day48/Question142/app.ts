// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Explain & TIP: Promises in JavaScript are used for asynchronous computations
//and can be in one of these states: pending, fulfilled, or rejected. A Promise
//that resolves after a delay demonstrates how to handle operations that take some
// time to complete, like fetching data or timing events.

// creat a promise
let promise = new Promise<string>((resolve) => {
  // Use setTimeout method to run my code after 2 second
  // And in this I call resolve parameter
  setTimeout(() => resolve("Hello, World!"), 2000);
});
// make a body of resolve paramater
promise.then((message) => {
  console.log(message);
});
