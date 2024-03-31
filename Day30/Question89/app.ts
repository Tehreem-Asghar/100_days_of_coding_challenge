// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.

//This function changes a string into a number
function ConvertStringToNumber(number: string) {
  // "Number" method is used for converting a value to a number.
  // It can be used when you want to explicitly convert a value to a numeric data type.
  return Number(number); // Converts the string to a numbe
}
console.log(ConvertStringToNumber("12345")); // output 12345
console.log(ConvertStringToNumber("45.8")); // output 45.8
