// Question 55: Double Numbers in an Array: Make a list of numbers. 
//Then, use a trick to make a new list where each number is twice its original value.
// Explain & TIP: We can use a special tool to go through each number in our list
// and make a new list with each number doubled.
// Array with numbers
var number = [2, 4, 6, 8, 10];
// Double each numbers
var doublNumber = number.map(function (number) { return number * 2; });
// Shows the new list of doubled numbers
console.log(doublNumber);
