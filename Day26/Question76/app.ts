// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result.Show how you can call this function and log the result.

// Explain & TIP: Functions can take inputs (parameters) and give back an output(return value). They're like personal assistants that do a specific task for you and report back with the results.

// this function add both paramaters and return the result
function addNumber(num1, num2) {
  // add paramaters and return answer
  return num1 + num2;
}
//when function return a value and you want to see that return answeror OR use
// so we have to hold/save/store that answer in variable

let answer = addNumber(4, 6); // like this

console.log(answer); // outPut 10

// we can also do this work like this
console.log(addNumber(4, 2));
