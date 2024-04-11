"use strict";
//Question 123: Create a loop that iterates through a string and stops when it
// finds the first vowel.
//Explain & TIP: To find a specific character in a string, you can iterate through each character
//and use a condition to check for vowels. The loop can stop once a vowel is found.
// Define a function that takes a string as input
function vowel(str) {
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the current character
        let char = str[i];
        // Check if the current character is a vowel
        if ("aeiouAEIOU".includes(char)) {
            console.log("First vowel found:", char);
            break; // Break the loop since we've found the first vowel
        }
    }
}
vowel('pakistan');
vowel('apple');
