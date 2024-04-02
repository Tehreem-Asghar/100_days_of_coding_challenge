// Question 96: Demonstrate how to use the .reduce() method to calculate the sum
// of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator
//and each element in the array (from left to right) to reduce it to a single value.
// This function calculates the sum of all numbers in an array
function addArrayNumbers(number) {
    return number.reduce(function (accumulator, curentValue) { return accumulator + curentValue; }, 0);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(addArrayNumbers(numbers));
console.log(addArrayNumbers([3, 3]));
