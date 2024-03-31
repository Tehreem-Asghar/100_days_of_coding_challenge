// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.

// This function rounds a decimal number to the nearest whole number
function roundNearToInteger(number: number) {
  // this 'Math.round' method is used to round a number to the nearest integer.
  return Math.round(number);

  // it will check decimal numbers if decimal number wil be above from 2.2 __2.5
  //so it will round 'down' side. if will be above from 2.5 __2.9 so it will  round 'above" side.
}
// like this
console.log(roundNearToInteger(67.9)); //output 68
console.log(roundNearToInteger(5.4)); //output 5
