// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient
// and the remainder Use an object to return both values.

// **Explain & TIP: Division can give you a whole part (quotient) and a leftover
// part (remainder). Returning both in an object is a neat way to keep them together.

type obj={
    quotient:number;
    remainder:number
}

// this function divides two numbers and finds the quotient and remaider
function DividingAndRemainder(dividend:number,divisor:number):obj{

    // calculate the quotient and remainder
    let quotient= Math.floor(dividend/divisor);
    let remainder=Math.floor(dividend%divisor);
    // returns both in an object
    return {quotient,remainder};
}

console.log(DividingAndRemainder(7,3));// output  {quotient: 2, remainder: 1}
console.log(DividingAndRemainder(10,3));// output  {quotient: 3, remainder: 1}