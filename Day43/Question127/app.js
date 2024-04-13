// Question 127: Convert a traditional function expression to an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing function
//expressions. They don't have their own bindings to this or super, and should
//not be used as methods.
// Define a traditional function expression
var traditional_function = function (num1, num2) {
    // This function multiplies two numbers and returns the result
    return num1 * num2;
};
// Log the result of calling the traditional function
console.log(traditional_function(2, 2));
// Convert the traditional function expression to an arrow function
traditional_function = function (num1, num2) { return num1 * num2; };
// Log the result of calling the arrow function
console.log(traditional_function(6, 6));
