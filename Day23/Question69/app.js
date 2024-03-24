// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient
// and the remainder Use an object to return both values.
// this function divides two numbers and finds the quotient and remaider
function DividingAndRemainder(dividend, divisor) {
    // calculate the quotient and remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = Math.floor(dividend % divisor);
    // returns both in an object
    return { quotient: quotient, remainder: remainder };
}
console.log(DividingAndRemainder(7, 3)); // output  {quotient: 2, remainder: 1}
console.log(DividingAndRemainder(10, 3)); // output  {quotient: 3, remainder: 1}
