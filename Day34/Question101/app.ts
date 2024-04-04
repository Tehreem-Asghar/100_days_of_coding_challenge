// Question 101: Generate a random integer between 1 and 10.

// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer

// Generates a random integer between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
  // Generate random number between 1 and 10
}

console.log(generateRandomNumber());