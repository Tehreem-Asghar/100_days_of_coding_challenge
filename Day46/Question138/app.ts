// Question 138: Describe how to use breakpoints in browser developer tools to
// debug JavaScript code.

// Explain & TIP: Breakpoints are a powerful feature in browser developer tools
// that allow you to pause the execution of your JavaScript code at a specific
//line. This gives you an opportunity to inspect variables, step through code
//one line at a time, and understand how your code executes in real-time.

// Function that calculates the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;

  // Loop through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Add the current number to the sum
    sum += numbers[i];

    // You can set a breakpoint on this line to inspect the value of 'sum' and 'numbers[i]' at each iteration
    // of the loop. This allows you to monitor how 'sum' changes with each iteration.
  }
  // Return the total sum
  return sum;
}
// An array of numbers
const numbersArray = [3, 5, 7, 2, 8];
// Calculate the total sum of the array
const totalSum = calculateSum(numbersArray);
// Log the total sum to the console
console.log("Total sum:", totalSum);
// You can set a breakpoint on this line to inspect the value of 'totalSum' after the function call.
// This allows you to verify if the function returned the correct sum.
