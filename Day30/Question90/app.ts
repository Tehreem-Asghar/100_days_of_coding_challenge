// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.

//  This function checks if a value is Not a Number (NaN)
function checkValueIsNAN(value) {
  //"isNaN()"" method is used to determine whether a value is NaN  or not.
  // This method returns true if the value is NaN, otherwise it returns false.
  return isNaN(value);
}

console.log(checkValueIsNAN("hello world")); // output true
console.log(checkValueIsNAN(3456)); // output false
