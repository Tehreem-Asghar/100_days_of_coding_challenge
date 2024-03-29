// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
// this function chang string in to upperCase and lowerCase
function convertCase(str) {
    console.log("UpperCase : ".concat(str.toUpperCase())); // convert to upperCase
    console.log("LowerCase : ".concat(str.toLowerCase())); // convert to lowerCase
}
convertCase('Hello World');
convertCase('tehREem');
