// Question 128: Create an arrow function that takes multiple parameters and
// returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters.
//When dealing with multiple parameters, you enclose them in parentheses.
// Define an arrow function that takes multiple parameters
// and returns the product of all parameters
var arrow_function = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // Use reduce function to multiply all numbers in the array
    return numbers.reduce(function (num1, num2) { return num1 * num2; }, 1);
};
// Log the result of calling the arrow function with 2, 5, and 5
console.log(arrow_function(2, 5, 5)); // output 50
