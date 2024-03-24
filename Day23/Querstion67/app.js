// Question:67 Arithmetic with mixed Types: write a function that takes two parameters:
// a number and a string  that represent a number (e.g.,"5"). Return their sum as a number. 
// this function add a number and a string that represents a number
function numberToString(number, numbersttring) {
    //convert to string in number and then add this value in 1st  pramater.
    return number + Number(numbersttring);
}
console.log(numberToString(10, '10')); // show 20
// The string '10' is turned into the number 10 and then added to 10.
