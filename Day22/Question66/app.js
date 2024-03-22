// Question 66: Logical AND Verification: Create a function that checks two boolean
// (true or false) values. It should only say true if both are true, using
//the && operator. For instance, checkBothTrue(true, false) should be false.
// Explain & TIP: The && operator in JavaScript checks if both sides are true.
// It's great for confirming several things are true all at once.
//1- writ a function that accept two boolean parametars
// and if both parameter is true so answer will  true otherwise false.
function checkBothTrue(val1, val2) {
    return val1 && val2; //checking if both bolean value is true so output true otherwise false
}
console.log(checkBothTrue(true, true)); // both true answer will true
console.log(checkBothTrue(true, false)); // both side is not true so output False
