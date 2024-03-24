// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// **Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
function Decimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(Decimal(1.0, 0.1));
console.log(Decimal(2.5, 2.7));
