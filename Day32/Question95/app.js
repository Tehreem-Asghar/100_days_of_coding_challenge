// Question 95: Write a function that uses the .filter() method to return an
// array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that
// pass the test implemented by the provided function.
// This function filters an array, keeping only numbers greater than 10
function number(number) {
    return number.filter(function (num) { return num > 10; });
}
var numbers = [5, 10, 15, 20, 30, 40, 50];
console.log(number(numbers));
