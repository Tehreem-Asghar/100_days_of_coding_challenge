// Question 107: Write a condition using logical operators that checks if a number
// is divisible by both 2 and 3.
// Explain & TIP: Checking for divisibility involves using the modulo operator(%)
// to see if there's any remainder. A number divisible by both 2 and 3 without a
//remainder is also divisible by 6.
// This function checks if a number is divisible by both 2 and 3
function divisible_by_two_and_three(number) {
    // Check if the number is divisible by both 2 and 3 using the modulo operator (%) and logical AND operator (&&)
    return number % 2 == 0 && number % 3 == 0;
}
//Test the function with example numbers and print the results
console.log(divisible_by_two_and_three(56)); // Should output: false
console.log(divisible_by_two_and_three(12)); // Should output: true
