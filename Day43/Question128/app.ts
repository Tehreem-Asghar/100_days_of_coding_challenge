// Question 128: Create an arrow function that takes multiple parameters and
// returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters.
//When dealing with multiple parameters, you enclose them in parentheses.

// Define an arrow function that takes multiple parameters
// and returns the product of all parameters
let arrow_function = (...numbers: number[]) =>
  // Use reduce function to multiply all numbers in the array
  numbers.reduce((num1, num2) => num1 * num2, 1);

// Log the result of calling the arrow function with 2, 5, and 5
console.log(arrow_function(2, 5, 5)); // output 50
