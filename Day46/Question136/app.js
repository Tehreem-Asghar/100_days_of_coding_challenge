//Question 136: Use console.log() to debug and track the value of a variable
//inside a loop.
//Explain & TIP: console.log() is an invaluable tool for developers to monitor
//the values of variables, the flow of execution, and to understand the state of
//their program at various points in time, especially within loops where values
// change with each iteration.
for (var number = 1; number <= 10; number++) {
    var table = 4;
    console.log("".concat(table, " * ").concat(number, " = ").concat(table * number));
}
