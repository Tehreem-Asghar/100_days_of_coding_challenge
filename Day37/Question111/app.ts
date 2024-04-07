// Question 111: Use an if-else-if chain to categorize a person's age group
//(child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges.
//For instance, you might consider anyone under 13 a child, between 13 and 19 a
//teenager, and 20 or older an adult.

// Define a function to categorize a person's age group based on the provided age
function person_age(age: number): string {
  // Check if the age is less than or equal to 13
  if (age <= 13) {
    // If the age is 13 or younger, return 'child'
    return "child";
  }
  // If the age is not less than or equal to 13, check if it's less than or equal to 19
  else if (age <= 19) {
    // If the age is between 14 and 19 (inclusive), return 'Teenager'
    return "Teenager";
  }
  // If the age is neither less than or equal to 13 nor between 14 and 19, categorize as 'Adult'
  else {
    // If the age is 20 or older, return 'Adult'
    return "Adult";
  }
}
// Testing the function with different ages
console.log(person_age(12)); // Output: child
console.log(person_age(15)); // Output: Teenager
console.log(person_age(21)); // Output: Adult
