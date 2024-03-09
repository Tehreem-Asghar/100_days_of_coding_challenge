"use strict";
// Question 24: More Conditional Tests: Expand your conditional tests to cover
// a wider range of comparisons.
// Explain & TIP: Experiment with different types of conditions to see how they work.
// This builds a deeper understanding of logic in programming.
let Name = "Tehreem";
console.log(" Testing equality with string");
console.log(Name == 'Tehreem');
console.log(Name == 'tehreem');
let N_ame = 'Arham';
console.log('Testing with lower Case');
console.log(N_ame.toLowerCase() == 'arham');
console.log(N_ame.toLowerCase() == 'Arham');
console.log('numrical test');
console.log(10 > 9);
console.log(10 > 11);
console.log("Tests with 'and' and 'or'");
console.log('And operator', 12 > 11 && 12 < 13);
console.log('or operator', 12 > 10 || 12 < 10);
// Test whether an item is in a array;
let fruits = ['apple', 'mango', 'bnana'];
console.log('is "mango" in fruits?');
console.log(fruits.includes("mango"));
// Test whether an item is not in a array
console.log('is "Orang" in fruits?');
console.log(fruits.includes("Orang"));
