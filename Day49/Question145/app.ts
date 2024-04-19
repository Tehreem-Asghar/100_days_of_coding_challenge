//Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Function that accepts a callback and invokes it with some arguments
function invokeCallback(callback) {
    // Define some arguments to pass to the callback
    const arg1 = 10;
    const arg2 = 20;

    // Invoke the callback function with the provided arguments
    callback(arg1, arg2);
}

// Example callback function that calculates the sum of two numbers
function sum(a, b) {
    // Calculate the sum and log it to the console
    const result = a + b;
    console.log(`The sum of ${a} and ${b} = ${result}`);
}

// Call the invokeCallback function and pass the sum function as the callback
invokeCallback(sum);
