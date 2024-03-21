// Question 59: Add a Special Number: Make a program that creates custom adders.
// These adders can add a specific number to any other number you give them later.

// Explain & TIP: Imagine you have a magic box that can add a specific number to
// any number you put in it. This program makes that magic box for you!


function customAdders(Add: number): (number) => number {
    
    return function(number: number): number {
        return number + Add;
    };
}

// Making a magic box that adds 10
let addFive = customAdders(10);
console.log(addFive(15)); // If we put 15 in the box, it gives us 25