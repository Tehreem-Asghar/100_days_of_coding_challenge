// Question 146: Show an example of a callback function used to filter an array
//of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that
// pass the test implemented by the provided function. This method is commonly
// used to search through an array and create a subset of it based on certain
//criteria.
// Function that accepts an array of numbers and prints the filtered array to the console
var aboveNumberTo8 = function (numbers) {
    var filter = numbers.filter(function (num) {
        return num > 8 && num < 20;
    });
    console.log(filter);
};
var num = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
// Call the function with the example array
aboveNumberTo8(num);
