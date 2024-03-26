// Question 75: Compound Assignment Operators: Use compound assignment operators
//to simplify arithmetic operations. Start with x = 4 and perform a series of
//operations (addition, subtraction, multiplication, division) on x using compound
// operators.

// Explain & TIP: Compound assignment operators combine an arithmetic operation
// with assignment, making your code cleaner and more concise.
// Instead of writing x = x + 2, you can simply write x += 2.

// This function uses compound assignment operators for different operations
function compoundOperators() {
  let x = 4;
  console.log("initial x: ", x);
  x += 2;
  console.log("After Adition x: ", x);
  x -= 2;
  console.log("After subtraction X: ", x);
  x *= 2;
  console.log("After multiplication x: ", x);
  x /= 2;
  console.log("After division x: ", x);
}
//We simplify arithmetic operations on x using compound assignment operators,
//like a shortcut.

compoundOperators();
