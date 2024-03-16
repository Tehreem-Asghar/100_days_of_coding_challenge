// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing 
//prices of two different sets of laptops. Use the spread operator to combine
// these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array 
//methods like sort() to combine and manipulate arrays efficiently.

let array1=[55,56,60,100];
let array2=[56,67,43,200];

let combine =[...array1, ...array2].sort((a,b)=>a -b);
console.log(combine);


