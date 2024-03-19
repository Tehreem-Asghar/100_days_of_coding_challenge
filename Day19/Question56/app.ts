// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

// store multyple Types value in  Array
let mixture=['apple',456,true,'banana','orang',56,'pink'];

// check data type Strings and store new array
let stringArray = mixture.filter(items => typeof  items === "string");

console.log(stringArray);