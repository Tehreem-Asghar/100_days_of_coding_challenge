// Question 72: Block Scope with let and const: Demonstrate block scope by
//creating a code block with {} that uses both let and const. Show how variables
// declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const
// variables to that block, enhancing code organization and preventing accidental
// access from outside the block.
{
    // Local Variable
    var Name_1 = "tehreem";
    var age_1 = 18;
    console.log(Name_1);
    console.log(age_1);
    // this variable will work only this block Scop can not work out of this block
    // beacuse it is a Local Variables so local variable is not allow out of scop
}
//console.log(Name); // error beacuse we call local variables out of scop
//console.log(age); // error beacuse we call local variables out of scop
// global variables
var Name = "Ayesha";
var age = 17;
{
    //we can use global varibal anywhre of web page so we can also use in block Scop
    console.log(Name);
    console.log(age);
}
console.log(Name);
console.log(age);
