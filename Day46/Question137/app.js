//Question 137: Implement a try-catch block to handle potential errors in a block
// of code.
//Explain & TIP: The try-catch statement marks a block of statements to try,
// and specifies a response, should an exception be thrown. It's a critical 
//feature for robust error handling in JavaScript.
var age;
try {
    //  log the age variable
    console.log(age);
    // Check if age is undefined
    if (age === undefined) {
        throw new Error("age is undefined");
    }
}
catch (error) {
    // Log error name and message
    console.log(error.name);
    console.log(error.message);
}
// Define function to execute code after error handling
function fun() {
    setTimeout(function () {
        console.log('"After error handling, execute code"');
    }, 2000);
}
// Call the function
fun();
