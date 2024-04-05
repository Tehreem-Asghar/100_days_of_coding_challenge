// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.
// this function genrate a number between 1 and 6
function number() {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
}
console.log(number());
// Outputs a random number between 1 and 6
