// Question 150: Describe how asynchronous callbacks differ from synchronous
//code execution.
// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network
// requests, file operations, or set timers without blocking the main thread,
//enabling the continuation of code execution. Synchronous code, in contrast,
// runs sequentially, blocking further execution until the current operation
//completes.
// synchronous example
console.log("Before synchronous operation");
function synchronous_function() {
    var Name = "synchronous";
    console.log(Name);
}
synchronous_function();
console.log("After synchronous operation");
// Asynchronous Example:
console.log(" befor Asynchronous operation");
function Asynchronous_function() {
    setTimeout(function () {
        console.log("Asynchronous");
    }, 3000);
}
Asynchronous_function();
console.log("After Asynchronous function");
