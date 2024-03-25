// Question 71: Compare let and const: Create two examples where let allows reassignment
// but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned,
//while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
var Name = "Tehreem"; // initilize a name variable
console.log(Name); // outPut  Tehreem
Name = "Arham"; //Chang value  let keyWord allow us reassigned value.
console.log(Name); // Output Arham  beacuse we changed value of variable
var phoneNumber = 123456789; // initliza a phoneNumber variable
console.log(phoneNumber);
try {
    // it will give us error beacuse it costent it does not allow us reassigned value
    phoneNumber = 2354678968;
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // this messag is show
}
