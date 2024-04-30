let food = function (item1, item2) {
  return `${item1} ready , and  ${item2} also ready.`;
};

console.log(food("biryani", "khire"));

// Assigning the function expression 'food' to the variable 'cook'
let cook = food;
console.log(cook("karahi", "kabab")); // Output: karahi ready, and kabab also ready.
